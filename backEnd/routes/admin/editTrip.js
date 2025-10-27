const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");

const verifyToken = require("../../middleware/auth"); // ✅ استخدم الوسيط
const isAdmin = require("../../middleware/isAdmin");

router.get("/:tripId", verifyToken, isAdmin, async (req, res) => {
  const tripId = req.params.tripId;

  if (!tripId) {
    return res.status(400).json({ message: "Trip ID is required" });
  }

  try {
    const [tripDetails] = await db.query("SELECT * FROM trips  WHERE id = ?", [
      tripId,
    ]);

    if (tripDetails.length === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }

    res.json({ success: true, trip: tripDetails[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;
