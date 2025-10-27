const express = require("express");
const router = express.Router();
const verifyToken = require("../../middleware/auth");
const db = require("../../db");
const bcrypt = require("bcrypt");
const isAdmin = require("../../middleware/isAdmin");

router.post("/", verifyToken, isAdmin, async (req, res) => {
  const userId = req.user.id;
  const { currentPassword, newPassword } = req.body;

  console.log("🔍 User ID:", userId);
  console.log("🔍 Received currentPassword:", currentPassword);
  console.log("🔍 Received newPassword:", newPassword);
  
  // التحقق من المدخلات
  if (!currentPassword) {
    return res.status(400).json({ message: "Current password is required" });
  }

  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    // 1️⃣ جلب المستخدم من قاعدة البيانات
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    // 2️⃣ التحقق من كلمة المرور الحالية
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // 3️⃣ تشفير كلمة المرور الجديدة
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 4️⃣ تحديث كلمة المرور في قاعدة البيانات
    const [result] = await db.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [hashedPassword, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Failed to update password" });
    }

    // 5️⃣ إرجاع النجاح
    res.json({ success: true, message: "Password changed successfully" });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
