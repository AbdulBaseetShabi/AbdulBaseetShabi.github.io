import './custombutton.css'

function CustomButton(props) {
  return (
    <div
      id="custom-button"
      style={{ backgroundColor: props.backgroundColor, borderRadius: "10px", userSelect: "none"}}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}

export default CustomButton;
