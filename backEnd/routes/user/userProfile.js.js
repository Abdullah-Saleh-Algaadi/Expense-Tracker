const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط

router.get("", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [rows] = await db.execute(
      "SELECT id, name, email FROM users WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: rows[0] });
  } catch (err) {
    console.error("User fetch error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
