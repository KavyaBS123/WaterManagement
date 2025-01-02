import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

const ScenarioTool = () => {
  const [population, setPopulation] = useState(50);
  const [climate, setClimate] = useState(50);
  const [industrial, setIndustrial] = useState(50);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Sliders className="text-blue-600" />
            <h2 className="text-2xl font-bold">Scenario Planning Tool</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Population Growth (%)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={population}
                  onChange={(e) => setPopulation(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600">{population}%</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Climate Impact
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={climate}
                  onChange={(e) => setClimate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600">{climate}%</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industrial Growth
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={industrial}
                  onChange={(e) => setIndustrial(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600">{industrial}%</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Projected Impact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Water Demand Increase</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(population + industrial) / 2}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Storage Requirements</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${(population + industrial + climate) / 3}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioTool;