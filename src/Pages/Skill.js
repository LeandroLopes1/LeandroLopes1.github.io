import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import  colaboraçao from '../Images/colaboracao.png'
import  comunicaçao from '../Images/Comunicação.jpg'
import  criatividade from '../Images/criatividade.jpg'
import  inteligencia from '../Images/inteligencia.png'
import  pensamento from '../Images/Pensamento.png'
import  liderança from '../Images/liderança.png'
import  htmlLogo from '../Images/html.png'
import  cssLogo from '../Images/logo-css-3-1024.png'
import  javaLogo from '../Images/java.png'
import  gitLogo from '../Images/git.png'
import  reactLogo from '../Images/react.png'
import  sqlLogo from '../Images/sql.png'
import  mongodbLogo from '../Images/mongo1.png'
import  nodejsLogo from '../Images/nodelogo.png'

function Skill() {
  document.title = "Skill";

  const { theme } = useContext(ThemeContext);

  const contentStyle = {
      dark: {
          color: '#7371fc',
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
  

   <div>
    <div className="skill">
   <h1  className='h1-Skill'>Soft Skill</h1>
   <div class="row row-cols-1 row-cols-md-3 g-4">
     <div class="col">
    <div class="card h-100">
      <img src={ colaboraçao } alt="foto de colaboração" class="card-img-top" className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Colaboração</h5>
      </div>
    </div>
    </div>

  <div class="col">
    <div class="card h-100">
      <img src={ comunicaçao } alt="foto de comunicação"  class="card-img-top" className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Comunicação</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ criatividade } alt="foto de criatividade"  class="card-img-top"  className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Criatividade</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ inteligencia } alt="foto de inteligencia"  class="card-img-top" className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Inteligência Emocional</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ pensamento } alt="foto de pensamento"  class="card-img-top" className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Pensamento Crítico</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ liderança } alt="foto de liderança"  class="card-img-top" className="foto-soft-skill1"/>
      <div class="card-body">
        <h5 class="card-title">Liderança</h5>
      </div>
    </div>
    </div>
  </div>
  

   
  <div className='div-hard'>
   <h1  className='h1-Skill'>Hard Skill</h1>
   <div class="row row-cols-1 row-cols-md-3 g-4">
   <div class="col">
    <div class="card h-100">
      <img src={ htmlLogo } alt="foto logo html"  class="card-img-top" className="foto-hard-skill1" />
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ cssLogo } alt="foto logo css" class="card-img-top"className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ javaLogo } alt="foto logo javascript"  class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img img src={ gitLogo } alt="foto logo git" class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ reactLogo } alt="foto logo react" class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ sqlLogo } alt="foto logo SQL"class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ mongodbLogo } alt="foto logo mongoDB" class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={ nodejsLogo } alt="foto logo nodeJS"  class="card-img-top" className="foto-hard-skill1"/>
    </div>
  </div>
 
</div>
</div>
</div>
</div>
</main>
  );
}
  
export default Skill;
  