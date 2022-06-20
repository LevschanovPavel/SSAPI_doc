const TodayMatches = require("../models/today-matches");
const LiveMatches = require("../models/live-matches");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const hideFields = {_id:0, __v:0}
const demoId = require("../constants/demo-id");
const {demoTodayMatches} = require("../utils/demo-dtos");

// @desc      Get all todayMatches
// @route     GET /api/v1/todayMatches
// @access    Private
exports.getTodayMatches = asyncHandler(async (req, res, next) => {
  let todayMatches;
  const demo = res.locals.demo;

  if (demo) {
    let demoData = await TodayMatches.find({}, {...hideFields, matches: {$slice:[0, 5]}}).limit(5)
    todayMatches = demoTodayMatches(demoData)
  } else {
    todayMatches = await TodayMatches.find({}, { ...hideFields, matches: { ...hideFields}})
  }

  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404)
    );
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});


// @desc      Get country todayMatches
// @route     GET /api/v1/todayMatches/:country
// @access    Private
exports.getCountryTodayMatches = asyncHandler(async (req, res, next) => {
  
  const demo = res.locals.demo;

  const todayMatches = await TodayMatches.find(
    { country: {'$regex': req.params.country, $options:'i'}}
    // , { matches: 1 }
  );

  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found for ${req.params.country} `, 404)
    );
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});

// @desc      Get league todayMatches
// @route     GET /api/v1/todayMatches/:country/:leagueId
// @access    Public
exports.getLeagueTodayMatches = asyncHandler(async (req, res, next) => {
  
  const todayMatches = await TodayMatches.find(
    { id: {'$regex': req.params.leagueId, $options:'i'}}
    // , { matches: 1 }
  );

  if (!todayMatches.length) {
    return next(
      new ErrorResponse(`TodayMatches not found for ${req.params.leagueId} `, 404)
    );
  }
  
  res.status(200).json({ success: true, data: todayMatches });
});





// @desc      DEMO all todayMatches
// @route     GET /api/v1/todayMatches/demo
// @access    Public
exports.demoTodayMatches = asyncHandler(async (req, res, next) => {
  
  let demoData = await TodayMatches.find(
    {}, {...hideFields, matches: {$slice:[0, 5]}}
  ).limit(5)

  let result = demoTodayMatches(demoData)

  if (!result.length) {
    return next(
      new ErrorResponse(`TodayMatches not found`, 404)
    );
  }
  
  res.status(200).json({ success: true, data: result });
});



// @desc      Get all todayMatches
// @route     GET /api/v1/todayMatches
// @req.query show = [live, ...]
// @access    Public
// exports.getTodayMatches = asyncHandler(async (req, res, next) => {
//   let result;
//   const { show } = req.query ;
//   const demo = res.locals.demo;

  // if (show === "live") {
  //   result = await LiveMatches.find();
  // } else {
  //   demo? result = demoTodayMatches(await TodayMatches
  //                     .find({}, { ...hideFilds, matches: {$slice:[0, 5]}}).limit(5))
  //        : result = await TodayMatches.find({}, { ...hideFilds, matches: { ...hideFilds}}); 
  // }

 
  
//   res.status(200).json({ success: true, data: result });
// });

