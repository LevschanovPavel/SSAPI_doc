const RefsStats = require("../models/refs-stats");

const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const {
  convertRefereeStats,
  convertLegueReferes,
  convertAverageRefStats
} = require("../utils/response-dtos");


// @desc      Get all Results
// @route     GET /api/v1/referees/
// @access    Public
exports.getReferees = asyncHandler(async (req, res, next) => {
  const result = await RefsStats.find()
  res.status(200).json({ success: true, data: result });
});

// @desc      Get all Results
// @route     GET /api/v1/referees/:leagueId?name
// @access    Public
exports.getLeagueReferees = asyncHandler(async (req, res, next) => {
  let query;
  const { leagueId } = req.params; 
  const refName  = req.query.name;
    
  if (refName) query = {_id: 0, refsStats: {$elemMatch: {name: refName}}}
  let refsStats = await RefsStats.find({id: leagueId}, query)

  if (refName) result = convertRefereeStats(refsStats)
  if (!refName) result = convertLegueReferes(refsStats)

  res.status(200).json({ success: true, data: result });
});


// @desc      Get all Results
// @route     GET /api/v1/referees/:leagueId/average
// @access    Public
exports.getLeagueAverageRefStats = asyncHandler(async (req, res, next) => {
  const { leagueId } = req.params;

  let query = {
    _id: 0,
    "refsStats.name":1, 
    "refsStats.country":1, 
    "refsStats.countMatches":1, 
    "refsStats.average":1
  }

  let refsStats = await RefsStats.find({id: leagueId}, query)
  let result = convertAverageRefStats(refsStats)

  res.status(200).json({ success: true, data: result });
});