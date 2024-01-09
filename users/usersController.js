const userService = require("./usersService");

const getUsers = async (req, res) => {
  const result = await userService.getUsers();
  return res.json(result);
};
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await userService.createUser(username, email, password);
  const createdUser = {
    created: true,
    user: result,
  };
  return res.json(createdUser);
};

module.exports = {
  getUsers,
  createUser,
};
