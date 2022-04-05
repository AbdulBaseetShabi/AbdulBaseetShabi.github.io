import React from "react";
import "./education.css";
import GlobalFunctions from "../../global/global-functions";
import GlobalVariables from "../../global/global-variables";
import EducationCard from "./educationcard";
import ActivitiesCard from "./activitiescard";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.drawOnCanvas = this.drawOnCanvas.bind(this);
    this.animationCheck = null;
    this.selected = false;
  }

  createDrawings(canvas){
    let page = document.getElementsByClassName('page')[0];
    let height = page.offsetHeight;
    let width = page.offsetWidth;

    canvas.height = height;
    canvas.width = width;

    let context = canvas.getContext('2d');
    context.fillStyle = 'rgb(200, 0, 0)';
    context.fillRect(0, 0, 50, 50);
    context.fill();
  }

  drawOnCanvas() {
    let canvas = document.getElementById('canvas-education');
    if (canvas.getContext) {
      this.createDrawings(canvas);
      window.addEventListener('resize', () => {
        this.createDrawings(canvas);
      });
    }else{
      console.log("You are using a browser that does not support canvas rendering")
    }
  }

  componentDidMount() {
    this.drawOnCanvas();
  }

  componentWillUnmount() {
    clearInterval(this.animationCheck);
  }

  showReflection(text) {
    this.selected = true;
    this.setState({ reflection: text });
  }

  render() {
    return (
      <div className="page">
        <canvas id="canvas-education" style={{backgroundColor: "#1A1523"}}></canvas>
        <div
          className="page"
          id="education"
          style={{
            color: "white",
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
            <ActivitiesCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
