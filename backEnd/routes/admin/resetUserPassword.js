const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

router.put("/:userId", verifyToken, isAdmin, async (req, res) => {
  const userId = req.params.userId;

  const password = process.env.RESET_PASSWORD;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.query("UPDATE users SET password = ? WHERE id= ?", [
      hashedPassword,
      userId,
    ]);

    res.json({
      success: true,
      message: "Password reset successfully. New password sent to user.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update settings" });
  }
});

module.exports = router;
