import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/images/logo.jpg" alt="ANHIFY" className="h-12 w-auto" />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Your trusted source for high-quality products. We provide a wide range of solutions with guaranteed quality and competitive prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600 text-sm">
                <p className="font-medium mb-2">Address:</p>
                <p>Shop No 242, Second Floor,</p>
                <p>Sumel Business Park-6,</p>
                <p>Dudheshwar Tavdipura,</p>
                <p>Ahmedabad, Gujarat, India, 380004</p>
              </div>
              <div className="text-gray-600 text-sm">
                <p className="font-medium mb-2">Get in touch:</p>
                <p>Email: director@anhify.in</p>
                <p>Phone: +91 99980 57613</p>
                <p>Hours: 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} ANHIFY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 