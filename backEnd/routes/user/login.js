const express = require("express");
const router = express.Router();
const db = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const user = rows[0];
    console.log("user", user);

    // if (user.status && user.status !== "Active") {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Account is blocked or inactive",
    //   });
    // }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // 4. تحديث آخر دخول
    // await db.query("UPDATE users SET last_login = NOW() WHERE id = ?", [
    //   user.id,
    // ]);

    // 5. إنشاء JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username, // ✅ رجّع الاسم من الجدول مباشرة
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
});

module.exports = router;
