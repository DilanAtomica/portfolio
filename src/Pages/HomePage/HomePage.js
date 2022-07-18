import React from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";
import AboutContainer from "../../Components/HomePage/AboutContainer/AboutContainer";
import SkillsContainer from "../../Components/HomePage/SkillsContainer/SkillsContainer";
import ProjectsContainer from "../../Components/HomePage/ProjectsContainer/ProjectsContainer";

function HomePage(props) {

    return (
        <main className="homePage">
            <HomePanel />
            <AboutContainer />
            <SkillsContainer />
            <ProjectsContainer />

            <div className="contactContainer">
                <h1>Contact</h1>
                <form className="contactContainer-form">
                    <input id="nameInput" type="text" placeholder="Name" />
                    <input id="emailInput" type="email" placeholder="Email" />
                    <textarea id="textInput" cols="0" rows="10" placeholder="What do you want to say?" />
                    <button type="submit">Send</button>
                </form>
            </div>

        </main>
    );
}

export default HomePage;