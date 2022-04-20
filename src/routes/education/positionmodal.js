import React from "react";
import CustomButton from "../../widget/button/custombutton";

function Modal(props) {
  let activity = props.activity;
  return (
    <div className="modal">
      <div className="modal-content enter-left" style={{position: "relative"}}>
        <label className="inline-block-label-uncentered" style={{margin: "0.4rem 0"}}>
          <span style={{fontWeight: "bold"}}>Position:</span> {activity.title}
        </label>
        <label className="inline-block-label-uncentered" style={{margin: "0.4rem 0"}}>
        <span style={{fontWeight: "bold"}}>Club/Organization:</span> {activity.company}
        </label>
        <label className="inline-block-label-uncentered" style={{margin: "0.4rem 0"}}>
        <span style={{fontWeight: "bold"}}>Duration:</span> {activity.date_from} - {activity.date_to}
        </label>
        <br />
        <hr className="hr-thick" />
        <label className="inline-block-label-uncentered">
          Responsibilities
        </label>
        <hr className="hr-thick" />
        <div>
          {activity.responsibilities === undefined ||
            activity.responsibilities.length === 0 ? (
            <label className="inline-block-label" style={{lineHeight: "30vh"}}>
              No responsibilities added yet
            </label>
          ) : (
            <ul>
              {activity.responsibilities.map((responsibility) => {
                return <li>{responsibility}</li>;
              })}
            </ul>
          )}
        </div>
        <div style={{position: "absolute", bottom: "1rem", width: "100%", left: "0"}}>
          <CustomButton backgroundColor={"#3B8EEA"} text={"Close"} onClick={()=>props.navigation(-1)}/>
        </div>
      </div>
      {(props.current_position === 0) ? null : <img  onClick={()=>props.navigation(props.current_position - 1)} style={{ position: "absolute", left: "2rem", cursor: "pointer", userSelect: "none"}} alt="Go Left" src="https://img.icons8.com/material-outlined/64/3498DB/circled-left.png"/>}
      {(props.current_position === props.max_position) ? null : <img  onClick={()=>props.navigation(props.current_position + 1)} style={{ position: "absolute", right: "2rem", cursor: "pointer", userSelect: "none" }} alt="Go Right" src="https://img.icons8.com/material-outlined/64/3498DB/circled-right.png"/>}
    </div>
  );
}

export default Modal;
