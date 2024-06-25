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
    <Header/>
    <section className="contact">
      <div className="contact__wrapper">
      <h2 className="contact__title">Contact Us</h2>
      <p className="contact__description">
      Ready to start your next project?
       Get in touch with us today for a free consultation to learn more about our design approach and discuss how we can help bring your vision to life.
      We look forward to hearing from you!
      </p>
      </div>
      
    </section>
    </>
  );
};

export default Contact;
