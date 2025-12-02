// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <div className="section-kicker">About Me</div>
        <h2 className="section-title">Blending code, creativity & leadership.</h2>
        <p className="section-sub">
          I&apos;m a 4th year Computer Science Engineering student who loves
          designing and building clean, responsive web experiences. I enjoy
          working at the intersection of frontend development and UI/UX while
          taking responsibility and leading teams.
        </p>
      </div>

      <div className="about-grid">
        {/* Left: intro & skills */}
        <div className="about-card">
          <p>
            I build websites and web apps using modern JavaScript, React and
            simple, user-first design principles. I like turning ideas and
            Figma drafts into smooth, working interfaces that feel good to use.
          </p>

          <p className="about-highlight">
            Outside of pure coding, I&apos;m active in cultural clubs, theatre,
            fests and NCC — which has trained me to handle pressure, coordinate
            people and take ownership of work.
          </p>

          <div className="chip-row">
            <span className="chip">React</span>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML &amp; CSS</span>
            <span className="chip">UI/UX (Figma)</span>
            <span className="chip">Git &amp; GitHub</span>
            <span className="chip">Responsive Design</span>
          </div>
        </div>

        {/* Right: stats / highlights */}
        <div className="stat-grid">
          <div className="stat-box">
            <strong>Education</strong>
            <span>
              B.E. in Computer Science &amp; Engineering, NMAM Institute of
              Technology (4th year).
            </span>
          </div>
          <div className="stat-box">
            <strong>Web Development</strong>
            <span>
              React, HTML, CSS, JavaScript, basic backend &amp; deployment with
              tools like Vercel.
            </span>
          </div>
          <div className="stat-box">
            <strong>UI/UX</strong>
            <span>
              Wireframes and prototypes in Figma with a focus on clarity,
              spacing and hierarchy.
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
}

