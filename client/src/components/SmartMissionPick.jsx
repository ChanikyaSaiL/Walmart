import React, { useState, useEffect } from 'react';
import { Target, Sparkles, ArrowRight, ShoppingCart, Heart, Star } from 'lucide-react';
import { missionTypes, getBudgetRangeLabel } from '../data/missionData';
import { useShop } from '../context/ShopContext';

const SmartMissionPick = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [budget, setBudget] = useState(3000);
  const [recommendations, setRecommendations] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    addToCart,
    addToWishlist,
    isInCart,
    isInWishlist,
    getCartItemQuantity
  } = useShop();

  // Sample products data (same as in Products.jsx)
  const allProducts = {
    1: [ // Electronics
      { id: 101, name: 'iPhone 15 Pro', price: 999, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', rating: 4.8, category: 'Smartphones', description: 'Latest iPhone with advanced features' },
      { id: 102, name: 'MacBook Pro M3', price: 1999, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', rating: 4.9, category: 'Laptops', description: 'Powerful laptop for professionals' },
      { id: 103, name: 'AirPods Pro', price: 249, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400', rating: 4.7, category: 'Audio', description: 'Premium wireless earbuds' },
      { id: 104, name: 'Smart Watch', price: 399, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 4.6, category: 'Wearables', description: 'Advanced fitness tracking' },
      { id: 105, name: 'Wireless Camera', price: 599, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400', rating: 4.5, category: 'Cameras', description: 'Professional photography' },
      { id: 106, name: 'Bluetooth Speaker', price: 149, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', rating: 4.4, category: 'Audio', description: 'Portable sound system' }
    ],
    2: [ // Fashion
      { id: 201, name: 'Designer Dress', price: 299, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', rating: 4.5, category: 'Clothing', description: 'Elegant evening dress' },
      { id: 202, name: 'Leather Jacket', price: 399, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: 4.6, category: 'Clothing', description: 'Premium leather jacket' },
      { id: 203, name: 'Running Shoes', price: 129, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: 4.4, category: 'Shoes', description: 'Comfortable athletic shoes' },
      { id: 204, name: 'Designer Handbag', price: 249, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400', rating: 4.7, category: 'Bags', description: 'Luxury handbag' },
      { id: 205, name: 'Gold Necklace', price: 199, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400', rating: 4.8, category: 'Jewelry', description: 'Elegant gold jewelry' }
    ],
    3: [ // Gaming
      { id: 301, name: 'PlayStation 5', price: 499, image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400', rating: 4.9, category: 'Consoles', description: 'Next-gen gaming console' },
      { id: 302, name: 'Gaming Headset', price: 199, image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400', rating: 4.6, category: 'Accessories', description: 'Professional gaming headset' },
      { id: 303, name: 'Mechanical Keyboard', price: 149, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400', rating: 4.7, category: 'Accessories', description: 'RGB mechanical keyboard' },
      { id: 304, name: 'Gaming Mouse', price: 79, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400', rating: 4.5, category: 'Accessories', description: 'High-precision gaming mouse' }
    ],
    4: [ // Home & Living
      { id: 401, name: 'Coffee Machine', price: 299, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', rating: 4.5, category: 'Kitchen', description: 'Automatic espresso machine' },
      { id: 402, name: 'Sofa Set', price: 1299, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.6, category: 'Furniture', description: 'Comfortable 3-piece sofa set' },
      { id: 403, name: 'Table Lamp', price: 89, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400', rating: 4.4, category: 'Lighting', description: 'Modern LED table lamp' },
      { id: 404, name: 'Dining Table', price: 699, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400', rating: 4.5, category: 'Furniture', description: 'Wooden dining table for 6' },
      { id: 405, name: 'Bed Frame', price: 449, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', rating: 4.5, category: 'Furniture', description: 'Modern platform bed' },
      { id: 406, name: 'Microwave', price: 149, image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400', rating: 4.4, category: 'Kitchen', description: 'Countertop microwave' }
    ],
    6: [ // Books & Media
      { id: 601, name: 'Best Seller Novel', price: 19, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400', rating: 4.6, category: 'Books', description: 'Award-winning fiction novel' },
      { id: 602, name: 'Cookbook', price: 29, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', rating: 4.5, category: 'Books', description: 'Gourmet cooking recipes' },
      { id: 603, name: 'Vinyl Record', price: 39, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', rating: 4.7, category: 'Music', description: 'Classic rock vinyl album' }
    ],
    7: [ // Beauty & Care
      { id: 701, name: 'Skincare Set', price: 89, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400', rating: 4.7, category: 'Skincare', description: 'Complete skincare routine' },
      { id: 702, name: 'Makeup Palette', price: 59, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', rating: 4.5, category: 'Makeup', description: 'Professional makeup palette' },
      { id: 703, name: 'Hair Dryer', price: 149, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400', rating: 4.6, category: 'Hair Care', description: 'Ionic hair dryer' }
    ]
  };

  // Get all products as flat array
  const getAllProducts = () => {
    return Object.values(allProducts).flat();
  };

  const generateRecommendations = () => {
    if (!selectedMission) return;

    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mission = selectedMission;
      const allProductsList = getAllProducts();
      const recommendations = [];

      mission.categories.forEach(category => {
        const categoryBudget = Math.floor(budget * (category.budgetPercentage / 100));
        const categoryProducts = [];

        // Find products that match this category
        allProductsList.forEach(product => {
          const matchesCategory = category.productCategories.some(cat => {
            if (cat === 'Electronics') return [1].includes(getProductCategoryId(product));
            if (cat === 'Fashion') return [2].includes(getProductCategoryId(product));
            if (cat === 'Gaming') return [3].includes(getProductCategoryId(product));
            if (cat === 'Home & Living') return [4].includes(getProductCategoryId(product));
            if (cat === 'Books & Media') return [6].includes(getProductCategoryId(product));
            if (cat === 'Beauty & Care') return [7].includes(getProductCategoryId(product));
            return false;
          });

          const matchesKeywords = category.keywords.some(keyword => 
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.category.toLowerCase().includes(keyword.toLowerCase()) ||
            product.description.toLowerCase().includes(keyword.toLowerCase())
          );

          if ((matchesCategory || matchesKeywords) && product.price <= categoryBudget) {
            categoryProducts.push(product);
          }
        });

        // Sort by rating and price, take top products that fit budget
        categoryProducts.sort((a, b) => b.rating - a.rating || a.price - b.price);
        
        let currentBudget = categoryBudget;
        const selectedProducts = [];
        
        for (const product of categoryProducts) {
          if (currentBudget >= product.price && selectedProducts.length < 3) {
            selectedProducts.push(product);
            currentBudget -= product.price;
          }
        }

        if (selectedProducts.length > 0) {
          recommendations.push({
            category: category.name,
            budget: categoryBudget,
            products: selectedProducts,
            totalSpent: selectedProducts.reduce((sum, p) => sum + p.price, 0)
          });
        }
      });

      setRecommendations(recommendations);
      setShowResults(true);
      setIsGenerating(false);
    }, 1500);
  };

  const getProductCategoryId = (product) => {
    // Map product to category ID based on product ID ranges
    if (product.id >= 101 && product.id <= 199) return 1; // Electronics
    if (product.id >= 201 && product.id <= 299) return 2; // Fashion
    if (product.id >= 301 && product.id <= 399) return 3; // Gaming
    if (product.id >= 401 && product.id <= 499) return 4; // Home & Living
    if (product.id >= 601 && product.id <= 699) return 6; // Books & Media
    if (product.id >= 701 && product.id <= 799) return 7; // Beauty & Care
    return 1; // Default to Electronics
  };

  const getTotalRecommendedPrice = () => {
    return recommendations.reduce((total, rec) => total + rec.totalSpent, 0);
  };

  const getColorClasses = (color) => {
    const colors = {
      pink: 'from-pink-500 to-rose-500',
      rose: 'from-rose-500 to-pink-500',
      blue: 'from-blue-500 to-indigo-500',
      green: 'from-green-500 to-emerald-500',
      purple: 'from-purple-500 to-violet-500',
      orange: 'from-orange-500 to-amber-500'
    };
    return colors[color] || colors.blue;
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowResults(false)}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4"
            >
              ← Back to Mission Selection
            </button>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">{selectedMission.icon}</span>
              <h1 className="text-3xl font-bold text-gray-900">{selectedMission.name}</h1>
            </div>
            <p className="text-gray-600 mb-2">{selectedMission.description}</p>
            <p className="text-lg font-semibold text-purple-600">
              Budget: ₹{budget.toLocaleString()} | Recommended: ₹{getTotalRecommendedPrice().toLocaleString()}
            </p>
          </div>

          {/* Recommendations */}
          <div className="space-y-8">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">{rec.category}</h2>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Budget: ₹{rec.budget.toLocaleString()}</p>
                    <p className="text-sm font-semibold text-green-600">Spent: ₹{rec.totalSpent.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rec.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isInCart={isInCart(product.id)}
                      isInWishlist={isInWishlist(product.id)}
                      onAddToCart={() => addToCart(product)}
                      onAddToWishlist={() => addToWishlist(product)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Smart Mission Pick</h1>
            <Sparkles className="w-8 h-8 text-purple-600 ml-3" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us your mission and budget, and we'll curate the perfect products for you
          </p>
        </div>

        {/* Mission Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionTypes.map((mission) => (
              <div
                key={mission.id}
                onClick={() => setSelectedMission(mission)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                  selectedMission?.id === mission.id
                    ? 'bg-gradient-to-br ' + getColorClasses(mission.color) + ' text-white shadow-xl'
                    : 'bg-white hover:shadow-lg border border-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{mission.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{mission.name}</h3>
                  <p className={`text-sm ${selectedMission?.id === mission.id ? 'text-white/90' : 'text-gray-600'}`}>
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Selection */}
        {selectedMission && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Set Your Budget</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Budget: ₹{budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹500</span>
                  <span>₹50,000</span>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-purple-600 mb-4">
                  {getBudgetRangeLabel(selectedMission.id, budget)}
                </p>
                
                <button
                  onClick={generateRecommendations}
                  disabled={isGenerating}
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Generating Recommendations...
                    </>
                  ) : (
                    <>
                      Get Smart Recommendations
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Product Card Component for recommendations
const ProductCard = ({ product, isInCart, isInWishlist, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square bg-white rounded-lg mb-3 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400';
          }}
        />
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
      
      <div className="flex items-center mb-3">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-purple-600">₹{product.price}</span>
        <div className="flex space-x-2">
          <button
            onClick={onAddToWishlist}
            className={`p-2 rounded-lg transition-colors ${
              isInWishlist
                ? 'bg-red-100 text-red-600'
                : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={onAddToCart}
            className={`p-2 rounded-lg transition-colors ${
              isInCart
                ? 'bg-green-100 text-green-600'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartMissionPick;
