const express = require("express");
const router = express.Router();
const db = require("../../db");

router.get("/", async (req, res) => {
  const { from, to, date } = req.query;

  try {
    const [rows] = await db.query(
      `SELECT * FROM trips WHERE from_city = ? AND to_city = ? AND DATE(date) = ?`,
      [from, to, date]
    );
    res.json(rows);
  } catch (err) {
    console.error("Error searching trips:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
