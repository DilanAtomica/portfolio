import React from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";
import AboutContainer from "../../Components/HomePage/AboutContainer/AboutContainer";
import SkillsContainer from "../../Components/HomePage/SkillsContainer/SkillsContainer";
import cravePlay from "../../Images/craveplay.PNG";


function HomePage(props) {

    return (
        <main className="homePage">
            <HomePanel />
            <AboutContainer />
            <SkillsContainer />

            <div className="projectsContainer">
                <h1>Projects</h1>

                <div className="projectsContainer-panel">
                    <div className="projectsContainer-project">
                        <img src={cravePlay} />

                        <div className="projectsContainer-projectBottom">
                            <h2>CravePlay</h2>
                            <p>Website where you can find games based on filters you have set such as genres, platforms, gamemodes and preferences. Made with React and RAWG.io's API for game data.</p>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;