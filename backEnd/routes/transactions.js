const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.get("/", verifyToken, async (req, res) => {
  const userId = req.user.id; // ✅ جاي من التوكن
  const { type, date } = req.query; // type=incomes أو expenses, date=YYYY-MM

  if (!type || !date) {
    return res.status(400).json({
      success: false,
      message: "Missing required query parameters (type, date)",
    });
  }

  try {
    let tableName;
    if (type === "incomes") {
      tableName = "incomes";
    } else if (type === "expenses") {
      tableName = "expenses";
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid type. Use 'incomes' or 'expenses'",
      });
    }

    let dateColumn = "created_at"; // default

    if (tableName === "incomes") {
      dateColumn = "income_date"; 
    } else if (tableName === "expenses") {
      dateColumn = "expense_date"; 
    }

    const [rows] = await db.query(
      `SELECT * FROM ${tableName}
        WHERE user_id = ? 
         AND DATE_FORMAT(${dateColumn}, '%Y-%m') = ?
         ORDER BY ${dateColumn} DESC
  `,
      [userId, date]
    );

    return res.json({
      success: true,
      [type]: rows, // يرسل كـ incomes أو expenses
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return res.status(500).json({
      success: false,
      message: "Server error fetching transactions",
    });
  }
});

module.exports = router;
