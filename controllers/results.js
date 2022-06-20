const Results = require("../models/results");
const LatestScores = require("../models/latest-scores");
const Summary = require("../models/summary");

const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

const hideFields = {_id:0, __v:0}
const demoId = require("../constants/demo-id");
const {
  demoLeaguesSummary, 
  demoLatestScores
} = require("../utils/demo-dtos");

// @desc      Get all Results
// @route     GET /api/v1/results?leagueId
// @access    Private
exports.getAllResults = asyncHandler(async (req, res, next) => {
  let result;
  const { leagueId } = req.query;

  if (leagueId) {
    result = await Results.find(
      { id: leagueId }, 
      { ...hideFields, matches: { ...hideFields}}
    )    
  } else {
    result = await Results.find({}, { ...hideFields})    
  }

  res.status(200).json({ success: true, data: result });
});

// @desc      Get Latest Scores
// @route     GET /api/v1/results/latestScores?leagueId
// @access    Private
exports.getLatestScores = asyncHandler(async (req, res, next) => {
  let result;
  const { leagueId } = req.query;
    
  if (leagueId) {
    result = await LatestScores.find(
      { id: leagueId }, 
      { ...hideFields, matches: { ...hideFields}}
    )
  } else {
    result = await LatestScores.find({}, { ...hideFields})
  }

  res.status(200).json({ success: true, data: result });
});

// @desc      Get Leagues Summary
// @route     GET /api/v1/results/leaguesSummary?leagueId
// @access    Private
exports.getLeaguesSummary = asyncHandler(async (req, res, next) => {
  let result;
  const { leagueId } = req.query;

  if (leagueId) {
    result = await Summary.find(
      { id: leagueId }, 
      { ...hideFields}
    )
  } else {
    result = await Summary.find({}, { ...hideFields})
  }
  
  res.status(200).json({ success: true, data: result });
});


// @desc      DEMO all Results
// @route     GET /api/v1/results/demo
// @access    Public
exports.demoAllResults = asyncHandler(async (req, res, next) => {
  
  let demoData = await Results.find(
    { id: { $in: demoId } }, 
    { ...hideFields, matches: {$slice:[0, 5]}}
  )
    
  let result = demoLatestScores(demoData)

  res.status(200).json({ success: true, data: result });
});


// @desc      DEMO Latest Scores
// @route     GET /api/v1/results/demo/latestScores
// @access    Public
exports.demoLatestScores = asyncHandler(async (req, res, next) => {
  
  let demoData = await LatestScores.find(
    { id: { $in: demoId } }, 
    { ...hideFields, matches: {$slice:[0, 5]}}
  )

  let result = demoLatestScores(demoData)

  res.status(200).json({ success: true, data: result });
});

// @desc      DEMO Leagues Summary
// @route     GET /api/v1/results/demo/leaguesSummary
// @access    Public
exports.demoLeaguesSummary = asyncHandler(async (req, res, next) => {
  
  let demoData = await Summary.find({ id: { $in: demoId } }, {...hideFields})

  let result = demoLeaguesSummary(demoData)

  res.status(200).json({ success: true, data: result });
});

