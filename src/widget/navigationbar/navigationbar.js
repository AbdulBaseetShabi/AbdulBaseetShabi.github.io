import React from "react";
import "./navigationbar.css";

const ROUTES = [
  { name: "about me", route: "about" },
  { name: "education", route: "education" },
  { name: "experiences", route: "experience" },
  { name: "projects", route: "projects" },
];

const LINK_STYLE = {
  display: "block",
  textAlign: "center",
  width: `calc(${100 / ROUTES.length}% - 5%)`,
  margin: "auto 0",
  height: "40px",
  float: "left",
  color: "black",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0)",
  textDecoration: "none",
}

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <div id="nav-bar">
        <div id="nav-bar-content">
          {ROUTES.map((route, index) => {
            return (
              <a href={`#${route.route}`} className="nav-bar-link" key={index} style={LINK_STYLE}>
                <label style={{lineHeight: '40px'}}>{route.name}</label>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
