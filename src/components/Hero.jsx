// src/components/Hero.jsx
import { useEffect, useState, useRef } from "react";

const roles = ["Web Developer", "UI/UX Enthusiast", "Frontend Developer"];

export default function Hero() {
  const [subIndex, setSubIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [heroInView, setHeroInView] = useState(false);
  const heroRef = useRef(null);

  // typing logic
  useEffect(() => {
    const current = roles[index];

    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 900);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 55 : 95
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  // hero in view for glow
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeroInView(true);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentText = roles[index].slice(0, subIndex);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-kicker">Computer Science • Web Development</div>

        <h1 className="hero-title">
          Hey! I&apos;m <span>Avanthi</span>
          <br />
          I craft clean web <span>experiences</span>.
        </h1>

        <p className="hero-subtitle">
          {currentText}
          <span className="cursor" />
        </p>

        <p className="hero-tagline">
          I design and build responsive, user-friendly web applications using
          modern frontend frameworks — combining clean UI with strong
          communication and team experience.
        </p>

        <div className="hero-cta">
          <button className="btn-pill" onClick={() => scrollToId("projects")}>
            View My Work
          </button>

          <button className="btn-outline" onClick={() => scrollToId("contact")}>
            Get In Touch
          </button>
        </div>

        <div className="tech-row">
          <span className="tech-label">Tech stack</span>
          <div className="tech-chips">
            <span className="chip chip-small">React</span>
            <span className="chip chip-small">JavaScript</span>
            <span className="chip chip-small">HTML &amp; CSS</span>
            <span className="chip chip-small">Figma</span>
            <span className="chip chip-small">Git &amp; GitHub</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className={`hero-right ${heroInView ? "hero-right-glow" : ""}`}>
        <div className="hero-photo-glow"></div>
        <img src="/profile.png" alt="Avanthi portrait" className="hero-photo" />
      </div>
    </section>
  );
}
