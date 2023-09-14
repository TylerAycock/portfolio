import "./Projects.css";
import ResultCard from "./cards/ResultCard";

const Projects = () => {
  const clickHandler = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="projects-container">
      <div className="proj-header">
        <h1 className="header-lg">Projects</h1>
        <a className="btn" onClick={()=>clickHandler()}>
          CONTACT ME
        </a>
      </div>
      <ResultCard />
    </div>
  );
};

export default Projects;
