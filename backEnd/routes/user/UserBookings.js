const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const db = require("../../db");

// GET /api/myBookings
router.get("/", verifyToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const [bookings] = await db.query(
      `SELECT 
         b.id ,
         b.user_id,
         b.trip_id,
         b.number_of_seats,
         b.total_price,
         b.status,
         b.booking_time,
         b.payment_status,
         b.payment_method,
         t.from_city,
         t.to_city,
         t.date,
         t.departure_time,
         t.arrival_time,
         t.company_name,
         t.bus_type,
         t.price AS trip_price
       FROM bookings b
       JOIN trips t ON b.trip_id = t.id
       WHERE b.user_id = ?`,
      [userId]
    );

    if (bookings.length === 0) {
      return res.json({ success: true, bookings: [] });
    }

    res.json({ success: true, bookings });
  } catch (err) {
    console.error("❌ Database error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
