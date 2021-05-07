import React from "react";
import "./navigationbar.css";

const ROUTES = [
  { name: "about me", route: "#aboutme" },
  { name: "education", route: "#education" },
  { name: "experiences", route: "#experiences" },
  { name: "projects", route: "#projects" },
];

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_route: ROUTES[0].name,
    };
  }

  render() {
    return (
      <div id="navigation-bar">
        <div style={{ width: "15%" }}>Logo</div>
        <div style={{ width: "70%", display: "flex" }}>
          {ROUTES.map((route, index) => {
            return (
              <div
                style={{
                  width: `${100 / ROUTES.length}%`,
                  display: "flex",
                  alignItems: "center",
                }}
                key={index}
              >
                <a href={route.route} className="navigation-item">
                  <label>{route.name.toUpperCase()}</label>
                </a>
              </div>
            );
          })}
        </div>
        <div style={{ width: "15%" }}>
          <i
            className="fas fa-adjust fa-2x"
            onClick={() => {
              this.props.changeTheme();
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default NavigationBar;
