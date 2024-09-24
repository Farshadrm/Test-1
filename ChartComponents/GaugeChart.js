// components/GaugeChartWithLegend.js
"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const minValue = 0; // Minimum gauge value
  const maxValue = 100; // Maximum gauge value
  const gaugeValue = 75; // The current value for the gauge

  // Create data for the gauge chart
  const data = {
    labels: ['Label 1', 'Label 2'], // Legend labels
    datasets: [
      {
        data: [gaugeValue, maxValue - gaugeValue], // Data for filled and remaining part
        backgroundColor: ['#00b7c3', '#d1d1d1'], // Gauge and empty color
        borderWidth: 3,
        cutout: '70%',
        circumference: 180, // Half-circle
        rotation: 270, // Start from the bottom (12 o'clock)
      },
    ],
  };

  const options = {
    rotation: -90, // Rotate to start from the bottom
    circumference: 180, // Limit the chart to a half-circle
    cutout: '70%', // Control the thickness of the gauge
    plugins: {
      legend: {
        display: false,
        position: 'bottom', // Position of the legend
        labels: {
          usePointStyle: false, // Use a dot instead of a square for legend markers
        },
      },
      tooltip: {
        enabled: true, 
      },
      
  
    },
  };

  return (
    
    <div style={{position : 'relative', /* width: '200px', height: '200px' */ padding:'0px 0px 0px 10px'}} >
      <div style={{position: 'absolute' , bottom:'23%', left:'52%', transform:'translateX(-50%)' , fontSize: '32px', fontWeight:'bold', color:'#424242'}}>72%</div>
      <div style={{position: 'absolute' , bottom:'26%', left:'0px' , fontSize: '12px', fontWeight:'bold' , color:'#424242'}}>0</div>
      <div style={{position: 'absolute' , bottom:'26%', right:'-25px' , fontSize: '12px', fontWeight:'bold' , color:'#424242'}}>100</div>
      
      

      <Doughnut data={data} options={options}/>
    </div>
    
  );
};

export default GaugeChart;
