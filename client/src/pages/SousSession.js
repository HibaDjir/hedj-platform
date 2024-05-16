import React, {useState, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddAdminModal from "../Popups/AddCommune";
import add from "../images/mini_add.png";

import Sidebar from '../components/Dash_components/shared/SidebarSous'
import Header from '../components/Dash_components/shared/HeaderSous'
/*import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';*/
import { TiTime } from "react-icons/ti";

import { jwtDecode } from 'jwt-decode';

import moment from 'moment';
import axios from 'axios';

export default function Dashboard() {

    const [id_session, setSession] = useState(null);
    const [annee, setAnnee] = useState('2024');
    
    const [communes, setCommunes] = useState([]);

    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const openAddAdminModal = () => {
      setIsAddAdminModalOpen(true);
    };
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
    };

    
    const [inputValues, setInputValues] = useState({});

    const handleChange = (event, rowIndex, columnIndex) => {
        const { value } = event.target;
        setInputValues(prevState => ({
            ...prevState,
            [rowIndex]: {
                ...prevState[rowIndex],
                [columnIndex]: value
            }
        }));
    };
    const openCommuneModal = async (rowData, rowIndex, code) => {
        // Get the input value for the clicked row
        const nb_places = parseInt(inputValues[rowIndex]?.[2]) || 0;
        try {
            // Make a PUT request to the backend API to update the record
            const response = await axios.put('http://localhost:3000/api/commune/update', { code, nb_places });
            // Handle success (e.g., show a success message)
            alert("Record updated successfully");
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error("Error:", error);
        }

    };
  
    const columns = [
      {
       name: "code",
       label: "Code",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
       name: "ar_name",
       label: "Commune",
       options: {
        filter: true,
        sort: true,
       }
      },
      {
        name: "nb_places",
        label: "Nombre de Places",
        options: {
         filter: true,
         sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            const rowIndex = tableMeta.rowIndex;
            const columnIndex = tableMeta.columnIndex;
            return (
                <input
                    type="text"
                    //value={inputValues[rowIndex]?.[columnIndex] || ""}
                    value={inputValues[rowIndex]?.[columnIndex] || value}
                    onChange={(event) => handleChange(event, rowIndex, columnIndex)}
                />
            );
          }
        }
      },
      {
       name: "actions",
       label: "Actions",
         options: {
          customBodyRender: (value, tableMeta) => {
            const communeCode = recentCommuneData[tableMeta.rowIndex].code;
            return (
                <button className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2" 
                onClick={() => openCommuneModal(value, tableMeta.rowIndex, communeCode)}>Ajouter N. Places</button>
            );
          },
          sort: false,
       }
     }];

  const options = {
      filterType: 'checkbox',
    };
  
  const recentCommuneData = communes.map(commune => ({
    code: commune.code,
    ar_name: commune.ar_name,
    nb_places: commune.nb_places
  })); 


    const [mode, setMode] = useState();

    const [debutinsc, setDebutinsc] = useState();
    const [fininsc, setFininsc] = useState();

	const [debuttirage, setDebuttirage] = useState();
    const [fintirage, setFintirage] = useState();

    const [debutmed, setDebutmed] = useState();
    const [finmed, setFinmed] = useState();

    const [debutpaiment, setDebutpaiment] = useState();
    const [finpaiment, setFinpaiment] = useState();

    const [debutvols, setDebutvols] = useState();
    const [finvols, setFinvols] = useState();

    const [debuthedj, setDebutedj] = useState();
    const [finhedj, setFinhedj] = useState();

    const [daata, setDaata] = useState([]);
    const [userId, setUserId] = useState(null);

    const response = localStorage.getItem('user');
    const parsedRes = JSON.parse(response);
    const token = parsedRes.token
    const decodedToken = jwtDecode(token);

    useEffect(() => {
        
      if (decodedToken && decodedToken._id) {
        setUserId(decodedToken._id); // Store ID if found in decoded token
        if(decodedToken._id != null) fetchWilaya(decodedToken._id);
        if(daata.wilaya != null){
          axios.get('http://localhost:3000/api/wilaya/name/'+daata.wilaya)
          .then(response => {
            const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
            //alert('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99');
            axios.get('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99')
              .then(responseC => {
                const additionalOptions = responseC.data;
                setCommunes(additionalOptions);
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des options :', error);
              });
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des options :', error);
              });
        }
      }

        axios.get('http://localhost:3000/api/session/stateSession/find?fieldName=state&fieldValue=En cours')
          .then(response => {
            setSession(response.data._id);setAnnee(response.data.annee);
            setDebutinsc(response.data.inscription_d);setFininsc(response.data.inscription_f);
            setDebuttirage(response.data.tirage_d);setFintirage(response.data.tirage_f);
            setDebutmed(response.data.consultaion_m_d);setFinmed(response.data.consultaion_m_f);
            setDebutpaiment(response.data.paiement_d);setFinpaiment(response.data.paiement_f);
            setDebutedj(response.data.hadj_d);setFinhedj(response.data.hadj_f);
            axios.get('http://localhost:3000/api/tirage/find?fieldName=code&fieldValue='+response.data.algo_selected)
              .then(responseType => {
                setMode(responseType.data.name);
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des options :', error);
              });
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des options :', error);
          });

        setDebutinsc('Charles');
        setDebutpaiment("Oran");
        setFinpaiment("Oran");
    }, []);

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

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-64 sm:w-auto`} >
          <Sidebar />
        </div>
  
        {/* Main Content */}
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64 p-3 gap-9 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Header */}
          <Header />
  
          {/* Cards */}
          
          <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50">
    <div class="absolute top-4 px-2 text-gray-700"> 
      <div class="top-0 px-2 text-gray-700 flex items-center ">
        <TiTime className='h-6 w-6'/>  
        <h3 class="ml-2 text-sm  font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Mode de Tirage</h3>
        
      </div>    
    </div>
  
      <p class="text-2xl text-center  text-gray-600"> {mode} </p>
   
  </div>
  
  
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transfrom transition duration-500 hover:scale-105 hover:rounded-2xl h-40 w-50">
    <div class="absolute top-4 px-2 text-gray-700">
    <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
  </div>
  
      </div>
      <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutinsc} </span></p>
            <p><span class="font-bold text-base"> Date fin: {fininsc}</span></p>
        </div>
  </div>
  
  <div class=" relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-2 text-gray-700 ">
              
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de Tirage</h3>
  </div>
      
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debuttirage} </span></p>
            <p><span class="font-bold text-base"> Date fin: {fintirage}</span></p>
        </div> 
      </div>
  
  <div class="relative  flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-2 text-gray-700">
          <div class=" top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-9 w-9'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de la consultation du médecin</h3>
  </div>
       
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début: {debutmed}</span></p>
            <p><span class="font-bold text-base"> Date fin:{finmed} </span></p>
        </div>  
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
          <div class="absolute top-4 px-2 text-gray-700 p-1">
          <div class=" top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période du paiment </h3>
  </div>
       
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutpaiment} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finpaiment} </span></p>
        </div> 
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
          <div class=" absolute top-4 px-4 text-gray-700">
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de confirmation des vols </h3>
  </div>
            
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debutvols} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finvols} </span></p>
        </div> 
      </div>
  
  <div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
          <div class="absolute top-4 px-4 text-gray-700 ">
          <div class="top-0 px-2 text-gray-700 flex items-center ">
      <TiTime className=' h-6 w-6'/>  
      <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période de Elhedj</h3>
  </div>
 
          </div>
          <div class="mt-2 text-xs text-gray-600">
            <p><span class="font-bold text-base"> Date début:{debuthedj} </span></p>
            <p><span class="font-bold text-base"> Date fin:{finhedj} </span></p>
        </div>
      </div>
  
      
      </div>


      <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">


<div className="flex justify-between mb-8 mt-6 ">
<button
  className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2"
  onClick={openAddAdminModal}>
  <img className="h-3 w-3  mt-2 mx-2  " src={add} />
  Ajouter Commune
</button>
{isAddAdminModalOpen && (
  <AddAdminModal onClose={closeAddAdminModal} />
)}


</div>
  <MUIDataTable
    title={""}
    data={recentCommuneData}
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
   
    );
  }