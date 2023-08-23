import React, { useRef, useEffect, useState } from 'react';
import '../style/contact.css';

function Contact() {
    const recaptchaRef = useRef(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6Lfw7sonAAAAAOm9TZB2-8fSOK4w8sIwnRVJ4abQ';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }, []);

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue && validateForm()) {
            try {
                const token = await grecaptcha.enterprise.execute('6Lfw7sonAAAAAOm9TZB2-8fSOK4w8sIwnRVJ4abQ', { action: 'CONTACT_FORM' });
                // Send form data and reCAPTCHA token to server for processing
                const formData = {
                    name,
                    email,
                    phone,
                    message,
                    recaptchaValue
                };
                console.log(formData); // You can send this data to your server using fetch or any other method
            } catch (error) {
                console.error('reCAPTCHA execution failed:', error);
            }
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
                    <div className="g-recaptcha" data-sitekey="YOUR_NEW_SITE_KEY" ref={recaptchaRef}></div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
