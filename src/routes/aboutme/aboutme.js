import "./aboutme.css";
import background from "../../assets/images/aboutme.jpg";
import profilepicture from "../../assets/images/profile.jpg";
import AnimatedText from "../../widget/animatedtext/animatedtext";

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
            height: "200px",
            width: "200px",
            borderRadius: "100px",
            margin: "auto",
          }}
        ></div>
        <div
          id="profile-picture"
          style={{
            backgroundImage: `url(${profilepicture})`,
            height: "180px",
            width: "180px",
            borderRadius: "100px",
          }}
        ></div>
      </div>
      <AnimatedText
        prefixText="> "
        suffixText="|"
        texts={["What$is$my$name$", "life$is$fair", "what$to do"]}
        textChangeInterval={2100}
        typingSpeed={200}
        generalStyle={{ fontWeight: "bold", backgroundColor: "transparent", width: "100%", fontSize: "5rem", textAlign: "center", marginTop: "6rem"}}
        specialCharaterStyle={{ color: "#BB6BD9" }}
      />
    </div>
  );
}

export default AboutMe;
