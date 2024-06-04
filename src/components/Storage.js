import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const Storage = () => {
  const data = {
    labels: ["Documents", "Images", "Videos", "Free"],
    datasets: [
      {
        data: [68, 55, 62, 315],
        backgroundColor: ["#FFCE56", "#36A2EB", "#4BC0C0", "#E7E9ED"],
        hoverBackgroundColor: ["#FFCE56", "#36A2EB", "#4BC0C0", "#E7E9ED"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '60%', // Adjusted to make the chart thicker
    rotation: -90 * (Math.PI / 180), // Rotate -90 degrees
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const totalStorage = 500;
  const usedStorage = 68 + 55 + 62;
  const percentageUsed = (usedStorage / totalStorage) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Storage</h3>
      <div className="flex justify-center">
        <div className="relative flex items-center justify-center w-40 h-40">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-black text-xl font-semibold">{`${Math.round(percentageUsed)}%`}</p>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 text-center">
        <div className="flex items-center space-x-2 hover:text-gray-400">
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          <span>Documents: 68 GB</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-gray-400">
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          <span>Images: 55 GB</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-gray-400">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span>Videos: 62 GB</span>
        </div>
        <div className="flex items-center space-x-2 hover:text-gray-400">
          <span className="h-2 w-2 rounded-full bg-gray-500"></span>
          <span>Free: 315 GB</span>
        </div>
      </div>
    </div>
  );
};

export default Storage;
