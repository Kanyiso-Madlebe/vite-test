import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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
        to_name: 'Recipient Name', // Replace with the recipient's name
        from_name: 'Your Name',    // Replace with your name
        name: name,
        email: email,
        phone: phone,
        message: message,
      };
  
      emailjs
        .sendForm('service_418kf8u', 'template_f1av4bc', event.target, 'f4Du8qRs57A9YQRWG')
        .then(
          (result) => {
            console.log('EmailJS Success:', result.text);
            console.log('Message sent');
  
            // Clear the form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
  
            // Show the confirmation message
            setShowConfirmation(true);
  
            // Hide the confirmation message after a few seconds (optional)
            setTimeout(() => {
              setShowConfirmation(false);
            }, 5000); // Adjust the time as needed
          },
          (error) => {
            console.error('EmailJS Error:', error);
            console.log(error.text);
          }
        );
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
          <input
            type="text"
            id="user_name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="error">{nameError}</span>
          <input
            type="email"
            id="user_email"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="error">{emailError}</span>
          <input
            type="number"
            id="user_phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span className="error">{phoneError}</span>
          <textarea
            id="message"
            rows="4"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Confirmation message */}
        <div className="confirmation-message" style={{ display: showConfirmation ? 'block' : 'none' }}>
          Your message has been sent successfully!
        </div>
      </div>
    </section>
  );
}

export default Contact;
