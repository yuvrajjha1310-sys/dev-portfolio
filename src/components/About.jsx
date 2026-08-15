import Reveal from './Reveal.jsx'
import yuvrajAvatar from '../assets/yuvraj-3d-avatar-transparent.png'

const EDUCATION = [
  {
    degree: 'Bachelor of Computer Applications',
    org: 'MERI College, GGSIPU',
    period: '5th Semester',
    detail: 'Expected 2027',
  },
]

const DETAILS = [
  {
    label: 'Currently',
    value: 'BCA · 5th Semester',
  },
  {
    label: 'Focus',
    value: 'Software Development',
  },
  {
    label: 'Strongest with',
    value: 'Java · SQL · Web',
  },
  {
    label: 'Based in',
    value: 'New Delhi, India',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="section about-section py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Reveal as="div">
        <div className="about-heading">
          <div>
            <span className="about-eyebrow">
              05 / About
            </span>

            <h2 className="about-title">
              The developer
              <br />
              <em>behind the work.</em>
            </h2>
          </div>

          <p className="about-heading-intro">
            A BCA student who learns by building — turning concepts from
            coursework into working systems, websites and applications.
          </p>
        </div>
      </Reveal>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="about-main">

        {/* ===================================================
            AVATAR
        ==================================================== */}

        <Reveal as="div">
          <div className="about-profile">

            <div className="about-avatar-wrap">

              <div
                aria-hidden="true"
                className="about-avatar-glow"
              />

              <div
                aria-hidden="true"
                className="about-avatar-grid"
              />

              <div className="about-avatar-corner about-avatar-corner--tl" />
              <div className="about-avatar-corner about-avatar-corner--tr" />
              <div className="about-avatar-corner about-avatar-corner--bl" />
              <div className="about-avatar-corner about-avatar-corner--br" />

              <img
                src={yuvrajAvatar}
                alt="Yuvraj Jha"
                draggable="false"
                className="about-avatar"
              />

              <div className="about-avatar-status">
                <span className="about-status-dot" />
                <span>Available for opportunities</span>
              </div>
            </div>

            <div className="about-profile-name">
              <div>
                <h3>Yuvraj Jha</h3>

                <p>
                  BCA Student · Developer
                </p>
              </div>

              <span className="about-profile-number">
                05
              </span>
            </div>
          </div>
        </Reveal>

        {/* ===================================================
            INFORMATION
        ==================================================== */}

        <Reveal as="div" delay={120}>
          <div className="about-content">

            <div className="about-statement">
              <span className="about-small-label">
                A little about me
              </span>

              <p>
                I&apos;m a BCA student at GGSIPU with strong fundamentals
                in Java, C, Data Structures and DBMS. I enjoy taking what
                I learn in class and turning it into something functional —
                whether that means a management system, a full-stack
                application or a polished web experience.
              </p>

              <p>
                I&apos;m currently focused on becoming a stronger software
                developer by building more, learning new technologies and
                understanding what happens beyond the interface.
              </p>
            </div>

            {/* ===============================================
                DETAILS
            ================================================ */}

            <div className="about-details">
              {DETAILS.map((detail, index) => (
                <div
                  key={detail.label}
                  className="about-detail"
                >
                  <span className="about-detail-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <span className="about-detail-label">
                      {detail.label}
                    </span>

                    <span className="about-detail-value">
                      {detail.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ===============================================
                EDUCATION
            ================================================ */}

            <div className="about-education">
              <div className="about-section-label">
                <span>Education</span>
                <span>01</span>
              </div>

              {EDUCATION.map((item) => (
                <div
                  key={item.org}
                  className="about-education-item"
                >
                  <div>
                    <h3>{item.degree}</h3>

                    <p>{item.org}</p>
                  </div>

                  <div className="about-education-period">
                    <span>{item.period}</span>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>
      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <Reveal as="div" delay={240}>
        <div className="about-bottom">

          <span className="about-bottom-line" />

          <p>
            Still learning. Still building.
            <em> Still getting better.</em>
          </p>

          <span className="about-bottom-line" />

        </div>
      </Reveal>
    </section>
  )
}