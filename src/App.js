import "./App.css";

import NavigationBar from "./widget/navigationbar/navigationbar";
import AboutMe from "./routes/aboutme/aboutme.js";
import Education from "./routes/education/education";

function App() {
  return (
    <div id="app">
      <NavigationBar />
      <AboutMe />
      <Education/>
    </div>
  );
}

export default App;
