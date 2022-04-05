function EducationCard(props) {
  return (
    <div
      id="education-card"
      position={props.position}
    >
      <label className="school-label">
        {props.school.toUpperCase()}
      </label>
      <br />
      <label
        className="inline-block-label"
        style={{
          fontSize: "1.5rem",
          margin: "1rem auto",
        }}
      >
        {props.program}
      </label>
      <br />
      <label
        className="inline-block-label"
        style={{ fontSize: "1.1rem", fontStyle: "italic" }}
      >{`${props.from.toUpperCase()} - ${props.to.toUpperCase()}`}</label>
    </div>
  );
}

export default EducationCard;
