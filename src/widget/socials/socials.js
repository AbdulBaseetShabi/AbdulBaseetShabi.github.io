import React from "react";
import GlobalFunction from "../../global/global-functions";
import "./socials.css";

const SOCIALS = [
  {
    name: "Resume",
    url: "https://docs.google.com/viewer?url=https://github.com/AbdulBaseetShabi/web-resume/raw/master/public/assets/resume/resume.pdf",
    src: "https://img.icons8.com/plasticine/60/000000/file.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdulbaseet/",
    src: "https://img.icons8.com/fluency/60/000000/linkedin.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bsquare480/",
    src: "https://img.icons8.com/fluency/60/000000/instagram-new.png",
  },
  {
    name: "Email",
    url: "mailto:shab7430@mylaurier.ca",
    src: "https://img.icons8.com/fluency/60/000000/email-open.png",
  },
  {
    name: "GitHub",
    src: "https://img.icons8.com/glyph-neue/64/FFFFFF/github.png",
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
    //TODO: fix tooltip, align them: use relative parent -> absolut child
    event.target.nextElementSibling.style.visibility = "hidden";
  }

  render() {
    return (
      <div id="socials-container">
        {SOCIALS.map((social, index) => {
          return (
            <div className="social" key={index} style={{width: `${100/SOCIALS.length}%`}}>
              <img
                className="icon enter-left"
                alt={social.name}
                src={social.src}
                onMouseEnter={this.animate}
                onMouseLeave={this.removeAnimation}
                onClick={() => {
                  GlobalFunction.openLinkInNewTab(social.url);
                }}
              ></img>
              <label className="tooltip">
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
