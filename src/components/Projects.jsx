// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">Projects</div>
        <h2 className="section-title">Recent work I&apos;ve been proud of.</h2>
        <p className="section-sub">
          A quick look at some of the web projects I&apos;ve worked on, focusing
          on clean UI, responsive layouts and real-world use cases.
        </p>
      </div>

      <div className="projects-grid">
        {/* Project 1 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">Experimind Official Website</h3>
            <p className="project-meta">React · UI/UX · Internship</p>
          </div>
          <p className="project-body">
            Designed and implemented the company&apos;s official website during
            my web development internship, focusing on information structure,
            responsive layouts and a clean, simple user flow.
          </p>
          <div className="project-footer">
            <span className="tag">Internship · Team Lead</span>
            <div className="project-links">
              {/* Add real links when you have them */}
              {/* <a
                href="https://..."
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                Live ↗
              </a> */}
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">RF Outdoor Link Planner</h3>
            <p className="project-meta">React · Leaflet · JavaScript</p>
          </div>
          <p className="project-body">
            A map-based RF planning tool to visualize towers, links and
            distances. Built interactive UI with markers and basic calculations
            to support planning and coverage decisions.
          </p>
          <div className="project-footer">
            <span className="tag">Frontend Web App</span>
            <div className="project-links">
              <a
                href="https://rf-link-planner-tawny.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Avanthi242004/RF-Link-planner"
                target="_blank"
                rel="noreferrer"
                className="project-link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
