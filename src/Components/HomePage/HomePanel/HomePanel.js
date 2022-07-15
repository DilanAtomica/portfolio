import React from 'react';
import "./HomePanel.css";
import TypeWriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";


function HomePanel(props) {


    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {

    };

    return (
        <div className="homePanel">
            <div className="homeContainer">
                <div className="homeContainer-info">
                    <h1>
                        Hi,<br />
                        I'm <span>Dilan</span>
                        <TypeWriter options={{loop: true}} onInit={(typewriter) => {
                            typewriter.typeString("#Frontend").pauseFor(2000).deleteAll().pauseFor(500)
                                .typeString("#Gym").pauseFor(2000).deleteAll().pauseFor(500)
                                .typeString("#Music").pauseFor(2000).deleteAll().start()
                        }}/>
                    </h1>
                    <button type="button">Contact</button>
                </div>
                <div className="homeContainer-profile">
                    <img alt="Dilan" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <div className="profileLinksContainer">
                        <GitHubIcon id="githubIcon" />
                        <LinkedInIcon id="linkedInIcon" />
                    </div>
                </div>
            </div>
            <Particles width="100vw" height="100vh"
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#0C0C0C",
                        },
                    },
                    fullScreen: {
                        enable: false,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default HomePanel;