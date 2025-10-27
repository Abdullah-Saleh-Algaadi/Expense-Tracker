const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط

router.delete("/:bookingId", verifyToken, async (req, res) => {
  const bookingId = req.params.bookingId;

  if (!bookingId) {
    return res.status(400).json({ message: "Booking ID is required" });
  }

  try {
    // 1️⃣ جلب بيانات الحجز لمعرفة trip_id وعدد المقاعد
    const [bookingRows] = await db.query(
      "SELECT trip_id, number_of_seats FROM bookings WHERE id = ?",
      [bookingId]
    );

    if (bookingRows.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const { trip_id, number_of_seats } = bookingRows[0];

    // 2️⃣ حذف الحجز
    await db.query("DELETE FROM bookings WHERE id = ?", [bookingId]);

    // 3️⃣ تحديث المقاعد المتاحة في جدول الرحلات
    await db.query(
      "UPDATE trips SET seats_available = seats_available + ? WHERE id = ?",
      [number_of_seats, trip_id]
    );

    res.json({ message: "Booking deleted and seats updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
