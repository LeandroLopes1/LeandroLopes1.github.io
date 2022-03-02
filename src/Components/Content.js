import { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../Context/ThemeContext';
import  homeImagem from '../Images/mesapc.png'
import { init } from 'ityped';


const Content = () => {

    const textRef = useRef()

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front-End', 'Back-End', 'Full Stack']
     });
    },[]);

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
           
         
                <div className="imgContainer" > 
            <img src={ homeImagem } alt="foto de laptop" className="foto" class="img-fluid"/>
            </div>
         
            <div className="wrapper"> 
            <h2> Hi There, I'm</h2>
            <h1> Leandro Lopes</h1>
            <h3><span ref={ textRef }></span> Developer </h3>
            </div>
           
        
        </main>
    )
}

export default Content;