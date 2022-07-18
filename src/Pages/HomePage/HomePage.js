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
        </main>
    );
}

export default HomePage;