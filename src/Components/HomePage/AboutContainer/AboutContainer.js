import React from 'react';
import "./AboutContainer.css";

function AboutContainer(props) {
    return (
        <div className="aboutContainer">
            <h1>About</h1>
            <div className="aboutContainer-content">
                <div className="aboutContainer-imageBox">

                </div>

                <div className="aboutContainer-textBox">
                    <p>My name is Dilan and I'm a 23 year old student currently residing in Kristiansand, Norway. Im in my third year at University of Agder, studying IT and information-systems.
                        I have been learning frontend development next to school, every day since Januray of 2022. I love learning new technologies and working on side projects.
                        I enjoy spending time with friends and family, while also doing things i love like watching movies/series, going to the gym and listening to music. </p>
                </div>
            </div>

        </div>
    );
}

export default AboutContainer;