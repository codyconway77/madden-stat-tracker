const mongoose = require('mongoose');


const GameSchema = mongoose.Schema({
    player: String,
    win: Number,
    loss: Number,
    score: Number,
    yards: Number,
    rushingYards: Number,
    passingYards: Number,
    interceptions: Number,
    forcedFumbles: Number,
    player2: String,
    win2: Number,
    loss2: Number,
    score2: Number,
    yards2: Number,
    rushingYards2: Number,
    passingYards2: Number,
    interceptions2: Number,
    forcedFumbles2: Number
})

module.exports = mongoose.model('Game', GameSchema);