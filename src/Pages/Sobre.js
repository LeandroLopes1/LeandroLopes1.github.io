import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';


function Sobre() {

  const { theme } = useContext(ThemeContext);

  const contentStyle = {
      dark: {
          color: '#ffeb3b',
          background: '#000000',
      },
      light: {
          background: 'white',
          color: '#334195'
      },
  }

  return (
    
    <main className="main1" style={( theme === 'light' ? contentStyle.light : contentStyle.dark)}>      
    <Link to="/" style={{ textDecoration: 'none' }} ><span className="home">Home </span></Link> 
    <div className="sobre">
    <h1>Sobre</h1>
    
   
    <p className="texto-sobre"> Olá, sou Engenheiro Civil em transição de carreira. Sou estudante da Trybe tendo como objetivo desenvolver minha carreira em Tecnologia.
      Estou muito empolgado com essa nova profissão, pois desde criança sempre muito curioso, quando meu pai chegou em casa com o primeiro desktop ficava horas mexendo nele para entender como tudo funcionava. 
      Sendo assim, quando tive a oportunidade de conhecer a trybe não tive dúvida e aqui estou eu estudando e fazendo esse portfólio para o mundo me conhecer.
      Nas horas que não estou estudando gosto de jogar games e viajar. </p>
    </div>
   </main>
  );
}
  
export default Sobre;
