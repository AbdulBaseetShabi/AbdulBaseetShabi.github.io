import React from "react";
import "./socials.css";

const SOCIALS = [
  {
    name: "Facebook",
    url: "http://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    name: "Instagram",
    url: "http://www.instagram.com",
    icon: "fab fa-instagram",
  },
  {
    name: "LinkedIn",
    url: "http://www.facebook.com",
    icon: "fab fa-linkedin",
  },
  {
    name: "GitHub",
    url: "http://github.com",
    icon: "fab fa-github",
  },
];

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.changeToModeColor = this.changeToModeColor.bind(this);
    this.changeToDefaultColor = this.changeToDefaultColor.bind(this);
  }

  openLink(link) {
    window.open(link, "_blank");
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
    let style_container =
      this.props.orientation === "horizontal"
        ? { backgroundColor: "transparent" }
        : {
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
          };
    let style_tooltip =
      this.props.orientation === "horizontal"
        ? { marginLeft: "10px" }
        : { position: "relative", bottom: "-48px", left: "-58px" };
    return (
      <div style={style_container}>
        {SOCIALS.map((social, index) => {
          return (
            <div className="social" key={index}>
              <i
                onMouseEnter={this.changeToModeColor}
                onMouseLeave={this.changeToDefaultColor}
                onClick={() => {
                  this.openLink(social.url);
                }}
                className={`${social.icon} fa-3x icon`}
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
