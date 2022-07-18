import React, {useState, useRef} from 'react';
import "./HomePage.css";
import HomePanel from "../../Components/HomePage/HomePanel/HomePanel";
import AboutContainer from "../../Components/HomePage/AboutContainer/AboutContainer";
import SkillsContainer from "../../Components/HomePage/SkillsContainer/SkillsContainer";
import ProjectsContainer from "../../Components/HomePage/ProjectsContainer/ProjectsContainer";


import emailjs from '@emailjs/browser';

function HomePage(props) {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputText, setInputText] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mba6hne', 'template_t2nsjxb', form.current, 'Hf_SVKOc5LKH9lKP8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setInputEmail("");
        setInputText("");
        setInputName("");

    };

    return (
        <main className="homePage">
            <HomePanel />
            <AboutContainer />
            <SkillsContainer />
            <ProjectsContainer />

            <div className="contactContainer">
                <h1>Contact</h1>
                <form onSubmit={sendEmail} ref={form} className="contactContainer-form">
                    <input value={inputName} onChange={(e) => setInputName(e.target.value)} id="nameInput" type="text" name="user_name" placeholder="Name" />
                    <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} id="emailInput" type="email" name="user_email" placeholder="Email" />
                    <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} id="textInput" cols="0" rows="10" name="message" placeholder="What do you want to say?" />
                    <button type="submit">Send</button>
                </form>
            </div>

        </main>
    );
}

export default HomePage;