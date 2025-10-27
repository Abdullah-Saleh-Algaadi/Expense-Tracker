const express = require("express");
const router = express.Router();
const db = require("../../db");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const isAdmin = require("../../middleware/isAdmin");

router.delete("/:tripId", verifyToken, isAdmin, async (req, res) => {
  const tripId = req.params.tripId;
  console.log(tripId);

  if (!tripId) {
    return res
      .status(400)
      .json({ success: false, message: "Trip ID is required" });
  }

  try {
    await db.query("DELETE from trips WHERE id=?", [tripId]);
    await db.query("DELETE from bookings WHERE trip_id=?", [tripId]);

    res.json({
      success: true,
      message: "Booking deleted and seats updated successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
