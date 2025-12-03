// src/components/Contact.jsx
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/myzrjono";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" | "error"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setStatus("");
    setStatusType("");
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setStatusType("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent successfully.");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again in a moment.");
        setStatusType("error");
      }
    } catch (err) {
      setStatus("Network error. Please check your connection and try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div className="section-kicker">Contact</div>
        <h2 className="section-title">Let&apos;s build something together.</h2>
        <p className="section-sub">
          Whether it&apos;s an internship, a project collaboration, or a small
          website idea — feel free to reach out. I usually reply within a day.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: contact info */}
        <div className="contact-card">
          <h3 className="contact-title">Say hello</h3>
          <p className="contact-text">
            The best way to reach me is by email. You can also connect with me
            on LinkedIn or check out my work on GitHub.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a
                href="mailto:avanthikundapur@gmail.com"
                className="contact-value"
              >
                avanthikundapur@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Karnataka, India</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/avanthi-kundapur-00a169292/"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                linkedin.com/in/avanthi-kundapur-00a169292/
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/Avanthi242004"
                target="_blank"
                rel="noreferrer"
                className="contact-value"
              >
                github.com/Avanthi242004
              </a>
            </div>
          </div>

          {/* Social buttons */}
          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/avanthi-kundapur-00a169292/"
              target="_blank"
              rel="noreferrer"
              className="social-btn social-linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Avanthi242004"
              target="_blank"
              rel="noreferrer"
              className="social-btn social-github"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right: working Formspree form */}
        <div className="contact-card contact-form">
          <h3 className="contact-title">Quick message</h3>
          <p className="contact-text">
            This form sends your message using Formspree. I&apos;ll get back to
            you as soon as I can.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me a bit about what you have in mind..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-pill contact-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`contact-status ${
                  statusType === "error" ? "contact-status-error" : ""
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
