import React from 'react';
import { FileText } from 'lucide-react';
import DownloadButton from './DownloadButton';

const Recommendations = () => {
  const handleDownload = (reportName: string) => {
    // In a real application, this would trigger a download from your server
    console.log(`Downloading ${reportName}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Policy Recommendations</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Key Recommendations</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-medium">1</span>
                </div>
                <p className="text-gray-600">Implement smart metering systems for real-time water usage monitoring</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-medium">2</span>
                </div>
                <p className="text-gray-600">Develop drought management plans based on predictive analytics</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-medium">3</span>
                </div>
                <p className="text-gray-600">Establish water conservation incentives for industrial users</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Download Reports</h3>
            <div className="space-y-4">
              <DownloadButton
                title="Water Demand Analysis 2024"
                description="Comprehensive report on future water demands"
                icon={<FileText className="text-blue-600" />}
                onClick={() => handleDownload('water-demand-analysis-2024.pdf')}
              />
              
              <DownloadButton
                title="Storage Infrastructure Guide"
                description="Technical recommendations for capacity planning"
                icon={<FileText className="text-green-600" />}
                onClick={() => handleDownload('storage-infrastructure-guide.pdf')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;