import React from "react";
import "./education.css";
import GlobalFunctions from "../../global/global-functions";
import GlobalVariables from "../../global/global-variables";
import EducationCard from "./educationcard";
import HorizontalLine from "../../widget/horizontalline/horizontalline";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reflection: [],
    };
    this.animationCheck = null;
    this.selected = false;
  }

  componentDidMount() {
    this.animationCheck = setInterval(() => {
      const education_cards = document.getElementsByClassName("education-card");
      const activity_card = document.getElementById("activity-card");

      let animated_education_cards = true;
      let current_position;

      for (let i = 0; i < education_cards.length; i++) {
        const element = education_cards.item(i);
        current_position = element.getAttribute("position");

        if (GlobalFunctions.isElementInViewport(element)) {
          element.classList.add(
            current_position % 2 === 0 ? "enter-left" : "enter-right"
          );
        }

        if (
          !element.classList.contains(
            current_position % 2 === 0 ? "enter-left" : "enter-right"
          )
        ) {
          animated_education_cards = false;
        }
      }

      if (GlobalFunctions.isElementInViewport(activity_card)) {
        activity_card.classList.add("enter-bottom");
      }
      let all_animation_done =
        activity_card.classList.contains("enter-bottom") &&
        animated_education_cards;
      if (all_animation_done) {
        clearInterval(this.animationCheck);
      }
    }, 100);
  }

  changeBackground(e, inherit) {
    e.target.style.background = inherit
      ? "inherit"
      : this.props.isDarkMode
      ? "#7f5af0"
      : "#F8E4DA";
  }

  componentWillUnmount() {
    clearInterval(this.animationCheck);
  }

  showReflection(text) {
    this.selected = true;
    this.setState({ reflection: text });
  }

  render() {
    let cardsBackgroundColor = this.props.isDarkMode ? "#16161A" : "#fffffe";
    return (
      <div
        className="page"
        id="education-div"
        style={{
          backgroundColor: this.props.isDarkMode ? "#242629" : "#f6f6f6",
        }}
      >
        <div id="education-container">
          {GlobalVariables.EDUCATION.map((education, index) => {
            return (
              <EducationCard
                key={index}
                position={index}
                school={education.school}
                program={education.program}
                from={education.from}
                to={education.to}
                backgroundColor={cardsBackgroundColor}
              />
            );
          })}
        </div>
        <div
          id="activity-card"
          style={{
            backgroundColor: cardsBackgroundColor,
          }}
        >
          <div>
            <label className="activity-reflection-header">Activities</label>
            <HorizontalLine color="black" />
            {GlobalVariables.ACTIVITIES.map((activity, index) => {
              return (
                <label
                  key={index}
                  className="activity"
                  onClick={() => {
                    this.showReflection(activity.reflection);
                  }}
                  onMouseEnter={(e) => {
                    this.changeBackground(e, false);
                  }}
                  onMouseLeave={(e) => {
                    this.changeBackground(e, true);
                  }}
                >
                  {activity.name}
                </label>
              );
            })}
          </div>
          <div
            className="reflection-container"
            style={{
              backgroundColor: this.props.isDarkMode ? "black" : "#F8E4DA",
              borderColor: this.props.isDarkMode ? "black" : "white",
            }}
          >
            <label className="activity-reflection-header">Reflection</label>
            <HorizontalLine color={this.props.isDarkMode ? "white" : "black"} />
            {this.state.reflection.length === 0 && !this.selected ? (
              <label
                className="inline-block-label"
                style={{
                  fontSize: "1rem",
                }}
              >
                Please select an activty to see its reflection
              </label>
            ) : this.state.reflection.length === 0 ? (
              <label
                className="inline-block-label"
                style={{
                  fontSize: "1rem",
                }}
              >
                This activity's reflection has not been written yet
              </label>
            ) : (
              <div>
                {this.state.reflection.map((text, index) => {
                  return (
                    <p className="reflection-paragraph" key={index}>
                      {text}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
