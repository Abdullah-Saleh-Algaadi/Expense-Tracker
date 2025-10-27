const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

router.get("/:id", verifyToken, isAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query(
      `
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
      WHERE b.id = ?
    `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({
      success: true,
      data: rows[0],
    });
  } catch (err) {
    console.error("Error fetching booking details:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
