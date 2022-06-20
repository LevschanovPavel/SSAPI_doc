const express = require("express");

const {
  getMatchStats,
  getMatchStatsHAH
} = require("../controllers/match-stats");

const router = express.Router();

router
  .route("/:id")
  .get(getMatchStats)

  // router
  // .route("/:id/:hah")
  // .get(getMatchStatsHAH)  

module.exports = router;  