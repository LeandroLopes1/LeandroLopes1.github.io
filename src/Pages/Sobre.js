import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';
import disney from '../Images/disney.jpg';
import central from '../Images/central.jpg';
import ponte from '../Images/ponte.jpg';
import tata_empire from '../Images/tata_empire.jpg';
import tata from '../Images/tata.jpg';
import casas from '../Images/casas.jpg';
import sobrado from '../Images/sobrado.jpg';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';


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


        <p className="texto-sobre"> Olá, sou Engenheiro Civil em transição de carreira. Sou estudante da Trybe tendo como objetivo desenvolver minha carreira em Tecnologia.
          Estou muito empolgado com essa nova profissão, pois desde criança sempre muito curioso, quando meu pai chegou em casa com o primeiro desktop ficava horas mexendo nele para entender como tudo funcionava.
          Sendo assim, quando tive a oportunidade de conhecer a trybe não tive dúvida e aqui estou eu estudando e fazendo esse portfólio para o mundo me conhecer.
          Nas horas que não estou estudando gosto de jogar games e viajar.</p>
      </div>
    </main>
    <div className="carousel"> 
        <MDBCarousel showIndicators  fade>
          <MDBCarouselInner>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement src={ disney} alt='...' />
              <MDBCarouselCaption>
                <h5>Viagem para Orlando - 2012</h5>
                <p>Meu filho e minha mãe na disney</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={ central } alt='...' />
              <MDBCarouselCaption>
                <h5>Viagem para New York 2015</h5>
                <p>Eu e meu filho no central park</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>


            <MDBCarouselItem>
              <MDBCarouselElement src={ ponte} alt='...' />
              <MDBCarouselCaption>
                <h5>Viagem para New York 2015</h5>
                <p>Eu e meu filho na ponte do brooklyn</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={ tata_empire } alt='...' />
              <MDBCarouselCaption>
                <h5>Viagem para New York 2012</h5>
                <p>Minha esposa no Empire State</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={ tata} alt='...' />
              <MDBCarouselCaption>
                <h5>Viagem para New York 2013</h5>
                <p>Minha esposa e meu filho em Manhattan</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={ casas }alt='...' />
              <MDBCarouselCaption>
                <h5>Casas construidas em 2014</h5>
                <p>Imóveis onde projetei e construi para venda</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={ sobrado } alt='...' />
              <MDBCarouselCaption>
                <h5>Casa construida em 2012</h5>
                <p>Sobrado onde projetei e construi para venda</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>

      </div>
      </>

  );
}
  
export default Sobre;
