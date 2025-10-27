const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, async (req, res) => {
  const { month } = req.query; // مثلا: 2025-09
  const userId = req.user.id;

  try {
    const [rows] = await db.query(
      `SELECT * FROM expenses WHERE user_id = ? AND DATE_FORMAT(expense_date, '%Y-%m') = ? ORDER BY expense_date DESC`,
      [userId, month]
    );

    return res.json({
      success: true,
      categories: rows,
    });
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
