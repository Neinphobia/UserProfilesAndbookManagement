const userModel = require("../models/userModel");

const getUsers = async () => {
  const result = userModel.find();
  return result;
};
const createUser = async (username, email, password) => {
  //crypt the password
  const createdUser = new userModel({
    username,
    email,
    password,
  });
  const result = await createdUser.save();
  return result;
};

module.exports = {
  getUsers,
  createUser,
};
