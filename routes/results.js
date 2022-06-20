const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getAllResults, getLatestScores, getLeaguesSummary,
  demoAllResults, demoLatestScores, demoLeaguesSummary
} = require("../controllers/results");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getAllResults)

router
  .route("/latestScores")
  .get(protect, authorize('admin','user'), getLatestScores) 

router
  .route("/leaguesSummary")
  .get(protect, authorize('admin','user'), getLeaguesSummary)   

// Demo
router
  .route("/demo")
  .get(demoAllResults)

router
  .route("/demo/latestScores")
  .get(demoLatestScores) 

router
  .route("/demo/leaguesSummary")
  .get(demoLeaguesSummary) 

module.exports = router;
