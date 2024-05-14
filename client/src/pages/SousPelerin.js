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
import {jwtDecode} from 'jwt-decode';

import axios from 'axios';

export default function Dashboard() {

    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const openAddAdminModal = () => {
      setIsAddAdminModalOpen(true);
    };
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
    };

    const [pelerins, setPelerins] = useState([]);
    const [pelerinsLen, setLenPelerins] = useState(0);
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

      if (daata.wilaya) { // Check if daata.wilaya has a value to avoid errors
        fetchPelerin(daata.wilaya);
      }    }, [ daata,userId]);


  
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


      const fetchPelerin = async (wilaya) => {
        try {
          const response = await fetch(`http://localhost:3000/api/getPelerinByWilaya/${wilaya}`);
          if (!response.ok) {
            throw new Error('Failed to fetch pelerins');
          }
          const data = await response.json();
          setPelerins(data);
        } catch (error) {
          console.error('Error fetching pelerins:', error);
        }
      };
  
      const columns = [
        {
  
         name: "firstName",
         label: "Nom",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "lastName",
          label: "Prenom",
          options: {
           filter: true,
           sort: true,
          }
         },
  
        {
         name: "email",
         label: "E-mail",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "etat",
         label: "Etat",
         options: {
          filter: true,
          sort: false,
         }
        },
   
        {
            name: "NumeroTelephone",
            label: "Numéro De teléphone",
            options: {
             filter: true,
             sort: false,
            }
           },
  
         {
           name: "name",
           label: "wilaya",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
            name: "Candidat_commune",
            label : "Commune",
            options: {
              filter: true,
              sort: false
            }
          },
       
         {
          name: "Candidat_sexe",
          label: "Sexe",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
           name: "Num_passport",
           label: "Numéro De Passport",
           options: {
            filter: true,
            sort: false,
           }
          },
  
         {
          name: "Etat_civil",
          label: "Etat Civil",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
           name: "Nat",
           label: "Nationalité",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Adresse_com",
           label: "Adresse complete",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Groupe_sang",
           label: "Groupe sanguin",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Numero_ass",
           label: "Numéro d'assurance",
           options: {
            filter: true,
            sort: false,
           }
          },
          {
           name: "Malad_chro",
           label: "Maladie Chronique",
           options: {
            filter: true,
            sort: false,
           }
          },

  
  
       ];
    const options = {
        filterType: 'checkbox',
      };
      const recentPelData = pelerins.map(pel => ({
        firstName: pel.nom,
        lastName: pel.prenom,
        email: pel.email,
        NumeroTelephone: pel.NumeroTelephone,
        name: pel.wilayaName,
        _id: pel._id ,
        Nat:pel.Nat,
        Adresse_com:pel.Adresse_com,
        Groupe_sang:pel.Groupe_sang,
        Numero_ass:pel.Numero_ass,
        Malad_chro:pel.Malad_chro,
        Adresse_com: pel.address,
        Candidat_sexe:pel.Candidat_sexe,
        Etat_civil:pel.Etat_civil,
        Candidat_commune:pel.Candidat_commune,
        Num_passport:pel.Num_passport
      }));
  




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
  
      <p class="text-2xl text-center font-semibold text-gray-600"> {pelerins.length}
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
  data={recentPelData}
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