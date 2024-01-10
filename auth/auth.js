const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const secret = process.env.SECRET_KEY;
const router = express.Router();
const errorRouter = require("../utils/errorRouter");

//Wrapped with error router.
router.post(
  "/register",
  errorRouter(async (req, res) => {
    const { username, password, email } = req.body;

    // Check if the username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already exists" });
    }

    
    /*
    Check the mail is valid: 
    const validator = require('validator');
    
    if (validator.isEmail(email)) {
      // email is valid
    } else {
      // email is not valid
    } 
    
    */
   // Check if the email already exists
   const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email, // Ideally should be unique in the emailworld not just in database maybe regex?
      password: hashedPassword,
      favCreditLeft: 10,
      role: "realUser",
    });

    await newUser.save();
    const info = {
      username: newUser.username,
      email: newUser.email,
      registered: true,
    };
    res.status(201).json(info);
  })
);

router.post(
  "/login",
  errorRouter(async (req, res) => {
    const { username, password } = req.body;
    const realUser = await User.findOne({ username });
    const user = {
      name: realUser.username,
      role: realUser.role,
      email: realUser.email,
    };
    if (!realUser || !(await bcrypt.compare(password, realUser.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: realUser._id, username: realUser.username },
      secret,
      {
        expiresIn: "1h",
      }
    );
    // console.log("Generated Token:", token);
    res.status(200).json({ token, user });
  })
);

module.exports = router;
