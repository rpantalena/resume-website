import React from "react";
import {
  Header,
  Home,
  About,
  Resume,
  Fortnite,
  ItemDetail,
  ChickCorea,
} from "./components/common";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/fortnite' exact component={Fortnite} />
          <Route path='/fortnite/:id' component={ItemDetail} />
          <Route path='/chick-corea' component={ChickCorea} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
