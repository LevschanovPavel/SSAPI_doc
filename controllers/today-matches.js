const TodayMatches = require("../models/today-matches");
const LiveMatches = require("../models/live-matches");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const hideFields = {_id:0, __v:0}
const demoId = require("../constants/demo-id");
const { demoFixturesOrTodayMatches } = require("../utils/demo-dtos");

// @desc      Get all todayMatches
// @route     GET /api/v1/todayMatches
// @access    Private
exports.getTodayMatches = asyncHandler(async (req, res, next) => {
  
  const todayMatches = await TodayMatches.find({}, { ...hideFields, matches: { ...hideFields}})
  
  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404));
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});


// @desc      Get todayMatches by country
// @route     GET /api/v1/todayMatches/:country
// @access    Private
exports.getCountryTodayMatches = asyncHandler(async (req, res, next) => {

  const todayMatches = await TodayMatches.find(
    { country: {'$regex': req.params.country, $options:'i'}}
  );

  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found for ${req.params.country} `, 404));
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});

// @desc      Get todayMatches by league ID
// @route     GET /api/v1/todayMatches/:country/:leagueId
// @access    Public
exports.getLeagueTodayMatches = asyncHandler(async (req, res, next) => {
  
  const todayMatches = await TodayMatches.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}
  );

  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found for ${req.params.leagueId} `, 404));
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});


// @desc      DEMO all todayMatches
// @route     GET /api/v1/todayMatches/demo
// @access    Public
exports.demoTodayMatches = asyncHandler(async (req, res, next) => {
  
  const demoData = await TodayMatches.find(
    {}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404)
    );
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});


// @desc      DEMO todayMatches by country
// @route     GET /api/v1/todayMatches/:country/demo
// @access    Public
exports.demoCountryTodayMatches = asyncHandler(async (req, res, next) => {
  
  const demoData = await TodayMatches.find(
    { country: {'$regex': req.params.country, $options:'i'}}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404));
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});


// @desc      DEMO todayMatches by league ID
// @route     GET /api/v1/todayMatches/:country/:leagueId/demo
// @access    Public
exports.demoLeagueTodayMatches = asyncHandler(async (req, res, next) => {
  
  const demoData = await TodayMatches.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  if (!demoData.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404));
  }
  
  res.status(200).json({ success: true, data: demoFixturesOrTodayMatches(demoData) });
});

