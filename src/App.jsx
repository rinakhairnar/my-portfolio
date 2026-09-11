import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav>
        <h2>Rina Khairnar</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div>
          <p className="hello">Hello, I'm</p>

          <h1>Rina Khairnar</h1>

          <h2>Java Developer</h2>

          <p>
            Computer Engineering graduate passionate about Java,
            software development and building useful applications.
          </p>

          <a href="#projects" className="button">
            View My Projects
          </a>
        </div>
      </section>

      <section id="about">
        <h2 className="section-title">About Me</h2>

        <p>
          I am a Computer Engineering graduate with a strong interest
          in Java and software development. I enjoy learning new
          technologies, solving programming problems and developing
          user-friendly applications.
        </p>
      </section>

      <section id="skills">
        <h2 className="section-title">My Skills</h2>

        <div className="skills">
          <div>Java</div>
          <div>C / C++</div>
          <div>SQL</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>JDBC</div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">My Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Online Restaurant Website</h3>

            <p>
              A web-based restaurant website with registration,
              login and restaurant-related features.
            </p>

            <p>
              <b>Technologies:</b> HTML, CSS, JavaScript, PHP, SQL
            </p>

            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Java Student Management</h3>

            <p>
              A Java application connected with MySQL database
              using JDBC for managing student information.
            </p>

            <p>
              <b>Technologies:</b> Java, JDBC, MySQL
            </p>

            <button>View Project</button>
          </div>

        </div>
      </section>

      <section id="education">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>B.E. Computer Engineering</h3>
          <p>Savitribai Phule Pune University</p>
          <p>CGPA: 9.45</p>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Contact Me</h2>

        <p>Email: rinakhairnar18@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/rina-khairnar-376313344/</p>
        <p>GitHub: https://github.com/rinakhairnar</p>
      </section>

      <footer>
        <p>© 2026 Rina Khairnar. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;