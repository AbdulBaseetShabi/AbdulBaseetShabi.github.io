import Socials from "../../widget/socials/socials";
import GlobalVariables from "../../global/global-variables";

function ThankYou(props) {
  let dark_mode_background = "1b9CZyHaI9lNftskYSyu1F8YVurqvWCtW";
  let light_mode_background = "1Z5lfS0ytG35roa-dgtG-y4VaJQ48XVYD";
  return (
    <div
      id="thankyou"
      className="page"
      style={{
        backgroundImage: `url(${GlobalVariables.GOOGLE_DRIVE_PREFIX}${props.isDarkMode ? dark_mode_background : light_mode_background})`,
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
