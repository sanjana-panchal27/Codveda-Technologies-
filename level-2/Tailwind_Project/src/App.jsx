import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// IMPORTANT: Ensure these files actually exist with the .jsx extension
// If you renamed them from .js to .jsx, these imports MUST reflect that.
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial.jsx';
import ContactForm from './components/ContactForm.jsx'; // This is the component we just updated
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx'; // Assuming Navbar is in a subfolder and also renamed to .jsx

function App() {
  return (
    <Router>
      {/*
        Removed <AppProvider>...</AppProvider>
        Reason: We refactored ContactForm to manage its own state
        and no longer rely on useAppContext or AppProvider.
        If you have other components still using AppContext, you'll need
        to either refactor them too, or re-introduce AppProvider
        and ensure AppContext.jsx is correctly defined and imported.
      */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Testimonial />
              <ContactForm /> {/* ContactForm now manages its own state */}
            </>
          }
        />
        {/* Add more routes here if you have other pages */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
