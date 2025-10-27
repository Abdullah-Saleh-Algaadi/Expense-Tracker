const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    // ✅ تأكد من استخدام JWT_SECRET فقط — بدون fallback
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not set!");
      return res.status(500).json({ message: "Server configuration error" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;

    next();
  } catch (err) {
    console.error("Token verification failed:", err.message); // ✅ تسجيل الخطأ
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = verifyToken;
