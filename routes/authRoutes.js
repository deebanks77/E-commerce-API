const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  logoutController,
} = require("../controllers/authController");

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
