import React from 'react';
import { AlertTriangle, BarChart2, Users } from 'lucide-react';

const Challenge = () => {
  const challenges = [
    {
      icon: <AlertTriangle className="text-amber-600" />,
      title: "Climate Change Impact",
      description: "Rising temperatures and changing precipitation patterns affect water availability."
    },
    {
      icon: <Users className="text-blue-600" />,
      title: "Population Growth",
      description: "Increasing urban populations create growing demands on water resources."
    },
    {
      icon: <BarChart2 className="text-green-600" />,
      title: "Resource Management",
      description: "Balancing agricultural, industrial, and residential water needs."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding the Challenge</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mb-4 flex items-center justify-center">{challenge.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;