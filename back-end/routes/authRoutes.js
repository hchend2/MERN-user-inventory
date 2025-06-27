//
// routes/authRoutes.js
//
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const app = express();

// Register route
app.post('/register', async (req, res) => {
  
    try {
        const { firstname, lastname, email } = req.body;

        // const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({
            firstname,
            lastname,
            email,
            // password: hashedPassword,
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

module.exports = app; // Export the app instance for use in server.js