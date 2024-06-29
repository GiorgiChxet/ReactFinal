import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import '../assets/styles/header.scss';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <header>
      <div className="container">
        <img src="https://btu.edu.ge/wp-content/uploads/2021/11/BTU-GEO.png" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className='themeMode'>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;