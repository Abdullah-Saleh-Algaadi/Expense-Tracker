const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const verifyToken = require("../middleware/auth");

// ✅ Use POST (not PUT with password in URL)
router.put("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { currentPassword, newPassword } = req.body; // ✅ Get newPassword from request body

  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    const [oldPassword] = await db.query(
      `SELECT password FROM users WHERE id=${userId}`
    );

    const isMatch = await bcrypt.compare(
      currentPassword,
      oldPassword[0].password
    );

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Current password is not correct" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const [result] = await db.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
