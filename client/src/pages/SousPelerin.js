import React, {useState, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddAdminModal from "../Popups/AddCommune";
import add from "../images/mini_add.png";
import Logo from "../images/LOGO.png";

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



    const [pelerin, setPelerin] = useState();


    useEffect(() => {  
        setPelerin('1234567')  
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
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
         


<div className="bg-white h-16 px-4 flex items-center justify-between">
    <div className="flex justify-between items-center px-4 py-3 w-full">
        <div className="flex justify-end w-full">
            <img className="w-20 h-auto" src={Logo} alt="LOGO" style={{ alignSelf: 'flex-start' }} />
        </div>
    </div>
</div>
















  
          {/* Cards */}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 p-5">Pélerins</h2>

          <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">

  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50">
    <div class="absolute top-4 px-2 text-gray-700"> 
    <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className='h-6 w-6'/>  
      <h3 class="ml-2 text-sm  font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Nombre de Pélerins</h3>
      
  </div>    
  </div>
  
      <p class="text-2xl text-center font-semibold text-gray-600"> {pelerin}
</p>
   
  </div> 
      
      </div>


      <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">


<div className="flex justify-between mb-8 mt-6 ">

{isAddAdminModalOpen && (
  <AddAdminModal onClose={closeAddAdminModal} />
)}


</div>
<MUIDataTable
title={"Pélerins"}
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