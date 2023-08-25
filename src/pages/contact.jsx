import React, { useState } from 'react';
import '../style/contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateForm = () => {
        let isValid = true;

        // Validation logic for each field
        if (!name) {
            setNameError('Please enter your name');
            isValid = false;
        } else {
            setNameError('');
        }
        if (!email) {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!phone) {
            setPhoneError('Please enter your phone number');
            isValid = false;
        } else {
            setPhoneError('');
        }

        return isValid;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                name,
                email,
                phone,
                message
            };
            console.log(formData); // You can send this data to your server using fetch or any other method
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation (you can use a library for more robust validation)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <section>
            <div className="contact" id="contact">
                <form onSubmit={handleFormSubmit}>
                    <h3>Having any queries? Contact Me:</h3>
                    <input type="text" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    <span id="nameError" className="error">{nameError}</span>
                    <input type="email" id="email" placeholder="name@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <span id="emailError" className="error">{emailError}</span>
                    <input type="text" id="phone" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    <span id="phoneError" className="error">{phoneError}</span>
                    <textarea id="message" rows="4" placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
