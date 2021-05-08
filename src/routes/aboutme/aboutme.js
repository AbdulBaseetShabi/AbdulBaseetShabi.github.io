import "./aboutme.css";
import background from "../../assets/images/aboutme.jpg";
import profilepicture from "../../assets/images/profile.jpg";
import CustomButton from "../../widget/button/custombutton";
import AnimatedConsole from "../../widget/animatedconsole/animatedconsole";
import Socials from "../../widget/socials/socials";
import GlobalFunctions from "../../global/global-functions";

function AboutMe(props) {
  let resume_link ="https://github.com/AbdulBaseetShabi/web-resume/raw/master/public/assets/resume/resume.pdf";
  return (
    <div
      className="page"
      id="aboutme"
      style={{ backgroundImage: `url(${background})` }}
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
            backgroundImage: `url(${profilepicture})`,
          }}
        ></div>
      </div>
      <div style={{ margin: "3.5rem auto" }} 
          className="show-bottom-console">
        <AnimatedConsole
          width="30%"
          prefixText="$ "
          suffixText="|"
          backgroundColor= {props.isDarkMode ? "#16161A" : "#FFFFFE"}
          texts={[
            "Welcome to $My Website$",
            "$NOTE:$it is still under development",
            "My name is$Abdul-Baseet",
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
          specialCharaterStyle={{ color: "#BB6BD9", fontWeight: "Bold" }}
        />
      </div>

      <div id="custom-button-container">
        <CustomButton
          backgroundColor= {props.isDarkMode ? "#7f5af0" : "yellow "}
          text="View Resume"
          onClick={() => {
            GlobalFunctions.openLinkInNewTab(`https://docs.google.com/viewer?url=${resume_link}`);
          }}
        />
      </div>
      <div id="socials-container">
        <Socials orientation="horizontal" />
      </div>
    </div>
  );
}

export default AboutMe;
