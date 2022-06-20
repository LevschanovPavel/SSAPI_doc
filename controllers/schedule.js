const Schedule = require("../models/schedule");
const LiveMatches = require("../models/live-matches");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

// @desc      Get all matches
// @route     GET /api/v1/schedule
// @req.query show = [live, ...]
// @access    Public
exports.getSchedule = asyncHandler(async (req, res, next) => {
  const { show } = req.query;
  let result;

  if (show === "live") {
    result = await LiveMatches.find();
  } else {
    result = await Schedule.find();
  }

  res.status(200).json({ success: true, data: result });
});


// @desc      Get schedule by country
// @route     GET /api/v1/schedule/:country
// @access    Public
exports.getCountrySchedule = asyncHandler(async (req, res, next) => {
  
  const matches = await Schedule.find(
    { country: {'$regex': req.params.country, $options:'i'}}
  );

  if (!matches.length) {
    return next(
      new ErrorResponse(`Matches not found for ${req.params.country} `, 404)
    );
  }
  
  res.status(200).json({ success: true, data: matches });
});
