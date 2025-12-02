// src/components/Contact.jsx
export default function Contact() {
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

        {/* Right: simple message box */}
        <div className="contact-card contact-form">
          <h3 className="contact-title">Quick message</h3>
          <p className="contact-text">
            This is a simple UI-only form. You can later hook it to a backend or
            a service like Formspree or EmailJS.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a demo form. Connect it to a service later 🙂");
            }}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell me a bit about what you have in mind..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-pill contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
