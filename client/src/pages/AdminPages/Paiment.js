import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/Sidebar";
import { Link,useNavigate  } from "react-router-dom";
import carteccp from "./Carteccp"
import virementccp from "./Virementccp"

import axios from 'axios';

export let idCandidat = 'dzddzddzd';

function Paiment() {
  const navigate=useNavigate()

  const [candidats, setCandidats] = useState([]);

  useEffect(() => {   
        //axios.get('http://localhost:3000/api/candidature/validPaie/find?fieldName=id_medecin&fieldValue=663bd2be3b644e05d59fd85f')
        axios.get('http://localhost:3000/api/candidature/validPaie/find?fieldName=is_valid_paie&fieldValue=-1')
          .then(responseC => {
            setCandidats(responseC.data);
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des options :', error);
          });
  }, []);

  const handleRowClick = (rowData) => {
    const paiment = rowData[1]; // Assuming "Paiment" is the second column
    if (paiment === "carte ccp") {
      window.location.href = "/Carteccp"; // Redirect to "/carteccp" route
    } else if (paiment === "virement postale") {
      window.location.href = "/Virementccp"; // Redirect to "/virementccp" route
    } else {
      console.error("Unsupported Paiment type:", paiment);
    }
  };

  const handleColumnClick = (candidat_rslt, paiment) => {
    idCandidat=candidat_rslt;
    if(paiment === true && idCandidat != 'dzddzddzd'){
      navigate('/Carteccp')
    }else if(paiment === false && idCandidat != 'dzddzddzd'){
      navigate('/Virementccp')
    }
    // Perform actions based on the clicked column index
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }
  const columns = [
    { name: "_id", label: "Nom", options: { display: false, filter: false, sort: true, } },
    { name: "Nom_Prenom", label: "Nom Prenom", options: { filter: false, sort: true } },
    { name: "Paiment", label: "Type de paiment", options: { filter: true, sort: true } },
    { name: "Decision", label: "Décision", options: { filter: true, sort: true } },
  ];

  const options = {
    filterType: "checkbox",
    //onRowClick: handleRowClick,
  };

  const PaimentData = candidats.map(candidat => ({
    _id: candidat._id,
    Nom_Prenom: (
      <a onClick={() => handleColumnClick(candidat._id, candidat.is_paie_carte)} style={{ color: "inherit", textDecoration: "inherit", cursor: 'pointer' }}>
        {candidat.nom} {candidat.prenom}
      </a>
    ),
    Paiment: candidat.is_paie_carte ? 'carte ccp' : 'virement postale',
    Decision: candidat.is_valid_paie === 0 ? 'en attente' : (candidat.is_valid_paie === 1 ? 'Approuvé' : (candidat.is_valid_paie === 2 ? 'Non Approuvé' : 'Accun paiement' ) ),
  })
  );  

  return (

    <div className='w-full flex overflow-hidden
'><div className={`fixed  top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  sm:w-auto`} >
<Sidebar />
</div>
<div className=" w-full flex flex-col">
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 gap-9 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div >
      <MUIDataTable title={"Gestion des Paiment"} data={PaimentData} columns={columns} options={options} />
    </div>
</div>

</div>



    
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
  );
}

export default Paiment;
