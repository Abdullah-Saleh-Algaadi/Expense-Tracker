const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    // ✅ جلب جميع الرحلات
    const [trips] = await db.query("SELECT * FROM trips");
    // Example using MySQL
    const [rows] = await db.query(
      "SELECT SUM(total_price) AS total_revenue FROM bookings"
    );
    const totalRevenue = rows[0].total_revenue;

    // ✅ جلب جميع الحجوزات مع بيانات المسافر والرحلة
    const [bookings] = await db.query(`
      SELECT 
        b.*,
        u.name as passenger_name,
        u.email as passenger_email,
        u.id as passenger_id,
        t.from_city,
        t.to_city,
        t.date,
        t.departure_time,
        t.arrival_time,
        t.price,
        t.company_name,
        t.bus_type
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN trips t ON b.trip_id = t.id
    `);

    // ✅ جلب عدد المستخدمين
    const [users] = await db.query("SELECT * FROM users");

    // ✅ الإرجاع الصحيح: مصفوفات، لا تستخدم [0]
    res.json({
      success: true,
      data: {
        trips: trips, // ✅ المصفوفة كاملة
        bookings: bookings, // ✅ المصفوفة كاملة
        users: users, // ✅ عدد المستخدمين
        totalRevenue: totalRevenue,
      },
    });
  } catch (err) {
    console.error("Admin Dashboard Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
module.exports = router;
