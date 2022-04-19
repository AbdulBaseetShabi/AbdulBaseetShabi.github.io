import React from "react";
import "./projects.css";

import GlobalFuntions from "../../global/global-functions.js";
import GlobalVariables from "../../global/global-variables.js";
import ProjectCard from "./projectcard.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
    };
    this.selected = false;
  }

  componentDidMount() {
    // this.drawOnCanvas();
  }

  render() {
    return (
      <div id="projects" className="page">
        <div
          style={{ width: "100%", height: "10%", backgroundColor: "black" }}
        ></div>
        <div id="project-screen">
          <div id="project-pane">
            <label
              className="inline-block-label"
              style={{
                marginTop: "0.7rem",
                fontSize: "1.8rem",
                fontFamily: "'Ubuntu Mono', monospace",
              }}
            >
              <span style={{ color: "red" }}>Select </span>
              <span style={{}}> * </span>
              <span style={{ color: "green" }}>From </span>
              <span style={{}}>Projects </span>
              <span style={{ color: "blue" }}>Where </span>
              <span style={{}}>Project.Type</span> = [all, automation, front-end, back-end, full-stack]
            </label>
          </div>
          <div id="project-content">
            <label
              className="inline-block-label"
              style={{
                fontStyle: "italic",
                backgroundColor: "black",
                color: "white",
                padding: "2px"
              }}
            >
              Psst: Hover over any project to view its details
            </label>
            <div id="project-content-list">
              {GlobalVariables.PROJECTS.map((project, index) => {
                return (
                  <ProjectCard
                    project={project}
                    key={index}
                    index={index}
                    showReflection={this.showReflection}
                    width="30%"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
