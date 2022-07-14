import React from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";
import AboutContainer from "../../Components/HomePage/AboutContainer/AboutContainer";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { IoLogoReact } from 'react-icons/io5';
import { FaJava } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaGitAlt } from 'react-icons/fa';

function HomePage(props) {

    return (
        <main className="homePage">
            <HomePanel />
            <AboutContainer />

            <div className="skillsContainer">

                <h1>Skills</h1>

                <div className="skillsContainer-panel">
                    <ul className="skillsContainer-box">
                        <li><span><AiFillHtml5 class="logo" /></span> HTML5</li>
                        <li><span><IoLogoCss3 class="logo" /></span>CSS3</li>
                        <li><span><IoLogoJavascript class="logo" /></span>JAVASCRIPT</li>
                        <li><span><IoLogoReact class="logo" /></span>REACT</li>
                    </ul>

                    <ul className="skillsContainer-box">
                        <li><span><FaJava class="logo" /></span>JAVA</li>
                        <li><span><FaDatabase class="logo" /></span>SQL</li>
                        <li><span><IoLogoFirebase class="logo" /></span>FIREBASE</li>
                        <li><span><FaGitAlt class="logo" /></span>GIT</li>
                    </ul>
                </div>
            </div>

        </main>
    );
}

export default HomePage;