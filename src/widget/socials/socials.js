import React from "react";
import GlobalFunction from "../../global/global-functions";
import "./socials.css";

const SOCIALS = [
  {
    name: "Resume",
    url: "https://docs.google.com/viewer?url=https://github.com/AbdulBaseetShabi/web-resume/raw/master/public/assets/resume/resume.pdf",
    src: "https://img.icons8.com/plasticine/90/000000/file.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdulbaseet/",
    src: "https://img.icons8.com/bubbles/100/000000/linkedin.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bsquare480/",
    src: "https://img.icons8.com/clouds/100/000000/instagram-new--v2.png",
  },
  {
    name: "Email",
    url: "mailto:shab7430@mylaurier.ca",
    src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/000000/external-email-digital-nomad-flaticons-lineal-color-flat-icons.png",
  },
  {
    name: "GitHub",
    src: "https://img.icons8.com/cute-clipart/75/000000/github.png",
    url: "https://github.com/AbdulBaseetShabi",
  },

];

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.removeAnimation = this.removeAnimation.bind(this);
  }

  animate(event) {
    event.target.nextElementSibling.style.visibility = "visible";
  }

  removeAnimation(event) {
    event.target.nextElementSibling.style.visibility = "hidden";
  }

  render() {
    let style_container =
      this.props.orientation === "horizontal"
        ? {}
        : {
            display: "flex",
            alignItems: "center",
            margin: "1.5rem auto",
            width: "50vw",
            justifyContent: "center",
          };
    let style_tooltip =
      this.props.orientation === "horizontal"
        ? {
            marginLeft: "10px",
            backgroundColor: "#272c45",
            opacity: 0.8,
            color: "white",
          }
        : {
            backgroundColor: "#272c45",
            // opacity: 0.8,
            color: "white",
            display: "block",
            textAlign: "center",
            position: "relative",
            bottom: "0",
            fontStyle: "italic",
          };
    return (
      <div id="socials-container" style={style_container}>
        {SOCIALS.map((social, index) => {
          return (
            <div className="social" key={index} style={{width: `${100/SOCIALS.length}%`}}>
              <img
                className="icon"
                alt={social.name}
                src={social.src}
                onMouseEnter={this.animate}
                onMouseLeave={this.removeAnimation}
                onClick={() => {
                  GlobalFunction.openLinkInNewTab(social.url);
                }}
              ></img>
              <label className="tooltip" style={style_tooltip}>
                {social.name}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Socials;
