import DetailButton from './detailbutton.js';

function ExperienceCard(props) {
  return (
    <div className="experience-card" style={{ backgroundColor: "#0f0e17" }}>
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

export default ExperienceCard;