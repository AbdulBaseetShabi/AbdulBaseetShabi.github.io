import React from "react";
import "./experience.css";

import GlobalVariables from "../../global/global-variables";
import GlobalFunctions from "../../global/global-functions";
import ExperienceCard from "./experiencecard";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coop: [],
      parttime: [],
    };
  }

  componentDidMount() {
    let coop = [];
    let parttime = [];
    GlobalVariables.EXPERIENCES.forEach((experience) => {
      if (experience.isCoop) {
        coop.push(experience);
      } else if (experience.isPartTime) {
        parttime.push(experience);
      } else {
        console.log("Error: " + JSON.stringify(experience));
      }
    });

    this.setState({ coop: coop, parttime: parttime });
  }

  render() {
    return (
      <div
        className="page"
        style={{ backgroundColor: "#33387a", color: "white" }}
      >
        <div id="experience" className="page">
          <div className="experience-column">
            <label className="inline-block-label">Coop Experience</label>
            {this.state.coop.map((exp) => {
              return <ExperienceCard experience={exp} type={"coop"} />;
            })}
          </div>
          <div className="experience-column">
            <label className="inline-block-label">Part Time Experience</label>
            {this.state.parttime.map((exp) => {
              return <ExperienceCard experience={exp} type={"part"} />;
            })}
          </div>
          <div className="experience-column">Full Time Experience</div>
        </div>
      </div>
    );
  }
}

export default Experience;
