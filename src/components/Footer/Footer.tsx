import React from 'react';
import { Droplets, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import FooterSection from './FooterSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-blue-500" />
              <span className="text-white font-bold text-xl">WaterForecast</span>
            </div>
            <p className="text-sm">
              Advanced forecasting solutions for sustainable water resource management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition"><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection
            title="Quick Links"
            links={[
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
              { label: "Blog", href: "#blog" },
            ]}
          />

          {/* Resources */}
          <FooterSection
            title="Resources"
            links={[
              { label: "Documentation", href: "#" },
              { label: "Research Papers", href: "#" },
              { label: "Case Studies", href: "#" },
              { label: "FAQs", href: "#" },
            ]}
          />

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>1234 Water Street</p>
              <p>Sustainability City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@waterforecast.com</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {currentYear} WaterForecast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;