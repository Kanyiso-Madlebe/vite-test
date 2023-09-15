import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null); // State to store reCAPTCHA value

  const validateForm = () => {
    let isValid = true;

    // Validation logic for each field
    if (!name) {
      toast.error('Please enter your name');
      isValid = false;
    } else if (!/^[A-Z][a-zA-Z\s]*$/.test(name)) {
      toast.error('Name must start with a capital letter and contain letters and spaces only');
      isValid = false;
    }

    if (!email) {
      toast.error('Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      toast.error('Please enter a valid email');
      isValid = false;
    }

    if (!phone) {
      toast.error('Please enter your phone number');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      toast.error('Phone number must be 10 digits');
      isValid = false;
    }

    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA');
      isValid = false;
    }

    return isValid;
  };

  const handleRecaptchaChange = (value) => {
    // Callback function when reCAPTCHA value changes
    setRecaptchaValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
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
            toast.success('Your message has been sent successfully!');
          },
          (error) => {
            console.error('EmailJS Error:', error);
            console.log(error.text);
            toast.error('An error occurred while sending the email');
          }
        );
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
            </div>
            <button type="submit">Submit</button>
          </form>
          <ToastContainer autoClose={5000} />
        </div>
      </section>
    </div>
  );
}

export default Contact;
