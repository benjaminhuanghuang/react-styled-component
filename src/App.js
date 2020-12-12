import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components/macro'

//
import { Home, About } from "./pages";


const MainWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto
`;
function App() {
  return (
    <MainWrapper>
    <Router>
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/" exact component ={Home}/>
      </Switch>
    </Router>
    </MainWrapper>
  );
}

export default App;
