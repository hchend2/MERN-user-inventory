//
// config/db.js
//

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'YOUR_MONGODB_URI', 
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    );
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('MongoDB connection established successfully');
    }); 
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;