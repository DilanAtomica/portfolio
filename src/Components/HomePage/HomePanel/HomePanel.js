import React from 'react';
import "./HomePanel.css";
import TypeWriter from "typewriter-effect";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Link} from "react-scroll";


function HomePanel({darkMode}) {


    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {

    };

    return (
        <div className="homePanel" id="home">
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
                    <Link to="contact" spy={true} offset={-75} duration={500} smooth={true}><button type="button">Contact</button></Link>
                </div>
                <div className="homeContainer-profile">
                    <div className="homeContainer-profileImage"></div>
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
                            value: !darkMode ? "white" : "#0C0C0C",
                        },
                    },
                    fullScreen: {
                        enable: false,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
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
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value:  !darkMode ? "#0C0C0C" : "#ffffff",
                        },
                        links: {
                            color: !darkMode ? "#0C0C0C" : "#ffffff",
                            distance: 150,
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