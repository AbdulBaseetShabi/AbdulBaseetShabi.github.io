import React from "react";

import GlobalVariables from "../../global/global-variables.js";
import GlobalFuntions from "../../global/global-functions.js";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e, show) {
    if (show) {
      e.target.nextElementSibling.style.display = "block";
    }else{
      e.target.style.display = "none";
    }
  }

  render() {
    let project = this.props.project;
    return (
      <div className="project-card" style={{ width: this.props.width }}>
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
          <label className="inline-block-label" style={{ fontWeight: "bolder" }}>{project.name}</label>
          <hr />
          <label>
            <span style={{ fontWeight: "bolder" }}>Stack: </span>
            <span style={{ fontStyle: "italic" }}>
            {project.languages_and_frameworks.map((x, i) => {
              if (i !== project.languages_and_frameworks.length - 1) {
                return ` ${x} |`;
              }
              return ` ${x}`;
            })}
            </span>
          </label>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
