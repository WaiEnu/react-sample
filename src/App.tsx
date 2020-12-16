import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import PageA from "./PageA";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/page_a" exact component={PageA} />
    </BrowserRouter>
  );
}

export default App;
