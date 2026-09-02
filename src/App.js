import React, { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    console.log(
      "%c💡🧠 Welcome to Srushti's Portfolio! Built with React & modern tech.",
      "color: #7c3aed; font-weight: bold; font-size: 14px;"
    );

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll reveal
    const glassCards = document.querySelectorAll(".glass-card");
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    glassCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(card);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Floating Code & Coder Spark Particles */}
      <div className="spark-bg">
        <div className="spark-item p1">💡 <span>const spark = true;</span></div>
        <div className="spark-item p2">🧠 <span>&lt;Srushti /&gt;</span></div>
        <div className="spark-item p3">✨ <span>useState("React")</span></div>
        <div className="spark-item p4">⚡ <span>function build()</span></div>
        <div className="spark-item p5">💡🧠 <span>AI + Frontend</span></div>
        <div className="spark-item p6">✨ <span>display: flex;</span></div>
        <div className="spark-item p7">🧠 <span>git push origin main</span></div>
        <div className="spark-item p8">💡 <span>Python &amp; GenAI</span></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">&lt;Srushti<span>.dev</span> 💡🧠 /&gt;</div>
        <ul className="nav-links">
          <li><a href="#about" style={{ color: activeSection === 'about' ? '#7c3aed' : '#475569' }}>// About</a></li>
          <li><a href="#skills" style={{ color: activeSection === 'skills' ? '#7c3aed' : '#475569' }}>// Skills</a></li>
          <li><a href="#projects" style={{ color: activeSection === 'projects' ? '#7c3aed' : '#475569' }}>// Projects</a></li>
          <li><a href="#contact" style={{ color: activeSection === 'contact' ? '#7c3aed' : '#475569' }}>// Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <span className="spark-pill">✨ Coder Girl • Creative Engineer 💡🧠</span>
          <h1>Hi, I'm <span className="gradient-text">Srushti</span> <span className="wave-hand">👋</span></h1>
          <p className="subtitle">A Frontend Developer from Raichur building responsive, high-performance web applications with modern tech.</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary-btn">&lt;View Projects /&gt;</a>
            <a href="mailto:srushtiamaresh5@gmail.com" className="btn secondary-btn"><i className="fas fa-envelope"></i> srushtiamaresh5@gmail.com</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">   About Me</h2>
        <div className="glass-card about-card">
          <div className="profile-frame">
            <img src={process.env.PUBLIC_URL + '/Srushti.jpeg'} alt="Srushti"  className="portfolio" style={{width: '160px' , height:'200px' , objectFit: 'cover' , borderRadius: '12px'}} />
            
            <div className="spark-badge">💡🧠</div>
          </div>
          <div className="about-info">
            <p>I'm a passionate frontend developer who loves turning ideas into interactive digital experiences. Currently building web applications with HTML, CSS, JavaScript, and React while actively expanding into Python and Generative AI.</p>
            <div className="social-chips">
              <a href="https://github.com/srushtiamaresh5-spec" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>
              <a href="https://www.linkedin.com/in/srushti-srushti-45b071384" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
              <a href="https://x.com/srushtiamaresh5" target="_blank" rel="noreferrer"><i className="fab fa-x-twitter"></i> Twitter / X</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">   Skills &amp; Stack</h2>
        <div className="skills-grid">
          <div className="glass-card skill-box">
            <h3>&lt;Acquired Skills /&gt;</h3>
            <ul className="skill-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>

          <div className="glass-card skill-box highlight-spark">
            <h3>&lt;Growing Ideas 💡🧠&gt;</h3>
            <ul className="skill-list">
              <li>Python</li>
              <li>Generative AI</li>
            </ul>
          </div>

          <div className="glass-card skill-box">
            <h3>&lt;Dev Tools /&gt;</h3>
            <ul className="skill-list">
              <li>Git &amp; GitHub</li>
              <li>Vercel</li>
              <li>Google AI Studio</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">  Featured Projects</h2>
        <div className="projects-grid">
          
          <div className="glass-card project-card">
            <div className="project-header">
              <span className="icon">💡</span>
              <a href="https://github.com/srushtiamaresh5-spec/ai-code-reviewer-bug-hunter" target="_blank" rel="noreferrer" className="ext-link"><i className="fas fa-external-link-alt"></i></a>
            </div>
            <h3>AI Code Reviewer &amp; Bug Hunter</h3>
            <p>An automated static analysis tool designed to inspect codebases, detect syntax/logic errors, and suggest refactoring solutions.</p>
            <div className="tech-tags">
              <span>Python</span>
              <span>AI/LLM</span>
              <span>Static Analysis</span>
            </div>
          </div>

          <div className="glass-card project-card">
            <div className="project-header">
              <span className="icon">🧠</span>
              <a href="https://github.com/srushtiamaresh5-spec/Agriculture" target="_blank" rel="noreferrer" className="ext-link"><i className="fas fa-external-link-alt"></i></a>
            </div>
            <h3>Agriculture Platform</h3>
            <p>A smart web application providing farmers with crop insights, resource optimization tools, and modern web solutions.</p>
            <div className="tech-tags">
              <span>Python</span>
              <span>HTML/CSS</span>
              <span>Web Frameworks</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">  Connect With Me</h2>
        <div className="glass-card contact-card">
          <p>Have an exciting project or collaboration idea? Reach out!</p>
          <a href="mailto:srushtiamaresh5@gmail.com" className="spark-email-btn"><i className="fas fa-paper-plane"></i> srushtiamaresh5@gmail.com</a>
        </div>
      </section>

      <footer>
        <p>© 2026 Srushti | Designed &amp; Coded with 💡🧠</p>
      </footer>
    </div>
  );
}