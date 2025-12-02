// src/components/Extracurricular.jsx
export default function Extracurricular({ onClose }) {
  return (
    <div className="activities-overlay">
      <div className="activities-panel">
        {/* Top bar */}
        <div className="activities-top">
          <div>
            <div className="section-kicker">Beyond Code</div>
            <h2 className="activities-title">
              Stages, uniforms, festivals & responsibilities.
            </h2>
            <p className="activities-sub">
              Outside assignments and commits, I actively represent my college
              through NCC, national-level fests, cultural clubs and stage
              performances.
            </p>
          </div>

          <button className="btn-outline activities-close" onClick={onClose}>
            ← Back to portfolio
          </button>
        </div>

        {/* Main content grid */}
        <div className="activities-grid">
          {/* Left: roles & responsibilities */}
          <div className="activities-column">
            <h3 className="activities-heading">Roles & responsibilities</h3>
            <p className="activities-text">
              These roles taught me discipline, ownership and how to handle
              people, events and pressure alongside academics.
            </p>

            <ul className="activities-list">
              <li className="activity-item">
                <h4>NCC Cadet — Leading Cadet</h4>
                <p>
                  NCC cadet with <strong>Leading Cadet</strong> rank. Attended
                  the <strong>Ek Bharat Shreshtha Bharat</strong> camp and
                  successfully completed <strong>A, B and C certificates</strong>,
                  building discipline, confidence and a strong sense of service.
                </p>
              </li>

              <li className="activity-item">
                <h4>Incridea (National Level Fest) — Inaugural Head</h4>
                <p>
                  Part of the <strong>organizing team</strong> for Incridea,
                  taking responsibility as <strong>Inaugural Head</strong>.
                  Coordinated segments, schedules and teams to ensure a smooth
                  start for a large-scale national level fest.
                </p>
              </li>

              <li className="activity-item">
                <h4>Mudra — Classical Dance Crew Head</h4>
                <p>
                  Head of the <strong>Mudra Classical Dance Crew</strong>.
                  Led practice sessions, curated performances and represented
                  the college on stage, balancing creativity with coordination.
                </p>
              </li>

              <li className="activity-item">
                <h4>Taaleem (Theatre Club) — Event Management Head</h4>
                <p>
                  <strong>Event Management Head</strong> at Taaleem theatre
                  club. Handled rehearsal schedules, backstage flow and show
                  day execution, making sure performances ran smoothly.
                </p>
              </li>

              <li className="activity-item">
                <h4>Isiri Kannada Club — Secretary</h4>
                <p>
                  <strong>Secretary</strong> of Isiri Kannada Club, working to
                  promote Kannada culture on campus through events, activities
                  and collaborations with other clubs.
                </p>
              </li>
            </ul>

            <div className="activities-stats">
              <div className="activities-pill">NCC Leading Cadet</div>
              <div className="activities-pill">
                A, B &amp; C certificates
              </div>
              <div className="activities-pill">
                National level fest experience
              </div>
              <div className="activities-pill">
                Multiple cultural leadership roles
              </div>
            </div>
          </div>

          {/* Right: small gallery */}
          <div className="activities-column">
            <h3 className="activities-heading">Gallery</h3>
            <p className="activities-text">
              A few snapshots from NCC life, fest chaos and cultural events
              that made college more than just classes.
            </p>

            <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/gallery1.jpg" alt="NCC / uniform moment" />
              </div>
              <div className="gallery-item">
                <img src="/gallery2.jpg" alt="Fest / Incridea moment" />
              </div>
              <div className="gallery-item">
                <img src="/gallery3.jpg" alt="Mudra performance" />
              </div>
              <div className="gallery-item">
                <img src="/gallery4.jpg" alt="Taaleem / Isiri event" />
              </div>
            </div>

           

            <div className="activities-learned">
              <h4>What all this gave me</h4>
              <ul>
                <li>Discipline and leadership from NCC.</li>
                <li>Real experience handling large crowds and events.</li>
                <li>Teamwork with people from different backgrounds.</li>
                <li>Confidence on stage and responsibility off stage.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
