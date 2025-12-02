// src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar({ theme, onToggleTheme, onOpenActivities }) {
  const [active, setActive] = useState("home");

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div className="nav-bar">
        {/* Logo */}
        <div className="logo">
          <div className="logo-mark">A</div>
          <div>AVANTHI</div>
        </div>

        {/* Center nav links */}
        <ul className="nav-links">
          <li>
            <button
              onClick={() => scrollToId("home")}
              className={`link-btn ${active === "home" ? "nav-active" : ""}`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("about")}
              className={`link-btn ${active === "about" ? "nav-active" : ""}`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("projects")}
              className={`link-btn ${
                active === "projects" ? "nav-active" : ""
              }`}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToId("contact")}
              className={`link-btn ${
                active === "contact" ? "nav-active" : ""
              }`}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              type="button"
              className="link-btn"
              onClick={onOpenActivities}
            >
              Beyond Code
            </button>
          </li>
        </ul>

        {/* Right side: theme toggle + resume */}
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a
            href="/resume.pdf"
            download="Avanthi_Resume.pdf"
            className="btn-pill"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
