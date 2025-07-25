import React from 'react';
import { useAppContext } from '../context/AppContext';

const ContactForm = () => {
  const {
    contactFormData,
    updateContactForm,
    submitContactForm,
    isModalOpen,
    setIsModalOpen,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    submitContactForm();
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={contactFormData.name}
          onChange={(e) => updateContactForm('name', e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={contactFormData.email}
          onChange={(e) => updateContactForm('email', e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={contactFormData.message}
          onChange={(e) => updateContactForm('message', e.target.value)}
          rows="5"
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {isModalOpen && (
        <div>
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully.</p>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
