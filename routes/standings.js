const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getStandings,
  getCountryStandings,
  getCountryLeagueStandings
} = require("../controllers/standings");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getStandings)

router
  .route("/:country")
  .get(protect, authorize('admin','user'), getCountryStandings)  

  router
  .route("/:country/:leagueId")
  .get(protect, authorize('admin','user'), getCountryLeagueStandings)   
  
module.exports = router;  