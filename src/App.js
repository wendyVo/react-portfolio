import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PortfolioLayout from "./components/PortfolioLayout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe"

function App() {
  return (
    <Router>
      <div>
          <PortfolioLayout>
        
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/aboutme" component={AboutMe} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} /> */}
        
        {/* <Footer /> */}
        </PortfolioLayout>
      </div>
    </Router>
  );
}

export default App;
