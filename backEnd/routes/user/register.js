// routes/user/register.js
const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const [existingUser] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const username = firstName + " " + lastName;
    console.log("username", username);

    const [result] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    const userId = result.insertId;
    const fullName = `${firstName} ${lastName}`;

    const token = jwt.sign(
      { id: userId, name: fullName, email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const user = {
      id: userId,
      username: username,
      email: email,
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
