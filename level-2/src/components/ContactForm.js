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
    <section
      id="contact"
      style={{
        padding: '50px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
      }}
    >
      <h2>Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={contactFormData.name}
          onChange={(e) => updateContactForm('name', e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={contactFormData.email}
          onChange={(e) => updateContactForm('email', e.target.value)}
          required
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
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
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}
        >
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully.</p>
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              marginTop: '20px',
              padding: '8px 15px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
