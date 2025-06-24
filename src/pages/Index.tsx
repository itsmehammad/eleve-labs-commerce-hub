
import RotatingBanner from '@/components/RotatingBanner';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Rotating Banner */}
        <RotatingBanner />
        
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
            Welcome to ELEVE LABS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our premium collection of organic nuts, seeds, and healthy snacks. 
            Elevate your nutrition with our carefully curated products.
          </p>
        </div>

        {/* Products Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 border-t border-yellow-500/20 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Information */}
            <div>
              <h3 className="text-xl font-bold text-yellow-500 mb-4">ELEVE LABS</h3>
              <p className="text-gray-300 mb-4">
                Premium organic nuts, seeds, and healthy snacks to elevate your nutrition and lifestyle.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-yellow-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">elevelabs0@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">123 Health Street, Wellness City, WC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-300">Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="/products" className="text-gray-300 hover:text-yellow-500 transition-colors">Products</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact</a></li>
                <li><a href="/cart" className="text-gray-300 hover:text-yellow-500 transition-colors">Shopping Cart</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers</p>
              <div className="flex justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white focus:outline-none focus:border-yellow-500"
                />
                <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-r-md hover:bg-yellow-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Eleve Labs. All rights reserved. | Made with ❤️ for healthy living
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
