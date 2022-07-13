import React from 'react';
import "./NavBar.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function NavBar({darkMode, toggleDarkMode}) {

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <nav className="navBar">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
                {darkMode
                    ? <li onClick={handleClick}><DarkModeIcon fontSize="large" /></li>
                    : <li onClick={handleClick}><LightModeIcon  fontSize="large" /></li>
                }

            </ul>
        </nav>
    );
}

export default NavBar;