import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PortfolioLayout from "./components/PortfolioLayout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
          <PortfolioLayout>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
        
        {/* <Footer /> */}
        </PortfolioLayout>
    </Router>
  );
}

export default App;
