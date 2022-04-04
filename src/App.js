import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";
import Experiences from "./routes/experiences/experiences";
import Projects from "./routes/projects/projects";
import ThankYou from "./routes/thankyou/thankyou";

function App (props) { 
    return (
      <Router>
        <NavigationBar/>
        <Routes>
          <Route exact path="/" element={<AboutMe  />}/>
          <Route exact path="/about" element={<AboutMe  />}/>
          <Route exact path="/education" element={<Education  />}/>
          <Route exact path="/experience" element={<Experiences  />}/>
          <Route exact path="/projects" element={<Projects  />}/>
        </Routes>
      </Router>
    );
}

export default App;
