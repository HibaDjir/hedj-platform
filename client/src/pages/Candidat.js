import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { getAdminStatus } from "./AdminPages/lib/helpers";
import user from "../images/buchra.png";
import filter from "../images/filter.png";
import add from "../images/mini_add.png";
import down from "../images/chevron_down.png";
import Sidebar from "../components/Dash_components/shared/Sidebar";
import AddAdminModal from "../Popups/AddMed";
// import img from "../images/img.jpeg"
import Header from "../components/Dash_components/shared/Header";
export default function Medecins() {
  const [candidats, setCandidats] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

      
  useEffect(() => {
    fetchCandidats();
  }, [candidats]);

  const fetchCandidats = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/candidature/');
      if (!response.ok) {
        throw new Error('Failed to fetch Candidats');
      }
      const data = await response.json();
      setCandidats(data);
    } catch (error) {
      console.error('Error fetching candidats:', error);
    }
  };



  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }
 
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const openAddAdminModal = () => {
    setIsAddAdminModalOpen(true);
  };

  const closeAddAdminModal = () => {
    setIsAddAdminModalOpen(false);
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
      name: "Candidat_commune",
      label: "Commune",
      options: {
       filter: true,
       sort: false,
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
    

    { name: "etat",
     label: "Etat",
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
      name: "email",
     label: "E-mail",
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

     name: "name",
     label: "wilaya",
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
  const recentMedecinData = candidats.map(candidat => ({
    firstName: candidat.nom,
    lastName: candidat.prenom,
    email: candidat.email,
    NumeroTelephone: candidat.NumeroTelephone,
    etat: candidat.etat,
    name: candidat.wilayaName,
    _id: candidat._id ,
    Nat:candidat.Nat,
    Adresse_com:candidat.Adresse_com,
    Groupe_sang:candidat.Groupe_sang,
    Numero_ass:candidat.Numero_ass,
    Malad_chro:candidat.Malad_chro,
    Adresse_com: candidat.address,
    Candidat_sexe:candidat.Candidat_sexe,
    Etat_civil:candidat.Etat_civil,
    Candidat_commune:candidat.Candidat_commune,
    Num_passport:candidat.Num_passport


    

    
  }));      




  return (
   
 <div>
<div className="flex h-screen">
  {/* Sidebar */}
  <div className={`fixed  top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  sm:w-auto`} >
    <Sidebar />
  </div>

        {/* Main Content */}
        <div className=" w-full flex flex-col">
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 gap-9 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        
<Header/>


      <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
        <div className="max-w-[1420px]">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 ">Tous Les Candidats</h2>
      

        <div className="flex justify-between mb-8 mt-6 ">
        
        {isAddAdminModalOpen && (
          <AddAdminModal onClose={closeAddAdminModal} />
        )}
      
      
    </div>
        <MUIDataTable
  title={"Candidats"}
  data={recentMedecinData}
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
    </div>
    </div>
  );
}
