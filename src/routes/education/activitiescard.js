function ActivitiesCard(props){
  let activity = props.activity;
  return (
    <div className="activity-card" style={{width: props.width, height: '80px'}} onClick={()=>props.showReflection(props.index)}>
      <label className="inline-block-label"> {activity.title}</label>
      <label className="inline-block-label">{activity.company}</label>
      <label className="inline-block-label" style={{fontStyle: "italic"}}>{activity.date_from} - {activity.date_to}</label>
    </div>
  );
}

export default ActivitiesCard;