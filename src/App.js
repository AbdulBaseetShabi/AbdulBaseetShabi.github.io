import React from "react";
import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";
import Experience from "./routes/experience/experience";
import Projects from "./routes/projects/projects";

function App(props) {
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
