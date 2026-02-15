import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const companyInfo = {
    founded: '2010',
    locations: ['Ahmedabad'],
    employees: '50+',
    clients: '200+',
  };

  return (
    <div className="py-8">
      <div className="container">
        {/* Company Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              ANHIFY is a dynamic import-export company based in Ahmedabad, Gujarat, specializing in a wide range of products 
              across multiple industries. From consumer goods to industrial supplies, we connect businesses worldwide with quality 
              products at competitive prices. Our extensive network and years of experience in international trade make us your 
              ideal partner for global business expansion.
            </p>
            <p className="text-lg text-gray-600">
              We take pride in our ability to understand diverse market needs and deliver tailored solutions. Whether you're 
              looking for electronics, textiles, machinery, or any other product category, our team ensures seamless sourcing 
              and delivery while maintaining the highest standards of quality and service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.founded}</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.employees}</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{companyInfo.clients}</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
          </div>
        </motion.section>

        {/* Our Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Global Sourcing</h3>
              <p className="text-gray-600">
                We connect you with reliable manufacturers and suppliers worldwide, ensuring quality products at competitive prices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🚢</div>
              <h3 className="text-xl font-semibold mb-3">Import & Export</h3>
              <p className="text-gray-600">
                End-to-end trade solutions including documentation, customs clearance, and logistics management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance on market entry, product selection, and international business development.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality checks and verification of all products and suppliers to ensure you receive the best value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Strong industry relationships and bulk purchasing power enable us to offer the most competitive rates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                Access to diverse product categories including electronics, textiles, machinery, consumer goods, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Dedicated team providing personalized assistance and prompt solutions for all your trading needs.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 