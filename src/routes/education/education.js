import React from "react";
import "./education.css";

import GlobalFunctions from "../../global/global-functions";
import GlobalVariables from "../../global/global-variables";
import EducationCard from "./educationcard";
import ActivitiesCard from "./activitiescard";
import Modal from "./positionmodal";
import LoadingPage from "../../widget/loadingpage/loadingpage";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,
      activities: null,
      loading: true,
    };
    this.drawOnCanvas = this.drawOnCanvas.bind(this);
    this.createDrawings = this.createDrawings.bind(this);
    this.showReflection = this.showReflection.bind(this);
    this.animationCheck = null;
    this.selected = false;
  }

  createDrawings(
    canvas,
    sun,
    mercury,
    venus,
    earth,
    stars,
    width,
    height,
    earth_deg,
    venus_deg,
    mercury_deg
  ) {
    canvas.height = height;
    canvas.width = width;

    let context = canvas.getContext("2d");

    //clean board and move origin to bottom right
    context.globalCompositeOperation = "destination-over";
    context.clearRect(0, 0, width, height);
    context.beginPath();

    context.save();
    context.translate(width, height);

    //draw mercury
    context.beginPath();
    context.rotate((mercury_deg * Math.PI) / 180);
    context.translate(width * 0.4, 0);
    context.drawImage(mercury, 0, 0, 0.2 * height, 0.2 * height);
    context.restore();
    context.save();
    context.translate(width, height);

    //draw venus
    context.beginPath();
    context.rotate((venus_deg * Math.PI) / 180);
    context.translate(width * 0.6, 0);
    context.drawImage(venus, 0, 0, 0.3 * height, 0.3 * height);
    context.restore();
    context.save();
    context.translate(width, height);

    //draw earth
    context.beginPath();
    context.rotate((earth_deg * Math.PI) / 180);
    context.translate(width * 0.8, 0);
    context.drawImage(earth, 0, 0, 0.4 * height, 0.4 * height);
    context.restore();

    //draw sun
    context.drawImage(sun, width - 400, height - 400);

    //stars
    let x,
      y,
      radius = null;
    for (let i = 0; i < stars.length; i++) {
      context.fillStyle = stars[i][3];
      context.beginPath();
      radius = stars[i][2];
      x = stars[i][0];
      y = stars[i][1];
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.fill();
    }

    window.requestAnimationFrame(() => {
      this.createDrawings(
        canvas,
        sun,
        mercury,
        venus,
        earth,
        stars,
        width,
        height,
        (earth_deg - 0.3) % 360,
        (venus_deg - 0.2) % 360,
        (mercury_deg - 0.1) % 360
      );
    });
  }

  drawOnCanvas() {
    let canvas = document.getElementById("canvas-education");

    if (canvas.getContext) {
      let page = document.getElementsByClassName("page")[0];
      let height = page.offsetHeight;
      let width = page.offsetWidth;

      // sun
      let sun = new Image();
      sun.src =
        GlobalVariables.GOOGLE_DRIVE_PREFIX +
        "1WxUzCdN9qUNx1FU1MkhUudTb1o05gWp1";

      //earth
      let earth = new Image();
      earth.src =
        GlobalVariables.GOOGLE_DRIVE_PREFIX +
        "1ABGBfqS5ubkX_6MXZm2Mb2UgGJMoXs0c";

      //venus
      let venus = new Image();
      venus.src =
        GlobalVariables.GOOGLE_DRIVE_PREFIX +
        "14B6SFleuKI94s4FTbCM1Ak8pGUrdYYmh";

      //mercury
      let mercury = new Image();
      mercury.src =
        GlobalVariables.GOOGLE_DRIVE_PREFIX +
        "1DLE3KFSXAV-P13ei3i3O5pnsDB90fru0";

      //stars
      const STAR_COLORS = ["#a5f7e8", "#fffffe", "#E5ADAD", "#D377ED"];

      let dots = 300;
      let x,
        y,
        color,
        coordinate,
        star,
        radius = null;
      let coordinates = {}; //use hash maps -> TODO
      let stars = [];

      for (let i = 0; i < dots; i++) {
        color = STAR_COLORS[i % STAR_COLORS.length];
        radius = Math.random() * 1.5 + 1;
        x = Math.floor(Math.random() * width + 1);
        y = Math.floor(Math.random() * height + 1);
        coordinate = JSON.stringify([x, y]);

        while (coordinate in coordinates) {
          x = Math.floor(Math.random() * width + 1);
          y = Math.floor(Math.random() * height + 1);
          coordinate = JSON.stringify([x, y]);
        }

        star = [x, y, radius, color];
        coordinates[coordinate] = true;
        stars.push(star);
      }

      window.requestAnimationFrame(() => {
        this.createDrawings(
          canvas,
          sun,
          mercury,
          venus,
          earth,
          stars,
          width,
          height,
          -90,
          -90,
          -90
        );
      });
    } else {
      console.log(
        "You are using a browser that does not support canvas rendering"
      );
    }
  }

  componentDidMount() {
    GlobalFunctions.getDataFromAPI("education", (data) => {
      setTimeout(() => {
        this.setState({ activities: data, loading: false });
        this.drawOnCanvas();
      }, 2000);
    });
  }

  componentWillUnmount() {
    clearInterval(this.animationCheck);
  }

  showReflection(index) {
    this.setState({ position: index });
  }

  render() {
    let activities = this.state.activities
      ? this.state.activities
      : GlobalVariables.ACTIVITIES;

    if (this.state.loading) {
      return (<LoadingPage />);
    }

    return (
      <div className="page" id="education">
        <canvas
          id="canvas-education"
          style={{
            backgroundColor: "black",
          }}
        ></canvas>
        <div
          className="page"
          id="education-content"
          style={{
            color: "white",
          }}
        >
          <div
            className="page enter-left"
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
              {activities.map((activity, index) => {
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
              <label className="inline-block-label">
                Pssst: Click on an activity to view it
              </label>
            </div>
            {this.state.position !== -1 ? (
              <Modal
                activity={activities[this.state.position]}
                current_position={this.state.position}
                max_position={activities.length - 1}
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
