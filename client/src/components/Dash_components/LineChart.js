import {Line} from 'react-chartjs-2'
import React from 'react';
import Utils from "./shared/Utils";
import { useEffect, useState } from 'react';


export default function LineChart(){

  const [counts, setCounts] = useState(0)

  useEffect(() => {
    fetchCounts()
        },[]);
        const fetchCounts = async()=>{
          try {
              const response = await fetch(`http://localhost:3000/api/dashboardStats/getPelerinParAge`);
              if (!response.ok) {
                throw new Error('Failed to fetch counts');
              }
              const data = await response.json();
              setCounts(data);
            } catch (error) {
              console.error('Error fetching counts:', error);
            }
        } 
  





    const data = {
      labels: [counts.age],
      datasets: [{
        label: 'Nombre de Pèlerins selon leurs Age',
        data: [counts.ageRange],
        fill: false,
        borderColor: 'rgb(216,163,83)',
        tension: 10
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

