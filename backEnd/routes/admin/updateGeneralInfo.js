const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");
const multer = require("multer");

router.put("/", verifyToken, isAdmin, async (req, res) => {
  const { siteName, email, phone, whatsapp } = req.body;

  try {
    await db.query(
      "UPDATE settings SET site_name = ?, support_email = ?, phone = ?, whatsapp = ?",
      [siteName, email, phone, whatsapp]
    );
    res.json({ success: true, message: "Settings updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update settings" });
  }
});

module.exports = router;
