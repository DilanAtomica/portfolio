import React from 'react';
import "./ContactContainer.css";
import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function ContactContainer(props) {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputText, setInputText] = useState("");

    const [isVerified, setIsVerified] = useState(false);

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
        }

    const handleOnChange = (value) => {
        setIsVerified(true);
    }

    return (
        <div className="contactContainer">
            <h1>Contact</h1>
            <form onSubmit={sendEmail} ref={form} className="contactContainer-form">
                <input value={inputName} onChange={(e) => setInputName(e.target.value)} id="nameInput" type="text" name="user_name" placeholder="Name" />
                <input value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} id="emailInput" type="email" name="user_email" placeholder="Email" />
                <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} id="textInput" cols="0" rows="10" name="message" placeholder="What do you want to say?" />
                <ReCAPTCHA id="reCaptcha" sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleOnChange}/>
                <button disabled={!isVerified} type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactContainer;