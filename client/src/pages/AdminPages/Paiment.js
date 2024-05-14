import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/SidebarSous";
import { Link,useNavigate  } from "react-router-dom";
import carteccp from "./Carteccp"
import virementccp from "./Virementccp"
import {jwtDecode} from 'jwt-decode';

import axios from 'axios';

export let idCandidat = 'dzddzddzd';

function Paiment() {
  const navigate=useNavigate()

  const [candidats, setCandidats] = useState([]);
  
  const [daata, setDaata] = useState([]);
  const [userId, setUserId] = useState(null);

  const response = localStorage.getItem('user');
  const parsedRes = JSON.parse(response);
  const token = parsedRes.token
  const decodedToken = jwtDecode(token);

  
  useEffect(() => {

    if (decodedToken && decodedToken._id) {
      setUserId(decodedToken._id); // Store ID if found in decoded token
      fetchWilaya(userId);
      //alert(daata.wilaya)
    }
    if (daata.wilaya) { // Check if daata.wilaya has a value to avoid errors
      axios.get('http://localhost:3000/api/wilaya/'+daata.wilaya)
      .then(response => {
        const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
        //alert('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99');
        axios.get('http://localhost:3000/api/candidature/validPaie/find?fieldName=wilaya&fieldValue='+additionalOptions.code)
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
      //fetchCandidats(daata.wilaya);
    } 
        //axios.get('http://localhost:3000/api/candidature/validPaie/find?fieldName=id_medecin&fieldValue=663bd2be3b644e05d59fd85f')
  }, [userId, daata]);

  const fetchWilaya = async(id)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/masterAdmin/getSaousAdminByuserId/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Candidats');
        }
        const data = await response.json();
        setDaata(data);
      } catch (error) {
        console.error('Error fetching candidats:', error);
      }
  }

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
