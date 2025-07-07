import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Users, 
  ShoppingBag, 
  Globe, 
  Award, 
  Heart, 
  Zap, 
  Shield, 
  Truck, 
  Headphones,
  ChevronRight,
  Play,
  Quote
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Users, value: '2M+', label: 'Happy Customers', color: 'from-blue-500 to-purple-500' },
    { icon: ShoppingBag, value: '500K+', label: 'Products Sold', color: 'from-green-500 to-teal-500' },
    { icon: Globe, value: '50+', label: 'Countries', color: 'from-orange-500 to-red-500' },
    { icon: Award, value: '15+', label: 'Awards Won', color: 'from-yellow-500 to-pink-500' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience blazing-fast shopping with our optimized platform',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data is protected with enterprise-grade security',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered in 24-48 hours worldwide',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our team is always here to help you with any queries',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      content: 'ShopHub has completely transformed my shopping experience. The quality and variety are unmatched!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Tech Reviewer',
      content: 'Amazing platform with cutting-edge features. The user experience is absolutely phenomenal.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      content: 'As a seller, ShopHub provides incredible tools and support. Highly recommended!',
      rating: 5,
      image: '👩‍🚀'
    }
  ];

  const tabContent = {
    story: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            Founded in 2020, ShopHub emerged from a simple vision: to revolutionize online shopping by creating 
            a platform that combines cutting-edge technology with exceptional user experience. What started as a 
            small team's dream has grown into a global marketplace trusted by millions.
          </p>
          <p>
            Our journey began when we noticed the gaps in traditional e-commerce - slow loading times, poor user 
            interfaces, and lack of personalization. We set out to build something different, something that would 
            make online shopping not just convenient, but truly enjoyable.
          </p>
          <p>
            Today, ShopHub stands as a testament to innovation, featuring AI-powered recommendations, lightning-fast 
            performance, and a community-driven approach that puts customers first. We're not just a marketplace; 
            we're a platform where dreams meet reality.
          </p>
        </div>
      </div>
    ),
    mission: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
        <div className="space-y-4 text-white/90 leading-relaxed">
          <p>
            At ShopHub, our mission is to democratize commerce by providing equal opportunities for businesses 
            of all sizes to thrive in the digital marketplace. We believe that everyone deserves access to 
            quality products and exceptional shopping experiences.
          </p>
          <p>
            We're committed to building sustainable relationships between buyers and sellers, fostering innovation, 
            and creating a positive impact on communities worldwide. Through technology, we aim to break down 
            barriers and connect people with products they love.
          </p>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-white/10">
            <Quote className="w-8 h-8 text-yellow-400 mb-4" />
            <p className="text-lg font-medium text-white italic">
              "To create a world where commerce knows no boundaries, and every transaction builds bridges 
              between communities."
            </p>
          </div>
        </div>
      </div>
    ),
    values: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Innovation', desc: 'Continuously pushing the boundaries of what\'s possible' },
            { title: 'Integrity', desc: 'Building trust through transparent and honest practices' },
            { title: 'Customer First', desc: 'Every decision we make prioritizes customer satisfaction' },
            { title: 'Sustainability', desc: 'Committed to environmental and social responsibility' }
          ].map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-white/80">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  ShopHub
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're not just another e-commerce platform. We're your gateway to a world of possibilities, 
                where innovation meets imagination and shopping becomes an adventure.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Our Story
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <ChevronRight className="w-5 h-5 inline ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
              {['story', 'mission', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              ShopHub?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-white/70 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-12 rounded-2xl border border-white/10">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                ShopHub Family?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the future of online shopping. Join millions of satisfied customers who've made ShopHub their preferred marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                Start Shopping Now
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;