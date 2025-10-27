const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.post("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { amount, description, category, type, date } = req.body;
  const source = category;

  try {
    if (type === "income") {
      const [result] = await db.query(
        `INSERT INTO incomes (user_id, amount, source, description, income_date) VALUES (?, ?, ?, ?, ?)`,
        [userId, amount, source, description, date]
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
