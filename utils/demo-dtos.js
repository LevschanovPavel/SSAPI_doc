
exports.demoTodayMatches = (result)=>{
  return result.map(league=>{
    return {
      id: league.id,
      num: league.num,
      country: league.country,
      league: league.league,
      logo: league.logo,
      matches: league.matches.map(match=>{
        return {
          matchId: match.matchId,
          matchFullDate: match.matchFullDate,
          matchData: match.matchData,
          matchTime: match.matchTime,
          timestamp: match.timestamp,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          homeTeamIco: match.homeTeamIco,
          awayTeamIco: match.awayTeamIco,
          homeTeamShortName: match.homeTeamShortName,
          awayTeamShortName: match.awayTeamShortName,
          odds: match.odds,          
        }
      })
    }
  })
}

exports.demoLeaguesSummary = (data)=>{
  return data.map(league=>{
    return {
      id: league.id,
      num: league.num,
      country: league.country,
      league: league.league,
      averageStats: league.champStats
    }
  })
}

exports.demoLatestScores = (data)=>{
  return data.map(league=>{
    return {
      id: league.id,
      num: league.num,
      country: league.country,
      league: league.league,
      logo: league.logo,
      matches: league.matches.map(match=>{
        return {
          matchId: match.matchId,
          matchFullDate: match.matchFullDate,
          matchData: match.matchData,
          matchTime: match.matchTime,
          timestamp: match.timestamp,
          homeTeam: match.homeTeam,
          awayTeam: match.awayTeam,
          homeTeamIco: match.homeTeamIco,
          awayTeamIco: match.awayTeamIco,
          homeTeamShortName: match.homeTeamShortName,
          awayTeamShortName: match.awayTeamShortName,
          odds: match.odds,
          summary: {
            duration: match.summary.duration,
            winner: match.summary.winner,
            referee: match.summary.referee,
            venue: match.summary.venue,
            scoreFinal: match.summary.scoreFinal,
            score90min: match.summary.score90min,
            scoreFirstHalf: match.summary.scoreFirstHalf,
            scoreSecondHalf: match.summary.scoreSecondHalf
          },
          stats: 'hide in demo version'
        }
      })
    }
  })
}


      
