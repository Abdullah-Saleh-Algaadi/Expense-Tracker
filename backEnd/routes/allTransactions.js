const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

// GET /api/all-transactions
router.get("/", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [transactions] = await db.query(
      `
      SELECT 
        id, 
        user_id, 
        amount, 
        description, 
        source AS category, 
        income_date AS date, 
        'income' AS type
      FROM incomes
      WHERE user_id = ?

      UNION ALL

      SELECT 
        id, 
        user_id, 
        amount, 
        description, 
        category, 
        expense_date AS date, 
        'expense' AS type
      FROM expenses
      WHERE user_id = ?

      ORDER BY date ASC;
      `,
      [userId, userId] // تمرير userId بأمان بدلاً من ${userId}
    );

    res.json({ success: true, data: transactions });
  } catch (error) {
    console.error("Error in /api/all-transactions:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
