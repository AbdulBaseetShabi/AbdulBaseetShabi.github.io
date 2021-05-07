import React from "react";
import "./experiences.css";

const COOPS = [
  {
    company: "Rodan Energy Solutions",
    date_from: "Sept. 2020",
    date_to: "Dec. 2020",
    title: "IT Analyst, Process Improvement & Automation",
    location: "Virtual",
    tools_and_technologies: ["Git", "Azure Devops", "Visual Studio", "Excel"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "VBA",
      "Python",
    ],
    summary: [],
    type: "coop",
  },
  {
    company: "The Incubator - The Co-operators Group Limited",
    date_from: "May 2019",
    date_to: "Aug. 2019",
    title: "Software Developer",
    location: "Waterloo, ON, Canada",
    tools_and_technologies: ["Git", "Atlassian", "Visual Studio", "MongoDB"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "NodeJS",
    ],
    summary: [],
    type: "coop",
  },
  {
    company: "ATS Automation",
    date_from: "Jan. 2020",
    date_to: "Dec. 2020",
    title: "Software Developer",
    location: "Waterloo, ON, Canada",
    tools_and_technologies: ["SVN", "Atlassian", "Visual Studio", "SSMS"],
    languages_and_frameworks: [
      "HTML",
      "CSS",
      "JavaScript",
      "AngularJS",
      "C#",
      "SQL",
    ],
    summary: [],
    type: "coop",
  },
];

const WORK = [
  {
    company: "Mathematics and Statistics Support - WLU",
    date_from: "Jan. 2019",
    date_to: "April 2021",
    title: "Peer Tutor/Mentor",
    location: "Waterloo, ON, Canada",
    main_skills: ["Communication", "Punctuality", "Knowledgeable", "Patience"],
    summary: [],
    type: "work",
  },
  {
    company: "Science Department - WLU",
    date_from: "Sept. 2019",
    date_to: "April 2021",
    title: "Instructional Assistant",
    location: "Waterloo, ON, Canada",
    main_skills: ["Communication", "Punctuality", "Knowledgeable", "Patience"],
    summary: [],
    type: "work",
  },
  {
    company: "Mathematics Department - WLU",
    date_from: "Sept. 2018",
    date_to: "Dec. 2019",
    title: "Proctor and Marker",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Attention to Details",
      "Punctuality",
      "Knowledgeable",
      "Patience",
    ],
    summary: [],
    type: "work",
  },
  {
    company: "Teaching and Learning - WLU",
    date_from: "May 2018",
    date_to: "Sept. 2018",
    title: "Headstart Ambassador",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership"
    ],
    summary: [],
    type: "work",
  },
];

const VOLUNTEER = [
  {
    company: "Student Union - WLU",
    date_from: "May 2019",
    date_to: "April 2020",
    title: "Icebreaker",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  },
  {
    company: "Laurier International - WLU",
    date_from: "June 2018",
    date_to: "April 2019",
    title: "Global Engagement Student Ambassador",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  },
  {
    company: "Laurier Computing Society - WLU",
    date_from: "May 2020",
    date_to: "April 2021",
    title: "President",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  }
  ,
  {
    company: "Laurier Data Science Society - WLU",
    date_from: "Sept. 2020",
    date_to: "April 2021",
    title: "Web Master",
    location: "Waterloo, ON, Canada",
    main_skills: [
      "Communication",
      "Team Work",
      "Punctuality",
      "Knowledgeable",
      "Patience",
      "Leadership"
    ],
    summary: [
    ],
    type: "volunteer",
  }
];

function Arrow(props) {
  let rotation = "0deg";
  if (props.direction === "up") {
    rotation = "-90deg";
  } else if (props.direction === "right") {
    rotation = "180deg";
  } else if (props.direction === "down") {
    rotation = "90deg";
  }

  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        opacity: "inherit",
        backgroundColor: "#0F0E17",
        display: "flex",
        alignItems: "center",
        transform: `rotate(${rotation})`,
      }}
    >
      <i
        className="fas fa-long-arrow-alt-left fa-2x"
        style={{ margin: "0 auto" }}
      ></i>
    </div>
  );
}

function DetailButton(props) {
  return (
    <div className="view-detail-button" onClick={props.showDetails}>
      <label
        style={{ width: "100%", display: "inline-block", textAlign: "center" }}
      >
        {props.text}
      </label>
    </div>
  );
}

function DetailsCard(props) {
  let details = props.details;
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "calc(100vh + 60px)",
        width: "100%",
        position: "absolute",
        // opacity: "50%",
        top: "-60px",
      }}
      className="enter-bottom"
    >
      <div
        style={{
          backgroundColor: "#0F0E17",
          height: "70%",
          position: "absolute",
          zIndex: "9",
          left: "15%",
          top: "15%",
          width: "70%",
        }}
      >
        <div id="details-summary" style={{ padding: "2rem" }}>
          <label style={{ display: "inline-block", width: "100%" }}>
            <span style={{ fontWeight: "bold", margin: "0.5rem" }}>
              Location:{" "}
            </span>
            {details.location}
          </label>
          {details.type === "coop" ? (
            <div style={{ width: "100%", margin: "0.5rem" }}>
              <label style={{ display: "inline-block", width: "100%" }}>
                <span style={{ fontWeight: "bold" }}>
                  Tools and Technologies:{" "}
                </span>
                {details.tools_and_technologies.join(", ")}
              </label>
              <label
                style={{
                  display: "inline-block",
                  width: "100%",
                  margin: "0.5rem 0",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  Langauges and Frameworks:{" "}
                </span>
                {details.languages_and_frameworks.join(", ")}
              </label>
            </div>
          ) : (
            <label
              style={{
                display: "inline-block",
                width: "100%",
                margin: "0.5rem",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Main Skills: </span>
              {details.main_skills.join(", ")}
            </label>
          )}
          <div
            style={{
              width: "50%",
              margin: "5px auto",
              padding: "3px 0",
              borderTop: "4px solid #272C45",
              borderBottom: "4px solid #272C45",
            }}
          >
            <label
              style={{
                display: "inline-block",
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SUMMARY
            </label>
          </div>
          {details.summary.map((text, index) => {
            return (
              <p style={{ margin: "0.5rem" }} key={index}>
                {text}
              </p>
            );
          })}
        </div>
        <div style={{ position: "absolute", bottom: "20px", width: "100%"}}>
          <DetailButton showDetails={props.closeDetails} text="Close" />
        </div>
      </div>
    </div>
  );
}

function ExperienceCard(props) {
  return (
    <div className="experience-card">
      <div style={{ margin: "0 auto" }}>
        <label className="experience-card-title">
          {props.details.company} | {props.details.title} |{" "}
          {props.details.date_from} - {props.details.date_to}
        </label>
        <div style={{ height: "auto", marginTop: "1rem 0 0 0" }}>
          <DetailButton
            showDetails={() => {
              props.showDetails(true, props.details);
            }}
            text="View Details"
          />
        </div>
      </div>
    </div>
  );
}

function DisplayedExperience(props) {
  let type = props.experience[0].type;
  return (
    <div>
      <div style={{ position: "relative", width: "100%" }}>
        <label
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2rem",
            margin: "0 auto",
            backgroundColor: "#0f0e17",
            padding: "10px 0",
            position: "absolute",
            top: "-6rem",
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
          <div
            id="slide"
            className={animate_slideshow}
            style={{ width: "85%", margin: "0 auto", height: "80%" }}
          >
            {current_page === 0 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={COOPS}
              />
            ) : null}
            {current_page === 1 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={WORK}
              />
            ) : null}
            {current_page === 2 ? (
              <DisplayedExperience
                showDetails={this.showDetails}
                experience={VOLUNTEER}
              />
            ) : null}
          </div>

          {this.state.show_details ? (
            <DetailsCard
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
