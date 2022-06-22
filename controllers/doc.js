const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");
const docPages = require("../constants/doc-pages");
const leagues = require("../constants/leagues-list");
const flag_url = require("../constants/flag-url");
const Fixtures = require("../models/fixtures");
const TodayMatches = require("../models/today-matches");
const Matches = require("../models/matches");
const Leagues = require("../models/leagues");

const {
  convert, convertStats, convertSelect, convertStatsSelect, convertLeagues
} = require("../utils/response-dtos");


// @desc      Doc Getting started Page
// @route     GET /api/v1/doc/getting_started
// @access    Public
const getting_started = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.getting_started
  }
  res.render('doc/pages/general/getting_started', {pageData});
}

// @desc      Doc Api Model Page
// @route     GET /api/v1/doc/api_model
// @access    Public
const api_model = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.api_model
  }
  res.render('doc/pages/general/api_model', {pageData});
}

// @desc      Doc Coverage Page
// @route     GET /api/v1/doc/coverage
// @access    Public
const coverage = asyncHandler(async (req, res, next) => {
  const leaguesData = await Leagues.find()
  const leagues = convertLeagues(leaguesData)

  let pageData = {
    menu: docPages.menu,
    data: docPages.coverage
  }

  res.render('doc/pages/general/coverage', { pageData, leagues });
})

// @desc      Doc All today matches Page
// @route     GET /api/v1/doc/all_today_matches
// @access    Public
const all_today_matches = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.all_today_matches
  }
  res.render('doc/pages/today_matches/all_today_matches', {pageData});
}

// @desc      Doc Today matches by country Page
// @route     GET /api/v1/doc/today_matches_by_country
// @access    Public
const today_matches_by_country = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.today_matches_by_country
  }
  res.render('doc/pages/today_matches/today_matches_by_country', {pageData});
}

// @desc      Doc Today matches by league Page
// @route     GET /api/v1/doc/today_matches_by_league
// @access    Public
const today_matches_by_league = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.today_matches_by_league
  }
  res.render('doc/pages/today_matches/today_matches_by_league', {pageData});
}

// @desc      Doc All fixtures Page
// @route     GET /api/v1/doc/all_fixtures
// @access    Public
const all_fixtures = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.all_fixtures
  }
  res.render('doc/pages/fixtures/all_fixtures', {pageData});
}

// @desc      Doc Fixtures by country Page
// @route     GET /api/v1/doc/fixtures_by_country
// @access    Public
const fixtures_by_country = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.fixtures_by_country
  }
  res.render('doc/pages/fixtures/fixtures_by_country', {pageData});
}

// @desc      Doc Fixtures by league Page
// @route     GET /api/v1/doc/fixtures_by_league
// @access    Public
const fixtures_by_league = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.fixtures_by_league
  }
  res.render('doc/pages/fixtures/fixtures_by_league', {pageData});
}

// @desc      Doc All results Page
// @route     GET /api/v1/doc/all_results
// @access    Public
const all_results = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.all_results
  }
  res.render('doc/pages/results/all_results', {pageData});
}

// @desc      Doc Latest scores Page
// @route     GET /api/v1/doc/latest_scores
// @access    Public
const latest_scores = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.latest_scores
  }
  res.render('doc/pages/results/latest_scores', {pageData});
}

// @desc      Doc Leagues summary Page
// @route     GET /api/v1/doc/leagues_summary
// @access    Public
const leagues_summary = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.leagues_summary
  }
  res.render('doc/pages/results/leagues_summary', {pageData});
}

// @desc      Doc Stats by match id Page
// @route     GET /api/v1/doc/stats_by_match_id
// @access    Public
const stats_by_match_id = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.stats_by_match_id
  }
  res.render('doc/pages/match_stats/stats_by_match_id', {pageData});
}

// @desc      Doc Stats for home/away/h2h Page
// @route     GET /api/v1/doc/stats_for_home_away_h2h
// @access    Public
const stats_for_home_away_h2h = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.stats_for_home_away_h2h
  }
  res.render('doc/pages/match_stats/stats_for_home_away_h2h', {pageData});
}

// @desc      Doc Select stats Page
// @route     GET /api/v1/doc/select_stats
// @access    Public
const select_stats = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.select_stats
  }
  res.render('doc/pages/match_stats/select_stats', {pageData});
}

// @desc      Doc Odds stats Page
// @route     GET /api/v1/doc/odds_stats
// @access    Public
const odds_stats = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.odds_stats
  }
  res.render('doc/pages/match_stats/odds_stats', {pageData});
}


// @desc      Doc All referees stats Page
// @route     GET /api/v1/doc/all_referees
// @access    Public
const all_referees = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.all_referees
  }
  res.render('doc/pages/referees/all_referees', {pageData});
}

// @desc      Doc Referees stats by league
// @route     GET /api/v1/doc/referees_by_league
// @access    Public
const referees_by_league = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.referees_by_league
  }
  res.render('doc/pages/referees/referees_by_league', {pageData});
}

// @desc      Doc Referee stats by name
// @route     GET /api/v1/doc/referee_stats_by_name
// @access    Public
const referee_stats_by_name = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.referee_stats_by_name
  }
  res.render('doc/pages/referees/referee_stats_by_name', {pageData});
}

// @desc      Doc Average referees stats
// @route     GET /api/v1/doc/average_referees_stats
// @access    Public
const average_referees_stats = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.average_referees_stats
  }
  res.render('doc/pages/referees/average_referees_stats', {pageData});
}

// @desc      Doc Standing Page
// @route     GET /api/v1/doc/all_standings
// @access    Public
const all_standings = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.all_standings
  }
  res.render('doc/pages/standings/all_standings', {pageData});
}

// @desc      Doc Standing Page by Country
// @route     GET /api/v1/doc/standings_by_country
// @access    Public
const standings_by_country = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.standings_by_country
  }
  res.render('doc/pages/standings/standings_by_country', {pageData});
}

// @desc      Doc Standing Page by League
// @route     GET /api/v1/doc/standingsbycountry
// @access    Public
const standings_by_league = (req, res) => {
  let pageData = {
    menu: docPages.menu,
    data: docPages.standings_by_league
  }
  res.render('doc/pages/standings/standings_by_league', {pageData});
}

// @desc       Doc Sample Today matches Page 
// @route     GET /api/v1/doc/sample/today_matches
// @access    Public
const today_matches = asyncHandler(async (req, res) => {
  const todayMatches = await TodayMatches.find();
  let pageData = {
    menu: docPages.menu,
    data: docPages.today_matches
  }
  res.render('doc/pages/sample/today_matches', {pageData, todayMatches});
})

// @desc      Doc Sample Fixtures Page
// @route     GET /api/v1/doc/sample/fixtures
// @access    Public
const fixtures = asyncHandler(async (req, res) => {
  const fixtures = await Fixtures.find();
  let pageData = {
    menu: docPages.menu,
    data: docPages.fixtures
  }
  res.render('doc/pages/sample/fixtures', {pageData, fixtures});
})

// @desc      Doc Sample MatchStats by ID Page Get matchStats by ID
// @route     GET /api/v1/doc/sample/matchStats/:id
// @req.query select = [home_Team, away_Team, h2h]
//            stats = [cornerKicks, shotsOnGoal, yellowCards, ... etc ]
// @access    Public
const matchStats = asyncHandler(async (req, res, next) => {
  let query, filter_stats, statistics;
  let pageData = {
    menu: docPages.menu,
    data: docPages.matchStats
  }
  
  // const { id } = req.params;
  const { id, select, stats } = req.query;

  if (select) query = {_id: 0, matchId:1, matchInfo:1, matchStats: {$elemMatch: {statsFor: select}}}
  let result = await Matches.find({matchId:id}, query)
  
  if (!result.length) {
    return next(
      new ErrorResponse(`Statistics not found for match with ID: ${id} `, 404)
    );
  }

  // GET api/v1/matchStats/A5WasEE6?stats=cornerKicks&select=awayTeam
  if (select && stats) {statistics = convertStatsSelect(result, stats) }
  
  // GET api/v1/matchStats/A5WasEE6?stats=cornerKicks
  if (!select && stats) {statistics = convertStats(result, stats) }

  // GET api/v1/matchStats/A5WasEE6?select=awayTeam
  if (select && !stats) {statistics = convertSelect(result) }

  if (!select && !stats) statistics = convert(result)

  //Test for diargams
  // let chart = statistics.matchStats
  // console.log("statistics",statistics[0].matches[0].fouls)
  // let chart_labels =  statistics[1].matches.map(m=>m.matchInfo.fullDate)
  // let chart_data =  statistics[1].matches.map(m=>m.fouls.match.selectTeam)

  console.log("result[0].matchInfo",result[0].matchInfo)
  
  res.render('doc/pages/sample/matchStats', {
    pageData, 
    flag_url,
    stats,
    // chart_labels,
    // chart_data,
    data: {
      matchId: result[0].matchId, 
      matchInfo: result[0].matchInfo, 
      matchStats: statistics 
    }
  });
  
});


module.exports = {
  getting_started,
  api_model,
  coverage,
  all_today_matches,
  today_matches_by_country,
  today_matches_by_league,
  all_fixtures,
  fixtures_by_country,
  fixtures_by_league,
  all_results,
  latest_scores,
  leagues_summary,
  stats_by_match_id,
  stats_for_home_away_h2h,
  select_stats,
  odds_stats,
  all_standings,
  standings_by_country,
  standings_by_league,
  today_matches,
  fixtures,
  matchStats,
  all_referees,
  referees_by_league,
  referee_stats_by_name,
  average_referees_stats,
}