import GlobalVariables from "../../global/global-variables";
import AnimatedConsole from "../../widget/animatedconsole/animatedconsole";
import Socials from "../../widget/socials/socials";
import "./aboutme.css";

function ProfilePic() {
  return (
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
          backgroundImage: `url(${GlobalVariables.GOOGLE_DRIVE_PREFIX}${GlobalVariables.PROFILE_PICTURE})`,
        }}
      ></div>
    </div>
  );
}
// TDO: do a split instead of straight down
function Body() {
  return (
    <div id="about-me-body">
      <div id="about-me-content">
        <div className="about-me-column">
          <ProfilePic />
          <Socials />
        </div>
        <div className="about-me-column">
          <AnimatedConsole
            commandPrefix={
              <label style={{ color: "#21CB8B", fontWeight: "bolder" }}>
                abdul@Abdul
                <span style={{ color: "#FFFFFF" }}>:</span>
                <label style={{ color: "#3B8EEA" }}>/user/value</label>
              </label>
            }
            suffixText="*"
            texts={[
              "👋🏿 Hi, I am Abdul-Baseet Shabi",
              "🙂 Abdul for short",
              "⭐ Welcome to my personal website ⭐",
              "🏗️ It was built from scratch on React",
              "👨‍💻 Full-Stack Developer",
              "🤖 Technological Euthasits",
              "📚 Favorite stack: MERN (MongoDB + Express + React + NodeJs)",
              "🤳🏿 Favourite language: Tie between JavaScript and Python",
              "💹 Unique value proposition: Experience in varying industries",
            ]}
            command={" $ cat abdul_summary.txt"}
            commandTypingSpeed={50}
            backgroundColor={"black"}
            textChangeInterval={1500}
            typingSpeed={20}
            typingStyle={{
              fontSize: "1rem",
              textAlign: "initial",
              // paddingTop: "0.5rem",
              color: "#FFFFFE",
              fontFamily: "'Ubuntu Mono', monospace",
              width: "100%",
              opacity: "0.95",
            }}
            specialCharaterStyle={{
              color: "#BB6BD9",
              fontWeight: "Bold",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function AboutMe(props) {
  return (
    <div className="page" style={{ backgroundColor: "#B1D0E0" }}>
      <Body />
    </div>
  );
}

export default AboutMe;
