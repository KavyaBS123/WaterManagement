import React from 'react';
import { Droplets, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan Today for a
            <span className="text-blue-600"> Sustainable Tomorrow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Advanced forecasting solutions for water resource management, helping communities and organizations make informed decisions for a sustainable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Explore Solutions
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Droplets className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Water Demand Forecasting</h3>
            <p className="text-gray-600">Accurate predictions of future water requirements using advanced ML models.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Storage Optimization</h3>
            <p className="text-gray-600">Optimize reservoir storage capacity based on demand patterns and climate data.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stakeholder Insights</h3>
            <p className="text-gray-600">Comprehensive analytics and reports for informed decision-making.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;