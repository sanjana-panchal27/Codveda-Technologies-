// src/context/AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const updateContactForm = (field, value) => {
    setContactFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitContactForm = async () => {
    // Simulate API call or form submission
    console.log('Submitting form:', contactFormData);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
    setIsModalOpen(true); // Open success modal
    setContactFormData({ name: '', email: '', message: '' }); // Clear form
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    // You might also add a class to body for global theme styling
    document.body.className = theme === 'light' ? 'dark' : 'light';
  };

  const contextValue = {
    contactFormData,
    isModalOpen,
    theme,
    updateContactForm,
    submitContactForm,
    setIsModalOpen,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
