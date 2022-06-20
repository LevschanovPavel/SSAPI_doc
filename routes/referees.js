const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getReferees,
  getLeagueReferees,
  getLeagueAverageRefStats
} = require("../controllers/referees");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getReferees)  

router
  .route("/:leagueId")
  .get(protect, authorize('admin','user'), getLeagueReferees)   

router
  .route("/:leagueId/average")
  .get(protect, authorize('admin','user'), getLeagueAverageRefStats)     

  module.exports = router;  