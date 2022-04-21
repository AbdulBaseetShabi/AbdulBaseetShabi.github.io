import React from "react";
import GlobalVariables from "../../global/global-variables"
import GlobalFunction from "../../global/global-functions";
import "./socials.css";

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
        {GlobalVariables.SOCIALS.map((social, index) => {
          return (
            <div className="social" key={index} style={{width: `${100/GlobalVariables.SOCIALS.length}%`}}>
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
