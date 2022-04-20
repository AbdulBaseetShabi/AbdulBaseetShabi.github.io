import React from "react";

import GlobalVariables from "../../global/global-variables.js";
import GlobalFuntions from "../../global/global-functions.js";

import CustomButton from "../../widget/button/custombutton.js";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e, show) {
    let target = e.target;

    if (show && target.classList.contains("project-image")) {
      target.nextElementSibling.style.display = "block";
    } else if (!show && target.classList.contains("project-card-description")) {
      target.style.display = "none";
    }
  }

  render() {
    let project = this.props.project;
    let show_prod = project.production_link !== undefined &&
    project.production_link.length !== 0
    return (
      <div
        className="project-card enter-bottom"
        style={{ width: this.props.width }}
      >
        <div
          className="project-image"
          style={{
            backgroundImage: `url(${
              GlobalVariables.GOOGLE_DRIVE_PREFIX + project.image
            })`,
          }}
          onMouseEnter={(e) => this.toggleDetail(e, true)}
        ></div>
        <div
          className="project-card-description enter-bottom"
          onMouseLeave={(e) => this.toggleDetail(e, false)}
        >
          <label
            className="inline-block-label"
            style={{ fontWeight: "bolder" }}
          >
            {project.name}
          </label>
          <label className="inline-block-label">{project.description}</label>
          <hr />
          <label className="inline-block-label-uncentered">
            <span style={{ fontWeight: "bolder" }}>Stack: </span>
            <span>
              {project.languages_and_frameworks.map((x, i) => {
                if (i !== project.languages_and_frameworks.length - 1) {
                  return ` ${x} |`;
                }
                return ` ${x}`;
              })}
            </span>
          </label>
          <label className="inline-block-label-uncentered">
            <span style={{ fontWeight: "bolder" }}>Technologies: </span>
            <span>
              {project.tools_and_technologies.map((x, i) => {
                if (i !== project.tools_and_technologies.length - 1) {
                  return ` ${x} |`;
                }
                return ` ${x}`;
              })}
            </span>
          </label>
          <div
            style={{
              color: "white",
              position: "absolute",
              bottom: "5px",
              width: "100%",
              left: "0",
            }}
          >
            <div style={{width: show_prod ? "50%" : "100%", float: "left"}}>
              <CustomButton
                text="Source Code"
                backgroundColor="#3B8EEA"
                onClick={() => {
                  GlobalFuntions.openLinkInNewTab(project.source_code_link);
                }}
              />
            </div>
            <div style={{width: "50%", float: "left"}}>
              {show_prod ? (
                <CustomButton
                  text="Prod Code"
                  onClick={() => {
                    GlobalFuntions.openLinkInNewTab(project.production_link);
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
