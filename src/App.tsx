import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import PageA from "./PageA";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page_a" exact component={PageA} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;