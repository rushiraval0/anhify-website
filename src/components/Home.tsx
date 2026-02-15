import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      title: 'Global Reach',
      description: 'We connect businesses worldwide through our extensive network of partners.',
      icon: '🌍',
    },
    {
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before shipping.',
      icon: '✓',
    },
    {
      title: 'Fast Shipping',
      description: 'Efficient logistics ensure quick delivery to your destination.',
      icon: '🚢',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Trusted Partner in Import & Export
            </h1>
            <p className="text-xl mb-8">
              Connecting businesses globally with quality products and reliable service
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our product catalog or contact us for custom requirements
          </p>
          <div className="space-x-4">
            <Link to="/products" className="btn btn-primary">
              View Products
            </Link>
            <Link to="/about" className="btn bg-gray-600 hover:bg-gray-700">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 