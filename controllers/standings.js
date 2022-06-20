const Standings = require("../models/standings");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

// @desc      Get all standings
// @route     GET /api/v1/standings
// @access    Public
exports.getStandings = asyncHandler(async (req, res, next) => {
  // Finding resource
  const standings = await Standings.find();
  res.status(200).json({ success: true, data: standings });
});

// @desc      Get country standings
// @route     GET /api/v1/standings/:country
// @access    Public
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
// @access    Public
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
