//
// File: back-end/server.js
//
const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');
const connectMongoDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({ 
    origin: 'http://localhost:3000', // the port where Reactjs app is running ...
    credentials: true 
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// test route ...
app.get('/', (req, res) => {
        res.send('Welcome to the backend server!');
    });

// API Routes ...
app.use('/auth', authRoutes);

// Connect to MongoDB and then start the server ...
connectMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Failed to connect to MongoDB:', err);
});

