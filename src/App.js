import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={List} />
        <Route path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
