const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth");
const db = require("../../db");
const bcrypt = require("bcrypt");

// ✅ استخدم POST بدل GET (لأنك تُرسل بيانات حساسة)
router.post("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { password } = req.body; // ✅ من body، ليس من URL

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ isMatch: false });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    res.json({
      isMatch,
      user: isMatch ? { id: user.id } : null,
    });
  } catch (err) {
    res.status(500).json({ isMatch: false, message: "Server error" });
  }
});

module.exports = router;
