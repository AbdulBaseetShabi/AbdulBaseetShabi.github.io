import "./projects.css";

import GlobalFuntions from "../../global/global-functions.js";
import GlobalVariables from "../../global/global-variables.js";
import ProjectCard from "./projectcard.js";

function Projects() {
  return (
    <div
      id="projects"
      className="page"
      style={{ backgroundColor: "#0F0E17" }}
      onMouseLeave={() => GlobalFuntions.closeProjects("-1")}
    >
      {GlobalVariables.PROJECTS.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            position={index.toString()}
            details={project}
          />
        );
      })}
    </div>
  );
}

export default Projects;
