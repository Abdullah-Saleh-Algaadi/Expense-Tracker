const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("../middleware/auth");

router.delete("/", verifyToken, async (req, res) => {
  const userId = req.user.id;
  const { id, type } = req.body;

  if (!type || !id || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Type and id are required." });
  }

  const tableName = type === "income" ? "incomes" : "expenses";

  try {
    const [result] = await db.query(
      `DELETE FROM ${tableName} WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Transaction deleted successfully.",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Transaction not found or not yours.",
      });
    }
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
});

module.exports = router;
