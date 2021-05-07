function DetailButton(props) {
  return (
    <div className="view-detail-button" onClick={props.showDetails}>
      <label
        style={{ width: "100%", display: "inline-block", textAlign: "center" }}
      >
        {props.text}
      </label>
    </div>
  );
}

export default DetailButton;