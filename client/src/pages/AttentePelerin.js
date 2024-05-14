import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../components/Dash_components/shared/Sidebar";
import AddAdminModal from "../Popups/AddMed";
import Header from "../components/Dash_components/shared/Header";

import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export default function Medecins() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pelerin, setPelerin] = useState([])
  useEffect(() => {
    fetchPelerin();
    console.log('pelerin est  ',pelerin)
  }, [pelerin]); 

  const fetchPelerin = async () => { 
    try {
      const response = await fetch('http://localhost:3000/api/getAllPelerinsAtt');
      if (!response.ok) {
        throw new Error('Failed to fetch pelerin');
      }
      const data = await response.json();
      console.log('data est ',data)
      setPelerin(data);
    } catch (error) {
      console.error('Error fetching pelerin:', error);
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
 
    { 
     name: "etat", 
     label: "Etat", 
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
   
const recentPelerinAtt =  pelerin.map(pel => { 
  console.log('pel:', pel) 
  return{ 
    firstName: pel.nom, 
    lastName: pel.prenom, 
    email: pel.email, 
    NumeroTelephone: pel.NumeroTelephone, 
    etat: pel.etat, 
    name:pel.wilayaName, 
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
  } 
  });





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
      

        <div className="flex justify-between mb-8 mt-6 ">
        
        {isAddAdminModalOpen && (
          <AddAdminModal onClose={closeAddAdminModal} />
        )}
      
      
    </div>
        <MUIDataTable
          title={"La liste d'attente des Pélerins"}
          data={recentPelerinAtt}
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
