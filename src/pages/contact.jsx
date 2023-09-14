import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component
import '../style/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false); // State for the confirmation message
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to store reCAPTCHA value

  const validateForm = () => {
    let isValid = true;

    // Validation logic for each field
    if (!name) {
      setNameError('Please enter your name');
      isValid = false;
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(name)) {
      setNameError('Name must start with a capital letter and contain letters and spaces only');
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
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number must be 10 digits');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleRecaptchaChange = (value) => {
    // Callback function when reCAPTCHA value changes
    setRecaptchaValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm() && recaptchaValue) {
      const formData = {
        to_name: 'Recipient Name',
        from_name: 'Your Name',
        name: name,
        email: email,
        phone: phone,
        message: message,
      };

      emailjs
        .sendForm('service_418kf8u', 'template_f1av4bc', event.target, 'f4Du8qRs57A9YQRWG')
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            // Clear the form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');

            // Show the confirmation message
            setShowConfirmation(true);

            // Hide the confirmation message after a few seconds
            setTimeout(() => {
              setShowConfirmation(false);
            }, 5000); // Adjust the time as needed

            // Clear the reCAPTCHA value after submission
            setRecaptchaValue(null);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            console.log(error.text);
          }
        );
    } else {
      // Show an error message for reCAPTCHA
      console.error('Please complete the reCAPTCHA');
    }
  };

  const isValidEmail = (email) => {
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="body">
    <section>
      <div className="contact" id="contact">
        <form onSubmit={handleFormSubmit}>
          <h3>Having any queries? Contact Me:</h3>
          <div className="field">
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="off"
            />
            <span className="error">{nameError}</span>
          </div>
          <div className="field">
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="name@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
            <span className="error">{emailError}</span>
          </div>
          <div className="field">
            <input
              type="text"
              id="user_phone"
              name="user_phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="off"
            />
            <span className="error">{phoneError}</span>
          </div>
          <div className="field">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="field">
            <ReCAPTCHA
              sitekey="6LcRiiQoAAAAAJR500wYIq7svUJJndKc26Yw4L6x"
              onChange={handleRecaptchaChange}
            />
            {recaptchaValue === null && <span className="error">Please complete the reCAPTCHA</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {/* Confirmation message */}
        <div
          className="confirmation-message"
          style={{ display: showConfirmation ? 'block' : 'none' }}
        >
          Your message has been sent successfully!
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
