import React, {useState, useEffect} from 'react'
import BarChart from '../../components/Dash_components/BarChart'
import DoughnutChart from '../../components/Dash_components/DoughnutChart'
import LineChart from '../../components/Dash_components/LineChart'
import Cards from '../../components/Dash_components/CardsSous'
import Sidebar from '../../components/Dash_components/shared/SidebarSous'
import Header from '../../components/Dash_components/shared/HeaderSous'

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  

  
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-64 sm:w-auto`} >
          <Sidebar />
        </div>
  
        {/* Main Content */}
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 gap-9 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Header */}
          <Header />
  
          {/* Cards */}
          <div className="p-5 flex flex-col items-start">
          <h2 class="text-3xl font-extrabold p-7 tracking-tight text-gray-900 sm:text-4xl dark:text-black">Tableau de bord</h2>

            <Cards />
  
    
          </div>
{/* Charts */}
<div className="charts-container p-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 p-10">Les dernières statistique de la Wilaya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-7">
                <BarChart />
              </div>
              <div className="p-7">
                <BarChart />
              </div>
              <div className=" p-7">
                <DoughnutChart />
              </div>
              <div className="p-7">
                <LineChart />
              </div>
            </div>
          </div>

       </div>

        {/* Sidebar Toggle Button */}
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar" className="fixed top-5 left-5 z-50 p-3 bg-[#FAF8F5] rounded-full text-gray-600 sm:hidden">
          {isSidebarOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
   
    );
  }