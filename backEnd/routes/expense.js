const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.post("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { amount, description, category, type, date } = req.body;

  try {
    if (type === "expense") {
      const [result] = await db.query(
        `INSERT INTO expenses (user_id, amount, category, description, expense_date) VALUES (?, ?, ?, ?, ?)`,
        [userId, amount, category, description, date]
      );

      res.json({
        success: true,
        message: "Transaction added successfully!",
        id: result.insertId,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
