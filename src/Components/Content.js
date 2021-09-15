import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';


const Content = () => {
    const { theme } = useContext(ThemeContext);

    const contentStyle = {
        dark: {
            color: 'white',
            background: '#000000',
        },
        light: {
            background: '#f5f5f5',
            color: '#334195'
        },
    }

    return (
        <main className="main1" style={( theme === 'light' ? contentStyle.light : contentStyle.dark)}>
        <h3>Quem sou eu?</h3>
        <p>Aqui vou escrever minhas experiencias com tecnologias</p>
        </main>
    )
}

export default Content;