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

router.put(
  "/:tripId",
  verifyToken,
  isAdmin,
  upload.single("image"),
  async (req, res) => {
    const { tripId } = req.params;
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

      const query = `
      UPDATE trips SET
        from_city = ?, to_city = ?, date = ?, departure_time = ?, arrival_time = ?,
        price = ?, bus_type = ?, seats_available = ?, company_name = ?
        ${imagePath ? ", image = ?" : ""}
      WHERE id = ?
    `;

      const params = imagePath
        ? [
            from_city,
            to_city,
            date,
            departure_time,
            arrival_time,
            price,
            bus_type,
            seats_available,
            company_name,
            imagePath,
            tripId,
          ]
        : [
            from_city,
            to_city,
            date,
            departure_time,
            arrival_time,
            price,
            bus_type,
            seats_available,
            company_name,
            tripId,
          ];

      const [result] = await db.query(query, params);

      if (result.affectedRows === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Trip not found" });
      }

      res.json({ success: true, message: "Trip updated successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
