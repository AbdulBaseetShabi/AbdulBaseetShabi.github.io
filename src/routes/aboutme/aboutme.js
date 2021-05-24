import "./aboutme.css";
import CustomButton from "../../widget/button/custombutton";
import AnimatedConsole from "../../widget/animatedconsole/animatedconsole";
import Socials from "../../widget/socials/socials";
import GlobalFunctions from "../../global/global-functions";
import GlobalVariables from "../../global/global-variables";

function AboutMe(props) {
  let resume_link =
    "https://github.com/AbdulBaseetShabi/web-resume/raw/master/public/assets/resume/resume.pdf";
  let backgroud = props.isDarkMode
    ? "1TxWFnb7fcauid0i-_SOZzPLopmV9PdA9"
    : "1ZhiZk7ZRtTtt6kK8qYybQiLAq8Daoapp";
  let profilepicture = "1-Rn49ksl9N2nRLT1yKeRzWba0Fa8070J";
  return (
    <div
      className="page"
      id="aboutme"
      style={{
        backgroundImage: `url(${GlobalVariables.GOOGLE_DRIVE_PREFIX}${backgroud})`,
      }}
    >
      <div id="profile-picture-main-container">
        <div
          id="profile-picture-sub-container"
          style={{
            backgroundColor: "#fffffe",
          }}
        ></div>
        <div
          id="profile-picture"
          style={{
            backgroundImage: `url(${GlobalVariables.GOOGLE_DRIVE_PREFIX}${profilepicture})`,
          }}
        ></div>
      </div>
      <div style={{ margin: "3.5rem auto" }} className="show-bottom-console">
        <AnimatedConsole
          width="30%"
          prefixText="$ "
          suffixText="|"
          backgroundColor={props.isDarkMode ? "#16161A" : "#fffffe"}
          texts={[
            "Welcome to $My Website$",
            "$NOTE:$it is still under development",
            "My name is$Abdul-Baseet Shabi",
            "$Too long?$Feel free to call me$Abdul$",
            "This website is $custom made$with a little help from StackOverflow",
            "Notice an $ERROR?$Please let me know",
            "You can reach me on any$platforms$to the$left of your screen",
          ]}
          textChangeInterval={1200}
          typingSpeed={50}
          generalStyle={{
            fontWeight: "bold",
            width: "100%",
            fontSize: "5rem",
            textAlign: "center",
            paddingTop: "0.5rem",
            opacity: "0.95",
          }}
          specialCharaterStyle={{
            color: props.isDarkMode ? "#BB6BD9" : "#0e172c",
            fontWeight: "Bold",
          }}
        />
      </div>

      <div id="custom-button-container">
        <CustomButton
          backgroundColor={props.isDarkMode ? "#7f5af0" : "#fffffe"}
          text="View Resume"
          onClick={() => {
            GlobalFunctions.openLinkInNewTab(
              `https://docs.google.com/viewer?url=${resume_link}`
            );
          }}
        />
      </div>
      <div id="socials-container">
        <Socials
          orientation="horizontal"
          animate={true}
          isDarkMode={props.isDarkMode}
        />
      </div>
    </div>
  );
}

export default AboutMe;
