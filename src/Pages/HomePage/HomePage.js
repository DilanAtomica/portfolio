import React from 'react';
import "./HomePage.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import TypeWriter from "typewriter-effect";

function HomePage(props) {

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };



    return (
        <main className="homePage">
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
                </div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#0C0C0C",
                            },
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
                                value: 80,
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

        </main>
    );
}

export default HomePage;