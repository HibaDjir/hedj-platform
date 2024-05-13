import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../components/Dash_components/shared/Sidebar";
import AddAdminModal from "../Popups/AddMed";
// import img from "../images/img.jpeg"
import Header from "../components/Dash_components/shared/Header";

import axios from 'axios';

export default function Medecins() {
  const [candidats, setCandidats] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
      
      axios.get('http://localhost:3000/api/wilaya/65ff830ed96578ad80742c2f')
        .then(response => {
          const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
          //alert('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99');
          axios.get('http://localhost:3000/api/candidature/genreMale/find?fieldName=wilaya&fieldValue='+additionalOptions.code)
            .then(responseC => {
              setCandidats(responseC.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des options :', error);
        });
  }, []);

  
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
     name: "nom",
     label: "Nom",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "prenom",
      label: "Prenom",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "date_naissance",
      label: "Date de naissance",
      options: {
       filter: true,
       sort: false,
      }
     },
    {
     name: "lieu_naissance",
     label: "Lieu de naissance",
     options: {
      filter: true,
      sort: false,
     }
    },

    {
      name: "nationalite",
      label: "Nationalite",
      options: {
       filter: true,
       sort: false,
      }
     },
    {
      name: "civilite",
      label: "Civilite",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "genre",
      label: "Genre",
      options: {
       filter: true,
       sort: false,
      }
     },
    {
     name: "num_passeport",
     label: "Num passeport",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "telephone",
      label: "Telephone",
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
      name: "address",
      label: "Address",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "groupage",
      label: "Groupage",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "nss",
      label: "Numéro de sécurité sociel",
      options: {
       filter: true,
       sort: false,
      }
     }
   ];
   const options = {
    filterType: 'checkbox',
  };
  const recentMedecinData = candidats.map(candidat => ({
    nom: candidat.nom,
    prenom: candidat.prenom,
    date_naissance: candidat.date_naissance,
    lieu_naissance: candidat.lieu_naissance,
    civilite: candidat.civilite,
    genre: candidat.genre,
    num_passeport: candidat.nom,
    telephone: candidat.prenom,
    email: candidat.email,
    NumeroTelephone: candidat.NumeroTelephone,
    address: candidat.address,
    groupage: candidat.groupage,
    nss: candidat.nss 
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
