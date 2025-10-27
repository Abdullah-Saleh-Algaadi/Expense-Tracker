const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const [generalInfo] = await db.query(`SELECT * FROM settings`);

    if (generalInfo.length === 0) {
      return res.status(404).json({ message: "General information not found" });
    }

    res.json({ success: true, data: generalInfo });
  } catch (err) {
    console.error("Error fetching general information details:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
