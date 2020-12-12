import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import { Home, About } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/" exact component ={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
