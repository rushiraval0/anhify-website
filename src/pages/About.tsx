import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About ANHIFY</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              ANHIFY is a dynamic import-export company based in Ahmedabad, Gujarat, specializing in a wide range of products 
              across multiple industries. From consumer goods to industrial supplies, we connect businesses worldwide with quality 
              products at competitive prices. Our extensive network and years of experience in international trade make us your 
              ideal partner for global business expansion.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in our ability to understand diverse market needs and deliver tailored solutions. Whether you're 
              looking for electronics, textiles, machinery, or any other product category, our team ensures seamless sourcing 
              and delivery while maintaining the highest standards of quality and service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to facilitate global trade by connecting businesses with quality products and reliable suppliers. 
              We strive to provide comprehensive import-export solutions that help our clients grow their businesses and reach 
              new markets efficiently and cost-effectively.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality checks and verification of all products and suppliers to ensure you receive the best value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our experienced team provides personalized assistance and guidance throughout your trading journey.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wide Selection</h3>
                <p className="text-gray-600">
                  Access to diverse product categories including electronics, textiles, machinery, consumer goods, and more.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">
                  Strong partnerships with manufacturers and suppliers worldwide to meet all your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 