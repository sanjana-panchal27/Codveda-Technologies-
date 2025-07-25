import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <div className="font-sans antialiased bg-gray-50 min-h-screen">
          {/* Tailwind CSS CDN - placed here for immersive environment compatibility */}
          <script src="https://cdn.tailwindcss.com"></script>
          {/* Lucide Icons CDN - placed here for immersive environment compatibility */}
          <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
          <style>
            {`
        /* Import Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        /* Basic animation for hero section */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }
        /* Ensure lucide icons are displayed correctly */
        .lucide {
          display: inline-block;
          vertical-align: middle;
        }
        `}
          </style>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Testimonial />
                <ContactForm />
              </>
            }
          />
        </Routes>

        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;
