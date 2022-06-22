const express = require("express");
const { protect, authorize, demo } = require("../middleware/auth");

const {
  getStandings, getCountryStandings, getCountryLeagueStandings,
  demoStandings, demoCountryStandings, demoLeagueStandings
} = require("../controllers/standings");

const router = express.Router();

router
  .route("/")
  .get(protect, authorize('admin','user'), getStandings)
 
router
  .route("/:country")
  .get(demo, protect, authorize('admin','user'), getCountryStandings)  

  router
  .route("/:country/:leagueId")
  .get(demo, protect, authorize('admin','user'), getCountryLeagueStandings)   
  
// Demo
router.get('/demo', demoStandings)
router.get('/:country/demo', demoCountryStandings)
router.get('/:country/:leagueId/demo', demoLeagueStandings)

module.exports = router;  