const express = require("express");
const { protect, authorize, demo } = require("../middleware/auth");

const {
  getTodayMatches, getCountryTodayMatches, getLeagueTodayMatches,
  demoTodayMatches, demoCountryTodayMatches, demoLeagueTodayMatches
} = require("../controllers/today-matches");

const router = express.Router();
 
router
  .route("/")
  .get(protect, authorize('admin','user'), getTodayMatches)

router
  .route("/:country")
  .get(demo, protect, authorize('admin','user'), getCountryTodayMatches) 

router
  .route("/:country/:leagueId")
  .get(demo, protect, authorize('admin','user'), getLeagueTodayMatches)   

// Demo
router.get('/demo', demoTodayMatches)
router.get('/:country/demo', demoCountryTodayMatches)
router.get('/:country/:leagueId/demo', demoLeagueTodayMatches)

module.exports = router;
