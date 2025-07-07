import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Zap, Shield, Truck, Headphones, Eye, Heart } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Premium Electronics",
      subtitle: "Latest Tech at Unbeatable Prices",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
      cta: "Shop Electronics"
    },
    {
      title: "Fashion Forward",
      subtitle: "Trendy Styles for Every Occasion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      cta: "Discover Fashion"
    },
    {
      title: "Home & Living",
      subtitle: "Transform Your Space",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      cta: "Shop Home"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: "$299",
      originalPrice: "$399",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: "$449",
      originalPrice: "$599",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      badge: "New"
    },
    {
      id: 3,
      name: "Designer Backpack",
      price: "$129",
      originalPrice: "$179",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
      badge: "Limited"
    },
    {
      id: 4,
      name: "Gaming Laptop Ultra",
      price: "$1,299",
      originalPrice: "$1,599",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80",
      badge: "Sale"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "📱", color: "from-blue-500 to-cyan-400" },
    { name: "Fashion", icon: "👗", color: "from-pink-500 to-rose-400" },
    { name: "Home & Garden", icon: "🏠", color: "from-green-500 to-emerald-400" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-yellow-400" },
    { name: "Books", icon: "📚", color: "from-purple-500 to-indigo-400" },
    { name: "Beauty", icon: "💄", color: "from-pink-500 to-purple-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-indigo-900/40 to-pink-900/60"></div>
        {heroSlides.map((slide, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1 : 1.05
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover brightness-75"
            />
          </motion.div>
        ))}

        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center text-white max-w-4xl">
            <motion.h1
              key={currentSlide}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              {heroSlides[currentSlide].cta}
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[{ icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
            { icon: Shield, title: "Secure Payment", desc: "100% protected payments" },
            { icon: Headphones, title: "24/7 Support", desc: "Dedicated service" },
            { icon: Zap, title: "Fast Delivery", desc: "Express shipping ready" }
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <f.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ translateY: -5, rotate: 1 }}
                className="group"
              >
                <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6 text-center shadow-md transition-shadow duration-300`}>
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h3 className="text-white font-semibold tracking-wide">{cat.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <button className="text-purple-600 hover:text-purple-800 font-semibold flex items-center">
              View All
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden border hover:border-purple-300"
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-white">
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-48 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">
                      {p.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{p.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(p.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({p.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-800">{p.price}</span>
                      <span className="text-sm text-gray-500 line-through">{p.originalPrice}</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-800 via-indigo-800 to-pink-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated with ShopHub</h2>
          <p className="text-xl text-white/90 mb-8">Get exclusive deals, new arrivals, and special offers.</p>
          <div className="max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center shadow-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 bg-transparent text-white placeholder-white/70 focus:outline-none rounded-l-full"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
