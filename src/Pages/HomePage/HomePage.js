import React from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";

function HomePage(props) {

    return (
        <main className="homePage">
            <HomePanel />

            <div className="aboutContainer">
                <h1>About</h1>
                <p>My name is Dilan and I'm a 23 year old student living in Kristiansand, Norway. Im currently in my third year at University of Agder, studying IT and information-systems.
                I have been learning frontend development next to school, every day since Januray of 2022. I love learning new technologies and working on side projects.
                    I enjoy spending time with friends and family, while also doing things i love like watching movies/series, going to the gym and listening to music. </p>
            </div>
        </main>
    );
}

export default HomePage;