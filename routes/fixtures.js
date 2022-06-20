const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
  getFixtures,
  getCountryFixtures,
  getLeagueFixtures
} = require("../controllers/fixtures");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getFixtures)

router
  .route("/:country")
  .get(protect, authorize('admin','user'), getCountryFixtures)  

router
  .route("/:country/:leagueId")
  .get(protect, authorize('admin','user'), getLeagueFixtures)  

module.exports = router;  