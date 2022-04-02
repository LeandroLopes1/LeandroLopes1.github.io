import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Skill from "./Pages/Skill";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Route exact path="/" component={ Home } />
    <Route exact path="/projetos" component= { Projetos } />
    <Route exact path="/sobre" component= { Sobre } />
    <Route exact path="/skill" component= { Skill } />
    <Route exact path="/contato" component= { Contato } />
    </BrowserRouter>  
  );
}

export default App;
