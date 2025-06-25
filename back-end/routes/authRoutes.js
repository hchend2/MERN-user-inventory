//
// routes/authRoutes.js
//
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ 
            message: 'User registered successfully',
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Server error during registration',
        });
    }
});

module.exports = router;