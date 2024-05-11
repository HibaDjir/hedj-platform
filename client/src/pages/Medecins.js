import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { format } from "date-fns";
import { Link } from "react-router-dom";


import user from "../images/buchra.png";
import filter from "../images/filter.png";
import add from "../images/mini_add.png";
import down from "../images/chevron_down.png";
import Sidebar from "../components/Dash_components/shared/Sidebar";
import AddAdminModal from "../Popups/AddMed";

export default function Medecins() {
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
     name: "Admin_e_mail",
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

  return (
    <div
      className="w-full 
"
    >
      <Sidebar />
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 flex-col max-w-[1420px]  ml-64 ">

       
        <div className="max-w-[1420px]">
        <div className="flex justify-between mb-8 mt-6 ">
        
          
        <button
          className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353]
border p-2"
          onClick={openAddAdminModal}
        >
          <img className="h-3 w-3  mt-2 mx-2  " src={add} />
          Ajouter Medecin
        </button>
        {isAddAdminModalOpen && (
          <AddAdminModal onClose={closeAddAdminModal} />
        )}
      
      
    </div>
        <MUIDataTable
  title={"Medecins"}
  data={recentAdminData}
  columns={columns}
  options={options}
/>
 

       
        </div>
      </div>
    </div>
  );
}
