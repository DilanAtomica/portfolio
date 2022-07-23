import React from 'react';
import "./NavBar.css";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Link} from "react-scroll";

function NavBar({darkMode, toggleDarkMode}) {

    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <nav className="navBar">
            <ul>
                <li><Link to="home" spy={true} offset={0} duration={500} smooth={true} >Home</Link></li>
                <li><Link to="about" spy={true} offset={-75} duration={500} smooth={true}>About</Link></li>
                <li><Link to="skills" spy={true} offset={-75} duration={500} smooth={true}>Skills</Link></li>
                <li><Link to="projects" spy={true} offset={-75} duration={500} smooth={true}>Projects</Link></li>
                <li><Link to="contact" spy={true} offset={-75} duration={500} smooth={true}>Contact</Link></li>
                {darkMode
                    ? <li onClick={handleClick}><DarkModeIcon fontSize="large" /></li>
                    : <li onClick={handleClick}><LightModeIcon  fontSize="large" /></li>
                }

            </ul>
        </nav>
    );
}

export default NavBar;