import React from 'react';

const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Awesome Product!</h1>
        <p className="text-xl mb-8">Discover the best solutions for your needs.</p>
        <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
    </>
  );
};

export default Hero;
