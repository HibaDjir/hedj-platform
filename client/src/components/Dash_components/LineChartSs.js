import {Line} from 'react-chartjs-2'
import React from 'react';
import Utils from "./shared/Utils";
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

export default function LineChart(){
  const [counts, setCounts] = useState([]);
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
    console.log("ages",counts)
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
              const response = await fetch(`http://localhost:3000/api/dashboardStats/getPelerinParYearByWilaya/${wilaya}`);
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


