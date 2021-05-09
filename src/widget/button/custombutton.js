import './custombutton.css'

function CustomButton(props) {
  return (
    <div
      id="custom-button"
      style={{ backgroundColor: props.backgroundColor, userSelect: "none"}}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
}

export default CustomButton;
