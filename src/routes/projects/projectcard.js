import React from "react";

import GlobalFuntions from "../../global/global-functions.js";
import CustomButton from "./custombutton.js";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_details: false,
    };
    this.url = this.props.details.image;
    this.position = this.props.position;
    this.details = this.props.details;
  }

  showDetail(e) {
    e.target.nextElementSibling.classList.add("show-bottom");
    e.target.nextElementSibling.style.display = "block";
    GlobalFuntions.closeProjects(this.position);
  }

  render() {
    return (
      <div position={this.position} className="project">
        <img
          className="project-image"
          src={this.url}
          alt="project"
          height="250px"
          onMouseEnter={(e) => this.showDetail(e)}
        ></img>
        <div
          style={{
            backgroundColor: this.props.backgroundColor,
          }}
          className="project-detail"
        >
          <div style={{ position: "relative", height: "inherit" }}>
            <label className="inline-block-label project-name">
              {this.details.name}
            </label>
            <hr style={{ width: "80%" }} />

            <p style={{ padding: "0 0.5rem" }}>{this.details.description}</p>
            <div
              className="container-languages-tools"
            >
              <label
                className="inline-block-label-uncentered"
                style={{
                  margin: "0.5rem",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Langauges and Frameworks:{" "}
                </span>
                {this.details.languages_and_frameworks.join(", ")}
              </label>
              <label
                className="inline-block-label-uncentered"
                style={{
                  margin: "0.5rem",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Tools and Technologies:{" "}
                </span>
                {this.details.tools_and_technologies.join(", ")}
              </label>
              <div
                className="container-custom-button"
              >
                <CustomButton
                  link={this.details.source_code_link}
                  text="Source Code"
                  noOfButtons={
                    this.details.production_link.length !== 0 ? 2 : 1
                  }
                  backgroundColor = {this.props.buttonColor}
                />
                {this.details.production_link.length !== 0 ? (
                  <CustomButton
                    link={this.details.production_link}
                    text="Production"
                    noOfButtons={2}
                    backgroundColor = {this.props.buttonColor}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
