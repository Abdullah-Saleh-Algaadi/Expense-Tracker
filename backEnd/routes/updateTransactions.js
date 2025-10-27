// src/routes/updateTransaction.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.put("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { amount, description, category, type, date, id } = req.body;

  console.log(req.body);
  console.log(userId);
  // حدد الجدول والأعمدة حسب نوع المعاملة
  const tableName = type === "income" ? "incomes" : "expenses";
  const categoryColumn = type === "income" ? "source" : "category";
  const dateColumn = type === "income" ? "income_date" : "expense_date";

  console.log(
    `table name ${tableName} \n category ${categoryColumn} \n  date ${dateColumn}`
  );

  try {
    const [result] = await db.query(
      `UPDATE ${tableName} 
       SET amount = ?, ${categoryColumn} = ?, description = ?, ${dateColumn} = ? 
       WHERE id = ? AND user_id = ?`,
      [amount, category, description, date, id, userId]
    );

    console.log("Query result:", result);


    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found or not authorized",
      });
    }

    res.json({
      success: true,
      message: "Transaction updated successfully!",
      affectedRows: result.affectedRows,
    });
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
