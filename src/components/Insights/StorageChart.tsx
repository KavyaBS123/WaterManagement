import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getStorageData, chartOptions } from '../../utils/charts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StorageChart = () => {
  const storageChartOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      title: {
        display: true,
        text: 'Storage Capacity Analysis',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Bar options={storageChartOptions} data={getStorageData()} />
    </div>
  );
};

export default StorageChart;