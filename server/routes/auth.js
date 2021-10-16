const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

router.post("/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    let user = await User.findOne({ phone });
    if (user) {
      res.status(400).send({ error: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
      phone,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

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
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
