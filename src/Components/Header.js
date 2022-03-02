import Switch from 'react-switch';
import { useContext, useState } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';


const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [showLinks, setShowLinks] = useState(false);

    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light' )
    }
  

    const headerStyle = {
        dark: {
            color: 'white',
            background: '#000000'
        },
        light: {
            background: 'white',
            color: 'black'
        },
    }

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }
    
    return ( 
        <header style={( theme === 'light' ? headerStyle.light : headerStyle.dark )}>
           <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className='navbar__links'>
             <li className='nav__item'>
            <Link to="/" style={{ textDecoration: 'none' }} > <span className="home">Home </span> </Link>
            </li>
            <li className='nav__item'>
            <Link to="/sobre" style={{ textDecoration: 'none' }} > <span className="home">Sobre </span> </Link>
            </li>
            <li className='nav__item'>
            <Link to="/Skill" style={{ textDecoration: 'none' }} > <span className="home">Skill </span> </Link>
            </li>
            <li className='nav__item'>
            <Link to="/projetos" style={{ textDecoration: 'none' }} > <span className="home">Portfólio </span> </Link>
            </li>
            <li className='nav__item'>
            <Link to="/contato" style={{ textDecoration: 'none' }} > <span className="home">Contato </span> </Link>
            </li>
        </ul>
        <button className="navbar__burger" onClick={ handleShowLinks }> 
            <span className='burger-bar'></span>
        </button>
        <Switch 
        checkedIcon={false}
        checked={ theme === 'light' }
        onColor={'#A0CA92'}
        onChange={ handleChangeTheme }/>
        </nav>
        </header>
    )
}

export default Header;