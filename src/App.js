import React from "react";
import { Header, About, Resume, League, ChickCorea } from "./components/common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/league" component={League} />
          <Route path="/chick-corea" component={ChickCorea} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
