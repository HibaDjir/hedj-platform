import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

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
         name: "Admin_e_mail",
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
                const sousAdminId = recentAdminData[tableMeta.rowIndex]._id;
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
    const recentAdminData = [
        {
            id: '1',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },  {
            id: '2',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '3',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '4',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '5',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '6',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '7',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '8',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '9',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '10',
            
            Admin_name: 'Harrath Bouchra',
            Admin_e_mail: 'bouchra.harrath5@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'Chlef',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
        {
            id: '10',
            
            Admin_name: 'Boukrara Melissa',
            Admin_e_mail: 'bkrmel@gmail.com',
            current_Admin_status: 'Active',
            Admin_wilaya: 'boujie ',
            Admin_numero_de_telephone: '06 54 32 55 78',
        },
    ];
    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
const openAddAdminModal = () => {
    setIsAddAdminModalOpen(true);
  };

  const closeAddAdminModal = () => {
    setIsAddAdminModalOpen(false);
  };
    return (

<div className='w-full  overflow-hidden
'>
        <Sidebar/>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 flex-col max-w-[1420px]  ml-64 ">

       
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
data={recentAdminData}
columns={columns}
options={options}
/>



</div>
</div>
        </div>
    );
}
