const express = require("express");
const router = express.Router();
const db = require("../../db");

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const [rows] = await db.execute(
      `SELECT b.*, t.from_city, t.to_city, t.departure_time
       FROM bookings b
       JOIN trips t ON b.trip_id = t.id
       WHERE b.user_id = ?
       ORDER BY t.departure_time DESC`,
      [userId]
    );

    res.json({ success: true, bookings: rows });
  } catch (err) {
    console.error("Booking fetch error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
