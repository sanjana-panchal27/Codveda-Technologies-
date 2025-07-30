import React from 'react';

const Features = () => {
  return (
    <>
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-purple-600 text-5xl mb-4">
              <i className="lucide lucide-zap"></i> {/* Example icon, replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Blazing Fast</h3>
            <p className="text-gray-600">Experience lightning-fast performance with our optimized platform.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-purple-600 text-5xl mb-4">
              <i className="lucide lucide-shield"></i> {/* Example icon, replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your data is safe with us, thanks to our robust security measures.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-purple-600 text-5xl mb-4">
              <i className="lucide lucide-headphones"></i> {/* Example icon, replace with actual icon */}
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated support team is always here to help you.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;
