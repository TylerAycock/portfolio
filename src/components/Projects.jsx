import "./Projects.css";
import ResultCard from "./cards/ResultCard";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="proj-header">
        <h1 className="header-lg">Projects</h1>
        <a href="#contact" className="btn">
          CONTACT ME
        </a>
      </div>
      <ResultCard />
    </div>
  );
};

export default Projects;
