const Matches = require("../models/matches");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/error-respons");

// @desc      Get matchBets by ID
// @route     GET /api/v1/matchBets/:id
// @access    Public
exports.getMatchBets = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // Convert bets object
  const convert = (matchStats)=>{
    const {matches} = matchStats[0]
    return matches.map(match=>{
      return {
        matchId: match.matchId,
        tournament: match.tournament,
        match: `${match.homeTeam} - ${match.awayTeam}`,
        score: match.score,
        bets:match.bets
      }
    })
  }
  
  let data = await Matches.find({matchId:id})
  let result = convert(data[0].matchStats)

  if (!result.length) {
    return next(
      new ErrorResponse(`Bets not found for match with ID: ${id} `, 404)
    );
  }
  res.status(200).json({ success: true, data: result });
});
