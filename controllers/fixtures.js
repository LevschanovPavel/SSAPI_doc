const Fixtures = require("../models/fixtures");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const hideFields = {_id:0, __v:0}
const demoId = require("../constants/demo-id");
const { demoFixturesOrTodayMatches } = require("../utils/demo-dtos");

// @desc      Get all fixtures
// @route     GET /api/v1/fixtures
// @access    Private
exports.getFixtures = asyncHandler(async (req, res, next) => {

  const fixtures = await Fixtures.find();

  if (!fixtures.length) {
    return next(
      new ErrorResponse(`Fixtures not found`, 404));
  }

  res.status(200).json({ success: true, data: fixtures });
});

// @desc      Get fixtures by country
// @route     GET /api/v1/fixtures/:country
// @access    Private
exports.getCountryFixtures = asyncHandler(async (req, res, next) => {
  const fixtures = await Fixtures.find(
    { country: {'$regex': req.params.country, $options:'i'}}
  );

  if (!fixtures.length) {
    return next(
      new ErrorResponse(`Fixtures not found for ${req.params.country} `, 404));
  }
  res.status(200).json({ success: true, data: fixtures });
});



// @desc      Get fixtures by league ID
// @route     GET /api/v1/fixtures/:country/:leagueId
// @access    Private
exports.getLeagueFixtures = asyncHandler(async (req, res, next) => {
  
  const fixtures = await Fixtures.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}
  );

  if (!fixtures.length) {
    return next(
      new ErrorResponse(`Fixtures not found for ${req.params.leagueId} `, 404));
  }
  
  res.status(200).json({ success: true, data: fixtures });
});


// @desc      DEMO all fixtures
// @route     GET /api/v1/fixtures/demo
// @access    Public
exports.demoFixtures = asyncHandler(async (req, res, next) => {
  
  const demoData = await Fixtures.find(
    { id: { $in: demoId } }, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`Fixtures not found`, 404));
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});

// @desc      DEMO fixtures by country
// @route     GET /api/v1/fixtures/:country/demo
// @access    Public
exports.demoCountryFixtures = asyncHandler(async (req, res, next) => {
  
  const demoData = await Fixtures.find(
    { country: {'$regex': req.params.country, $options:'i'}}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404));
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});

// @desc      DEMO fixtures by league ID
// @route     GET /api/v1/fixtures/:country/:leagueId/demo
// @access    Public
exports.demoLeagueFixtures = asyncHandler(async (req, res, next) => {
  
  const demoData = await Fixtures.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404));
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});
