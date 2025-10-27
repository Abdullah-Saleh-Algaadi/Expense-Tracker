const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../../middleware/auth");
const isAdmin = require("../../middleware/isAdmin");

// ✅ GET /api/viewBookings/
router.get("/", verifyToken, isAdmin, async (req, res) => {
  const { name, email, role, status } = req.query;

  let query = `
    SELECT id, name, email, role, status, created_at , last_login
    FROM users 
    WHERE 1=1
  `;
  const params = [];

  // const [totalBookings] = await db.query(`SELECT SUM()`)

  if (name) {
    query += " AND name LIKE ?";
    params.push(`%${name}%`);
  }
  if (email) {
    query += " AND email LIKE ?";
    params.push(`%${email}%`);
  }
  if (role) {
    query += " AND role = ?";
    params.push(role);
  }
  if (status) {
    query += " AND status = ?";
    params.push(status);
  }

  try {
    const [users] = await db.query(query, params);
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
