const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');

router.post('/', (req, res) => {
    User.register(new User({
        username: req.body.username
    }),
    req.body.password, (err, user) => {
        if(err) {
            console.log(err);
            return res.render('/');
        }
        passport.authenticate('local') (req, res, () => {
            res.send("User created");
        });
    });
});

module.exports = router