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
    
    <><main className="main1" style={(theme === 'light' ? contentStyle.light : contentStyle.dark)}>
      <Link to="/" style={{ textDecoration: 'none' }}><span className="home">Home </span></Link>
      <div className="sobre">
        <h1>Sobre</h1>


        <p className="texto-sobre"> Olá, sou Engenheiro Civil em transição de carreira. Formado em Desenvolvimento Web Full Stack pela escola de programação
        Trybe. No curso desenvolvi aplicações web como um todo, utilizando tecnologias como HTML, CSS, JavaScript,
        React, Node.js, Express, MongoDB, Python, Algoritmos e estrutura de dados. Além disso, aprendi a utilizar ferramentas como Git, GitHub, Heroku e tambem a linguagem SQL, utilizando o banco de dados MySQL. A cada bloco desenvolvi um projeto e ao todo foram mais de 35 projetos.
        Para saber mais entre no meu GitHub em contato e veja meus projetos.
        </p>
      </div>
    </main>
  
      </>

  );
}
  
export default Sobre;
