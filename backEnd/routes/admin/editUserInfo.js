const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const isAdmin = require("../../middleware/isAdmin");

// GET /admin/users/:id
router.get("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const [users] = await db.query("SELECT id, name, email, role, status FROM users WHERE id = ?", [req.params.id]);
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user: users[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});


module.exports = router;

