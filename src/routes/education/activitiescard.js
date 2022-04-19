function ActivitiesCard(props){
  let activity = props.activity;
  return (
    <div className="activity-card" style={{minWidth: props.width, height: '50px'}} onClick={()=>props.showReflection(props.index)}>
      <label className="inline-block-label"> {activity.title} | {activity.company} </label>
      <br/>
      <label>Try different divider and color for position, org </label>
      <br/>
      <label className="inline-block-label" style={{fontStyle: "italic"}}>{activity.date_from} - {activity.date_to}</label>
    </div>
  );
}

export default ActivitiesCard;