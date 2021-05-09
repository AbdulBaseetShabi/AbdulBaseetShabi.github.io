import "./projects.css";

import GlobalFuntions from "../../global/global-functions.js";
import GlobalVariables from "../../global/global-variables.js";
import ProjectCard from "./projectcard.js";

function Projects(props) {
  return (
    <div
      id="projects"
      className="page"
      style={{ backgroundColor: props.isDarkMode ? "#242629" : "#f6f6f6" }}
      onMouseLeave={() => GlobalFuntions.closeProjects("-1")}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <label
          id="project-title"
          className="inline-block-label"
          style={{
            backgroundColor: props.isDarkMode ? "#16161a" : "#FFFFFE",
          }}
        >
          My Projects
        </label>
      </div>
      {GlobalVariables.PROJECTS.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            position={index.toString()}
            details={project}
            backgroundColor={props.isDarkMode ? "#16161a" : "#F8E4DA"}
            buttonColor={props.isDarkMode ? "#7f5af0" : "#FFFFFE"}
          />
        );
      })}
    </div>
  );
}

export default Projects;
