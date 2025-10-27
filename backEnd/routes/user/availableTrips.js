const express = require("express");

const router = express.Router();
const db = require("../../db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM trips 
WHERE date >= CURDATE() 
ORDER BY date ASC, departure_time ASC`
    );
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching trips:", err);
    res.status(500).json({ error: "Failed to fetch trips" });
  }
});

module.exports = router;
