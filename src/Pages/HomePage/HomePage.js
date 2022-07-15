import React from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";
import AboutContainer from "../../Components/HomePage/AboutContainer/AboutContainer";
import SkillsContainer from "../../Components/HomePage/SkillsContainer/SkillsContainer";


function HomePage(props) {

    return (
        <main className="homePage">
            <HomePanel />
            <AboutContainer />
            <SkillsContainer />

        </main>
    );
}

export default HomePage;