const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
//const auth = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const game = await Game.findById(id);
        res.json(game);
    } catch (err) {
        res.json({ message: err });
    }
})

router.post('/', async (req, res) => {
    const game = new Game({
        player: req.body.player,
        win: req.body.win,
        loss: req.body.loss,
        score: req.body.score,
        yards: req.body.yards,
        rushingYards: req.body.rushingYards,
        passingYards: req.body.passingYards,
        interceptions: req.body.interceptions,
        forcedFumbles: req.body.forcedFumbles,
        player2: req.body.player2,
        win2: req.body.win2,
        loss2: req.body.loss2,
        score2: req.body.score2,
        yards2: req.body.yards2,
        rushingYards2: req.body.rushingYards2,
        passingYards2: req.body.passingYards2,
        interceptions2: req.body.interceptions2,
        forcedFumbles2: req.body.forcedFumbles2
    });
    try {
        const savedGame = await game.save();
        res.json(savedGame);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;