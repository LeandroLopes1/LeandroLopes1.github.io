import Switch from 'react-switch';
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);

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

    return (
        <header style={( theme === 'light' ? headerStyle.light : headerStyle.dark )}>
        <ul>
             <li>
            <Link to="/" style={{ textDecoration: 'none' }} > <span >Home </span> </Link>
            </li>
            <li>
            <Link to="/sobre" style={{ textDecoration: 'none' }} > <span>Sobre </span> </Link>
            </li>
            <li>
            <Link to="/Skill" style={{ textDecoration: 'none' }} > <span>Skill </span> </Link>
            </li>
            <li>
            <Link to="/projetos" style={{ textDecoration: 'none' }} > <span>Portfólio </span> </Link>
            </li>
            <li>
            <Link to="/contato" style={{ textDecoration: 'none' }} > <span>Contato </span> </Link>
            </li>
        </ul>
        <Switch className='btn'
        checkedIcon={false}
        checked={ theme === 'light' }
        onColor={'#A0CA92'}
        onChange={ handleChangeTheme }/>
        </header>
    )
}

export default Header;