import React from "react";

const CARD_COLOR = {
  'coop': "#FC6B5E",
  'part': "#5B50AE"
};

function ExperienceCard(props) {
  let exeprience = props.experience;
  return (
    <div className="experience-card" style={{borderLeft: `5px solid ${CARD_COLOR[props.type]}`}}>
      <label className="inline-block-label">{exeprience.title} </label>
      <label className="inline-block-label"> {exeprience.company} </label>
      <label className="inline-block-label">{exeprience.location}</label>
      <label className="inline-block-label">{exeprience.date_from} - {exeprience.date_to}</label>
    </div>
  );
}

export default ExperienceCard;

// {
//   company: "The Incubator - The Co-operators Group Limited",
//   date_from: "May 2019",
//   date_to: "Aug. 2019",
//   title: "Software Developer",
//   location: "Waterloo, ON, Canada",
//   tools_and_technologies: ["Git", "Atlassian", "Visual Studio", "MongoDB"],
//   languages_and_frameworks: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "Angular",
//     "NodeJS",
//   ],
//   summary: [],
//   isCoop: true,
// },
// {
//   company: "Mathematics and Statistics Support - WLU",
//   date_from: "Jan. 2019",
//   date_to: "April 2021",
//   title: "Peer Tutor/Mentor",
//   location: "Waterloo, ON, Canada",
//   main_skills: ["Communication", "Punctuality", "Knowledgeable", "Patience"],
//   summary: [],
//   isPartTime: true,
// },