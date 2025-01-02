import { ChartData, ChartOptions } from 'chart.js';

export const getWaterUsageData = (): ChartData<'line'> => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Residential Usage',
      data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 60, 65],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1,
    },
    {
      label: 'Industrial Usage',
      data: [28, 48, 40, 19, 86, 27, 90, 85, 80, 75, 70, 65],
      borderColor: 'rgb(16, 185, 129)',
      tension: 0.1,
    },
  ],
});

export const getStorageData = (): ChartData<'bar'> => ({
  labels: ['Reservoir A', 'Reservoir B', 'Reservoir C', 'Reservoir D'],
  datasets: [
    {
      label: 'Current Capacity (%)',
      data: [75, 60, 85, 45],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1,
    },
  ],
});

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Water Usage Trends',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};