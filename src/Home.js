import React from 'react';
import { Link} from 'react-router-dom';

function Home() {
    return (
      <div>
          aqui sera a home
          <nav>
              <Link to="/projetos"> Projetos </Link>
             
          </nav>
      </div>
      
    );
  }
  
  export default Home;