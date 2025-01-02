import React from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-xl">WaterForecast</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#insights" className="text-gray-700 hover:text-blue-600 transition">Insights</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition">Solutions</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#insights" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Insights</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="#contact" className="block px-3 py-2 text-blue-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50">
        <MessageCircle size={24} />
      </button>
    </nav>
  );
};

export default Navigation;