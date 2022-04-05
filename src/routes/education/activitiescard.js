function ActivitiesCard(props){
  let activity = props.activity;
  return (
    <div className="activity-card" style={{minWidth: props.width, height: '50px'}} onClick={()=>props.showReflection(props.index)}>
      <label className="inline-block-label"> {activity.position} | {activity.org} </label>
      <br/>
      <br/>
      <label className="inline-block-label" style={{fontStyle: "italic"}}>{activity.duration}</label>
    </div>
  );
}

export default ActivitiesCard;