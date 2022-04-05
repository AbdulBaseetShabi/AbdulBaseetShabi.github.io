function ActivitiesCard(props){
  return (
    <div className="activity-card" style={{minWidth: props.width, height: '50px'}}>
      <label className="inline-block-label">Position | Organization</label>
      <br/>
      <br/>
      <label className="inline-block-label" style={{fontStyle: "italic"}}>Date From - Date To</label>
    </div>
  );
}

export default ActivitiesCard;