import './arrow.css'

function Arrow(props) {
  let rotation = "0deg";
  if (props.direction === "up") {
    rotation = "-90deg";
  } else if (props.direction === "right") {
    rotation = "180deg";
  } else if (props.direction === "down") {
    rotation = "90deg";
  }

  return (
    <div
      id="arrow-widget"
      style={{
        transform: `rotate(${rotation})`,
        backgroundColor: props.backgroundColor,
      }}
    >
      <i
        className="fas fa-long-arrow-alt-left fa-2x"
        style={{ margin: "0 auto" }}
      ></i>
    </div>
  );
}

export default Arrow;