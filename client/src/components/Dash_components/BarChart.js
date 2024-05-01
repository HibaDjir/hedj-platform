import React from 'react';
import Utils from "./shared/Utils";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"

export default function BarChart() {

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'Statistiques des pèlerins en Algeries',
    data: [65, 59, 80, 81, 56, 55, 40],
    barThickness : 20,
    borderRadius: 15,
    backgroundColor: [
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
      'rgb(216,163,83)',
    ],
    borderColor: [
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',
        'rgb(216,163,83)',


      
    ],
    borderWidth: 1,
    
  }]
};





return    <Bar className="bg-[#FAF8F5] rounded-2xl shadow-xl p-5 " data={data}/>

}
