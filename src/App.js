import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Projetos from "./Pages/Projetos"
import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Route exact path="/" component={ Home } />
    <Route exact path="/projetos" component= { Projetos } />
    </BrowserRouter>  
  );
}

export default App;
