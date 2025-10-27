// routes/booking.js
const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");

router.get("/:id", verifyToken, async (req, res) => {
  const { id: userId, role } = req.user;
  const { id: bookingId } = req.params;

  // جلب الحجز مع التحقق من الصلاحيات
  let query = "SELECT * FROM bookings WHERE id = ?";
  let params = [bookingId];

  if (role !== "admin") {
    query += " AND user_id = ?";
    params.push(userId);
  }

  const [bookings] = await db.query(query, params);

  if (bookings.length === 0) {
    return res.status(404).json({
      message:
        role === "admin" ? "Booking not found" : "Not found or not yours",
    });
  }

  // جلب البيانات
  const [trips] = await db.query("SELECT * FROM trips WHERE id = ?", [
    bookings[0].trip_id,
  ]);
  const [users] = await db.query("SELECT * FROM users WHERE id = ?", [
    bookings[0].user_id,
  ]);

  res.json({
    success: true,
    booking: bookings[0],
    trip: trips[0],
    user: users[0],
  });
});

module.exports = router;