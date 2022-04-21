import React from "react";
import "./experience.css";

import GlobalVariables from "../../global/global-variables";
import GlobalFunctions from "../../global/global-functions";
import ExperienceCard from "./experiencecard";
import CustomButton from "../../widget/button/custombutton.js";
import Socials from "../../widget/socials/socials";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coop: [],
      parttime: [],
      showSocials: false
    };
    this.showSocials = this.showSocials.bind(this);
  }

  showSocials(){
    this.setState({showSocials: true});
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
        style={{ backgroundColor: "#ffc2c2", color: "black" }}
      >
        <div id="experience" className="page">
          <div className="experience-column">
            <label className="inline-block-label experience-title">
              Full Time Experience
            </label>
            <div className="experience-title" style={{ marginTop: "2rem" }}>
              <CustomButton
                text="Contribute to Experience by contacting me"
                backgroundColor="white"
                onClick={()=> {this.showSocials()}}
              />
            </div>

            { this.state.showSocials ? <Socials /> : null }
          </div>
          <div className="experience-column enter-left">
            <label className="inline-block-label experience-title">
              Coop Experience
            </label>
            {this.state.coop.map((exp, index) => {
              return (
                <ExperienceCard experience={exp} key={index} type={"coop"} />
              );
            })}
          </div>
          <div className="experience-column enter-left">
            <label className="inline-block-label experience-title">
              Part Time Experience
            </label>
            {this.state.parttime.map((exp, index) => {
              return (
                <ExperienceCard experience={exp} key={index} type={"part"} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
