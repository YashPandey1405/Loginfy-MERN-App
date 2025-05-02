import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./Components/LoginForm.jsx";
import SignupForm from "./Components/SignupForm.jsx";
import Profile from "./Components/Profile.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Logout from "./Components/Logout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Method To redirect To '/login' Route... */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
