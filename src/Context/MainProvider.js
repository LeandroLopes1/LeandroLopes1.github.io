import ThemeContext from './ThemeContext';
import { useState } from 'react';
//import Header from '../Components/Header';
// import Content from '../Components/Content';

function MainProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            { children }
        </ThemeContext.Provider> 
    )
}

export default MainProvider;