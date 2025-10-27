const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

// GET /api/recent-transactions?limit=7&date=2024-09
router.get("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { limit = 7, date } = req.query;

  try {
    // التحقق من المعاملات المطلوبة
    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date parameter is required (format: YYYY-MM)",
      });
    }

    // التحقق من صيغة التاريخ (YYYY-MM)
    const dateRegex = /^\d{4}-\d{2}$/;
    if (!dateRegex.test(date)) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format. Use YYYY-MM",
      });
    }

    // استخراج السنة والشهر من التاريخ
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);

    // حساب التوزيع العادل بين الجدولين
    const incomeLimit = Math.ceil(limit / 2);
    const expenseLimit = Math.floor(limit / 2);

    // استعلام incomes باستخدام income_date
    const incomesQuery = `
      SELECT 
        id,
        amount,
        description,
        source as category,  -- استخدام source ك category للدخل
        income_date as date, -- استخدام income_date
        'income' as type,
        created_at
      FROM incomes 
      WHERE user_id = ? 
      AND YEAR(income_date) = ? 
      AND MONTH(income_date) = ?
      ORDER BY income_date DESC, created_at DESC
      LIMIT ?
    `;

    // استعلام expenses باستخدام expense_date
    const expensesQuery = `
      SELECT 
        id,
        amount,
        description,
        category,
        expense_date as date, -- استخدام expense_date
        'expense' as type,
        created_at
      FROM expenses 
      WHERE user_id = ? 
      AND YEAR(expense_date) = ? 
      AND MONTH(expense_date) = ?
      ORDER BY expense_date DESC, created_at DESC
      LIMIT ?
    `;

    // تنفيذ الاستعلامات بشكل متوازي
    const [incomesResult, expensesResult] = await Promise.all([
      db.query(incomesQuery, [userId, year, month, incomeLimit]),
      db.query(expensesQuery, [userId, year, month, expenseLimit]),
    ]);

    // دمج النتائج من الجدولين
    const allTransactions = [...incomesResult[0], ...expensesResult[0]];

    // ترتيب حسب التاريخ والوقت (الأحدث أولاً)
    const sortedTransactions = allTransactions
      .sort((a, b) => {
        // أولاً حسب التاريخ
        const dateCompare = new Date(b.date) - new Date(a.date);
        if (dateCompare !== 0) return dateCompare;

        // إذا كان التاريخ متساوياً، رتب حسب وقت الإنشاء
        return new Date(b.created_at) - new Date(a.created_at);
      })
      .slice(0, limit)
      .map((transaction) => ({
        id: transaction.id,
        type: transaction.type,
        amount: parseFloat(transaction.amount),
        description: transaction.description,
        category: transaction.category,
        date: transaction.date,
      }));

    // إعداد الرد
    const response = {
      success: true,
      transactions: sortedTransactions,
      summary: {
        total: sortedTransactions.length,
        incomes: sortedTransactions.filter((t) => t.type === "income").length,
        expenses: sortedTransactions.filter((t) => t.type === "expense").length,
        date: date,
      },
    };

    res.json(response);
  } catch (error) {
    console.error("Error in /api/recent-transactions:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

// route للتحقق من البيانات (اختياري)
router.get("/debug", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { date } = req.query;

  try {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);

    const [incomesResult] = await db.query(
      "SELECT COUNT(*) as count FROM incomes WHERE user_id = ? AND YEAR(income_date) = ? AND MONTH(income_date) = ?",
      [userId, year, month]
    );

    const [expensesResult] = await db.query(
      "SELECT COUNT(*) as count FROM expenses WHERE user_id = ? AND YEAR(expense_date) = ? AND MONTH(expense_date) = ?",
      [userId, year, month]
    );

    res.json({
      incomes_count: incomesResult[0].count,
      expenses_count: expensesResult[0].count,
      date: date,
      user_id: userId,
    });
  } catch (error) {
    console.error("Debug error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
