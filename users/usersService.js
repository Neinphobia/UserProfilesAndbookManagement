const userModel = require("../models/userModel");

const getUsers = async () => {
  const result = await userModel.find({}, { username: 1, _id: 1 });

  //dont send the user as a whole just send username and _id
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
