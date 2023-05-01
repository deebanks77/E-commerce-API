const registerController = (req, res) => {
  res.send("register controller");
};
const loginController = (req, res) => {
  res.send("login controller");
};
const logoutController = (req, res) => {
  res.send("logout controller");
};

module.exports = { registerController, loginController, logoutController };
