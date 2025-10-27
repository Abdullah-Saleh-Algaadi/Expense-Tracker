const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin"); // نستخدمه للفحص

router.put("/:bookingId", verifyToken, async (req, res) => {
  const { id: userId, role } = req.user;
  const { bookingId } = req.params;

  try {
    const { availableSeats, totalPrice, numberOfSeats } = req.body;

    // 1. جلب الحجز
    const [bookings] = await db.query("SELECT * FROM bookings WHERE id = ?", [
      bookingId,
    ]);

    if (bookings.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const booking = bookings[0];

    // 2. التحقق من الصلاحية
    const isOwner = booking.user_id === userId;
    const isAdminUser = role === "admin";

    if (!isOwner && !isAdminUser) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You can only edit your own bookings.",
      });
    }

    // 3. جلب trip_id من الحجز
    const { trip_id } = booking;

    // 4. تحديث المقاعد المتاحة في الرحلة
    await db.query("UPDATE trips SET seats_available = ? WHERE id = ?", [
      availableSeats,
      trip_id,
    ]);

    // 5. تحديث الحجز
    await db.query(
      "UPDATE bookings SET total_price = ?, number_of_seats = ? WHERE id = ?",
      [totalPrice, numberOfSeats, bookingId]
    );

    res.json({
      success: true,
      message: "Booking updated successfully",
    });
  } catch (err) {
    console.error("Error updating booking:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
