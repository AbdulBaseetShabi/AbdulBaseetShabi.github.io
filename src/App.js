import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";
import Experience from "./routes/experience/experience";
import Projects from "./routes/projects/projects";

function App (props) { 
    return (
      <Router>
        <NavigationBar/>
        <Routes>         
          <Route exact path="/about" element={<AboutMe  />}/>
          <Route exact path="/education" element={<Education  />}/>
          <Route exact path="/experience" element={<Experience  />}/>
          <Route exact path="/projects" element={<Projects  />}/>
          <Route exact path="*" element={<AboutMe  />}/>
         </Routes>
      </Router>
    );
}

export default App;
