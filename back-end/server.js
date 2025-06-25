const express = require('express');

const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors({ 
    origin: 'http://localhost:3000', // the port where Reactjs app is running
    methods: 'GET,POST,PUT,DELETE',
    credentials: true 
}));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
app.use('/auth', authRoutes);
app.listen(PORT, () => {
    app.get('/', (req, res) => {
        res.send('Welcome to the backend server!');
    });
    console.log(`CORS-enabled web server listening on port ${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});
// connectDB();



