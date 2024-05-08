import { Doughnut } from 'react-chartjs-2';
import LineChart from './LineChart';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

export default function DoughnutChartSous() {

  const [counts, setCounts] = useState(0)
  const [daata, setDaata] = useState([]);
  const [userId, setUserId] = useState(null);

  const response = localStorage.getItem('user');
  const parsedRes = JSON.parse(response);
  const token = parsedRes.token
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    if (decodedToken && decodedToken._id) {
      setUserId(decodedToken._id); // Store ID if found in decoded token
      fetchWilaya(userId);
    }
    if(daata.wilaya){
  fetchCounts(daata.wilaya)
    }
      },[userId,daata]);


      const fetchWilaya = async(id)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/masterAdmin/getSaousAdminByuserId/${id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch Candidats');
            }
            const data = await response.json();
            setDaata(data);
          } catch (error) {
            console.error('Error fetching candidats:', error);
          }
      }
      const fetchCounts = async(wilaya)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/dashboardStats/getFMCandCountByWilaya/${wilaya}`);
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