import React from "react";
import "./education.css";

const EDUCATION = [
  {
    school: "Wilfrid Laurier University",
    program: "Business Administration",
    from: "2017",
    to: "2021 (Expected)",
  },
  {
    school: "Wilfrid Laurier University",
    program: "Computer Science",
    from: "2017",
    to: "2021 (Expected)",
  },
];

const ACTIVITIES = [
  {
    name: "President - Laurier Computing Society",
    reflection: [
      "A multi-paragraph essay commonly includes introduction and conclusion paragraphs, with topic paragraphs in between.",
      "The introduction usually includes a thesis statement, and provides general direction for the paper. The conclusion ties together the key points. The middle paragraphs, typically one to three of them, include specific topics or points that support the thesis, or provide details related to the essay theme. An outline is helpful in organizing the content in a multi-paragraph essay. Each supporting paragraph should only cover one main topic or point.",
    ],
  },
  {
    name: "Global Engagement Student Ambassador - Laurier International",
    reflection: [],
  },
  {
    name: "Peer Mentor/Tutor - Mathematics and Statistics Support",
    reflection: [],
  },
  {
    name: "Instructional Assistant - Computer Science department",
    reflection: [],
  },
  { name: "Icebreaker - Student Union", reflection: [] },
  { name: "GoTeam - Student Union", reflection: [] },
  {
    name: "Headstart Ambassador - Laurier International",
    reflection: [],
  },
  {
    name: "Proctor/Marker - Mathematics Department",
    reflection: [],
  },
  { name: "WebMaster - Laurier Data Science Society", reflection: [] },
];

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function HorizontalLine(props) {
  return (
    <div
      style={{
        height: "1px",
        borderBottom: `4px solid ${props.color}`,
        width: "60%",
        margin: "10px auto",
      }}
    ></div>
  );
}

function EducationCard(props) {
  return (
    <div
      style={{
        width: "50%",
        margin: props.position % 2 === 0 ? "0 1rem 0 0" : "0 0 0 1rem",
        textAlign: "center",
        backgroundColor: "#272C45",
        padding: "3rem 1.5rem",
        opacity: "0%",
      }}
      className="education-card"
      position={props.position}
    >
      <label style={{ width: "100%", fontSize: "2rem", fontWeight: "bold" }}>
        {props.school.toUpperCase()}
      </label>
      <br />
      <label
        style={{
          width: "100%",
          fontSize: "1.5rem",
          margin: "1rem auto",
          display: "inline-block",
        }}
      >
        {props.program.toUpperCase()}
      </label>
      <br />
      <label
        style={{ width: "100%", fontSize: "1.1rem" }}
      >{`${props.from.toUpperCase()} - ${props.to.toUpperCase()}`}</label>
    </div>
  );
}

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

        if (isElementInViewport(element)) {
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

      if (isElementInViewport(activity_card)) {
        activity_card.classList.add("enter-bottom");
      }
      let all_animation_done =
        activity_card.classList.contains("enter-bottom") &&
        animated_education_cards;
      if (all_animation_done) {
        clearInterval(this.animationCheck);
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.animationCheck);
  }

  showReflection(text) {
    this.selected = true;
    this.setState({ reflection: text });
  }

  render() {
    let header_style = {
      width: "100%",
      textAlign: "center",
      display: "inline-block",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      fontWeight: "bold",
      paddingTop: "10px",
    };
    return (
      <div className="page" id="education">
        <div style={{ display: "flex", width: "85%", margin: "0 auto" }}>
          {EDUCATION.map((education, index) => {
            return (
              <EducationCard
                key={index}
                position={index}
                school={education.school}
                program={education.program}
                from={education.from}
                to={education.to}
              />
            );
          })}
        </div>
        <div
          id="activity-card"
          style={{
            backgroundColor: "#272C45",
            width: "85%",
            minHeight: "58vh",
            margin: "1.5rem auto auto auto",
            opacity: "0%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "auto",
              backgroundColor: "#272C45",
              padding: "0.5rem 0.3rem",
            }}
          >
            <label style={header_style}>Activities</label>
            <HorizontalLine color="black" />
            {ACTIVITIES.map((activity, index) => {
              return (
                <label
                  key={index}
                  className="activity"
                  onClick={() => {
                    this.showReflection(activity.reflection);
                  }}
                >
                  {activity.name}
                </label>
              );
            })}
          </div>
          <div
            style={{
              width: "49%",
              height: "auto",
              backgroundColor: "black",
              border: "3px solid black",
              padding: "0.5rem 0.3rem",
            }}
          >
            <label style={header_style}>Reflection</label>
            <HorizontalLine color="white" />
            {this.state.reflection.length === 0 && !this.selected ? (
              <label
                style={{
                  width: "100%",
                  lineHeight: "100%",
                  textAlign: "center",
                  display: "inline-block",
                  fontSize: "1rem",
                }}
              >
                Please select an activty to see its reflection
              </label>
            ) : this.state.reflection.length === 0 ? (
              <label
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "inline-block",
                  fontSize: "1rem",
                }}
              >
                This activity's reflection has not been written yet
              </label>
            ) : (
              <div>
                {this.state.reflection.map((text, index) => {
                  return (
                    <p key={index} style={{ fontSize: "1rem", padding: "0 10px" }}>
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
