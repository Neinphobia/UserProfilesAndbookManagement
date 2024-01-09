const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = async () => {
  try {
    const { MONGODB_URI, MONGODB_OPTIONS } = process.env;

    await mongoose.connect(MONGODB_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = { connectDatabase };
