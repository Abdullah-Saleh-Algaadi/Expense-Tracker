const express = require("express");
const router = express.Router();
const db = require("../../db");

router.post("/", async (req, res) => {
  console.log("Booking data received:", req.body);

  // Use the field names from frontend
  const {
    trip_id,
    user_id,
    number_of_seats,
    total_price,
    payment_method,
    payment_name,
    payment_card,
    selected_seats, // optional
  } = req.body;
  console.log(user_id);
  if (!trip_id || !user_id || !number_of_seats || !total_price) {
    return res
      .status(400)
      .json({ success: false, message: "Missing booking data" });
  }

  try {
    const [tripRows] = await db.query(
      "SELECT seats_available FROM trips WHERE id = ?",
      [trip_id]
    );
    if (payment_method === "card" || payment_method === "wallet") {
      if (!payment_name || !payment_card) {
        return res
          .status(400)
          .json({ success: false, message: "Missing card details" });
      }
    }

    if (tripRows.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Trip not found" });
    }

    const trip = tripRows[0];

    if (trip.seats_available < number_of_seats) {
      return res
        .status(400)
        .json({ success: false, message: "Not enough seats available" });
    }

    // Insert booking (expand later if needed)
    const [insertResult] = await db.query(
      `INSERT INTO bookings 
       (trip_id, user_id, number_of_seats, total_price, payment_method, payment_name, payment_card) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        trip_id,
        user_id,
        number_of_seats,
        total_price,
        payment_method,
        payment_name || null,
        payment_card || null,
      ]
    );

    // Update seats
    await db.query("UPDATE trips SET seats_available = ? WHERE id = ?", [
      trip.seats_available - number_of_seats,
      trip_id,
    ]);

    res.json({
      success: true,
      message: "Booking successful",
      bookingId: insertResult.insertId,
    });
  } catch (error) {
    console.error("Booking error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error during booking" });
  }
});

module.exports = router;
