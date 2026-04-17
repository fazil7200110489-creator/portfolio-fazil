import ThreeBackground from "../components/ThreeBackground";
import TiltCardsEffect from "../components/TiltCardsEffect";

const skills = [
  {
    title: "Frontend",
    value: "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, AngularJS"
  },
  {
    title: "Backend",
    value: "Node.js, Express.js, PHP, REST APIs, MVC Architecture"
  },
  {
    title: "Database",
    value: "MongoDB, MySQL"
  },
  {
    title: "Security",
    value: "JWT Authentication, bcrypt, Protected Route Patterns"
  },
  {
    title: "DevOps & Tools",
    value: "Docker, Git, GitHub, VS Code"
  },
  {
    title: "UI Engineering",
    value: "Tailwind CSS, Bootstrap, Responsive Design, Smooth Animations"
  }
];

const projects = [
  {
    title: "Agri 360 - Smart Agriculture Platform",
    stack: "React.js | Bootstrap | Weather API",
    points: [
      "Built a marketplace for farmers to manage produce listings with filters, search, pricing logic, and location-aware suggestions.",
      "Integrated live weather intelligence and analytics dashboards for product reach and user interaction tracking."
    ]
  },
  {
    title: "LangMaster - Full Stack E-Learning Platform",
    stack: "MERN Stack | JWT | Tailwind CSS",
    points: [
      "Developed lessons, quizzes, progress tracking, and gamification with streaks, scores, and certificates.",
      "Implemented JWT + bcrypt security and REST APIs for course management, quiz workflows, and progress analytics."
    ]
  },
  {
    title: "ATS Resume Scoring Engine",
    stack: "PHP | Rule-Based NLP",
    points: [
      "Built a custom ATS engine without AI/ML frameworks, using tokenization, stop-word filtering, and weighted keyword scoring.",
      "Reached around 80% scoring accuracy with detailed feedback for matched and missing resume keywords."
    ]
  }
];

export default function Page() {
  return (
    <>
      <ThreeBackground />
      <TiltCardsEffect />

      <header className="top-nav glass landing-nav">
        <div className="brand">Mohamed Fazil</div>
        <nav className="top-links landing-menu">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="mailto:fazil721655@gmail.com" className="btn primary landing-cta">
          Hire Me
        </a>
      </header>

      <main className="landing-main">
        <div className="ambient-shape shape-1"></div>
        <div className="ambient-shape shape-2"></div>
        <div className="ambient-shape shape-3"></div>
        <section className="hero section landing-hero" aria-label="Intro">
          <div className="landing-figma">
            <div className="figma-left">
              <div className="figma-title" aria-label="Portfolio headline">
                <span>MOHAMED</span>
                <span className="gradient">FAZIL</span>
              </div>
              <p className="kicker" style={{ marginTop: "1rem", fontSize: "1rem", letterSpacing: "0.1em" }}>
                Full-Stack Software Developer
              </p>

              <ul className="figma-bullets" aria-label="Highlights" style={{ marginTop: "1.5rem" }}>
                <li>Building Scalable MERN & PHP Architectures</li>
                <li>Designing Secure RESTful APIs with JWT</li>
                <li>Crafting Responsive & Dynamic UIs</li>
                <li>Deploying with Docker & CI/CD</li>
              </ul>

              <div className="cta-row" style={{ marginTop: "2rem" }}>
                <a href="#projects" className="btn primary">View My Work</a>
                <a href="#contact" className="btn ghost">Get In Touch</a>
              </div>
            </div>

            <div className="figma-right" aria-hidden="true">
              <div className="figma-device figma-device-back">
                <div className="figma-device-title">Core Focus</div>
                <div className="figma-device-pill" />
              </div>

              <div className="figma-device figma-device-main">
                <div className="figma-device-pillRow">
                  <div className="figma-device-pill" />
                  <div className="figma-device-pill" />
                </div>
                <div className="figma-phone-center">
                  <div className="figma-device-heading">Seamless Digital Experiences</div>
                  <div className="figma-device-sub">
                    Empowering ideas through clean code, modern stacks, and pixel-perfect design.
                  </div>
                  <div className="figma-device-pill figma-device-pill--wide" />
                </div>
              </div>

              <div className="figma-card-stack">
                <div className="figma-card">Agri 360</div>
                <div className="figma-card figma-card--mid">LangMaster</div>
                <div className="figma-card figma-card--low">ATS Engine</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block landing-section">
          <h2 className="section-title">About Me <span className="title-glow"></span></h2>
          <div className="about-bento-grid">
            <div className="bento-card bento-wide glass tilt">
              <div className="bento-content">
                <h3>The Journey</h3>
                <p>
                  I&apos;m Mohamed Fazil, a full-stack developer with hands-on experience in MERN Stack,
                  PHP backend development, and Docker-based workflows. I build responsive, production-ready
                  applications with modular design and long-term maintainability.
                </p>
              </div>
            </div>
            <div className="bento-card glass tilt">
              <div className="bento-content">
                <h3>Current Role</h3>
                <p>
                  At Inet Secure Labs Pvt Limited, I contribute to real-world product delivery and continuously
                  improve engineering quality and user impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block landing-section">
          <h2 className="section-title">Technical Expertise <span className="title-glow"></span></h2>
          <div className="skills-bento">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-bento-card glass tilt">
                <div className="skill-header">
                  <div className="skill-dot"></div>
                  <h3>{skill.title}</h3>
                </div>
                <div className="skill-tags">
                  {skill.value.split(', ').map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block landing-section">
          <h2 className="section-title">Projects <span className="title-glow"></span></h2>
          <div className="project-showcase">
            {projects.map((project, idx) => (
              <article key={project.title} className="project-card glass tilt">
                <div className="project-watermark">0{idx + 1}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-stack-tags">
                    {project.stack.split(' | ').map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <ul className="project-bullets">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block landing-section">
          <h2>Certifications & Education</h2>
          <div className="grid two-col">
            <article className="card glass">
              <h3>Certifications</h3>
              <ul>
                <li>MERN Full Stack Development - SLA Institute (A Grade, 2025)</li>
                <li>IBM JavaScript Essentials - IBM eTrain (2025)</li>
                <li>Active Basic IT - NIIT Foundation (2025)</li>
                <li>Spoken English Development - NIIT Foundation (2025)</li>
              </ul>
            </article>
            <article className="card glass">
              <h3>Education</h3>
              <ul>
                <li>BCA (2025), Dr. MGR Educational and Research Institute, CGPA 7.5</li>
                <li>HSC (2022), KC Sankaralinga Nadar Hr. Sec. School - 56%</li>
                <li>SSLC (2020), KC Sankaralinga Nadar Hr. Sec. School - 65%</li>
              </ul>
            </article>
          </div>
        </section>

        <footer id="contact" className="section-block landing-section footer glass">
          <h2>Let&apos;s Build Something Great</h2>
          <div className="contact-grid">
            <p>
              Email:{" "}
              <a href="mailto:fazil721655@gmail.com">fazil721655@gmail.com</a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917200110489">+91 7200110489</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/mohamed-fazil-71720a371"
                target="_blank"
                rel="noreferrer"
              >
                mohamed-fazil-71720a371
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/fazil7200110489-creator"
                target="_blank"
                rel="noreferrer"
              >
                fazil7200110489-creator
              </a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
