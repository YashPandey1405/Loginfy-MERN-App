import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import Router from "./routes/AuthRoute.routes.js";
import DB_Connect from "./utils/DataBase.utils.js";

const app = express();
dotenv.config();

// Define __dirname manually in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Middleware to parse cookies from the request

// ✅ CORS Configuration – Enables frontend (React) to talk to backend (Express)
app.use(
  cors({
    // 🔗 Allow only this origin (your frontend URL) to access backend APIs
    // 🍪 Allow cookies and credentials (like JWT, session cookies) to be sent
    // 🧾 Methods allowed from the frontend
    // 📦 Headers allowed in requests from frontend to backend
    // 📤 Headers allowed to be exposed to the frontend (useful for tokens/cookies)

    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Set-Cookie", "*"],
  }),
);

// Middleware to set variables available in all templates
app.use((req, res, next) => {
  res.locals.validUser = req.cookies?.accessToken || null; // Check if req.user exists
  next();
});

app.use("/", Router);

DB_Connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
