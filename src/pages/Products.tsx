import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";

interface Product {
  name: string;
  strength: string;
  description: string;
  image: string;
}

interface Category {
  name: string;
  id: string;
  products: Product[];
}

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { category } = useParams();

  const allCategories: Category[] = [
    {
      name: 'Product Category 1',
      id: 'category1',
      products: [
        { 
          name: 'Category 1 Item 1', 
          strength: 'Version 1.0', 
          description: 'High-quality product with advanced features.',
          image: '/images/products/product1.jpg'
        },
        { 
          name: 'Category 1 Item 2', 
          strength: 'Version 2.0', 
          description: 'Premium product with enhanced capabilities.',
          image: '/images/products/product2.jpg'
        },
        { 
          name: 'Category 1 Item 3', 
          strength: 'Version 3.0', 
          description: 'Professional grade product for demanding users.',
          image: '/images/products/product3.jpg'
        },
      ],
    },
    {
      name: 'Product Category 2',
      id: 'category2',
      products: [
        { 
          name: 'Category 2 Item 1', 
          strength: 'Standard Edition', 
          description: 'Reliable product for everyday use.',
          image: '/images/products/product4.jpg'
        },
        { 
          name: 'Category 2 Item 2', 
          strength: 'Premium Edition', 
          description: 'Advanced product with premium features.',
          image: '/images/products/product5.jpg'
        },
        { 
          name: 'Category 2 Item 3', 
          strength: 'Limited Edition', 
          description: 'Exclusive product with special features.',
          image: '/images/products/product6.jpg'
        },
      ],
    },
    {
      name: 'Product Category 3',
      id: 'category3',
      products: [
        { 
          name: 'Category 3 Item 1', 
          strength: 'Basic Model', 
          description: 'Entry-level product with essential features.',
          image: '/images/products/product7.jpg'
        },
        { 
          name: 'Category 3 Item 2', 
          strength: 'Pro Model', 
          description: 'Professional product for advanced users.',
          image: '/images/products/product8.jpg'
        },
        { 
          name: 'Category 3 Item 3', 
          strength: 'Elite Model', 
          description: 'Top-tier product with all premium features.',
          image: '/images/products/product9.jpg'
        },
      ],
    },
    {
      name: 'Product Category 4',
      id: 'category4',
      products: [
        { 
          name: 'Category 4 Item 1', 
          strength: 'Type A', 
          description: 'Standard product with reliable performance.',
          image: '/images/products/product10.jpg'
        },
        { 
          name: 'Category 4 Item 2', 
          strength: 'Type B', 
          description: 'Enhanced product with additional features.',
          image: '/images/products/product11.jpg'
        },
        { 
          name: 'Category 4 Item 3', 
          strength: 'Type C', 
          description: 'Premium product with advanced capabilities.',
          image: '/images/products/product12.jpg'
        },
      ],
    },
    {
      name: 'Product Category 5',
      id: 'category5',
      products: [
        { 
          name: 'Category 5 Item 1', 
          strength: 'Series 100', 
          description: 'Basic series with essential features.',
          image: '/images/products/product13.jpg'
        },
        { 
          name: 'Category 5 Item 2', 
          strength: 'Series 200', 
          description: 'Advanced series with premium features.',
          image: '/images/products/product14.jpg'
        },
        { 
          name: 'Category 5 Item 3', 
          strength: 'Series 300', 
          description: 'Professional series with elite features.',
          image: '/images/products/product15.jpg'
        },
      ],
    },
  ];

  const handleGetQuote = (type: 'phone' | 'email') => {
    if (!selectedProduct) return;
    
    if (type === 'phone') {
      window.location.href = 'tel:+919998057613';
    } else if (type === 'email') {
      window.location.href = `mailto:anhifytrading@gmail.com?subject=Quote Request for ${selectedProduct.name}&body=I am interested in getting a quote for ${selectedProduct.name} (${selectedProduct.strength}).`;
    }
  };

  // Filter categories based on URL parameter
  const categories = category 
    ? allCategories.filter(cat => cat.id === category)
    : allCategories;

  const filteredCategories = categories.map(category => ({
    ...category,
    products: category.products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.strength.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.products.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Product Categories */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.products.map((product, index) => (
                    <div
                      key={`${product.name}-${product.strength}`}
                      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-200"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-4xl font-bold text-gray-400">P{index + 1}</p>
                          <p className="text-sm text-gray-500 mt-1">Product Image</p>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{product.strength}</p>
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or browse our categories
            </p>
          </div>
        )}

        {/* Product Details Modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.2,
                ease: "easeOut"
              }}
              className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-gray-400">
                    P{allCategories.findIndex(cat => 
                      cat.products.some(p => p.name === selectedProduct.name)
                    ) + 1}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Product Image</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Type:</span> {selectedProduct.strength}</p>
              <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleGetQuote('phone')}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </button>
                <button
                  onClick={() => handleGetQuote('email')}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products; 