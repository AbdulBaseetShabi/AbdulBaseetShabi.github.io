function EducationCard(props) {
  return (
    <div
      style={{
        margin: props.position % 2 === 0 ? "0 1rem 0 0" : "0 0 0 1rem",
      }}
      className="education-card"
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
        {props.program.toUpperCase()}
      </label>
      <br />
      <label
        className="inline-block-label"
        style={{ fontSize: "1.1rem" }}
      >{`${props.from.toUpperCase()} - ${props.to.toUpperCase()}`}</label>
    </div>
  );
}

export default EducationCard;
