import Sidebar from '../components/Dash_components/shared/Sidebar'
import Header from '../components/Dash_components/shared/Header'
import React , {useState} from 'react'
import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TiTime } from "react-icons/ti";
import add from "../images/mini_add.png";
import MUIDataTable from "mui-datatables";
import TirageAge from "../Popups/TirageAge"
export default function Session() {

  



  const valeur = document.createElement('input');
valeur.setAttribute('type', 'text');

    const columns = [
        {
         name: "Admin_name",
         label: "Administrateurs",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
            name: "Admin_wilaya",
            label: "wilaya",
            options: {
             filter: true,
             sort: false,
            }
           },
       
        {
         name: "current_Admin_status",
         label: "Nombre de Places",
         options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => updateValue(e.target.value)}
                />
            );
         }
        }
        },
       
        {
            name: "Admin_numero_de_telephone",
            label: "Nombre de Candidats",
            options: {
             filter: true,
             sort: false,
            }
           },
           
           
       ];
    const options = {
        filterType: 'checkbox',
      };
    const recentAdminData = [
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
    
    
        Admin_name: "Harrath Bouchra",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
        Admin_name: "kechar djamal",
        current_Admin_status: "Active",
        Admin_wilaya: "Chlef",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
        Admin_name: "kechar djamal",
        current_Admin_status: "innactif",
        Admin_wilaya: "Bejaia",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
        Admin_name: "mohammed djamal",
        current_Admin_status: "innactif",
        Admin_wilaya: "Bejaia",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
      {
        Admin_name: "djamila kechar",
        current_Admin_status: "innactif",
        Admin_wilaya: "Bejaia",
        Admin_numero_de_telephone: "06 54 32 55 78",
      },
    ];
    



    const openAddAdminModal = (algo) => {
      setSelectedAlgo(algo);
      if (algo.name === "Par age") {
        setIsAddAdminModalOpen(true);
      }
    }
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
      setSelectedAlgo(null); // Reset selected algo
    };


    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const [selectedAlgo, setSelectedAlgo] = useState(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
}
    return (
        <div>
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
          <div className="p-9 flex flex-col items-start">
            <div className='flex'>
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Session de Elhadj  </h2>
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-black">  _Année 2024 </h1>
          </div>

            {/* <Cards /> */}
            <div>
    <div >



<div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50">
  <div class="absolute top-4 px-2 text-gray-700"> 
  <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>    
    <div class="mb-6 mt-10 shadow-xl">
    <input type="text" id="default-input" class="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 h-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>

    <p class="text-3xl"></p>
  </div>
</div>



<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transfrom transition duration-500 hover:scale-105 hover:rounded-2xl h-40 w-50">
  <div class="absolute top-4 px-2 text-gray-700">
  <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>
    <div class="relative mb-6 mt-10">
      <Combobox className="z-0" style={{ width: 'calc(100% - 4px)' }} openAddAdminModal={openAddAdminModal} /> 
    </div>
 
    <p class="text-3xl"></p>
  </div>
</div>

<div class=" relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="absolute top-4 px-2 text-gray-700 ">
            
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>
            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative  flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="absolute top-4 px-2 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>
            <div class="relative  mb-6 mt-10 ">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
        <div class="absolute top-4 px-2 text-gray-700 p-1">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>
            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
        <div class=" absolute top-4 px-4 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="absolute top-4 px-4 text-gray-700 ">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>            <div class="relative mb-6 mt-10 ">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="px-4 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='font-bold '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
</div>
            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>
    </div>











    <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">


<div className="flex justify-between mb-8 mt-6 ">
<button
  className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353]
border p-2"
>
  <img className="h-3 w-3  mt-2 mx-2  " src={add} />
  Ajouter Wilaya
</button>



</div>
<MUIDataTable
title={"Medecins"}
data={recentAdminData}
columns={columns}
options={options}
/>





</div>  


</div>



      </div>
     </div>
</div>

{isAddAdminModalOpen && selectedAlgo && selectedAlgo.name === "Par age" && (
          <TirageAge onClose={closeAddAdminModal} />
        )}


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
          
          </div>
          </div>
    )
}