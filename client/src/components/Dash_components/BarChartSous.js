import React from 'react';
import Utils from "./shared/Utils";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';


export default function BarChart() {
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
        const response = await fetch(`http://localhost:3000/api/dashboardStats/getPelerinParAgeWilaya/${wilaya}`);
        if (!response.ok) {
          throw new Error('Failed to fetch counts');
        }
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
  } 

  const labels = counts.map(item => item.ageRange);
  const dataValues = counts.map(item => item.count); 



const data = {
  labels: labels,
  datasets: [{
    label: 'Statistiques des pèlerins en Algeries par ages',
    data: dataValues,
    barThickness : 20,
    borderRadius: 15,
    backgroundColor: [
      'rgb(216,163,83)',
    ],
    borderColor: [
        'rgb(216,163,83)',  
    ],
    borderWidth: 1,
    
  }]
};





return    <Bar className="bg-[#FAF8F5] rounded-2xl shadow-xl p-5 " data={data}/>

}
