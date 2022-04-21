import AnimatedConsole from "../../widget/animatedconsole/animatedconsole";
import GlobalVariables from "../../global/global-variables";
import Socials from "../../widget/socials/socials";
import "./aboutme.css";

function AboutMe() {
  return (
    <div id="about" className="page">
      <div id="about-me-body">
        <div id="about-me-content">
          <AnimatedConsole
            commandPrefix={
              <label style={{ color: "#21CB8B", fontWeight: "bolder" }}>
                abdul@Abdul
                <span style={{ color: "#FFFFFF" }}>:</span>
                <label style={{ color: "#3B8EEA" }}>/user/value</label>
              </label>
            }
            suffixText="*"
            texts={GlobalVariables.DESCRIPTIONS}
            command={" $ cat abdul_summary.txt"}
            commandTypingSpeed={50}
            backgroundColor={"black"}
            textChangeInterval={1500}
            typingSpeed={10}
            typingStyle={{
              fontSize: "1rem",
              textAlign: "initial",
              color: "#FFFFFE",
              fontFamily: "'Ubuntu Mono', monospace",
              width: "100%",
              opacity: "0.95",
            }}
            specialCharaterStyle={{
              color: "#BB6BD9",
              fontWeight: "Bold",
            }}
          >
            <Socials />
          </AnimatedConsole>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
