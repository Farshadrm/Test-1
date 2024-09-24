// components/GroupedBarChart.js
"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GroupedBarChart = () => {
  const data = {
    labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    datasets: [
      {
        label: '2023 Sales',
        data: [68, 68, 68, 68, 68, 68, 100],
        backgroundColor: '#93c5fd',
        borderColor: '#93c5fd',
        borderWidth: 1,
      },
      {
        label: '2024 Sales',
        data: [83, 83, 83, 83, 83, 83, 100],
        backgroundColor: '#1d4ed8',
        borderColor: '#1d4ed8',
        borderWidth: 1,
      },
      {
        label: '2023 Sales',
        data: [30, 30, 30, 30, 30, 30 ,100],
        backgroundColor: '#888888',
        borderColor: '#888888',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    scales: {
      x: {
        grid:{
            display : false
        },
        title: {
          display: false,
          text: '', // Label for the X axis
        },
        ticks: {
          display: true, // Show the labels on the x-axis
        },
      },
      y: {
        title: {
          display: false,
          text: '', // Label for the Y axis
        },
        ticks: {
          display: true, // Show the labels on the y-axis
        },
        beginAtZero: true, // Start the y-axis at 0
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top', // Position of the legend
      },
      title: {
        display: false,
        text: 'Grouped Bar Chart with X and Y Axis Labels', // Title for the chart
      },
    },
  };

  return (
    <div style={{  width: '100%', height: '100%' , marginLeft:'-10px',marginTop:'40px'}}>
      
      <Bar data={data} options={options}/>
    </div>
  );
};

export default GroupedBarChart;
