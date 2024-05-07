import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import user from '../../images/buchra.png';
import add from '../../images/mini_add.png';
import Sidebar from '../../components/Dash_components/shared/Sidebar';
import AddAdminModal from "../../Popups/AddAdmin";
import Header from "../../components/Dash_components/shared/Header";

export default function RecentAdmin() {
  const [sousAdmins,setSousAdmin]=useState([])
  useEffect(() => {
 
    fetchSousAdmin()
  }, [sousAdmins]);
  const fetchSousAdmin = async () => {
      
    const response = await fetch('http://localhost:3000/api/masterAdmin/getAllSaousAdmin');
    if (!response.ok) {
      throw new Error('Failed to fetch wilayas');
    }else{
    const data = await response.json();
    console.log("data before set",data)
    setSousAdmin(data);
   }


 
};

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/masterAdmin/deleteSousAdmin/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete SousAdmin');
      }
      // Update the table data after deletion
      fetchSousAdmin();
      console.log('SousAdmin deleted successfully');
    } catch (error) {
      console.error('Error deleting SousAdmin:', error);
    }
  };
 

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }
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
         label: "Wilaya",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "NumeroTelephone",
            label: "Numero de télephone",
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
                const sousAdminId = recentSousAdminData[tableMeta.rowIndex]._id;
                return (
                  <button onClick={() => handleDelete(sousAdminId)}>Delete</button>
                );
              },
              sort: false,
            }
          }
       ];
    const options = {
        filterType: 'checkbox',
      };
      const recentSousAdminData = sousAdmins.map(sousAdmin => ({
        firstName: sousAdmin.user.firstName,
        lastName: sousAdmin.user.lastName,
        email: sousAdmin.user.email,
        NumeroTelephone: sousAdmin.NumeroTelephone,
        etat: sousAdmin.etat,
        name: sousAdmin.Wilaya.name,
        _id:sousAdmin._id
      }));
    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
const openAddAdminModal = () => {
    setIsAddAdminModalOpen(true);
  };

  const closeAddAdminModal = () => {
    setIsAddAdminModalOpen(false);
  };
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
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]  ">

       
<div className="max-w-[1420px]">
<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 ">Administrateurs</h2>

<div className="flex justify-between mb-8 mt-6 ">

  
<button
  className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353]
border p-2"
  onClick={openAddAdminModal}
>
  <img className="h-3 w-3  mt-2 mx-2  " src={add} />
  Ajouter Admin
</button>
{isAddAdminModalOpen && (
  <AddAdminModal onClose={closeAddAdminModal} />
)}


</div>
<MUIDataTable
title={"Administrateurs"}
data={recentSousAdminData}
columns={columns}
options={options}
/>



</div>
</div>
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
