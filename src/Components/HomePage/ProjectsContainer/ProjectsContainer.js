import React from 'react';
import "./ProjectsContainer.css";
import cravePlay from "../../../Images/craveplay.PNG";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectsContainer(props) {
    return (
        <div className="projectsContainer">
            <h1>Projects</h1>

            <div className="projectsContainer-panel">
                <div className="projectsContainer-project">
                    <img src={cravePlay} />

                    <div className="projectsContainer-projectBottom">
                        <h2>CravePlay</h2>
                        <p>Website where you can find games based on filters you have set such as genres, platforms, gamemodes and preferences. Made with React and RAWG.io's API for game data.</p>

                        <ul className="projectsContainer-projectButtons">
                            <li><span><WebIcon /></span>Live Site</li>
                            <li><span><GitHubIcon /></span>Repo Link</li>
                        </ul>
                    </div>
                </div>

                <div className="projectsContainer-project">
                    <img src={cravePlay} />

                    <div className="projectsContainer-projectBottom">
                        <h2>CravePlay</h2>
                        <p>Website where you can find games based on filters you have set such as genres, platforms, gamemodes and preferences. Made with React and RAWG.io's API for game data.</p>

                        <ul className="projectsContainer-projectButtons">
                            <li><span><WebIcon /></span>Live Site</li>
                            <li><span><GitHubIcon /></span>Repo Link</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsContainer;