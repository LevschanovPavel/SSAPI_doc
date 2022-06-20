const Fixtures = require("../models/fixtures");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

// @desc      Get all fixtures
// @route     GET /api/v1/fixtures
// @access    Public
exports.getFixtures = asyncHandler(async (req, res, next) => {
  const fixtures = await Fixtures.find();
  res.status(200).json({ success: true, data: fixtures });
});

// @desc      Get country fixtures
// @route     GET /api/v1/fixtures/:country
// @access    Public
exports.getCountryFixtures = asyncHandler(async (req, res, next) => {
  const fixtures = await Fixtures.find(
    { country: {'$regex': req.params.country, $options:'i'}}
    // , { matches: 1 }
  );

  if (!fixtures.length) {
    return next(
      new ErrorResponse(`Fixtures not found for ${req.params.country} `, 404)
    );
  }
  res.status(200).json({ success: true, data: fixtures });
});



// @desc      Get league fixtures
// @route     GET /api/v1/fixtures/:country/:leagueId
// @access    Public
exports.getLeagueFixtures = asyncHandler(async (req, res, next) => {
  
  const fixtures = await Fixtures.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}
    // , { matches: 1 }
  );

  if (!fixtures.length) {
    return next(
      new ErrorResponse(`Fixtures not found for ${req.params.leagueId} `, 404)
    );
  }
  
  res.status(200).json({ success: true, data: fixtures });
});