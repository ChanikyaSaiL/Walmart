import React, { useState, useEffect } from 'react';
import { Gamepad2, Home, Car, Dumbbell, Book, Shirt, Laptop, Heart, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [animationDelay, setAnimationDelay] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDelay(100), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      id: 1,
      name: 'Electronics',
      icon: <Laptop className="w-6 h-6" />,
      count: 10,
      color: 'blue',
      popular: true,
      trending: false,
      tags: ['Smartphones', 'Laptops', 'Audio', 'Cameras']
    },
    {
      id: 2,
      name: 'Fashion',
      icon: <Shirt className="w-6 h-6" />,
      count: 9,
      color: 'pink',
      popular: true,
      trending: false,
      tags: ['Clothing', 'Shoes', 'Bags', 'Jewelry']
    },
    {
      id: 3,
      name: 'Gaming',
      icon: <Gamepad2 className="w-6 h-6" />,
      count: 8,
      color: 'green',
      popular: false,
      trending: true,
      tags: ['Consoles', 'Games', 'Accessories', 'VR']
    },
    {
      id: 4,
      name: 'Home & Living',
      icon: <Home className="w-6 h-6" />,
      count: 6,
      color: 'orange',
      popular: true,
      trending: false,
      tags: ['Furniture', 'Decor', 'Kitchen', 'Lighting']
    },
    {
      id: 5,
      name: 'Sports & Outdoor',
      icon: <Dumbbell className="w-6 h-6" />,
      count: 8,
      color: 'red',
      popular: false,
      trending: true,
      tags: ['Fitness', 'Sports', 'Outdoor', 'Wellness']
    },
    {
      id: 6,
      name: 'Books & Media',
      icon: <Book className="w-6 h-6" />,
      count: 5,
      color: 'indigo',
      popular: false,
      trending: false,
      tags: ['Books', 'Movies', 'Music', 'Comics']
    },
    {
      id: 7,
      name: 'Beauty & Care',
      icon: <Heart className="w-6 h-6" />,
      count: 5,
      color: 'purple',
      popular: true,
      trending: true,
      tags: ['Skincare', 'Makeup', 'Fragrance', 'Wellness']
    },
    {
      id: 8,
      name: 'Automotive',
      icon: <Car className="w-6 h-6" />,
      count: 3,
      color: 'gray',
      popular: false,
      trending: false,
      tags: ['Parts', 'Accessories', 'Tools', 'Electronics']
    }
  ];

  const filters = [
    { id: 'all', name: 'All', count: categories.length },
    { id: 'popular', name: 'Popular', count: categories.filter(c => c.popular).length },
    { id: 'trending', name: 'Trending', count: categories.filter(c => c.trending).length }
  ];

  const filteredCategories = categories.filter(category => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'popular') return category.popular;
    if (selectedFilter === 'trending') return category.trending;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Browse
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Categories
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Find exactly what you're looking for
            </p>
          </div>

          {/* Filters & View Toggle */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
                >
                  <span>{filter.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedFilter === filter.id
                      ? 'bg-purple-900/20 text-purple-900'
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredCategories.map((category, index) => {
              const getGradientClasses = (color) => {
                const gradients = {
                  blue: 'from-blue-500 to-blue-600',
                  pink: 'from-pink-500 to-rose-500',
                  green: 'from-green-500 to-emerald-500',
                  orange: 'from-orange-500 to-amber-500',
                  red: 'from-red-500 to-pink-500',
                  indigo: 'from-indigo-500 to-purple-500',
                  purple: 'from-purple-500 to-violet-500',
                  gray: 'from-gray-500 to-slate-500'
                };
                return gradients[color] || gradients.gray;
              };

              const getHoverGlow = (color) => {
                const glows = {
                  blue: 'group-hover:shadow-blue-500/25',
                  pink: 'group-hover:shadow-pink-500/25',
                  green: 'group-hover:shadow-green-500/25',
                  orange: 'group-hover:shadow-orange-500/25',
                  red: 'group-hover:shadow-red-500/25',
                  indigo: 'group-hover:shadow-indigo-500/25',
                  purple: 'group-hover:shadow-purple-500/25',
                  gray: 'group-hover:shadow-gray-500/25'
                };
                return glows[color] || glows.gray;
              };

              return (
                <div
                  key={category.id}
                  className={`group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                    viewMode === 'list' ? 'flex items-center p-6' : 'h-80'
                  }`}
                >
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClasses(category.color)} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content Container */}
                  <div className={`relative z-10 ${
                    viewMode === 'list' ? 'flex items-center w-full' : 'p-5 h-full flex flex-col'
                  }`}>

                    {/* Top Section */}
                    <div className={`${viewMode === 'list' ? 'flex items-center flex-1' : ''}`}>
                      {/* Icon */}
                      <div className={`${viewMode === 'list' ? 'mr-6' : 'mb-4'}`}>
                        <div className={`w-14 h-14 bg-gradient-to-br ${getGradientClasses(category.color)} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          {category.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <h3 className={`${viewMode === 'list' ? 'text-xl' : 'text-lg'} font-bold text-gray-900 mb-2`}>
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {category.count.toLocaleString()} products available
                        </p>

                        {/* Enhanced Tags */}
                        <div className={`${viewMode === 'list' ? 'flex flex-wrap gap-2' : 'grid grid-cols-2 gap-2 mb-3'}`}>
                          {category.tags.slice(0, 4).map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className={`${
                                viewMode === 'list'
                                  ? 'inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700 border border-gray-200'
                                  : 'bg-white/60 rounded-lg p-2 border border-gray-200/50 hover:bg-white/80 transition-colors duration-200'
                              }`}
                            >
                              {viewMode === 'list' ? (
                                tag
                              ) : (
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium text-gray-700">{tag}</span>
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradientClasses(category.color)}`}></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={`${viewMode === 'list' ? 'flex items-center space-x-4 ml-6' : 'mt-auto pt-2 flex items-center justify-between'}`}>
                      {/* Badges */}
                      <div className="flex gap-2 flex-wrap">
                        {category.popular && (
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getGradientClasses(category.color)} text-white shadow-md`}>
                            Popular
                          </span>
                        )}
                        {category.trending && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md">
                            Trending
                          </span>
                        )}
                      </div>

                      {/* Explore Button */}
                      <Link
                        to={`/products/${category.id}`}
                        className={`px-4 py-2 bg-gradient-to-r ${getGradientClasses(category.color)} text-white text-sm font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 opacity-80 group-hover:opacity-100 flex-shrink-0 inline-flex items-center justify-center`}
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;