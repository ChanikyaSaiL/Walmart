import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, ArrowLeft, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Wishlist = () => {
  const {
    wishlist,
    wishlistCount,
    addToCart,
    removeFromWishlist,
    isInCart
  } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/categories" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          
          <div className="text-center py-16">
            <div className="text-8xl mb-6">💝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love for later!</p>
            <Link
              to="/categories"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Browsing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link to="/categories" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
          <p className="text-gray-600">{wishlistCount} {wishlistCount === 1 ? 'item' : 'items'} saved for later</p>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400';
                  }}
                />
                
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center transition-all duration-200 hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(item.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({item.rating})</span>
                </div>

                {/* Price */}
                <div className="text-xl font-bold text-gray-900 mb-4">
                  ${item.price}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {isInCart(item.id) ? (
                    <div className="w-full bg-green-100 text-green-800 py-2 px-4 rounded-lg text-center font-semibold">
                      ✓ In Cart
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  )}
                  
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="w-full text-red-600 hover:text-red-700 py-2 px-4 rounded-lg font-medium transition-colors hover:bg-red-50"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                wishlist.forEach(item => {
                  if (!isInCart(item.id)) {
                    addToCart(item);
                  }
                });
              }}
              className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add All to Cart</span>
            </button>
            
            <Link
              to="/categories"
              className="flex items-center justify-center space-x-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
