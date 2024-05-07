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
import Header from "../components/Dash_components/shared/Header";

export default function Medecins() {
    const [medecins, setMedecins] = useState([])
    
    useEffect(() => {
      fetchMedecins();
    }, [medecins]);


    const fetchMedecins = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/medecin/getAllMedecins');
        if (!response.ok) {
          throw new Error('Failed tomedecins fetch Medecins');
        }
        const data = await response.json();
        setMedecins(data);
      } catch (error) {
        console.error('Error fetching Medecins:', error);
      }
    };

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`http://localhost:3000/api/medecin/deleteMedecinById/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete Medecin');
        }
        // Update the table data after deletion
        fetchMedecins();
        console.log('Medecin deleted successfully');
      } catch (error) {
        console.error('Error deleting Medecin:', error);
      }
    };
    
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
        name: "delete",
        label: "Supprimer",
          options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            const medecinId = recentMedecinData[tableMeta.rowIndex]._id;
            return (
              <button onClick={() => handleDelete(medecinId)}>Delete</button>
            );
          },
          sort: false,
        }
      }
     
   ];
const options = {
    filterType: 'checkbox',
  };
  const recentMedecinData = medecins.map(medecin => ({
    firstName: medecin.user.firstName,
    lastName: medecin.user.lastName,
    email: medecin.user.email,
    NumeroTelephone: medecin.NumeroTelephone,
    etat: medecin.etat,
    name: medecin.Wilaya.name,
    _id: medecin._id 
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
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 ">Médecins</h2>
      

        <div className="flex justify-between mb-8 mt-6 ">
        <button
          className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2"
          onClick={openAddAdminModal}>
          <img className="h-3 w-3  mt-2 mx-2  " src={add} />
          Ajouter Medecin
        </button>
        {isAddAdminModalOpen && (
          <AddAdminModal onClose={closeAddAdminModal} />
        )}
      
      
    </div>
        <MUIDataTable
  title={"Medecins"}
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