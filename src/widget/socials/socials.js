import React from "react";
import GlobalFunction from "../../global/global-functions";
import "./socials.css";

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Bsquare480/",
    icon: "fab fa-facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bsquare480/",
    icon: "fab fa-instagram",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdulbaseet/",
    icon: "fab fa-linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/AbdulBaseetShabi",
    icon: "fab fa-github",
  },
];

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.changeToModeColor = this.changeToModeColor.bind(this);
    this.changeToDefaultColor = this.changeToDefaultColor.bind(this);
  }

  changeToModeColor(event) {
    const icons = document.getElementsByClassName("icon");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.color = this.props.darkMode ? "#4E4559" : "#272C45";
    }
    event.target.style.color = "inherit";
    event.target.nextElementSibling.style.visibility = "visible";
  }

  changeToDefaultColor() {
    const icons = document.getElementsByClassName("icon");
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.color = "inherit";
      icons[i].nextElementSibling.style.visibility = "hidden";
    }
  }
  render() {
    let backgroundColorToolTip = this.props.isDarkMode ? "#272c45" : "#DDE3F1";
    let style_container =
      this.props.orientation === "horizontal"
        ? {}
        : {
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
          };
    let style_tooltip =
      this.props.orientation === "horizontal"
        ? {
            marginLeft: "10px",
            backgroundColor: backgroundColorToolTip,
            opacity: 0.8,
          }
        : {
            position: "relative",
            bottom: "-48px",
            left: "-58px",
            backgroundColor: backgroundColorToolTip,
            opacity: 0.8,
          };
    return (
      <div style={style_container}>
        {SOCIALS.map((social, index) => {
          return (
            <div className="social" key={index}>
              <i
                onMouseEnter={this.changeToModeColor}
                onMouseLeave={this.changeToDefaultColor}
                onClick={() => {
                  GlobalFunction.openLinkInNewTab(social.url);
                }}
                className={`${social.icon} fa-3x icon ${
                  this.props.animate ? "roll-in" : ""
                }`}
              ></i>
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
