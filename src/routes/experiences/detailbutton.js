function DetailButton(props) {
  return (
    <div
      className="view-detail-button"
      onClick={props.showDetails}
      style={{backgroundColor: props.backgroundColor}}
    >
      <label
        style={{ width: "100%", display: "inline-block", textAlign: "center" }}
      >
        {props.text}
      </label>
    </div>
  );
}

export default DetailButton;
