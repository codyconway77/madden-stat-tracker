const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const bcrypt = require('bcryptjs')
const auth = require('../middleware/authMiddleware');

// @router POST /auth
// @desc   Auth user
// @access Public

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
            if(!user) return res.status(400).json({ message: 'User does not exist' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

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
                    );
                })
        })
});

// @router GET /auth/user
// @desc   Get user data
// @access Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});



module.exports = router;