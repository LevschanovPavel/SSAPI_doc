module.exports = Object.freeze({
  menu: [
    {
      num: 0,
      id: "general",
      icon: "launch",
      level: 2,
      title: "General",
      submenu: [
        {title: "Getting started", link: "getting_started"},
        {title: "Api model", link: "api_model"},
        {title: "Coverage", link: "coverage"},
      ]
    },    
    // { 
    //   num: 1,
    //   id: "api_model",
    //   icon: "calendar_today",
    //   level: 1,
    //   title: "Api model",
    //   link: "api_model"},
    // { 
    //   num: 2,
    //   id: "coverage",
    //   icon: "calendar_today",
    //   level: 1,
    //   title: "Coverage",
    //   link: "coverage"},
    {
      num: 3,
      id: "today_matches",
      icon: "today",
      level: 2,
      title: "Today matches",
      submenu: [
        {title: "All today matches", link: "all_today_matches"},
        {title: "Today matches by country", link: "today_matches_by_country"},
        {title: "Today matches by league", link: "today_matches_by_league"}
      ]
    },
    {
      num: 4,
      id: "fixtures",
      icon: "date_range",
      level: 2,
      title: "Fixtures",
      submenu: [
        {title: "All fixtures", link: "all_fixtures"},
        {title: "Fixtures by country", link: "fixtures_by_country"},
        {title: "Fixtures by league", link: "fixtures_by_league"}
      ]
    },      
    {
      num: 5,
      id: "results",
      icon: "scoreboard",
      level: 2,
      title: "Results",
      submenu: [
        {title: "All results", link: "all_results"},
        {title: "Latest scores", link: "latest_scores"},
        {title: "Leagues summary", link: "leagues_summary"}
      ]
    },        
    {
      num: 6,
      id: "match_stats",
      icon: "assessment",
      level: 2,
      title: "Match statistics",
      submenu: [
        {title: "Stats by match id", link: "stats_by_match_id"},
        {title: "Stats for home/away/h2h", link: "stats_for_home_away_h2h"},
        {title: "Select stats", link: "select_stats"},
        {title: "Odds stats", link: "odds_stats"}
      ]
    },        
    {
      num: 7,
      id: "referees",
      icon: "sports",
      level: 2,
      title: "Referees statistics",
      submenu: [
        {title: "All Referees stats", link: "all_referees"},
        {title: "Referees stats by league", link: "referees_by_league"},
        {title: "Referee stats by name", link: "referee_stats_by_name"},
        {title: "Average referees stats", link: "average_referees_stats"},
      ]
    },           
    {
      num: 8,
      id: "standings",
      icon: "format_list_numbered",
      level: 2,
      title: "Standings",
      submenu: [
        {title: "All Standings", link: "all_standings"},
        {title: "Standings by country", link: "standings_by_country"},
        {title: "Standings by league", link: "standings_by_league"}
      ]
    },
  ],
  //***General***//
  getting_started:  {
    link: "getting_started",
    category: "general",
    title: "Getting started",
    get: "/api/v1/getting_started",
    next: {
      link: "api_model",
      title: "Api model"
    }, 
  },
  //***Api model***//
  api_model:  {
    link: "api_model",
    category: "general",
    title: "Api model",
    get: "/api/v1/api_model",
    previous: {
      link: "getting_started",
      title: "Getting started"
    },    
    next: {
      link: "coverage",
      title: "Coverage"
    }, 
  },
  //***Coverage***//
  coverage:  {
    link: "coverage",
    category: "general",
    title: "Coverage",
    get: "/api/v1/coverage",
    previous: {
      link: "api_model",
      title: "Api model"
    },    
    next: {
      link: "all_today_matches",
      title: "All today matches"
    }, 
  },
  //***Today matches***//
  all_today_matches:  {
    link: "all_today_matches",
    category: "today_matches",
    title: "All today matches",
    get: "/api/v1/todayMatches",
    demo: "/api/v1/todayMatches/demo",
    previous: {
      link: "coverage",
      title: "Coverage"
    },
    next: {
      link: "today_matches_by_country",
      title: "Today matches by country"
    }, 
  },
  today_matches_by_country:  {
    link: "today_matches_by_country",
    category: "today_matches",
    title: "Today matches by country",
    get: "/api/v1/todayMatches/:country",
    demo: "/api/v1/todayMatches/europe/demo",
    previous: {
      link: "all_today_matches",
      title: "All today matches"
    },
    next: {
      link: "today_matches_by_league",
      title: "Today matches by league"
    }, 
  },
  today_matches_by_league:  {
    link: "today_matches_by_league",
    category: "today_matches",
    title: "Today matches by league",
    get: "/api/v1/todayMatches/:country/:leagueId",
    demo: "/api/v1/todayMatches/europe/GfRbsVWM/demo",
    previous: {
      link: "today_matches_by_country",
      title: "Today matches by country"
    },
    next: {
      link: "all_fixtures",
      title: "All fixtures",
    }, 
  },    
  //***Fixtures***//
  all_fixtures:  {
    link: "all_fixtures",
    category: "fixtures",
    title: "All fixtures",
    get: "/api/v1/fixtures", 
    demo: "/api/v1/fixtures/demo",
    previous: {
      link: "today_matches_by_league",
      title: "Today matches by league",
    },
    next: {
      link: "fixtures_by_country",
      title: "Fixtures by country",
    }, 
  },
  fixtures_by_country:  {
    link: "fixtures_by_country",
    category: "fixtures",
    title: "Fixtures by country",
    get: "/api/v1/fixtures/:country",
    demo: "/api/v1/fixtures/france/demo",
    previous: {
      link: "all_fixtures",
      title: "All fixtures"
    },
    next: {
      link: "fixtures_by_league",
      title: "Fixtures by league"
    }, 
  },
  fixtures_by_league:  {
    link: "fixtures_by_league",
    category: "fixtures",
    title: "Fixtures by league",
    get: "/api/v1/fixtures/:country/:leagueId",
    demo: "/api/v1/fixtures/italy/COuk57Ci/demo",
    previous: {
      link: "fixtures_by_country",
      title: "Fixtures by country",
    },
    next: {
      link: "all_results",
      title: "All results",
    }, 
  },  
  //***Results***//
  all_results:  {
    link: "all_results",
    category: "results",
    title: "All results",
    get: "/api/v1/results", 
    demo: "/api/v1/results/demo",
    previous: {
      link: "fixtures_by_league",
      title: "Fixtures by league",
    },
    next: {
      link: "latest_scores",
      title: "Latest scores",
    }, 
  },
  latest_scores:  {
    link: "latest_scores",
    category: "results",
    title: "Latest scores",
    get: "/api/v1/results/latestScores",
    demo: "/api/v1/results/demo/latestScores",
    previous: {
      link: "all_results",
      title: "All results"
    },
    next: {
      link: "leagues_summary",
      title: "Leagues summary"
    }, 
  },
  leagues_summary:  {
    link: "leagues_summary",
    category: "results",
    title: "Leagues summary",
    get: "/api/v1/results/leaguesSummary",
    demo: "/api/v1/results/demo/leaguesSummary",
    previous: {
      link: "latest_scores",
      title: "Latest scores",
    },
    next: {
      link: "stats_by_match_id",
      title: "Stats by match id",
    }, 
  },    
  //***Match statistics***//
  stats_by_match_id:  {
    link: "stats_by_match_id",
    category: "match_stats",
    title: "Stats by match id",
    get: "/api/v1/stats_by_match_id",
    previous: {
      link: "fixtures_by_league",
      title: "Fixtures by league",
    },
    next: {
      link: "stats_for_home_away_h2h",
      title: "Stats for home/away/h2h",
    }, 
  },     
  stats_for_home_away_h2h:  {
    link: "stats_for_home_away_h2h",
    category: "match_stats",
    title: "Stats for home/away/h2h",
    get: "/api/v1/stats_for_home_away_h2h",
    previous: {
      link: "stats_by_match_id",
      title: "Stats by match id",
    },
    next: {
      link: "select_stats",
      title: "Select stats",
    }, 
  },     
  select_stats:  {
    link: "select_stats",
    category: "match_stats",
    title: "Select stats",
    get: "/api/v1/select_stats",
    previous: {
      link: "stats_for_home_away_h2h",
      title: "Stats for home/away/h2h",
    },
    next: {
      link: "odds_stats",
      title: "Odds stats",
    }, 
  },     
  odds_stats:  {
    link: "odds_stats",
    category: "match_stats",
    title: "Odds stats",
    get: "/api/v1/odds_stats",
    previous: {
      link: "select_stats",
      title: "Select stats",
    },
    next: {
      link: "all_referees",
      title: "All referees",
    }, 
  },    
  //***Referees***//
  all_referees:  {
    link: "all_referees",
    category: "referees",
    title: "All referees",
    get: "/api/v1/referees",
    previous: {
      link: "odds_stats",
      title: "Odds stats"
    },
    next: {
      link: "referees_by_league",
      title: "Referees stats by league"
    }, 
  },
  referees_by_league:  {
    link: "referees_by_league",
    category:"referees",
    title: "Referees stats by league",
    get: "/api/v1/referees/:leagueId",
    previous: {
      link: "all_referees",
      title: "All referees"
    },
    next: {
      link: "referee_stats_by_name",
      title: "Referee stats by name"
    }, 
  },
  referee_stats_by_name:  {
    link: "referee_stats_by_name",
    category:"referees",
    title: "Referee stats by name",
    get: "/api/v1/referees/:leagueId?name=${referee name}",
    previous: {
      link: "referees_by_league",
      title: "Referees stats by league"
    },
    next: {
      link: "average_referees_stats",
      title: "Average referees stats"
    }, 
  },
  average_referees_stats:  {
    link: "average_referees_stats",
    category:"referees",
    title: "Average referees stats",
    get: "/api/v1/standings/:country/:leagueId",
    previous: {
      link: "referee_stats_by_name",
      title: "Referee stats by name"
    },
    next: {
      link: "all_standings",
      title: "All standings"
    }, 
  },  
  //***Standings***//
  all_standings:  {
    link: "all_standings",
    category: "standings",
    title: "All standings",
    get: "/api/v1/standings",
    demo: "/api/v1/standings/demo",
    previous: {
      link: "average_referees_stats",
      title: "Average referees stats"
    },
    next: {
      link: "standings_by_country",
      title: "Standing By Country"
    }, 
  },
  standings_by_country:  {
    link: "standings_by_country",
    category:"standings",
    title: "Standings by country",
    get: "/api/v1/standings/:country",
    demo: "/api/v1/standings/spain/demo",
    previous: {
      link: "all_standings",
      title: "All standings"
    },
    next: {
      link: "standings_by_league",
      title: "Standings by league"
    }, 
  },
  standings_by_league:  {
    link: "standings_by_league",
    category:"standings",
    title: "Standings by league",
    get: "/api/v1/standings/:country/:leagueId",
    demo: "/api/v1/standings/england/dYlOSQOD/demo",
    previous: {
      link: "standings_by_country",
      title: "Standings by country"
    },
  },
 

});
