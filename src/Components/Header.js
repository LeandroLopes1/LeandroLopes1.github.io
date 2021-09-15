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
            background: '#f5f5f5',
            color: '#334195'
        },
    }

    return (
        <header style={( theme === 'light' ? headerStyle.light : headerStyle.dark )}>
        <span> Sobre</span>
        <span>Skill</span>
        <Link to="/projetos"> <span>Portfólio </span> </Link>
        <Switch className='btn'
        checkedIcon={false}
        checked={ theme === 'light' }
        onColor={'#A0CA92'}
        onChange={ handleChangeTheme }/>
        </header>
    )
}

export default Header;