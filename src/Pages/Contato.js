import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import linkdin from '../Images/linkdin.png';
import github from '../Images/github.png';


function Contato() {
  document.title = "Contato";

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
    
    <>
    <main className="main1" style={(theme === 'light' ? contentStyle.light : contentStyle.dark)}>
      <Link to="/" style={{ textDecoration: 'none' }}><span className="home">Home </span></Link>
    <div className='contato'>
    <h1 className='h1-contato'>Contato</h1>
   
          <div className='socials'>
            <a href="https://github.com/LeandroLopes1" rel='noreferrer' target='_blank' className="contact-link">
              <img src={github} alt="github" />
          
            </a>
            <a href="https://www.linkedin.com/in/leandroclopes/" rel='noreferrer' target='_blank' className="contact-link">
              <img src={ linkdin} alt="linkedin" />
          
            </a>
          </div>


          <h1 className='form-title'>Envie sua Mensagem!</h1>
          <div className='contact-form'>
            <form action="https://formsubmit.co/leandro_carlos@uol.com.br" method="POST">
                <input type="text" name="name" placeholder="Name*" required className='formie' />
                <input type="email" name="email" placeholder="Email*" required className='formie' />
                <input type="text" name="_subject" placeholder="Assunto" className='formie' />
                <textarea placeholder="Mensagem" class="form-control" name="message" rows="5" required className='formie'></textarea>

                <input type="hidden" name="_next" value="https://leandrolopes1.github.io/contato" />
                <input type="hidden" name="_captcha" value="false" />
                <button type="submit" className='form-btn'>Send</button>
            </form>
            </div>
    

    </div>
  
    </main>
    </>

  );
}
  
export default Contato;
