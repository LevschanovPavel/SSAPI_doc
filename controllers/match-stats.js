const Matches = require("../models/matches");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");
const {
  convert, convertStats, convertSelect, convertStatsSelect, 
} = require("../utils/response-dtos");

// @desc      Get matchStats by ID  
// @route     GET /api/v1/matchStats/:id
// @req.query select = [home_Team, away_Team, h2h]
//            stats = [cornerKicks, shotsOnGoal, yellowCards, ... etc ]
// @access    Public
exports.getMatchStats = asyncHandler(async (req, res, next) => {
  let query, statistics;
  const { id } = req.params;
  const { select, stats } = req.query;

  if (select) query = {_id: 0, matchId:1, matchInfo:1, matchStats: {$elemMatch: {statsFor: select}}}
  let result = await Matches.find({matchId:id}, query)
  
  if (!result.length) {
    return next(
      new ErrorResponse(`Statistics not found for match with ID: ${id} `, 404)
    );
  }

  // GET api/v1/matchStats/A5WasEE6?stats=cornerKicks&select=awayTeam
  if (select && stats) {statistics = convertStatsSelect(result, stats) }
  
  // GET api/v1/matchStats/A5WasEE6?stats=cornerKicks
  if (!select && stats) {statistics = convertStats(result, stats) }

  // GET api/v1/matchStats/A5WasEE6?select=awayTeam
  if (select && !stats) {statistics = convertSelect(result) }

  if (!select && !stats) statistics = convert(result)

  
  res.status(200).json({ 
    success: true, 
    data: {
      matchId: result[0].matchId, 
      matchInfo: result[0].matchInfo, 
      matchStats: statistics 
    }
  });
});


// @desc      Get matchStats by ID and select home,away,h2h stats
// @route     GET /api/v1/matchStats/:id/
// @access    Public
exports.getMatchStatsHAH = asyncHandler(async (req, res, next) => {
  let query;
  // Copy req.query
  const reqQuery = { ...req.query };
  
  const { id, hah } = req.params;

  // Fields to exlude
  const removeFields = ["select", "stats"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);
  
  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Convert result object
  const convert = (matchStats)=>{
    const {title, matches} = matchStats[0]
    return {title, matches}
  }
  
  const stats = await Matches.find({matchId:id}, {_id: 0, matchStats: {$elemMatch: {id: 'home_Team'}}})
  const result = convert(stats[0].matchStats)

  res.status(200).json({
    success: true,
    data: result
  });
});


exports.getBootcamps = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fields to exlude
  const removeFields = ["select", "sort", "page", "limit"];

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(
    /\b(gt|gte|lt|lte|in)\b/g,
    (match) => `$${match}`
  );
  console.log(queryStr);
  
  // Finding resource
  query = Bootcamp.find(JSON.parse(queryStr));

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    query = query.select(fields);
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 1;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Bootcamp.countDocuments();

  query = query.skip(startIndex).limit(limit);

  const bootcamps = await query;

  //Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res
    .status(200)
    .json({ success: true, count: bootcamps.length, pagination, data: bootcamps });
});