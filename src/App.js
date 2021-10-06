import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Projects";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">   
          <Home />
          <About />
          <Project />  
          <Footer />      
    </div>
    </Router>
    
  );
}

export default App;
