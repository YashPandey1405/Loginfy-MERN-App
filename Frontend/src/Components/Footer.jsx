import React, { useEffect, useState } from "react";

const Footer = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme =
        document.documentElement.getAttribute("data-bs-theme");
      setTheme(currentTheme || "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-bs-theme"],
    });

    // Set initial theme
    const initialTheme = document.documentElement.getAttribute("data-bs-theme");
    setTheme(initialTheme || "light");

    return () => observer.disconnect();
  }, []);

  return (
    <div className="footers">
      {theme === "light" ? (
        <footer className="footer sticky-bottom text-center border-top bg-light text-dark py-3 border-3 ">
          <div className="container">
            <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
              <a
                href="https://github.com/YashPandey1405/"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-xl text-dark"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yashpandey29/"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-xl text-dark"></i>
              </a>
            </div>
            <p className="mb-1">&copy; Loginify-MERN Private Limited</p>
            <div>
              <a href="#" className="me-3 text-dark">
                Privacy
              </a>
              <a href="#" className="text-dark">
                Terms
              </a>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="footer sticky-bottom border-top border-3 text-center bg-dark text-white py-3 ">
          <div className="container">
            <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
              <a
                href="https://github.com/YashPandey1405/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yashpandey29/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-xl"></i>
              </a>
            </div>
            <p className="mb-1">&copy; Loginify-MERN Private Limited</p>
            <div>
              <a href="#" className="me-3 text-white">
                Privacy
              </a>
              <a href="#" className="text-white">
                Terms
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
