import { Link } from 'react-router-dom';
import profilePic from '../assests/propile.jpg';

const skills = [
  { name: "⚛️ React.js" },
  { name: "🟡 JavaScript" },
  { name: "🌐 HTML & CSS" },
  { name: "🐍 Python" },
  { name: "🟢 Node.js" },
  { name: "🤖 AI/ML" },
  { name: "✍️ Prompt Engineering" }
];

export default function Home() {
  return (
    <div className="page">

      {/* ── HERO ── */}
      <section className="hero">

        {/* Profile Picture */}
        <div className="avatar-wrap">
          <div className="avatar-ring" />
          <div className="avatar-inner">
            {/*
              TO ADD YOUR PHOTO:
              1. Create folder src/assets/
              2. Add your photo as photo.jpg
              3. Replace the emoji below with:
                 <img src={require('../assets/photo.jpg')} alt="Profile" />
            */}
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
        </div>

        <span className="hero-badge">
          <span className="badge-dot" />
          Open to Internships & Opportunities
        </span>

        <h1>
          Hi, I'm <br />
          <span className="accent">Kasala Swaroopa Rani</span>
        </h1>

        <p className="hero-subtitle">
        Ambitious Computer Science student specializing in full-stack web development, with a passion for creating innovative, scalable, and high-performance applications. Driven by curiosity and problem-solving, I strive to transform complex challenges into seamless digital experiences through clean code, modern technologies, and user-focused design.
        </p>
<div className="hero-btns">
  <Link to="/projects" className="btn btn-primary">
    View My Projects →
  </Link>

  <a
    href="mailto:swarooparanikasala2005@gmail.com"
    className="btn btn-secondary"
  >
    Contact Me
  </a>

  <a
    href="https://github.com/swarooparanikasala"
    target="_blank"
    rel="noreferrer"
    className="btn btn-secondary"
  >
    GitHub
  </a>
</div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Skills</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3rd</span>
            <span className="stat-label">Year B.Tech</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Dedicated</span>
          </div>
        </div>

      </section>

      <div className="divider">About Me</div>

      {/* ── CARDS ── */}
      <section className="section-grid">

        {/* About */}
        <div className="card card-blue">
          <div className="card-icon">👩‍💻</div>
          <p className="card-label">About Me</p>
          <h3>Who I Am</h3>
          <p>
            I am a B.Tech student at Mahindra University with a strong passion for technology, innovation, and creative problem-solving. I thrive on transforming ideas into impactful solutions through clean, efficient, and thoughtfully designed code. Driven by curiosity and a commitment to continuous growth, I enjoy exploring emerging technologies and crafting digital experiences that are both functional and user-centric. My goal is to create meaningful innovations that make a real difference.
          </p>
        </div>

        {/* Interests */}
        <div className="card card-teal">
          <div className="card-icon">🔬</div>
          <p className="card-label">Research Interests</p>
          <h3>What I Explore</h3>
          <ul>
            <li>Artificial Intelligence, Machine Learning & Data-Driven Innovation</li>
<li>Full-Stack Web Development & High-Performance Applications</li>
<li>User Experience Design, Accessibility & Human-Centered Interfaces</li>
<li>Cloud Computing, DevOps & Scalable Infrastructure Solutions</li>
          </ul>
        </div>

        {/* Details */}
        <div className="card card-indigo">
          <div className="card-icon">📋</div>
          <p className="card-label">Personal Details</p>
          <h3>Get In Touch</h3>
          <div>
            <div className="detail-row">
              <span className="detail-label">Full Name</span>
              <span className="detail-val">Kasala Swaroopa Rani</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone</span>
              <span className="detail-val">+91 9490068555</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Personal Email</span>
              <span className="detail-val">swarooparanikasala2005@gmail.com</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">College Email</span>
              <span className="detail-val">se23umcs066@mahindrauniversity.edu.in</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Location</span>
              <span className="detail-val">Hyderabad, India</span>
            </div>
          </div>
        </div>

      {/* Skills */}
<div className="card card-sky">
  <div className="card-icon">💡</div>
  <p className="card-label">Technical Skills</p>
  <h3>Core Expertise</h3>

  <div className="skills-modern">
    {skills.map((s) => (
      <div className="skill-box" key={s.name}>
        {s.name}
      </div>
    ))}
  </div>
</div>

      </section>
    </div>
  );
}