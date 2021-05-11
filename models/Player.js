const mongoose = require('mongoose');


const PlayerSchema = mongoose.Schema({
    name: String,
    wins: Number,
    losses: Number,
    totalScore: Number,
    totalYards: Number,
    totalRushingYards: Number,
    totalPassingYards: Number,
    totalInterceptions: Number,
    totalForcedFumbles: Number
})

module.exports = mongoose.model('Player', PlayerSchema);