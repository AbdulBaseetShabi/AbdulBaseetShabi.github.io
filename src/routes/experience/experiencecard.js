import React from "react";

const CARD_COLOR = {
  'coop': "#FC6B5E",
  'part': "#5B50AE"
};

function ExperienceCard(props) {
  let exeprience = props.experience;
  return (
    <div className="experience-card" style={{borderLeft: `5px solid ${CARD_COLOR[props.type]}`}}>
      <label className="inline-block-label" style={{fontWeight: 'bolder'}}>{exeprience.title} </label>
      <label className="inline-block-label" style={{fontWeight: 'bold'}}> {exeprience.company} </label>
      <label className="inline-block-label">{exeprience.location}</label>
      <label className="inline-block-label">{exeprience.date_from} - {exeprience.date_to}</label>
      {props.type !== 'part' ? <label>{
        exeprience.languages_and_frameworks.map((x, i)=>{
          if (i === (exeprience.languages_and_frameworks.length - 1)){
            return (` ${x} `)
          }

          return (` ${x} |`)
        })
      }</label>: null}
    </div>
  );
}

export default ExperienceCard;