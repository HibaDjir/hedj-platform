import React, {useState, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddAdminModal from "../Popups/AddCommune";
import add from "../images/mini_add.png";

import Sidebar from '../components/Dash_components/shared/SidebarSous'
import Header from '../components/Dash_components/shared/HeaderSous'
import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TiTime } from "react-icons/ti";
export default function Dashboard() {

    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const openAddAdminModal = () => {
      setIsAddAdminModalOpen(true);
    };
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
    };
  
    const columns = [
      {
       name: "Admin_name",
       label: "Nom",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: " Admin_e_mail",
       label: "E-mail",
       options: {
        filter: true,
        sort: false,
       }
      },
      {
       name: "current_Admin_status",
       label: "Etat",
       options: {
        filter: true,
        sort: false,
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
          name: "Admin_numero_de_telephone",
          label: "Numéro De teléphone",
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
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
  
  
      Admin_name: "Harrath Bouchra",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
      Admin_name: "kechar djamal",
      Admin_e_mail: "bouchra.harrath5@gmail.com",
      current_Admin_status: "Active",
      Admin_wilaya: "Chlef",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
      Admin_name: "kechar djamal",
      Admin_e_mail: "kechar@gmail.com",
      current_Admin_status: "innactif",
      Admin_wilaya: "Bejaia",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
      Admin_name: "mohammed djamal",
      Admin_e_mail: "kechar@gmail.com",
      current_Admin_status: "innactif",
      Admin_wilaya: "Bejaia",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
    {
      Admin_name: "djamila kechar",
      Admin_e_mail: "djamila.kechar@gmail.com",
      current_Admin_status: "innactif",
      Admin_wilaya: "Bejaia",
      Admin_numero_de_telephone: "06 54 32 55 78",
    },
  ];



    const [mode, setMode] = useState();

    const [debutinsc, setDebutinsc] = useState();
    const [fininsc, setFininsc] = useState();

	const [debuttirage, setDebuttirage] = useState();
    const [fintirage, setFintirage] = useState();

    const [debutmed, setDebutmed] = useState();
    const [finmed, setFinmed] = useState();

    const [debutpaiment, setDebutpaiment] = useState();
    const [finpaiment, setFinpaiment] = useState();

    const [debutvols, setDebutvols] = useState();
    const [finvols, setFinvols] = useState();

    const [debuthedj, setDebutedj] = useState();
    const [finhedj, setFinhedj] = useState();





    useEffect(() => {
        setDebutinsc('Charles')
        setMode('Par age')
        setDebutpaiment("Oran")
        setFinpaiment("Oran")
    }, []);


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
          
          <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50">
    <div class="absolute top-4 px-2 text-gray-700"> 
    <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className='h-6 w-6'/>  
      <h3 class="ml-2 text-sm  font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Mode de Tirage</h3>
      
  </div>    
  </div>
  
      <p class="text-2xl text-center  text-gray-600"> {mode}
</p>
   
  </div>
  
  
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transfrom transition duration-500 hover:scale-105 hover:rounded-2xl h-40 w-50">
    <div class="absolute top-4 px-2 text-gray-700">
    <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
  </div>
  
      </div>
      <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutinsc} </span></p>
            <p><span class="font-bold text-base"> Date fin: {fininsc}</span></p>
        </div>
  </div>
  
  <div class=" relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-2 text-gray-700 ">
              
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de Tirage</h3>
  </div>
      
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debuttirage} </span></p>
            <p><span class="font-bold text-base"> Date fin: {fintirage}</span></p>
        </div> 
      </div>
  
  <div class="relative  flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-2 text-gray-700">
          <div class=" top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-9 w-9'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de la consultation du médecin</h3>
  </div>
       
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début: {debutmed}</span></p>
            <p><span class="font-bold text-base"> Date fin:{finmed} </span></p>
        </div>  
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
          <div class="absolute top-4 px-2 text-gray-700 p-1">
          <div class=" top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période du paiment </h3>
  </div>
       
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutpaiment} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finpaiment} </span></p>
        </div> 
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
          <div class=" absolute top-4 px-4 text-gray-700">
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de confirmation des vols </h3>
  </div>
            
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutvols} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finvols} </span></p>
        </div> 
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-4 text-gray-700 ">
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de Elhedj</h3>
  </div>
 
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debuthedj} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finhedj} </span></p>
        </div>
      </div>
  
      
      </div>


      <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">


<div className="flex justify-between mb-8 mt-6 ">
<button
  className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2"
  onClick={openAddAdminModal}>
  <img className="h-3 w-3  mt-2 mx-2  " src={add} />
  Ajouter Commune
</button>
{isAddAdminModalOpen && (
  <AddAdminModal onClose={closeAddAdminModal} />
)}


</div>
<MUIDataTable
title={""}
data={recentAdminData}
columns={columns}
options={options}
/>



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