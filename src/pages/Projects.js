const projects = [
  {
    id: '01',
    name: 'Drone Talk',
    description:
      'DroneTalk is an NLP-based intelligent communication system designed to enable seamless interaction between users and drones through natural language commands. The project focuses on interpreting human speech or text inputs and converting them into actionable drone operations such as navigation, surveillance, object detection, and task execution. By integrating Natural Language Processing with autonomous drone control, DroneTalk enhances accessibility, improves user experience, and simplifies complex drone operations through intuitive voice-driven communication. This solution demonstrates the potential of combining AI and robotics to create smarter, more responsive aerial systems.',
    tags: ['Python', 'NLP', 'spaCy', 'Text Processing'],
    github: 'https://github.com/swarooparanikasala/Drone-Talk.git',
  },
  {
    id: '02',
    name: 'Turn Based Civilization War Game',
    description:
      'A GUI-based Turn-Based Civilization War Game developed using Java and Object-Oriented Programming concepts, where players build and manage their tribe’s economy, train armies, gather resources, and strategically battle enemy civilizations. The game features real-time resource generation using multithreading, interactive gameplay through Java Swing GUI, and combat systems driven by player decisions. It demonstrates core OOP principles such as inheritance, polymorphism, encapsulation, and abstraction, while also integrating file handling, exception management, and synchronization for a robust gaming experience.',
    tags: ['Java', 'Java Swing', 'AWT', 'Object-Oriented Programming', 'Multithreading', 'File Handling', 'Exception Handling'],
    github: 'https://github.com/swarooparanikasala/Turn-Based-Civilization-War-Game.git',
  },
];

export default function Projects() {
  return (
    <div className="page">
      <h1 className="section-title">
        My <span className="accent">Projects</span>
      </h1>
      <p className="section-sub">
        Things I've built — click any card to view the source on GitHub.
      </p>

      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.id}>
            <span className="project-num">// {p.id}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="tag-row">
              {p.tags.map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
