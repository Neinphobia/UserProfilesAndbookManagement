const userService = require("./usersService");

const getUsers = async (req, res) => {
  const result = await userService.getUsers();
  //avoided sending password even if its hashed.
  const resResult = result.map(
    ({ _id, username, email, role, favCreditLeft }) => ({
      _id,
      username,
      email,
      role,
      favCreditLeft,
    })
  );

  return res.json(resResult);
};
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await userService.createUser(username, email, password);
  //get crypted pass
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
