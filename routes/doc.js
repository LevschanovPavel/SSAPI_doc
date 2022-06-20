const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const controllers = require("../controllers/doc");

const router = express.Router();

// router.use(protect);
// router.use(authorize("admin", "user"));

router.get("/getting_started", controllers.getting_started);
router.get("/api_model", controllers.api_model);
router.get("/coverage", controllers.coverage);

router.get("/all_today_matches", controllers.all_today_matches);
router.get("/today_matches_by_country", controllers.today_matches_by_country);
router.get("/today_matches_by_league", controllers.today_matches_by_league);

router.get("/all_fixtures", controllers.all_fixtures);
router.get("/fixtures_by_country", controllers.fixtures_by_country);
router.get("/fixtures_by_league", controllers.fixtures_by_league);

router.get("/all_results", controllers.all_results);
router.get("/latest_scores", controllers.latest_scores);
router.get("/leagues_summary", controllers.leagues_summary);

router.get("/stats_by_match_id", controllers.stats_by_match_id);
router.get("/stats_for_home_away_h2h", controllers.stats_for_home_away_h2h);
router.get("/select_stats", controllers.select_stats);
router.get("/odds_stats", controllers.odds_stats);

router.get("/all_standings", controllers.all_standings);
router.get("/standings_by_country", controllers.standings_by_country);
router.get("/standings_by_league", controllers.standings_by_league);

router.get("/all_referees", controllers.all_referees);
router.get("/referees_by_league", controllers.referees_by_league);
router.get("/referee_stats_by_name", controllers.referee_stats_by_name);
router.get("/average_referees_stats", controllers.average_referees_stats);

router.get("/today_matches", controllers.today_matches);
router.get("/fixtures", controllers.fixtures);
router.get("/matchStats", controllers.matchStats);


module.exports = router;
