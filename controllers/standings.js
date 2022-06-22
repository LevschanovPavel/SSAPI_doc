const Standings = require("../models/standings");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const hideFields = {_id:0, __v:0}
const demoId = require("../constants/demo-id");
const { demoStandings } = require("../utils/demo-dtos");

// @desc      Get all standings
// @route     GET /api/v1/standings
// @access    Private
exports.getStandings = asyncHandler(async (req, res, next) => {
 
  const standings = await Standings.find();
  
  if (!standings.length) {
    return next(
      new ErrorResponse(`Standings not found`, 404));
  }

  res.status(200).json({ success: true, data: standings });
});


// @desc      Get country standings
// @route     GET /api/v1/standings/:country
// @access    Private
exports.getCountryStandings = asyncHandler(async (req, res, next) => {

  const standings = await Standings.find(
    { country: {'$regex': req.params.country, $options:'i'}}
  );

  if (!standings.length) {
    return next(
      new ErrorResponse(`Standings not found for ${req.params.country} `, 404)
    );
  }
  res.status(200).json({ success: true, data: standings });
});
 
// @desc      Get standings by country and league
// @route     GET /api/v1/standings/:country/:leagueId
// @req.query table = [overall, home, away]
// @access    Private
exports.getCountryLeagueStandings = asyncHandler(async (req, res, next) => {
  const { table } = req.query;
  const { country, leagueId } = req.params;
  let query;
  let condition = `standings.${table}`

  console.log("table",table)

  if (table) query = {_id: 0, id:1, country:1, league:1, [condition]:1}
  const standings = await Standings.find({ 
      country: {'$regex': country, $options:'i'},
      id: leagueId 
    }, query);

  if (!standings.length) {
    return next(
      new ErrorResponse(`Standings not found for ${country} `, 404)
    );
  }
  res.status(200).json({ success: true, data: standings });
});



// @desc      DEMO all standings
// @route     GET /api/v1/standings/demo
// @access    Public
exports.demoStandings = asyncHandler(async (req, res, next) => {
  
  let condition = `standings.overall`
  let query = {_id: 0, id:1, country:1, league:1, [condition]:1}

  const demoData = await Standings.find(
    { id: { $in: demoId } }, query ).limit(3)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404)
    );
  }
  
  res.status(200).json({ success: true, data: demoStandings(demoData) });
});


// @desc      DEMO country standings
// @route     GET /api/v1/standings/:country
// @access    Public
exports.demoCountryStandings = asyncHandler(async (req, res, next) => {

  let condition = `standings.overall`
  let query = {_id: 0, id:1, country:1, league:1, [condition]:1}
  
  const standings = await Standings.find(
    { country: {'$regex': req.params.country, $options:'i'}}, query
  );

  if (!standings.length) {
    return next(
      new ErrorResponse(`Standings not found for ${req.params.country} `, 404)
    );
  }
  res.status(200).json({ success: true, data: demoStandings(standings) });
});


// @desc      DEMO standings by country and league
// @route     GET /api/v1/standings/:country/:leagueId
// @access    Public
exports.demoLeagueStandings = asyncHandler(async (req, res, next) => {
  
  const { country, leagueId } = req.params;

  const standings = await Standings.find(
    { country: {'$regex': country, $options:'i'}, id: leagueId }, {...hideFields}
  )

  if (!standings.length) {
    return next(
      new ErrorResponse(`Standings not found for ${country} `, 404)
    );
  }
  res.status(200).json({ success: true, data: demoStandings(standings) });
});