// components/BarChart.js
"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const BarChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sample Data',
        data: [70000, 80000, 62000, 70000, 62000, 90000, 100000],
        backgroundColor: [
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        ],
        borderColor: [
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        '#00b7c3',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options to show labels on both axes

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid:{
          display:false
        },
        title: {
          display: true, // Show the X axis label
          text: 'X-axis title', // Text for the X axis label
        },
        ticks: {
          display: true, // Show the labels on the x-axis
        },
      },
      y: {
        title: {
          display: true, // Show the Y axis label
          text: 'Y-axis title', // Text for the Y axis label
        },
        ticks: {
          display: true, // Show the labels on the y-axis
          callback: function(label, index, labels) {
            return label/1000+'k';
        }
        },
        beginAtZero: true, // Start the y-axis at 0
      },
    },
    plugins: {
      legend: {
        display: false, // Shows the legend
        position: 'top',
      },
      title: {
        display: false,
        text: 'Bar Chart with X and Y Axis Labels', // Title for the chart
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%', marginLeft:'-10px' }}>
      
      <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;
