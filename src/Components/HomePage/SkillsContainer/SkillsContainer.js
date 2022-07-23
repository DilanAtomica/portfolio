import React from 'react';
import "./SkillsContainer.css";
import {AiFillHtml5} from "react-icons/ai";
import {IoLogoCss3} from "react-icons/io";
import {IoLogoFirebase, IoLogoJavascript, IoLogoReact} from "react-icons/io5";
import {FaDatabase, FaGitAlt, FaJava} from "react-icons/fa";

function SkillsContainer(props) {
    return (
        <div className="skillsContainer" id="skills">

            <h1>Skills</h1>

            <div className="skillsContainer-panel">
                <ul className="skillsContainer-box">
                    <li><span><AiFillHtml5 className="logo" /></span> HTML5</li>
                    <li><span><IoLogoCss3 className="logo" /></span>CSS3</li>
                    <li><span><IoLogoJavascript className="logo" /></span>JAVASCRIPT</li>
                    <li><span><IoLogoReact className="logo" /></span>REACT</li>
                </ul>

                <ul className="skillsContainer-box">
                    <li><span><FaJava className="logo" /></span>JAVA</li>
                    <li><span><FaDatabase className="logo" /></span>SQL</li>
                    <li><span><IoLogoFirebase className="logo" /></span>FIREBASE</li>
                    <li><span><FaGitAlt className="logo" /></span>GIT</li>
                </ul>
            </div>
        </div>
    );
}

export default SkillsContainer;