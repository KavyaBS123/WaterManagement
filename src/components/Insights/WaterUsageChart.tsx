import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getWaterUsageData, chartOptions } from '../../utils/charts';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WaterUsageChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <Line options={chartOptions} data={getWaterUsageData()} />
    </div>
  );
};

export default WaterUsageChart;