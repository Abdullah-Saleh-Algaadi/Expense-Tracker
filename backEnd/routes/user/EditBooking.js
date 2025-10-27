const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط

router.get("/:bookingId", verifyToken, async (req, res) => {
  const bookingId = req.params.bookingId;

  if (!bookingId) {
    return res.status(400).json({ message: "Booking ID is required" });
  }

  try {
    const [bookingRows] = await db.query(
      "SELECT * FROM bookings WHERE id= ? ",
      [bookingId]
    );

    if (bookingRows.length === 0) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const { trip_id } = bookingRows[0];

    const [tripDetails] = await db.query("SELECT * FROM trips  WHERE id = ?", [
      trip_id,
    ]);

    res.json({ booking: bookingRows[0], trip: tripDetails[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
