import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home"
import Projetos from "./Projetos"

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Route exact path="/" component={ Home } />
    <Route exact path="/projetos" component= { Projetos } />
    </BrowserRouter>
  );
}

export default App;
