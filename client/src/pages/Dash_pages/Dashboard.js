import React from 'react'
import BarChart from '../../components/Dash_components/BarChart'
import DoughnutChart from '../../components/Dash_components/DoughnutChart'
import LineChart from '../../components/Dash_components/LineChart'
import Cards from '../../components/Dash_components/Cards'
import Sidebar from '../../components/Dash_components/shared/Sidebar'
import Header from '../../components/Dash_components/shared/Header'

// export default function Dashboard() {
//     return (
//       <div className="flex flex-col h-screen">
//         {/* Header */}
//         <Header />
//         <div className="flex flex-1">
//           {/* Sidebar */}
//           <div className="fixed top-0 bottom-0 overflow-y-auto">
//             <Sidebar />
//           </div>
//           {/* Main Content */}
//           <div className="flex flex-col flex-1 pl-64 p-8 gap-9">
//             {/* Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap here */}
//               <Cards />
//             </div>
//             {/* Charts */}
//             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Les dernières statistique de Elhadj</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Increased gap here */}
//               {/* First Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Second Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Third Chart */}
//               <div className="w-full">
//                 <div style={{ width: "100%", height: "100%" }}>
//                   <DoughnutChart />
//                 </div>
//               </div>
//               {/* Fourth Chart */}
//               <div className="w-full">
//                 <LineChart />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  




// export default function Dashboard() {
//     return (
//       <div className="flex flex-col h-screen">
//         {/* Header */}
//         <Header />
//         <div className="flex flex-1">
//           {/* Sidebar */}
//           <div className="fixed top-0 bottom-0 overflow-y-auto">
//             <Sidebar />
//           </div>
//           {/* Main Content */}
//           <div className="flex flex-col flex-1 pl-64 p-8 gap-9"> {/* Added padding here */}
//             {/* Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap here */}
//               <Cards />
//             </div>
//             {/* Charts */}
//             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Les dernières statistique de Elhadj</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Increased gap here */}
//               {/* First Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Second Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Third Chart */}
//               <div className="w-full">
//                 <div style={{ width: "100%", height: "100%" }}>
//                   <DoughnutChart />
//                 </div>
//               </div>
//               {/* Fourth Chart */}
//               <div className="w-full">
//                 <LineChart />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  











// export default function Dashboard() {
//     return (
//       <div className="flex flex-col gap-9 h-screen">
//         {/* Header */}
//         <Header />
//         <div className="flex flex-1">
//           {/* Sidebar */}
//           <div className="fixed top-0 bottom-0 overflow-y-auto">
//             <Sidebar />
//           </div>
//           {/* Main Content */}
//           <div className="flex flex-col flex-1 pl-64 p-8 gap-9"> {/* Adjusted padding here */}
//             {/* Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Increased gap here and added margin bottom */}
//               <Cards />
//             </div>
//             {/* Charts */}
//             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Les dernières statistique de Elhadj</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Increased gap here */}
//               {/* First Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Second Chart */}
//               <div className="w-full">
//                 <BarChart />
//               </div>
//               {/* Third Chart */}
//               <div className="w-full">
//                 <DoughnutChart />
//               </div>
//               {/* Fourth Chart */}
//               <div className="w-full">
//                 <LineChart />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  







export default function Dashboard() {
    return (
      <div className="flex flex-col h-screen">
        {/* Header */}
        <Header />
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="fixed top-0 bottom-0 overflow-y-auto">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="flex flex-col flex-1 pl-64 p-8 gap-9"> {/* Adjusted padding here */}
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"> {/* Increased gap here and added margin bottom */}
              <Cards />
            </div>
            {/* Charts */}
            <div className="charts-container"> {/* Container for charts and title */}
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4">Les dernières statistique de Elhadj</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> {/* Increased gap here */}
                {/* First Chart */}
                
                <div className="w-full">
                  <BarChart />
                </div>
                {/* Second Chart */}
                <div className="w-full">
                  <BarChart />
                </div>
                {/* Third Chart */}
                <div className="w-full">
                  <DoughnutChart />
                </div>
                {/* Fourth Chart */}
                <div className="w-full">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  