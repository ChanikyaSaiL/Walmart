import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { cartCount, wishlistCount } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '#' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' }
  ];

  return (
    <div className="relative">
      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-pink-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-r from-purple-800 via-indigo-800 to-pink-800 shadow-md'
      }`}>
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-purple-900 font-bold text-lg">S</span>
                </div>
                <h1 className="text-2xl font-bold text-white">
                  ShopHub
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-colors duration-200 rounded-lg hover:bg-white/10"
                  >
                    {item.name}
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative px-4 py-2 text-white/90 hover:text-white font-medium transition-colors duration-200 rounded-lg hover:bg-white/10"
                  >
                    {item.name}
                    {item.badge && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full p-0.5">
                  <div className="bg-gradient-to-r from-purple-700/80 via-indigo-700/80 to-pink-700/80 backdrop-blur-sm rounded-full flex items-center relative">
                    <div className="pl-4 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-white/90" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 pl-3 pr-20 py-3 bg-transparent rounded-full text-white placeholder-white/70 focus:outline-none font-medium focus:placeholder-white/50"
                      placeholder="Search products..."
                    />
                    <div className="absolute right-2 bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer hover:shadow-lg transition-all">
                      Search
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Notification Bell */}
              <button className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* User Account */}
              <button className="p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10">
                <User className="w-5 h-5" />
              </button>

              {/* Shopping Cart */}
              <Link to="/cart" className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-purple-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-purple-800/95 via-indigo-800/95 to-pink-800/95 backdrop-blur-lg shadow-xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          <div className="p-6 border-b border-white/20">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="p-6 border-b border-white/20">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/70" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Mobile navigation */}
          <nav className="p-6 space-y-2">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;