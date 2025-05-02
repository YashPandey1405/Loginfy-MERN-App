import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./routes/AuthRoute.routes.js";
import DB_Connect from "./utils/DataBase.utils.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/", Router);

DB_Connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
