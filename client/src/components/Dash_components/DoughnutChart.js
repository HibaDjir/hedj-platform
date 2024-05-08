import { Doughnut } from 'react-chartjs-2';
import LineChart from './LineChart';
import { useEffect, useState } from 'react';

export default function DoughnutChart() {

  const [counts, setCounts] = useState(0)

  useEffect(() => {
  fetchCounts()
      },[]);
      const fetchCounts = async()=>{
        try {
            const response = await fetch(`http://localhost:3000/api/dashboardStats/getFMPelCount`);
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
    labels: [
      'Homme',
      'Femme',

    ],
    datasets: [{
     
      data: [ counts.maleCount, counts.femaleCount],
      backgroundColor: [
        'rgb(0,0,0)',
        'rgb(216,163,83)',
        
      ],
      hoverOffset: 4,
      borderRadius:10
    }]
  };

  const options = {
    cutout: '80%', // Adjust the cutout percentage to make the chart skinnier
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      }
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'Total',
            font: {
              size: '20'
            }
          }
        ]
      }
    }
  };

  return ( 
  
  
    <div className="flex">
    <div className="flex-1">
      <div className="bg-[#FAF8F5] shadow-xl rounded-2xl h-full">
        <Doughnut data={data} options={options} />
      </div>
    </div>
    <div className="flex-1">
  </div>
  </div>









  
//   <div className="bg-[#FAF8F5] shadow-xl w-50 h-30 rounded-2xl" >
//   <Doughnut data={data} options={options} />
// </div>




)

};