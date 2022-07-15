import React from 'react';
import "./SkillsContainer.css";
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {IoLogoFirebase, IoLogoJavascript, IoLogoReact} from "react-icons/io5";
import {FaDatabase, FaGitAlt, FaJava} from "react-icons/fa";

function SkillsContainer(props) {
    return (
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
    );
}

export default SkillsContainer;