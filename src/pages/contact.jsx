import React from 'react';
import '../style/contact.css';

function Contact() {
    return (
        <section>
            {/* Contact Form */}
            <div className="contact">
                <form>
                    <h3>Having any queries? Contact Me:</h3>
                    <input type="text" id="name" placeholder="Full Name" required />
                    <span id="nameError" className="error"></span>
                    <input type="email" id="email" placeholder="name@mail.com" required />
                    <span id="emailError" className="error"></span>
                    <input type="text" id="phone" placeholder="Phone number" required />
                    <span id="phoneError" className="error"></span>
                    <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>
    );
}

export default Contact;
