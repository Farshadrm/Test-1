// components/GaugeChartWithLegend.js
"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GaugeChart = () => {
  const minValue = 0; // Minimum gauge value
  const maxValue = 270; // Maximum gauge value
  const gaugeValue1 = 250; 
  const gaugeValue2 = 220; 
  const gaugeValue3 = 180; 
  const gaugeValue4 = 130; 
  const gaugeValue5 = 230; 
  const gaugeValue6 = 190; 
  const gaugeValue7 = 200; 
  const gaugeValue8 = 150; 


  // Create data for the gauge chart
  const data = {
    labels: ['30%', '30%','30%','30%','30%','30%','30%','30%',], // Legend labels
    datasets: [
      {
        data: [ maxValue - gaugeValue1, gaugeValue1], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#555555'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue2, gaugeValue2], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#2563eb'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue3, gaugeValue3], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#3b82f6'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue4, gaugeValue4], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#aaaaaa'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue5, gaugeValue5], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#60a5fa'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue6, gaugeValue6], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#1d4ed8'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue7, gaugeValue7], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#1e3a8a'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
      },
      {
        data: [ maxValue - gaugeValue8, gaugeValue8], // Data for filled and remaining part
        backgroundColor: ['#f5f5f5','#bfdbfe'], // Gauge and empty color
        borderWidth: 3,
        cutout: '15%',
        circumference: 270, // Half-circle
        rotation: 90, // Start from the bottom (12 o'clock)
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
        position: 'right', // Position of the legend
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
    <div style={{ position:'relative'}}>
      
        <ul style={{listStyle:'none', display:'flex', flexDirection:'column', position:'absolute',top:'.5%',right:'28%',gap:'0px', padding:'-4px'}}>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#555555', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#2563eb', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#3b82f6', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#aaaaaa', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#60a5fa', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#1d4ed8', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#1e3a8a', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          <li style={{display:'flex', gap:'4px', alignItems:'center'}}>
            <div style={{height:'9px', width:'9px' , backgroundColor:'#bfdbfe', }}></div>
            <div style={{fontSize:'10px'}}>30%</div>
          </li>
          
        </ul>
      
      <Doughnut data={data} options={options}/>
    </div>
  );
};

export default GaugeChart;
