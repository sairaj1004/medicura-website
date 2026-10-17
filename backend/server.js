

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const pool = require("./db");

const app = express();
const JWT_SECRET = process.env.JWT_SECRET;

function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  if (!token || !JWT_SECRET) {
    return res.status(401).json({ success: false, message: "Admin authentication required." });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "admin") throw new Error("Invalid role");
    req.admin = payload;
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Your admin session is invalid or expired. Please sign in again." });
  }
}

const frontendOrigin =
  process.env.FRONTEND_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: frontendOrigin,
  })
);

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.json({
      success: true,
      message: "Backend and MySQL connected successfully",
    });
  } catch (error) {
    console.error("Health check / database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.post("/api/inquiries", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const fullName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanInterest =
      typeof interest === "string" ? interest.trim() : "";
    const cleanMessage = message.trim();

    if (
      fullName.length < 2 ||
      fullName.length > 120 ||
      cleanEmail.length > 255 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanPhone.length > 25 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please check the submitted information.",
      });
    }

    const allowedInterests = [
      "MBBS in India",
      "MBBS Abroad",
      "MD / MS",
      "NEET guidance",
      "General inquiry",
    ];

    if (!allowedInterests.includes(cleanInterest)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid interest.",
      });
    }

    const sql = `
      INSERT INTO counselling_inquiries
      (full_name, email, phone, interest, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute(sql, [
      fullName,
      cleanEmail,
      cleanPhone || null,
      cleanInterest,
      cleanMessage,
    ]);

    return res.status(201).json({
      success: true,
      message: "Your inquiry was saved successfully.",
      inquiryId: result.insertId,
    });
  } catch (error) {
    console.error("Inquiry error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save your inquiry. Please try again.",
    });
  }
});


/* Admin login: credentials are read only from backend environment variables. */
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "";
  if (!adminEmail || !adminPassword || !JWT_SECRET) {
    return res.status(500).json({ success: false, message: "Admin login is not configured. Set ADMIN_EMAIL, ADMIN_PASSWORD and JWT_SECRET in backend/.env." });
  }
  if (typeof email !== "string" || typeof password !== "string" || email.trim().toLowerCase() !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ success: false, message: "Invalid admin email or password." });
  }
  const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1h" });
  return res.json({ success: true, token, message: "Admin login successful." });
});

/* Protected: get actual saved inquiries. */
app.get("/api/admin/inquiries", requireAdmin, async (req, res) => {
  try {
    const [rows] = await pool.execute(`SELECT id, full_name, email, phone, interest, message, status, created_at FROM counselling_inquiries ORDER BY created_at DESC`);
    return res.json({ success: true, inquiries: rows });
  } catch (error) {
    console.error("Fetch inquiries error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to fetch inquiries." });
  }
});

/* Protected: mark an inquiry as contacted. */
app.patch("/api/admin/inquiries/:id/contacted", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ success: false, message: "Invalid inquiry ID." });
    const [result] = await pool.execute("UPDATE counselling_inquiries SET status = ? WHERE id = ?", ["Contacted", id]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: "Inquiry not found." });
    return res.json({ success: true, message: "Inquiry marked as contacted." });
  } catch (error) {
    console.error("Update inquiry error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to update inquiry." });
  }
});

/* Protected: delete an inquiry. */
app.delete("/api/admin/inquiries/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ success: false, message: "Invalid inquiry ID." });
    const [result] = await pool.execute("DELETE FROM counselling_inquiries WHERE id = ?", [id]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: "Inquiry not found." });
    return res.json({ success: true, message: "Inquiry deleted successfully." });
  } catch (error) {
    console.error("Delete inquiry error:", error.message);
    return res.status(500).json({ success: false, message: "Unable to delete inquiry." });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`MediCura backend running at http://localhost:${PORT}`);
});

