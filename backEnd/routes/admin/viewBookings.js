const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

// ✅ GET /api/viewBookings/
router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        b.id,
        b.user_id,
        b.trip_id,
        b.number_of_seats,
        b.total_price,
        b.payment_method,
        b.payment_status,
        b.booking_time,
        u.name AS passenger_name,
        u.email AS passenger_email,
        t.from_city,
        t.to_city,
        t.date,
        t.departure_time
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN trips t ON b.trip_id = t.id
      ORDER BY b.booking_time DESC
    `);

    res.json({
      success: true,
      data: rows,
    });
  } catch (err) {
    console.error("❌ Error fetching bookings:", err);
    res.status(500).json({
      message: "Failed to fetch bookings", // ✅ تم التصحيح
    });
  }
});

module.exports = router;
