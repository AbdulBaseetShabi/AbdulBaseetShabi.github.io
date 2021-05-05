import './App.css';

import NavigationBar from './widget/navigationbar/navigationbar';
import AboutMe from './routes/aboutme/aboutme.js';

function App() {
  return (<div>
    <NavigationBar/>
    <AboutMe/> 
  </div>);
}

export default App;
