import "./aboutme.css";
import background from "../../assets/images/aboutme.jpg";
import profilepicture from "../../assets/images/profile.jpg";
import CustomButton from "../../widget/button/custombutton";
import AnimatedConsole from "../../widget/animatedconsole/animatedconsole";
import Socials from "./social/socials";
import GlobalFunctions from "../../global/global-functions";

function AboutMe() {
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
      <div style={{ marginTop: "3.5rem" }}>
        <AnimatedConsole
          width="30%"
          prefixText="$ "
          suffixText="|"
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
            opacity: "95%",
          }}
          specialCharaterStyle={{ color: "#BB6BD9", fontWeight: "Bold" }}
        />
      </div>

      <div id="custom-button-container">
        <CustomButton
          backgroundColor="#272C45"
          opacity="80%"
          text="View Resume"
          onClick={() => {
            GlobalFunctions.openLinkInNewTab("/assets/resume/resume.pdf");
          }}
        />
      </div>
      <div id="svg-container">
        <svg
          width="100%"
          viewBox="0 0 1440 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L80 17.6301C160 35.4492 320 70.4258 480 68.0625C640 65.6992 800 25.0508 960 17.6301C1120 9.92578 1280 35.4492 1360 47.8801L1440 60.5V121H1360C1280 121 1120 121 960 121C800 121 640 121 480 121C320 121 160 121 80 121H0V0Z"
            fill="#0F0E17"
            fillOpacity="0.98"
          />
        </svg>
      </div>
      <div id="socials-container">
        <Socials orientation="horizontal" />
      </div>
    </div>
  );
}

export default AboutMe;
