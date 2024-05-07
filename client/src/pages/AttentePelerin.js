import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../components/Dash_components/shared/Sidebar";
import AddAdminModal from "../Popups/AddMed";
import Header from "../components/Dash_components/shared/Header";
export default function Medecins() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
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
      name: "Admin_name",
      label: "Nom du Candidat",
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
       name: "Num_passport",
       label: "Numéro De Passport",
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
      {
       name: " Admin_e_mail",
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
      {
       name: "Numero_ass",
       label: "Numéro du passport de Elmahrem",
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
    </div>
    </div>
  );
}
