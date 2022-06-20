const mongoose = require("mongoose");

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const LiveMatchesSchema = new Schema({
  id: String,
  matches: [{
    matchId: String,
    matchStatus: String,
    matchProgress: String,
    matchScore: {
        match: {
          scoreHT: String,
          scoreAT: String,
        },
        firstHalf: {
          scoreHT: String,
          scoreAT: String,
        },
        secondHalf: {
          scoreHT: String,
          scoreAT: String,
        },
    },
    matchMinute: String,
    }]
});


module.exports =
    mongoose.models.LiveMatches || mongoose.model('LiveMatches', LiveMatchesSchema);