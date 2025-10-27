const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const isAdmin = require("../../middleware/isAdmin");

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  const { name, email, role, status } = req.body;
  const { id } = req.params;

  try {
    await db.query(
      "UPDATE users SET name = ?, email = ?, role = ?, status = ? WHERE id = ?",
      [name, email, role, status, id]
    );
    res.json({ success: true, message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update user" });
  }
});

module.exports = router;
