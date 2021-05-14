const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {
    const { username, password } = req.body;
    // Simple validation
    if(!username || !password) {
        return res.status(400).json({ message: 'Please enter all fields'});
    }

    if(password.length < 4) {
        return res.status(400).json({ message: "Password must be longer than 3 characters"})
    }
    
    // Check for existing user
    User.findOne({ username })
        .then(user => {
            if(user) return res.status(400).json({ message: 'User already exists'});

            const newUser = new User({
                username,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                process.env.ACCESS_TOKEN_SECRET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            username: user.username
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
})


module.exports = router;