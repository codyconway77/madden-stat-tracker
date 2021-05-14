const express = require('express');
const router = express.Router();
const Player = require('../../models/Player');

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.json({ message: err });
    }
});
/*
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id; 
        const player = await Player.findById(id);
        res.json(player);
    } catch (err) {
        res.json({ message: err });
    }
});
*/
router.get('/:name', async (req, res) => {
    try {
        const savedName = req.params.name;
        const player = await Player.findOne({ name: savedName });
        res.json(player);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        wins: req.body.wins,
        losses: req.body.losses,
        totalScore: req.body.score,
        totalYards: req.body.totalYards,
        totalRushingYards: req.body.totalRushingYards,
        totalPassingYards: req.body.totalPassingYards,
        totalInterceptions: req.body.totalInterceptions,
        totalForcedFumbles: req.body.totalForcedFumbles
    });
    try {
        const savedPlayer = await player.save();
        res.json(savedPlayer);
    } catch (err) {
        res.json({ message: err });
    }
});

router.put('/', async (req, res) => {
    try {
        const savedName = req.body.name;
        const savedName2 = req.body.name2;
        const player = await Player.findOneAndUpdate({ name: savedName },
            {$inc :
                {
                    wins: req.body.win,
                    losses: req.body.loss,
                    score: req.body.score,
                    totalYards: req.body.totalYards,
                    totalRushingYards: req.body.totalRushingYards,
                    totalPassingYards: req.body.totalPassingYards,
                    totalInterceptions: req.body.totalInterceptions,
                    totalForcedFumbles: req.body.totalForcedFumbles   
                }},
            { new: true, upsert: true });
        const player2 = await Player.findOneAndUpdate({ name: savedName2 },
            {$inc:
                {
                    win: req.body.win2,
                    loss: req.body.loss2,
                    score: req.body.score2,
                    totalYards: req.body.totalYards2,
                    totalRushingYards: req.body.totalRushingYards2,
                    totalPassingYards: req.body.totalPassingYards2,
                    totalInterceptions: req.body.totalInterceptions2,
                    totalForcedFumbles: req.body.totalForcedFumbles2
                }},
                { new: true, upsert: true });    
        res.json(player, player2);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;