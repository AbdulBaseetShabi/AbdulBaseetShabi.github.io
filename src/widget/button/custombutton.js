import './custombutton.css'

function CustomButton(props) {
  return (
    <div
      id="custom-button"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.text}
    </div>
  );
}

export default CustomButton;
