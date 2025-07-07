import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Filter, Grid, List, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Products = () => {
  const { categoryId } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const {
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    isInCart,
    isInWishlist,
    getCartItemQuantity,
    updateCartQuantity
  } = useShop();

  // Sample products data
  const allProducts = {
    1: [ // Electronics
      { id: 101, name: 'iPhone 15 Pro', price: 999, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400', rating: 4.8, category: 'Smartphones', description: 'Latest iPhone with advanced features' },
      { id: 102, name: 'MacBook Pro M3', price: 1999, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', rating: 4.9, category: 'Laptops', description: 'Powerful laptop for professionals' },
      { id: 103, name: 'AirPods Pro', price: 249, image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400', rating: 4.7, category: 'Audio', description: 'Premium wireless earbuds' },
      { id: 104, name: 'iPad Air', price: 599, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400', rating: 4.6, category: 'Tablets', description: 'Versatile tablet for work and play' },
      { id: 105, name: 'Apple Watch Ultra', price: 799, image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400', rating: 4.8, category: 'Wearables', description: 'Advanced smartwatch for athletes' },
      { id: 106, name: 'Sony Camera', price: 1299, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400', rating: 4.7, category: 'Cameras', description: 'Professional mirrorless camera' },
      { id: 107, name: 'Samsung Galaxy S24', price: 899, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', rating: 4.6, category: 'Smartphones', description: 'Android flagship with AI features' },
      { id: 108, name: 'Sony WH-1000XM5', price: 399, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400', rating: 4.8, category: 'Audio', description: 'Noise-canceling headphones' },
      { id: 109, name: 'Bluetooth Speaker', price: 89, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', rating: 4.4, category: 'Audio', description: 'Portable wireless speaker' },
      { id: 110, name: 'Smart TV 55"', price: 699, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400', rating: 4.6, category: 'TVs', description: '4K Smart TV with streaming' }
    ],
    2: [ // Fashion
      { id: 201, name: 'Designer Dress', price: 299, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', rating: 4.5, category: 'Clothing', description: 'Elegant evening dress' },
      { id: 202, name: 'Leather Jacket', price: 399, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', rating: 4.6, category: 'Clothing', description: 'Premium leather jacket' },
      { id: 203, name: 'Running Shoes', price: 129, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', rating: 4.4, category: 'Shoes', description: 'Comfortable athletic shoes' },
      { id: 204, name: 'Designer Handbag', price: 599, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: 4.7, category: 'Bags', description: 'Luxury handbag' },
      { id: 205, name: 'Gold Necklace', price: 899, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400', rating: 4.8, category: 'Jewelry', description: 'Elegant gold necklace' },
      { id: 206, name: 'Denim Jeans', price: 89, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400', rating: 4.4, category: 'Clothing', description: 'Classic blue denim jeans' },
      { id: 207, name: 'Casual Sneakers', price: 79, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', rating: 4.3, category: 'Shoes', description: 'Comfortable daily sneakers' },
      { id: 208, name: 'Sunglasses', price: 199, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400', rating: 4.6, category: 'Accessories', description: 'Designer sunglasses' },
      { id: 209, name: 'Watch', price: 349, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', rating: 4.8, category: 'Accessories', description: 'Luxury wristwatch' }
    ],
    3: [ // Gaming
      { id: 301, name: 'PlayStation 5', price: 499, image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400', rating: 4.9, category: 'Consoles', description: 'Next-gen gaming console' },
      { id: 302, name: 'Gaming Headset', price: 199, image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400', rating: 4.6, category: 'Accessories', description: 'Professional gaming headset' },
      { id: 303, name: 'Mechanical Keyboard', price: 149, image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400', rating: 4.7, category: 'Accessories', description: 'RGB mechanical keyboard' },
      { id: 304, name: 'Gaming Mouse', price: 79, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', rating: 4.5, category: 'Accessories', description: 'High-precision gaming mouse' },
      { id: 305, name: 'VR Headset', price: 399, image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400', rating: 4.4, category: 'VR', description: 'Immersive VR experience' },
      { id: 306, name: 'Gaming Chair', price: 299, image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400', rating: 4.6, category: 'Furniture', description: 'Ergonomic gaming chair' },
      { id: 307, name: 'Xbox Controller', price: 89, image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400', rating: 4.5, category: 'Accessories', description: 'Wireless gaming controller' },
      { id: 308, name: 'Gaming Laptop', price: 1299, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400', rating: 4.5, category: 'Laptops', description: 'High-performance gaming laptop' }
    ],
    4: [ // Home & Living
      { id: 401, name: 'Coffee Machine', price: 299, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', rating: 4.5, category: 'Kitchen', description: 'Automatic espresso machine' },
      { id: 402, name: 'Sofa Set', price: 1299, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', rating: 4.6, category: 'Furniture', description: 'Comfortable 3-piece sofa set' },
      { id: 403, name: 'Table Lamp', price: 89, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400', rating: 4.4, category: 'Lighting', description: 'Modern LED table lamp' },
      { id: 404, name: 'Dining Table', price: 699, image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400', rating: 4.5, category: 'Furniture', description: 'Wooden dining table for 6' },
      { id: 405, name: 'Bed Frame', price: 449, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', rating: 4.5, category: 'Furniture', description: 'Modern platform bed' },
      { id: 406, name: 'Microwave', price: 149, image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400', rating: 4.4, category: 'Kitchen', description: 'Countertop microwave' }
    ],
    5: [ // Sports & Outdoor
      { id: 501, name: 'Yoga Mat', price: 49, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400', rating: 4.5, category: 'Fitness', description: 'Non-slip yoga mat' },
      { id: 502, name: 'Dumbbells Set', price: 199, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400', rating: 4.6, category: 'Fitness', description: 'Adjustable dumbbell set' },
      { id: 503, name: 'Mountain Bike', price: 599, image: 'https://images.unsplash.com/photo-1544191696-15693072b5a5?w=400', rating: 4.7, category: 'Outdoor', description: 'Mountain bike for trails' },
      { id: 504, name: 'Tennis Racket', price: 129, image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400', rating: 4.4, category: 'Sports', description: 'Professional tennis racket' },
      { id: 505, name: 'Camping Tent', price: 299, image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400', rating: 4.5, category: 'Outdoor', description: '4-person camping tent' },
      { id: 506, name: 'Basketball', price: 29, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400', rating: 4.4, category: 'Sports', description: 'Official size basketball' },
      { id: 507, name: 'Soccer Ball', price: 35, image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400', rating: 4.4, category: 'Sports', description: 'FIFA approved soccer ball' },
      { id: 508, name: 'Water Bottle', price: 19, image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', rating: 4.2, category: 'Fitness', description: 'Insulated water bottle' }
    ],
    6: [ // Books & Media
      { id: 601, name: 'Best Seller Novel', price: 19, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400', rating: 4.6, category: 'Books', description: 'Award-winning fiction novel' },
      { id: 602, name: 'Cookbook', price: 29, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', rating: 4.5, category: 'Books', description: 'Gourmet cooking recipes' },
      { id: 603, name: 'Vinyl Record', price: 39, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', rating: 4.7, category: 'Music', description: 'Classic rock vinyl album' },
      { id: 604, name: 'Board Game', price: 49, image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400', rating: 4.4, category: 'Games', description: 'Strategy board game' },
      { id: 605, name: 'Art Supplies', price: 79, image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=400', rating: 4.5, category: 'Art', description: 'Professional art kit' }
    ],
    7: [ // Beauty & Care
      { id: 701, name: 'Skincare Set', price: 89, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400', rating: 4.7, category: 'Skincare', description: 'Complete skincare routine' },
      { id: 702, name: 'Makeup Palette', price: 59, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', rating: 4.5, category: 'Makeup', description: 'Professional makeup palette' },
      { id: 703, name: 'Hair Dryer', price: 149, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400', rating: 4.6, category: 'Hair Care', description: 'Ionic hair dryer' },
      { id: 704, name: 'Perfume', price: 99, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400', rating: 4.8, category: 'Fragrance', description: 'Luxury eau de parfum' },
      { id: 705, name: 'Electric Toothbrush', price: 79, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400', rating: 4.5, category: 'Oral Care', description: 'Sonic electric toothbrush' }
    ],
    8: [ // Automotive
      { id: 801, name: 'Car Phone Mount', price: 29, image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400', rating: 4.4, category: 'Accessories', description: 'Magnetic phone holder' },
      { id: 802, name: 'Car Vacuum', price: 89, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', rating: 4.3, category: 'Tools', description: 'Portable car vacuum' },
      { id: 803, name: 'Jump Starter', price: 99, image: 'https://images.unsplash.com/photo-1609592806787-3d9c5b1e8b8e?w=400', rating: 4.7, category: 'Emergency', description: 'Portable jump starter' }
    ]
  };

  const categoryNames = {
    1: 'Electronics',
    2: 'Fashion',
    3: 'Gaming',
    4: 'Home & Living',
    5: 'Sports & Outdoor',
    6: 'Books & Media',
    7: 'Beauty & Care',
    8: 'Automotive'
  };

  const products = allProducts[categoryId] || [];
  const categoryName = categoryNames[categoryId] || 'Products';

  useEffect(() => {
    setSelectedCategory(categoryName);
  }, [categoryId, categoryName]);

  const filteredProducts = products
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link to="/categories" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryName}</h1>
          <p className="text-gray-600">{products.length} products available</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Price Range:</span>
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">${priceRange[0]} - ${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
              isInCart={isInCart(product.id)}
              isInWishlist={isInWishlist(product.id)}
              cartQuantity={getCartItemQuantity(product.id)}
              onAddToCart={() => addToCart(product)}
              onRemoveFromCart={() => removeFromCart(product.id)}
              onAddToWishlist={() => addToWishlist(product)}
              onRemoveFromWishlist={() => removeFromWishlist(product.id)}
              onUpdateQuantity={(quantity) => updateCartQuantity(product.id, quantity)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or price range</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  product,
  viewMode,
  isInCart,
  isInWishlist,
  cartQuantity,
  onAddToCart,
  onRemoveFromCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  onUpdateQuantity
}) => {
  return (
    <div className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${
      viewMode === 'list' ? 'flex items-center p-6' : ''
    }`}>
      {/* Product Image */}
      <div className={`${viewMode === 'list' ? 'w-24 h-24 mr-6 flex-shrink-0' : 'aspect-square'} bg-gray-100 relative overflow-hidden`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400';
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={isInWishlist ? onRemoveFromWishlist : onAddToWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isInWishlist
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className={`${viewMode === 'list' ? 'flex-1' : 'p-6'}`}>
        <div className={`${viewMode === 'list' ? 'flex items-center justify-between' : ''}`}>
          <div className={`${viewMode === 'list' ? 'flex-1 mr-6' : ''}`}>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
            </div>

            {/* Price */}
            <div className="text-xl font-bold text-gray-900 mb-4">
              ${product.price}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`${viewMode === 'list' ? 'flex items-center space-x-3' : 'space-y-3'}`}>
            {/* Cart Controls */}
            {isInCart ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onUpdateQuantity(cartQuantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                  {cartQuantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(cartQuantity + 1)}
                  className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onAddToCart}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            )}

            {/* Remove from Cart Button (when in cart) */}
            {isInCart && (
              <button
                onClick={onRemoveFromCart}
                className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
