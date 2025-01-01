import React from 'react';
import { Brain, Database, CloudRain } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      icon: <Database className="text-purple-600" />,
      title: "Data Collection",
      description: "Historical water usage patterns, climate data, and population statistics"
    },
    {
      icon: <Brain className="text-blue-600" />,
      title: "ML Processing",
      description: "Advanced machine learning models analyze patterns and predict future demands"
    },
    {
      icon: <CloudRain className="text-green-600" />,
      title: "Climate Integration",
      description: "Real-time climate data integration for accurate forecasting"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition relative">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-white rounded-full border-2 border-gray-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;