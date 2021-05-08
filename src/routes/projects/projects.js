import "./projects.css";

import GlobalFuntions from "../../global/global-functions.js";
import GlobalVariables from "../../global/global-variables.js";
import ProjectCard from "./projectcard.js";

function Projects(props) {
  return (
    <div
      id="projects"
      className="page"
      style={{ backgroundColor: props.isDarkMode ? "#242629" : "green" }}
      onMouseLeave={() => GlobalFuntions.closeProjects("-1")}
    >
      {GlobalVariables.PROJECTS.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            position={index.toString()}
            details={project}
            backgroundColor={props.isDarkMode ? "#16161a" : "purple"}
            buttonColor={props.isDarkMode ? "#7f5af0" : "yellow"}
          />
        );
      })}
    </div>
  );
}

export default Projects;
