import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-indigo-800 to-pink-800 text-white py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-lg flex items-center justify-center">
              <span className="text-purple-900 font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </div>
          <p className="text-sm text-white/70">Your one-stop destination for all your shopping needs. Trusted by millions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Customer Service</h2>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Get In Touch</h2>
          <p className="flex items-center space-x-2 text-sm text-white/80 mb-2">
            <Mail className="w-4 h-4" />
            <span>support@shophub.com</span>
          </p>
          <p className="flex items-center space-x-2 text-sm text-white/80 mb-4">
            <Phone className="w-4 h-4" />
            <span>+1 (234) 567-890</span>
          </p>

          {/* Social Media */}
          <div className="flex space-x-3">
            <a href="#" className="hover:text-white/100"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white/100"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white/100"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
