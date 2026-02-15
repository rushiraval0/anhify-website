import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    { id: 1, name: 'Product 1', description: 'Premium quality product' },
    { id: 2, name: 'Product 2', description: 'Professional grade solution' },
    { id: 3, name: 'Product 3', description: 'High performance product' },
    { id: 4, name: 'Product 4', description: 'Advanced solution' },
    { id: 5, name: 'Product 5', description: 'Premium quality item' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Cover Photo */}
      <div className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/cover.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to ANHIFY
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Your trusted source for high-quality products. We provide a wide range of solutions with guaranteed quality and competitive prices.
          </p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Products Section */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          
          {/* Product Showcase */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-gray-100 rounded-lg p-6 h-64 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500 text-lg">Image {product.id}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-center">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {products.slice(0, products.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              View All Products
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 