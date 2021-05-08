import GlobalFuntions from "../../global/global-functions.js";

function CustomButton(props) {
  return (
    <div
      className="view-detail-button"
      onClick={() => {
        GlobalFuntions.openLinkInNewTab(props.link);
      }}
      style={{
        backgroundColor: props.backgroundColor,
        width: `calc((100% / ${props.noOfButtons}) - (5px * ${props.noOfButtons})`,
      }}
    >
      <label className="inline-block-label">{props.text}</label>
    </div>
  );
}

export default CustomButton;
