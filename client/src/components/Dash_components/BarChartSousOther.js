import React from 'react';
import Utils from "./shared/Utils";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"
import { useEffect, useState } from 'react';


export default function BarChart() {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    fetchCounts()
    console.log("ages",counts)
        },[]);  


  const fetchCounts = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/api/dashboardStats/getCandidParAge`);
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
    label: 'Statistiques des candidats en Algeries par ages',
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
