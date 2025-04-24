import React from 'react'
import "./contact.css";
import { FaLinkedin, FaGithub, FaFacebook, FaQuora, FaAddressCard } from "react-icons/fa6";
const contact = () => {
    return (
        <div className='Contact-main'>
            <div className='Contact-heading'>
                <h1><FaAddressCard/>Contact</h1>
            </div>
            <div className='main-div'>
                <div className='main-form'>
                    <h1>Get In The Touch</h1>
                    <form action="https://formspree.io/f/xanoyjgq"
                        method="POST">
                        <input type="text" placeholder='Your Name' />
                        <input type="email" name='email' placeholder='Your Email' />
                        <textarea name="message" id="" placeholder='Message'></textarea>
                        <button className='form-btn' type='submit'>SEND MESSAGE</button>
                    </form>
                </div>
            </div>
            <div className='Adress'>
                <div className='Adress1'>
                    <h2>My Address</h2>
                    <p>Garhdiwala, India</p>
                    <p>+91-7973214686</p>
                    <p>chaggergursewak@gmail.com</p>
                </div>
                <div className='Adress2'>
                    <h2>Social-Links</h2>
                    <h1><FaLinkedin /><FaGithub /><FaFacebook /><FaQuora /></h1>
                </div>
            </div>
            <footer className='Myfooter'>
                <p>Created By @<span>Gursewak Singh </span>|  All Rights Reserved!</p>
            </footer>
        </div>
    )
}

export default contact
