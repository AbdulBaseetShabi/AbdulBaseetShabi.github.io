import React from "react";
import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";
import Experiences from "./routes/experiences/experiences";
import Projects from "./routes/projects/projects";
import ThankYou from "./routes/thankyou/thankyou";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState((prevState) => {
      return {
        isDarkMode: !prevState.isDarkMode,
      };
    });
  }

  render() {
    return (
      <div id="app" style={{color: this.state.isDarkMode ? '#fffffe' : '#000000'}}>
        <NavigationBar
          isDarkMode={this.state.isDarkMode}
          changeTheme={this.changeTheme}
        />
        <AboutMe isDarkMode={this.state.isDarkMode} />
        <Education isDarkMode={this.state.isDarkMode} />
        <Experiences isDarkMode={this.state.isDarkMode} />
        <Projects isDarkMode={this.state.isDarkMode} />
        <ThankYou isDarkMode={this.state.isDarkMode} />
      </div>
    );
  }
}

export default App;
