const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const isAdmin = require("../../middleware/isAdmin");

router.delete("/:userId", verifyToken, isAdmin, async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // 1. جلب كل حجوزات المستخدم
    const [bookings] = await db.query(
      "SELECT trip_id, number_of_seats FROM bookings WHERE user_id = ?",
      [userId]
    );

    if (bookings.length === 0) {
      // لا حجوزات، احذف المستخدم فقط
      await db.query("DELETE FROM users WHERE id = ?", [userId]);
      return res.json({ message: "User deleted successfully (no bookings)" });
    }

    // 2. حذف المستخدم أولًا (أو حذف الحجوزات أولًا)
    await db.query("DELETE FROM bookings WHERE user_id = ?", [userId]);

    // 3. تحديث كل رحلة بناءً على عدد المقاعد في كل حجز
    for (const booking of bookings) {
      await db.query(
        "UPDATE trips SET seats_available = seats_available + ? WHERE id = ?",
        [booking.number_of_seats, booking.trip_id]
      );
    }

    // 4. الآن احذف المستخدم (اختياري: يمكن حذفه أولًا)
    await db.query("DELETE FROM users WHERE id = ?", [userId]);

    res.json({
      message: "User and all bookings deleted. All trips updated successfully.",
      updatedTrips: bookings.length,
    });
  } catch (err) {
    console.error("Delete User Error:", err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
