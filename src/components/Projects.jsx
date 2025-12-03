// src/components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="section-header">
        <div className="section-kicker">Projects</div>
        <h2 className="section-title">Work that reflects how I solve problems.</h2>
        <p className="section-sub">
          A mix of development and design explorations — from deployed web apps
          to Figma prototypes for dashboards and mobile experiences.
        </p>
      </div>

      {/* Highlighted shell around the whole section */}
      <div className="projects-shell">
        {/* ================= DEVELOPMENT ================= */}
        <div className="projects-group">
          <h3 className="projects-subtitle">Development</h3>
          <p className="projects-subtext">
            React-based projects focused on structure, responsiveness and real
            use cases.
          </p>

          <div className="projects-grid">
            {/* DEV PROJECT 1 */}
            <article className="project-card">
              <div className="project-header">
                <h3 className="project-title">Experimind Official Website</h3>
                <p className="project-meta">React · UI/UX · Internship</p>
              </div>

              <p className="project-body">
                Company website designed and developed during my internship,
                with an emphasis on clean information flow, responsive layout
                and simple navigation.
              </p>

              <ul className="project-points">
                <li>Planned page structure and sections to match business content.</li>
                <li>Built reusable React components for hero, content blocks and contact.</li>
                <li>Worked closely with the team on copy, visuals and handoff.</li>
              </ul>

              <div className="project-footer">
                <span className="tag">Development · Web</span>
                <div className="project-links">
                  {/* Add Live / GitHub links when you’re ready */}
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
                A web app that lets users place RF towers on a map, visualize
                links and estimate distances to support outdoor planning.
              </p>

              <ul className="project-points">
                <li>Integrated Leaflet with React for interactive maps and markers.</li>
                <li>Implemented link drawing and distance calculation between towers.</li>
                <li>Deployed on Vercel for easy testing and sharing.</li>
              </ul>

              <div className="project-footer">
                <span className="tag">Development · Frontend</span>
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
        </div>

        {/* ================= DESIGN / FIGMA ================= */}
        <div className="projects-group">
          <h3 className="projects-subtitle">Design &amp; UI/UX (Figma)</h3>
          <p className="projects-subtext">
            Figma prototypes that show how I think about layout, hierarchy and
            component systems before implementation.
          </p>

          <div className="projects-grid">
            {/* 1. SMART HOME APP */}
            <article className="project-card">
              <div className="project-header">
                <h3 className="project-title">
                  Smart Home App – Mobile UI Prototype
                </h3>
                <p className="project-meta">Figma · Mobile UI · Prototype</p>
              </div>

              <p className="project-body">
                A mobile smart home app concept for controlling lights, climate
                and security. Designed for quick glances and simple one-tap
                actions.
              </p>

              <ul className="project-points">
                <li>Card-based layout for devices like lights, AC and security.</li>
                <li>Thumb-friendly controls and clear icon + label combinations.</li>
                <li>Soft, modern styling with consistent spacing and hierarchy.</li>
              </ul>

              <div className="project-footer">
                <span className="tag">Design · Mobile</span>
                <div className="project-links">
                  <a
                    href="https://www.figma.com/proto/e7IF8QaNZe7NDShA7AfPFF/smart-home?node-id=2-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    View Prototype ↗
                  </a>
                </div>
              </div>
            </article>

            {/* 2. ANALYTICS DASHBOARD – LIGHT */}
            <article className="project-card">
              <div className="project-header">
                <h3 className="project-title">
                  Analytics Dashboard – Light Theme
                </h3>
                <p className="project-meta">Figma · UI Design · Dashboard</p>
              </div>

              <p className="project-body">
                A light-mode analytics dashboard exploring clean layout,
                navigation and KPI presentation for a product or admin system.
              </p>

              <ul className="project-points">
                <li>Sidebar navigation with clear active/hover feedback.</li>
                <li>Modular cards for revenue, orders and user activity.</li>
                <li>Grid-based sections designed to translate cleanly to React.</li>
              </ul>

              <div className="project-footer">
                <span className="tag">Design · Web</span>
                <div className="project-links">
                  <a
                    href="https://www.figma.com/proto/kj7V5etTwZf10fLa3T98ZQ/dashboard-1?node-id=2-42&scaling=scale-down&content-scaling=fixed"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    View Prototype ↗
                  </a>
                </div>
              </div>
            </article>

            {/* 3. ANALYTICS DASHBOARD – DARK */}
            <article className="project-card">
              <div className="project-header">
                <h3 className="project-title">
                  Analytics Dashboard – Dark Theme
                </h3>
                <p className="project-meta">Figma · UI/UX · Dashboard</p>
              </div>

              <p className="project-body">
                A dark-themed dashboard focusing on data density, contrast and
                reusable components for KPIs, charts and tables.
              </p>

              <ul className="project-points">
                <li>Defined dark-mode color tokens for background, cards and accents.</li>
                <li>Designed KPI cards, charts and tables as a consistent component set.</li>
                <li>Balanced visual weight so dense data still feels readable.</li>
              </ul>

              <div className="project-footer">
                <span className="tag">Design · Product UI</span>
                <div className="project-links">
                  <a
                    href="https://www.figma.com/proto/cfjE5eHI1Cu4Q1nxEUI2d4/dashboard-2?node-id=1-827&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    View Prototype ↗
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
