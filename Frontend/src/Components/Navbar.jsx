import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CheckLogin from "./CheckLogin";

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const [isLoggedInState, setIsLoggedInState] = useState(true);

  const handleLoginClick = async (path) => {
    await fetchLoginStatus();
    navigate(path);
    window.location.reload();
  };

  const fetchLoginStatus = async () => {
    const isLoggedIn = await CheckLogin();
    setIsLoggedInState(isLoggedIn);
  };

  useEffect(() => {
    fetchLoginStatus();
    document.documentElement.setAttribute("data-bs-theme", theme);

    const interval = setInterval(fetchLoginStatus, 30000); // every 30 sec
    return () => clearInterval(interval); // cleanup on unmount
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
            {!isLoggedInState && (
              <li>
                <button
                  onClick={() => handleLoginClick("/login")}
                  className="nav-link"
                  style={{ fontSize: "20px", lineHeight: "1" }}
                >
                  Login
                </button>
              </li>
            )}
            {!isLoggedInState && (
              <li>
                <button
                  onClick={() => handleLoginClick("/signup")}
                  className="nav-link"
                  style={{ fontSize: "20px", lineHeight: "1" }}
                >
                  Signup
                </button>
              </li>
            )}
            {isLoggedInState && (
              <li>
                <button
                  onClick={() => handleLoginClick("/logout")}
                  className="nav-link"
                  style={{ fontSize: "20px", lineHeight: "1" }}
                >
                  Logout
                </button>
              </li>
            )}
            {/* <p>{isLoggedInState ? "Logged In" : "Logged Out"}</p> */}

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
