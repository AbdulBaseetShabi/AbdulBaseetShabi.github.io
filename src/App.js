import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";
import Experiences from "./routes/experiences/experiences";
import Projects from "./routes/projects/projects";
import ThankYou from "./routes/thankyou/thankyou";

function App() {
  return (
    <div id="app">
      <NavigationBar />
      <AboutMe />
      <Education/>
      <Experiences/>
      <Projects/>
      <ThankYou/>
    </div>
  );
}

export default App;
