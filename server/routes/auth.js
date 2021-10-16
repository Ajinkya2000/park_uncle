const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");
const authMiddleware = require('../middleware/authMiddleware');

// Get User
router.get('/get-user', authMiddleware, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).send({error: 'Server Error'});
    }
})

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    let user = await User.findOne({ phone });
    if (user) {
      return res.status(400).send({ error: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
      phone,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const savedUser = await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ user: savedUser, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    return res.status(500).send({ error: "Server Error" });
  }
});

// Signin
router.post("/signin", async (req, res) => {
    const { password, phone } = req.body;
  
    try {
      let user = await User.findOne({ phone });
      if (!user) {
        return res.status(400).send({ error: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).send({ error: "Invalid Credentials" });
      }
  
      const payload = {
        user: {
          id: user.id,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ user, token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send({ error: "Server Error" });
    }
  });

module.exports = router;
