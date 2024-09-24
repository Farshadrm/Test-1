// components/MultipleLineChart.js
"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler);

const MultipleLineChart = () => {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', '', ''];

  const data = {
    labels,
    datasets: [
      {
        label: 'Line 1',
        data: [52000, 56000, 50000, 81000, 43000, 22000, 53000 ,55000, 100000],
        borderColor: '#00b7c3',
        backgroundColor: 'rgba(75, 192, 192, 0.3)',
        pointRadius:0,
        fill: true, // Enable filling for the area under the line
        tension: 0, // Smooth the line
      },
      {
        label: 'Line 2',
        data: [68000, 84000, 90000, 70000, 86000, 52000, 63000, 10000],
        borderColor: 'rgba(185, 6, 251)',
        backgroundColor: 'rgba(185, 6, 251, 0.3)',
        pointRadius:0,
        fill: true,
        tension: 0,
      },
    ],
  };

  const options = {
    
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
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: false,
        text: 'Multiple Line Chart Example',
      },
    },
  };

  return (
    <div style={{ position:'relative' , marginLeft:'-15px'}}>
      
        <ul style={{position:'absolute',display:'flex',listStyle:'none', alignItems:'center',gap:'5px', bottom:'-15%', left:'10%'}}>
          <li style={{display:'flex', alignItems:'center', gap:'5px'}}>
            <div style={{width: '10px ', height:'10px', backgroundColor: '#00b7c3',marginTop:'5px'}}></div>
            <div style={{color:'#424242'}}>Line 1</div>
          </li>
          <li style={{display:'flex', alignItems:'center',gap:'5px'}}>
          <div style={{width: '10px ', height:'10px', backgroundColor: 'rgba(185, 6, 251)', marginTop:'5px'}}></div>
          <div style={{color:'#424242'}}>Line 2</div>
          </li>
        </ul>
      
      <Line data={data} options={options}/>
    </div>
  );;
};


export default MultipleLineChart;
