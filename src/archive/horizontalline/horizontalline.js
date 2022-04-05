function HorizontalLine(props) {
  return (
    <div
      style={{
        height: "1px",
        borderBottom: `4px solid ${props.color}`,
        width: "60%",
        margin: "10px auto",
      }}
    ></div>
  );
}

export default HorizontalLine;