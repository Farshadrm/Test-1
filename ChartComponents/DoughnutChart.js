// components/DoughnutChart.js
"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['title 1', 'title 2', 'title 3', 'title 4', 'title 5'],
    datasets: [
      {
        label: '# of Votes',
        data: [19, 12, 8, 5, 10],
        backgroundColor: [
          '#a6e9ed',
          '#00666d',
          '#005b70',
          '#00b7c3',
          '#f5f5f5',
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    cutout:'72%',
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      // Custom plugin to draw the number in the center of the doughnut
      // beforeDraw: (chart) => {
      //   const { width, height, ctx } = chart;
      //   ctx.restore();
      //   const fontSize = (height / 114).toFixed(2);
      //   ctx.font = `${fontSize}em sans-serif`;
      //   ctx.textBaseline = 'middle';

      //   const text = '10000', // Number in the center
      //     textX = Math.round((width - ctx.measureText(text).width) / 2),
      //     textY = height / 2;

      //   ctx.fillText(text, textX, textY);
      //   ctx.save();
      // },
    },
    // cutout: '70%', // Makes the center of the doughnut larger
  };

  return (
    <div style={{position : 'relative', marginTop:'30px'}} >
      <div style={{position: 'absolute' , top:'50%', left:'50%', transform:'translate(-50%,-50%)' , fontSize: '30px', fontWeight:'bold', color:'#424242'}}>1000</div>
      <Doughnut data={data} options={options}/>
    </div>
  );
};

export default DoughnutChart;
