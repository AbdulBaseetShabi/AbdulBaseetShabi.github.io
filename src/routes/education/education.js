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

function EducationCard(props) {
  return (
    <div
      style={{
        width: "50%",
        margin: props.position % 2 === 0 ? "0 1rem 0 0" : "0 0 0 1rem",
        textAlign: "center",
        backgroundColor: "#272C45",
        padding: "5rem 1.5rem",
        opacity: "0%",
      }}
      className="education-card"
      position={props.position}
    >
      <label style={{ width: "100%" }}>{props.school.toUpperCase()}</label>
      <br />
      <label style={{ width: "100%" }}>{props.program.toUpperCase()}</label>
      <br />
      <label
        style={{ width: "100%" }}
      >{`${props.from.toUpperCase()} - ${props.to.toUpperCase()}`}</label>
    </div>
  );
}

function Education() {
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
          height: "58vh",
          margin: "1.5rem auto auto auto",
          opacity: "0%"
        }}
      ></div>
    </div>
  );
}

function addAnimation() {
  let temp = setInterval(() => {
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
      clearInterval(temp);
    }
  }, 300);
}

addAnimation();
export default Education;
