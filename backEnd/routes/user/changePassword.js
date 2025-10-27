const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط

// ✅ Use POST (not PUT with password in URL)
router.post("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { newPassword } = req.body; // ✅ Get newPassword from request body

  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    // 1️⃣ Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 2️⃣ Update password in DB
    const [result] = await db.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
