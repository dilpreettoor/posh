import "./contact.css";
import React, { useState } from 'react';
import Header from "../../components/Header/header";

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // form logic
  };

  return (
    <>
      <Header />
      <section className="contact">
      <p className="contact__description">
            Ready to start your next project?
            Get in touch with us today for a free consultation to learn more about our design approach and discuss how we can help bring your vision to life.
            We look forward to hearing from you!
          </p>
        <div className="contact__wrapper">
          <h2 className="contact__title">Contact Us</h2>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="contact__form-submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
