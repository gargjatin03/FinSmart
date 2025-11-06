const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const connection = await mongoose.connect
    (process.env.MONGODB_URI.replace 
        ('<PASSWORD>', process.env.DATABASE_PASSWORD)
    ); 
    console.log(`MongoDB connected: ${connection.connection.host}`);
} catch (error) {
        console.error('MongoDB connection error:', error.message); 
        process.exit(1); 
    }
};

module.exports = connectDB;