import React from "react";
import "./experiences.css";

import GlobalVariables from "../../global/global-variables";
import Arrow from "../../widget/arrow/arrow";

import ExperienceCard from "./experiencecard.js";
import DetailsModal from "./detailsmodal.js";

function DisplayedExperience(props) {
  let type = props.experience[0].type;
  return (
    <div>
      <div style={{ position: "relative", width: "100%" }}>
        <label
          className="inline-block-label experience-title"
          style={{
            backgroundColor: "#0f0e17",
          }}
        >
          {type === "coop"
            ? "Coop Experience"
            : type === "work"
            ? "Work Experience"
            : "Volunteer Experience"}
        </label>
      </div>
      {props.experience.map((x, index) => {
        return (
          <div key={index} style={{ position: "relative" }}>
            <ExperienceCard showDetails={props.showDetails} details={x} />
          </div>
        );
      })}
    </div>
  );
}

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: 0,
      changed_page: -1,
      show_details: false,
      details: null,
    };
    this.max = 3;
    this.showDetails = this.showDetails.bind(this);
  }

  changePage(inc_or_dec) {
    this.setState((prevState) => {
      let element = document.getElementById("slide");
      element.classList.remove(inc_or_dec === 1 ? "enter-left" : "enter-right");
      return {
        current_page: prevState.current_page + inc_or_dec,
        changed_page: inc_or_dec,
      };
    });
  }

  showDetails(show, details) {
    this.setState({ show_details: show, details: details });
  }

  render() {
    let left_arrow_visibility =
      this.state.current_page === 0 ? "hidden" : "visible";
    let right_arrow_visibility =
      this.state.current_page === this.max - 1 ? "hidden" : "visible";
    let current_page = this.state.current_page;
    let animate_slideshow =
      this.state.changed_page === 1 ? "enter-left" : "enter-right";
    return (
      <div id="experiences" className="page">
        <div id="slide-show">
          <div
            className="direction-icon"
            style={{
              left: "0.5rem",
              visibility: left_arrow_visibility,
            }}
            onClick={() => {
              this.changePage(-1);
            }}
          >
            <Arrow />
          </div>
          <div
            className="direction-icon"
            style={{
              right: "0.5rem",
              visibility: right_arrow_visibility,
            }}
            onClick={() => {
              this.changePage(1);
            }}
          >
            <Arrow direction="right" />
          </div>
          <div id="slide" className={animate_slideshow}>
            {current_page === 0 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={GlobalVariables.COOPS}
              />
            ) : null}
            {current_page === 1 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={GlobalVariables.WORK}
              />
            ) : null}
            {current_page === 2 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={GlobalVariables.VOLUNTEER}
              />
            ) : null}
          </div>

          {this.state.show_details ? (
            <DetailsModal
              details={this.state.details}
              closeDetails={() => {
                this.showDetails(false, null);
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Experiences;
