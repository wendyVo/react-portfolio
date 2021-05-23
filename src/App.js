import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioLayout from "./components/PortfolioLayout";

function App() {
  return (
    <Router>
      <div>
          <PortfolioLayout>
        
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} /> */}
        
        {/* <Footer /> */}
        </PortfolioLayout>
      </div>
    </Router>
  );
}

export default App;
