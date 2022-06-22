
exports.demoFixturesOrTodayMatches = (result)=>{
  return result.map(league=>{
    return {
      id: league.id,
      num: league.num,
      country: league.country.toUpperCase(),
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
 
exports.demoResultsOrLatestScores = (data)=>{
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


exports.demoStandings = (data)=>{
  return data.map(league=>{
    return {
      id: league.id,
      country: league.country,
      league: league.league,
      standings: league.standings.overall.map(team=>{
        return {
          rank: team.rank,
          teamName: team.teamName,
          teamId: team.teamId,
          teamLogo: team.teamLogo,
          matchesPlayed: team.matchesPlayed,
          wins: team.wins,
          draws: team.draws,
          losses: team.losses,
          goals: team.goals,
          points: team.points,
          nextMatch: {
            matchId: team.nextMatch.matchId,
            matchDate: team.nextMatch.matchDate,
            title: team.nextMatch.title,
          }
        }
      })
    }
  })
}


      
