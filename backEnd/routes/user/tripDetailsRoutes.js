const express = require("express");
const router = express.Router();
const db = require("../../db");

// Route: Get trip by ID
router.get("/:id", async (req, res) => {
  const tripId = req.params.id;
  try {
    const [rows] = await db.query("SELECT * FROM trips WHERE id = ?", [tripId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Trip not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching trip by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
