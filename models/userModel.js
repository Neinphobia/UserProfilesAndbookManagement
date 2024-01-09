const mongoose = require("mongoose");
// Create a Todo schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: "__v",
  }
);

// Create a Todo model
const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
