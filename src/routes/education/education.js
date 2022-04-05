import React from "react";
import "./education.css";
import GlobalFunctions from "../../global/global-functions";
import GlobalVariables from "../../global/global-variables";
import EducationCard from "./educationcard";
import ActivitiesCard from "./activitiescard";
import Modal from "./positionmodal";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
    };
    this.drawOnCanvas = this.drawOnCanvas.bind(this);
    this.showReflection = this.showReflection.bind(this);
    this.animationCheck = null;
    this.selected = false;
  }

  createDrawings(canvas) {
    let page = document.getElementsByClassName("page")[0];
    let height = page.offsetHeight;
    let width = page.offsetWidth;

    canvas.height = height;
    canvas.width = width;

    let context = canvas.getContext("2d");
    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect(0, 0, 50, 50);
    context.fill();
  }

  drawOnCanvas() {
    let canvas = document.getElementById("canvas-education");
    if (canvas.getContext) {
      this.createDrawings(canvas);
      window.addEventListener("resize", () => {
        this.createDrawings(canvas);
      });
    } else {
      console.log(
        "You are using a browser that does not support canvas rendering"
      );
    }
  }

  componentDidMount() {
    this.drawOnCanvas();
  }

  componentWillUnmount() {
    clearInterval(this.animationCheck);
  }

  showReflection(index) {
    this.setState({ position: index });
  }

  render() {
    return (
      <div className="page">
        <canvas
          id="canvas-education"
          style={{
            backgroundColor: "#1A1523",
            // backgroundColor: "black",
          }}
        ></canvas>
        <div
          className="page"
          id="education"
          style={{
            color: "white",
          }}
        >
          <div
            className="page"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <div id="education-container">
              <EducationCard
                school={GlobalVariables.EDUCATION.school}
                program={GlobalVariables.EDUCATION.program}
                from={GlobalVariables.EDUCATION.from}
                to={GlobalVariables.EDUCATION.to}
              />
            </div>
            <div id="activities-container">
              {GlobalVariables.ACTIVITIES.map((activity, index) => {
                return (
                  <ActivitiesCard
                    activity={activity}
                    key={index}
                    index={index}
                    showReflection={this.showReflection}
                    width="30%"
                  />
                );
              })}
            </div>
            {this.state.position !== -1 ? (
              <Modal
                activity={GlobalVariables.ACTIVITIES[this.state.position]}
                current_position={this.state.position}
                max_position={GlobalVariables.ACTIVITIES.length - 1}
                navigation={(num) => {
                  this.showReflection(num);
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
