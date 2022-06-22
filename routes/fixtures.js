const express = require("express");
const { protect, authorize, demo } = require("../middleware/auth");

const {
  getFixtures, getCountryFixtures, getLeagueFixtures,
  demoFixtures, demoCountryFixtures, demoLeagueFixtures
} = require("../controllers/fixtures");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getFixtures)

router
  .route("/:country")
  .get(demo, protect, authorize('admin','user'), getCountryFixtures)  

router
  .route("/:country/:leagueId")
  .get(demo, protect, authorize('admin','user'), getLeagueFixtures)  

// Demo
router.get('/demo', demoFixtures)
router.get('/:country/demo', demoCountryFixtures)
router.get('/:country/:leagueId/demo', demoLeagueFixtures)

module.exports = router;  