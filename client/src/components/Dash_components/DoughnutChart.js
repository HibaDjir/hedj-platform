import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {
const data = {
    labels: [
      'Femme',
      'Homme'
    ],
    datasets: [{
      label: 'En 2023',
      data: [300, 50],
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

  return ( <div className="bg-[#FAF8F5] shadow-xl p-5 rounded-2xl" >
  <Doughnut data={data} options={options} />
</div>)

};