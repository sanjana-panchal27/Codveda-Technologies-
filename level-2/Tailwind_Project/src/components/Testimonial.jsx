import React from 'react';

const Testimonial = () => {
  return (
    <>
      <section
        id="testimonial"
        className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg italic mb-6">
              "This product has transformed our business! The features are
              incredible, and the support is top-notch. Highly recommend!"
            </p>
            <p className="text-xl font-semibold">
              - Jane Doe, CEO of Example Corp
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
