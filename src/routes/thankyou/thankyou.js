import background from "../../assets/images/thankyou.jpg";
import background2 from "../../assets/images/thankyou2.jpg";
import Socials from "../aboutme/social/socials";

function ThankYou(props) {
  return (
    <div
      id="thankyou"
      className="page"
      style={{
        backgroundImage: `url(${props.isDarkMode ? background : background2})`,
        backgroundSize: "cover",
        paddingTop: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <label
          style={{
            display: "block",
            width: "80%",
            textAlign: "center",
            margin: "0 auto",
            fontSize: "3rem",
          }}
        >
          Thank you for taking the time to look through my website
        </label>
        <label
          style={{
            display: "block",
            width: "80%",
            textAlign: "center",
            margin: "1.5rem auto",
            fontSize: "1.5rem",
          }}
        >
          Please feel free to reach me on any of the platform below and remember
          to check out my GitHub repository
        </label>
        <Socials orientation="vertical" />
      </div>
    </div>
  );
}

export default ThankYou;
