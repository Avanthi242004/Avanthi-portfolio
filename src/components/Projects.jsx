// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-kicker">Projects</div>
        <h2 className="section-title">Recent work I&apos;ve been proud of.</h2>
        <p className="section-sub">
          A mix of development and UI/UX work — from web apps to dashboards and
          mobile concepts, focusing on clean interfaces and modern structure.
        </p>
      </div>

      <div className="projects-grid">

        {/* DEV PROJECT 1 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">Experimind Official Website</h3>
            <p className="project-meta">React · UI/UX · Internship</p>
          </div>
          <p className="project-body">
            Designed and developed the official website during my internship,
            focusing on clean layout structure, responsive design, and smooth
            user navigation for an improved browsing experience.
          </p>
          <div className="project-footer">
            <span className="tag">Internship · Web Design</span>
            <div className="project-links">
              {/* Add actual links later */}
            </div>
          </div>
        </article>

        {/* DEV PROJECT 2 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">RF Outdoor Link Planner</h3>
            <p className="project-meta">React · Leaflet · JavaScript</p>
          </div>
          <p className="project-body">
            A map-based RF planning tool to visualize towers, calculate
            distances, and plan outdoor wireless connectivity using interactive
            markers and map layers.
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

        {/* FIGMA PROJECT 1 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              Dashboard UI – Modern Admin Interface
            </h3>
            <p className="project-meta">Figma · UI/UX · Dashboard Design</p>
          </div>
          <p className="project-body">
            A modern analytics dashboard with KPI cards, charts, sidebar
            navigation and dark theme exploration — built to practice structured,
            data-heavy UI systems.
          </p>
          <div className="project-footer">
            <span className="tag">Figma · Product UI</span>
            <div className="project-links">
              <a
                href="https://www.figma.com/design/cfjE5eHI1Cu4Q1nxEUI2d4/dashboard-2"
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                View Figma ↗
              </a>
            </div>
          </div>
        </article>

        {/* FIGMA PROJECT 2 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              Landing Page – Clean Web UI Exploration
            </h3>
            <p className="project-meta">Figma · UI Design · Web Layout</p>
          </div>
          <p className="project-body">
            A clean and modern landing page concept featuring bold typography,
            structured content blocks, and a balanced layout ideal for responsive
            front-end conversion.
          </p>
          <div className="project-footer">
            <span className="tag">Figma · Landing Page</span>
            <div className="project-links">
              <a
                href="https://www.figma.com/design/kj7V5etTwZf10fLa3T98ZQ/Untitled"
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                View Figma ↗
              </a>
            </div>
          </div>
        </article>

        {/* FIGMA PROJECT 3 */}
        <article className="project-card">
          <div className="project-header">
            <h3 className="project-title">
              Mobile App Concept – UI Screens Demo
            </h3>
            <p className="project-meta">Figma · Mobile UI · Prototype</p>
          </div>
          <p className="project-body">
            A mobile app UI concept with multiple screens, clean spacing, and
            smooth visual hierarchy — designed to practice mobile-first design and
            component consistency.
          </p>
          <div className="project-footer">
            <span className="tag">Figma · Mobile</span>
            <div className="project-links">
              <a
                href="https://www.figma.com/design/e7IF8QaNZe7NDShA7AfPFF/Untitled"
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                View Figma ↗
              </a>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
