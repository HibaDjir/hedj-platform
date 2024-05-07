import {Line} from 'react-chartjs-2'
import React from 'react';
import Utils from "./shared/Utils";

export default function LineChart(){
    const data = {
      labels: ['2019', '2020', '2021','2022', '2023', '2024'],
      datasets: [{
        label: 'Nombre de Pèlerins selon leurs Age',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(216,163,83)',
        tension: 0.1
      }]
    };

    const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
      
      
    
    return ( <div className="p-5 bg-[#FAF8F5] shadow-xl rounded-2xl" style={{  }}>
  <Line data={data} options={options} />
</div>)

}

