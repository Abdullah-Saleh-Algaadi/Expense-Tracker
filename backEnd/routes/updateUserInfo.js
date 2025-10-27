// src/routes/updateUser.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.put("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    // 1. Check if email is already used by another user
    const [existingEmail] = await db.query(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [email, userId]
    );

    if (existingEmail.length > 0) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // 2. Update user info
    await db.query("UPDATE users SET username = ?, email = ? WHERE id = ?", [
      name,
      email,
      userId,
    ]);

    // 3. Return updated user
    const [updatedUser] = await db.query(
      "SELECT id, username, email FROM users WHERE id = ?",
      [userId]
    );

    res.status(200).json({
      success: true,
      message: "User info updated successfully.",
      user: updatedUser[0],
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
