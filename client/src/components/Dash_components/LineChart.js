import {Line} from 'react-chartjs-2'
import React from 'react';
import Utils from "./shared/Utils";
import { useEffect, useState } from 'react';


export default function LineChart(){
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    fetchCounts()
    console.log("ages",counts)
        },[]);


        const fetchCounts = async()=>{
          try {
              const response = await fetch(`http://localhost:3000/api/dashboardStats/getPelerinParYear`);
              if (!response.ok) {
                throw new Error('Failed to fetch counts');
              }
              const data = await response.json();
              setCounts(data);
            } catch (error) {
              console.error('Error fetching counts:', error);
            }
        } 

        const labels = counts.map(item => item.year);
        const dataValues = counts.map(item => item.count);


        const data = {
          labels: labels,
          datasets: [{
            label: 'Nombre de Pèlerins selon leurs Age',
            data: dataValues,
            fill: false,
            borderColor: 'rgb(216,163,83)',
            tension: 0.4
          }]
        };

    const options = {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      };
      
    return ( <div className="p-5 bg-[#FAF8F5] shadow-xl rounded-2xl" style={{  }}>
  <Line data={data} options={options} />
</div>)

}


