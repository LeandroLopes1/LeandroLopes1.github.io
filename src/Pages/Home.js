import React from 'react';

import Header from '../Components/Header';
import Content from '../Components/Content';

function Home() {
  document.title = 'Home';
    return (
      <div>
        <Header />
        <Content />
      </div>
      
    );
  }
  
  export default Home;