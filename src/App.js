import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import List from "./pages/portfolio/List";
import NavTabs from "./support/navbar/NavBar";
import Wrapper from "./support/Wrapper/index";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
        <Route exact path="/Nicholas-Boutin-Coding-Portfolio/about" component={About} />
        <Route exact path="/Nicholas-Boutin-Coding-Portfolio/portfolio" component={List} />
        <Route exact path="/Nicholas-Boutin-Coding-Portfolio/contact" component={Contact} />
        <Route exact path="/Nicholas-Boutin-Coding-Portfolio" component={About} />
        <Route exact path="*" component={About} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
