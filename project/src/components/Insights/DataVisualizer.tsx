import React from 'react';
import WaterUsageChart from './WaterUsageChart';
import StorageChart from './StorageChart';

const DataVisualizer = () => {
  return (
    <section id="insights" className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Model Insights</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <WaterUsageChart />
          <StorageChart />
        </div>
      </div>
    </section>
  );
};

export default DataVisualizer;