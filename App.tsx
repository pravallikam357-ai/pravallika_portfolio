import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ArrowRight,
  Code2,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import "./App.css";


const skills = ['Python', 'TypeScript', 'React', 'SQL', 'HTML & CSS', 'AI / ML']

const projects = [
  {
    number: '01',
    title: 'AI Debate Platform',
    description:
      'An interactive platform exploring structured debates with AI-generated arguments and perspectives.',
    tags: ['Python', 'FastAPI', 'AI'],
    icon: BrainCircuit,
  },
  {
    number: '02',
    title: 'Advanced Blog Platform',
    description:
      'A blog application concept combining user authentication, content publishing, and AI-powered features.',
    tags: ['React', 'Python', 'AI'],
    icon: Code2,
  },
  {
    number: '03',
    title: 'Smart Campus Navigator',
    description:
      'An indoor–outdoor campus navigation concept designed to help students and visitors find locations.',
    tags: ['Navigation', 'Web', 'Algorithms'],
    icon: Sparkles,
  },
]

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          pravallika<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">
            Let's talk <ArrowRight size={15} />
          </a>
        </div>
      </nav>

      <section className="hero section-container" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="availability">
            <span className="status-dot" />
            COMPUTER SCIENCE STUDENT · CLASS OF 2027
          </div>

          <h1>
            Turning Ideas
            <br />
            Into 
            <br />
            Intelligent<span className="accent-text">Solutions.</span>
          </h1>

          <p className="hero-description">
            <p className="hero-description">
  Hi, I'm Pravallika Madiraju — a Computer Science Engineering
  student graduating in 2027, passionate about software engineering,
  artificial intelligence, and building practical solutions to
  real-world problems.
</p>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work <ArrowRight size={17} />
            </a>
            <a href="#about" className="secondary-button">
              More about me <ArrowDown size={16} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/pravallikam357-ai"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedinIcon.com/in/pravallika-madiraju/"

              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <Linkedin size={19} />
            </a>
            <a href="#contact" aria-label="Email">
              <Mail size={19} />
            </a>
            <span className="social-caption">Let's connect</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-card">
            <div className="card-top">
              <span className="window-dot dot-one" />
              <span className="window-dot dot-two" />
              <span className="window-dot dot-three" />
              <span className="card-label">a little about me</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="code-indent">
                name: <span className="code-green">'Pravallika'</span>,
              </p>
              <p className="code-indent">
                degree: <span className="code-green">'CSE'</span>,
              </p>
              <p className="code-indent">
                interests: [
              </p>
              <p className="code-indent code-more">
                <span className="code-green">'Software'</span>,
              </p>
              <p className="code-indent code-more">
                <span className="code-green">'Artificial Intelligence'</span>,
              </p>
              <p className="code-indent code-more">
                <span className="code-green">'Problem Solving'</span>
              </p>
              <p className="code-indent">],</p>
              <p className="code-indent">
                learning: <span className="code-green">true</span>,
              </p>
              <p>{'}'}</p>
            </div>

            <div className="card-footer">
              <span><span className="footer-sparkle">✳</span> Always curious</span>
              <span>v1.0.0</span>
            </div>
          </div>

          <div className="floating-badge badge-top">
            <BrainCircuit size={18} />
            <span>AI & Innovation</span>
          </div>
          <div className="floating-badge badge-bottom">
            <Code2 size={18} />
            <span>Building & Learning</span>
          </div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span /> SCROLL TO EXPLORE
        </a>
      </section>

      <section className="about-section section-container" id="about">
        <div className="section-label">01 / ABOUT ME</div>
        <div className="about-grid">
          <h2>
            Curious mind.
            <br />
            <span>Builder's mindset.</span>
          </h2>
          <div className="about-copy">
            <p>
              I'm pursuing my B.Tech in Computer Science Engineering at
              Bapatla Women's Engineering College. I enjoy learning how
              software works, exploring AI, and turning ideas into practical
              applications.
            </p>
            <p>
              I'm currently strengthening my development skills, working on
              projects, and preparing to contribute to meaningful engineering
              teams.
            </p>
            <div className="education-card">
              <div className="education-icon"><Code2 size={21} /></div>
              <div>
                <strong>B.Tech — Computer Science Engineering</strong>
                <span>Bapatla Women's Engineering College · 2027</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-container" id="skills">
        <div className="section-label">02 / MY TOOLKIT</div>
        <div className="section-heading-row">
          <h2>Tools I work with<span>.</span></h2>
          <p>Growing my skills, one project at a time.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <span className="skill-number">0{index + 1}</span>
              <span>{skill}</span>
              <ArrowRight size={17} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="projects-section section-container" id="projects">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="section-heading-row">
          <h2>Ideas into projects<span>.</span></h2>
          <p>A selection of projects I've built or am developing.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className="project-card-top">
                  <span>{project.number} / PROJECT</span>
                  <ProjectIcon size={24} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-bottom">
                  <span>PROJECT EXPLORATION</span>
                  <ArrowRight size={18} />
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="contact-section section-container" id="contact">
        <div className="section-label">04 / GET IN TOUCH</div>
        <div className="contact-content">
          <div>
            <h2>
              Have an idea?
              <br />
              <span>Let's build something.</span>
            </h2>
            <p>
              I'm interested in software development, AI, and opportunities
              to learn and collaborate. Let's connect!
            </p>
          </div>
          <a
            className="primary-button"
            href="https://linkedin.com/in/pravallika-madiraju/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedinIcon <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <footer className="footer section-container">
        <a href="#home" className="logo">pravallika<span>.</span></a>
        <p>Designed with curiosity. Built with code.</p>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
