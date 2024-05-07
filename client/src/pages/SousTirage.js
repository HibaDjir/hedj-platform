import React, {useState, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddAdminModal from "../Popups/AddMed";
import add from "../images/mini_add.png";
import { FaCirclePlay } from "react-icons/fa6";
import Sidebar from '../components/Dash_components/shared/SidebarSous'
import Header from '../components/Dash_components/shared/HeaderSous'
import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TiTime } from "react-icons/ti";
import Select from "react-select";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function SousTirage() {


    const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
    useEffect(() => {
        const selectedDiv = document.getElementById(selectedAlgorithm);
        if (selectedDiv) {
          selectedDiv.style.borderColor = "#D8A353";
        }
    
        // Reset border color of other divs
        const divs = document.querySelectorAll('.algorithm-div');
        divs.forEach(div => {
          if (div.id !== selectedAlgorithm) {
            div.style.borderColor = "";
          }
        });
      }, [selectedAlgorithm]);











    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          padding: "0.15rem",
          borderRadius: "0.5rem",
          width: "100%",
        
        }),
      };

    const columns = [
        {
         name: "Comm_name",
         label: "Commune",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: " Nbr_places",
         label: "Nombre de Places",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "Pop",
         label: "Population",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "Nbr_candidats",
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



    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const openAddAdminModal = () => {
      setIsAddAdminModalOpen(true);
    };
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
    };



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
          
<div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
      <div
        id="tranche-age"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("tranche-age")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Tranche d'age</p>
      </div>

      <div
        id="numero-inscription"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("numero-inscription")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Nombre d'inscription</p>
      </div>

      <div
        id="aleatoire"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("aleatoire")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Aléatoire</p>
      </div>

      <div
        id="performant"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("performant")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Tous les Performances</p>
      </div>
    </div>

{/*Tableau*/}

      <div className="bg-white px-4 pt-3 mr-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">



<div className="flex justify-between mb-8 mt-6 p-3">
  <div className="flex items-stretch">
    <div className="flex p-4 ">
    

    <div className="flex flex-col mx-2 h-12 w-auto">
      <Select
        name="commune"
        styles={customStyles}
        placeholder="Commune"
        isRtl={true}
        
      />
    </div>
    <button
      className="text-[#1D1D1B] text-md font-medium flex justify-between border-[#D8A353] rounded-md bg-[#D8A353] border items-center h-10 p-2 mr-2"
    >
      <FaCirclePlay className="h-6 w-6 mt-2 mx-2  " src={add} />
      Commencer le tirage
    </button>
    <button
      className="text-[#1D1D1B] font-medium flex justify-between border-[#D8A353] rounded-md bg-[#D8A353] border items-center h-10 p-2 mr-2"
    >
      <MdOutlineSlowMotionVideo className="h-6 w-6 mt-2 mx-2  " src={add} />
      Affichage Séquentiel
    </button>
    </div>
  </div>
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