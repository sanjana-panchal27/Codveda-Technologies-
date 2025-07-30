import React, { useState } from 'react'; // Import useState hook

const ContactForm = () => {
  // 1. State for managing form input data
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 2. State for managing the visibility of the success modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to update individual fields in the contact form data
  const updateContactForm = (field, value) => {
    setContactFormData((prevData) => ({
      ...prevData, // Keep existing form data
      [field]: value, // Update the specific field
    }));
  };

  // Function to handle form submission logic
  const submitContactForm = () => {
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it to the console.
    console.log('Contact Form Data Submitted:', contactFormData);

    // Show the success modal
    setIsModalOpen(true);

    // Optionally, clear the form fields after submission
    setContactFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Event handler for the form's onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission behavior
    submitContactForm(); // Call our custom submission logic
  };

  return (
    <section id="contact" className="p-4 md:p-8 lg:p-12 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={contactFormData.name}
          onChange={(e) => updateContactForm('name', e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={contactFormData.email}
          onChange={(e) => updateContactForm('email', e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          value={contactFormData.message}
          onChange={(e) => updateContactForm('message', e.target.value)}
          rows="5"
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
            <p className="text-gray-700 mb-6">Your message has been sent successfully.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
