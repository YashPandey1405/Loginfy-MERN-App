import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-body-tertiary mb-4 p-3 border-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i
            className="fas fa-feather-alt fa-xl"
            style={{ color: "#1da1f2" }}
          ></i>
          &nbsp; Loginfy-MERN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <Link
              className="nav-link"
              to="/login"
              style={{ fontSize: "20px", lineHeight: "1" }}
            >
              Login
            </Link>
            <Link
              className="nav-link"
              to="/signup"
              style={{ fontSize: "20px", lineHeight: "1" }}
            >
              Signup
            </Link>

            <li className="nav-item">
              <button
                id="themeToggle"
                className="btn ms-1"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <i id="themeIcon" className="fas fa-moon fa-xl"></i>
                ) : (
                  <i id="themeIcon" className="fas fa-sun fa-xl"></i>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
