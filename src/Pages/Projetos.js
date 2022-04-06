import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import front from '../Images/front.png';
import mern from '../Images/mern.png';
import recipes from '../Images/recipes.png';


function Projetos() {

  const { theme } = useContext(ThemeContext);

  const contentStyle = {
      dark: {
          color: 'black',
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

      <div>
    <div className="skill">

   <div class="row row-cols-1 row-cols-md-3 g-4">
   <div class="col">
    <div class="card h-100">
    <h5 class="card-title">Projeto Front-end Store</h5>
      <img src={ front } alt="foto de liderança"  class="card-img-top"  className="foto-projeto"/>
      <div class="card-body">
      <a href="https://cryptic-thicket-42793.herokuapp.com/" class="card-link">Projeto</a>
      <a href="https://github.com/LeandroLopes1/project-online-store" class="card-link">Repositório</a>
      </div>
      <p>* projeto feito para tela de desktop</p>
    </div>
    </div>

    
  <div class="col">
    <div class="card h-100">
    <h5 class="card-title">Projeto MERN To-do list</h5>
      <img src={ mern} alt="foto de liderança"  class="card-img-top"  className="foto-projeto" />
      <div class="card-body">
     
      <a href="https://github.com/LeandroLopes1/MERN-Ebytr" class="card-link">Repositório</a>
      </div>
    </div>
    </div>

    <div class="col">
    <div class="card h-100">
    <h5 class="card-title">Projeto App de Receitas</h5>
      <img src={ recipes } alt="foto de liderança"  class="card-img-top"  className="foto-projeto" />
      <div class="card-body">
      <a href="https://recipes-app-25.herokuapp.com/" class="card-link">Projeto</a>
      <a href="https://github.com/LeandroLopes1/project-recipes-app" class="card-link">Repositório</a>
      </div>
      <p>* projeto feito para tela mobile</p>
    </div>
    </div>
    </div>
    </div>
    </div>
  

     
  


    </main>
  
      </>

  );
}
  
export default Projetos;