import React from "react";
import "./projects.css";

import GlobalFuntions from "../../global/global-functions.js";
import GlobalVariables from "../../global/global-variables.js";
import ProjectCard from "./projectcard.js";

const OPTIONS = ["all", "automation", "front-end", "back-end", "full-stack"];
const FILTERSTYLE = {
  textDecoration: "underline",
  fontStyle: "italic",
  color: "darkviolet",
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
      option: 0,
    };
    this.selected = false;
  }

  componentDidMount() {
  }

  filterOptions(option) {
    this.setState({ option: option });
  }

  render() {
    let projects = this.state.option === 0 ? GlobalVariables.PROJECTS : GlobalVariables.PROJECTS.filter((project)=>{
      return project.type.includes(this.state.option);
    });
    return (
      <div id="projects" className="page">
        <div id="project-screen">
          <div id="project-pane">
            <label
              className="inline-block-label"
              style={{
                marginTop: "0.7rem",
                fontSize: "1.8rem",
                fontFamily: "'Ubuntu Mono', monospace",
                userSelect: "none",
              }}
            >
              <span style={{ color: "red" }}>Select </span>
              <span style={{}}> * </span>
              <span style={{ color: "green" }}>From </span>
              <span style={{}}>Projects </span>
              <span style={{ color: "blue" }}>Where </span>
              <span style={{}}>Project.Type</span> = [
              {OPTIONS.map((x, i) => {
                let style = {"cursor": 'pointer'}
                if (this.state.option === i){
                  style = {...style, ...FILTERSTYLE}
                }
                if (i === OPTIONS.length - 1) {
                  return (
                    <label
                      onClick={() => this.filterOptions(i)}
                      style={style}
                      key={i}
                      index={i}
                    >
                      {x}
                    </label>
                  );
                }
                return (
                  <label key={i} index={i}>
                    <span
                      onClick={() => this.filterOptions(i)}
                      style={style}
                    >
                      {x}
                    </span>
                    ,{" "}
                  </label>
                );
              })}
              ]
            </label>
          </div>
          <div id="project-content">
            <label
              className="inline-block-label"
              style={{
                fontStyle: "italic",
                backgroundColor: "black",
                color: "white",
                padding: "2px",
                userSelect: "none",
              }}
            >
              Psst: Hover over any project to view its details
            </label>
            <div id="project-content-list">
              {projects.map((project, index) => {
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
