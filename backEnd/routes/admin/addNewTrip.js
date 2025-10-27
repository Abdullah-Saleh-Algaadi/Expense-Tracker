const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("image"),
  async (req, res) => {
    const {
      from_city,
      to_city,
      date,
      departure_time,
      arrival_time,
      price,
      bus_type,
      seats_available,
      company_name,
    } = req.body;

    try {
      const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

      const [result] = await db.query(
        `INSERT INTO trips 
      (from_city, to_city, date, departure_time, arrival_time, company_name, bus_type, seats_available, price, image) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          from_city,
          to_city,
          date,
          departure_time,
          arrival_time,
          company_name,
          bus_type,
          seats_available,
          price,
          imagePath,
        ]
      );

      res.json({
        success: true,
        message: "Trip added successfully",
        id: result.insertId,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
