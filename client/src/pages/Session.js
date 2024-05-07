import Sidebar from '../components/Dash_components/shared/Sidebar'
import Header from '../components/Dash_components/shared/Header'
import React , {useState, useEffect} from 'react'
import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TiTime } from "react-icons/ti";
import add from "../images/mini_add.png";
import MUIDataTable from "mui-datatables";
import TirageAge from "../Popups/TirageAge"
import AddWilayaModal from "../Popups/AddWilaya";

import moment from 'moment';
import axios from 'axios';

export default function Session() {
  const [wilayas, setWilayas] = useState([]);
  const [id_session, setSession] = useState(null);
  const [annee, setAnnee] = useState('2024');
  const [nbr_candidats, setNbr_Candidats] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/wilaya/All')
            .then(response => {
              const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
              setWilayas(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });

    axios.get('http://localhost:3000/api/session/stateSession/find?fieldName=state&fieldValue=En cours')
            .then(response => {
              setSession(response.data._id);setAnnee(response.data.annee);setNbr_Candidats(response.data.nbr_candidats)
              setInscription_d(response.data.inscription_d);setInscription_f(response.data.inscription_f);
              setTirage_d(response.data.tirage_d);setTirage_f(response.data.tirage_f);
              setConsultaion_m_d(response.data.consultaion_m_d);setConsultaion_m_f(response.data.consultaion_m_f);
              setPaiement_d(response.data.paiement_d);setPaiement_f(response.data.paiement_f);
              sethadj_d(response.data.hadj_d);setHadj_f(response.data.hadj_f);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
  }, [])
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
  const valeur = document.createElement('input');
  valeur.setAttribute('type', 'text');

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
          name: "name",
          label: "Wilaya",
          options: {
            filter: true,
            sort: false,
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
              const wilayaCode = recentWilayaData[tableMeta.rowIndex].code;
              return (
                  <button className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2" 
                  onClick={() => openWilayaModal(value, tableMeta.rowIndex, wilayaCode)}>Ajouter N. Places</button>
              );
            },
            sort: false,
         }
       }
        /*{
          name: "Nbr_commune",
          label: "Nombre de Communes",
          options: {
           filter: true,
           sort: false,
          }
         },
        {
          name: "nbr_candidats",
          label: "Nombre de Candidats",
          options: {
            filter: true,
            sort: false,
          }
        },*/
       ];
    const options = {
        filterType: 'checkbox',
      };
    const recentWilayaData = wilayas.map(wilaya => ({
      code: wilaya.code,
      name: wilaya.name,
      nb_places: wilaya.nb_places
    })); 



    const [isAddWilayaModalOpen, setWilayaModalOpen] = useState(false);
    const openWilayaModal = async (rowData, rowIndex, code) => {
      // Get the input value for the clicked row
      const nb_places = parseInt(inputValues[rowIndex]?.[2]) || 0;
      try {
          // Make a PUT request to the backend API to update the record
          const response = await axios.put('http://localhost:3000/api/wilaya/update', { code, nb_places });
          // Handle success (e.g., show a success message)
          alert("Record updated successfully");
      } catch (error) {
          // Handle error (e.g., show an error message)
          alert(error);
          console.error("Error:", error);
      }

  };
    
    const closeWilayaModal = () => {
      setWilayaModalOpen(false);
    };

    const openAddAdminModal = (algo) => {
      setSelectedAlgo(algo);
      if (algo.name === "Par age") {
        setIsAddAdminModalOpen(true);
      }
    }
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
      setSelectedAlgo(null); // Reset selected algo
    };


    const [inscription_d, setInscription_d] = useState('');
    const [inscription_f, setInscription_f] = useState('');
    const handleDateInsciption = (dates) => {
        const [start, end] = dates;
        setInscription_d(start ? moment(start).format('YYYY-MM-DD') : null);
        setInscription_f(end ? moment(end).format('YYYY-MM-DD') : null);
    };


    const [tirage_d, setTirage_d] = useState('');
    const [tirage_f, setTirage_f] = useState('');
    const handleDateTirage = (dates) => {
        const [start, end] = dates;
        setTirage_d(start ? moment(start).format('YYYY-MM-DD') : null);
        setTirage_f(end ? moment(end).format('YYYY-MM-DD') : null);
    };


    const [consultaion_m_d, setConsultaion_m_d] = useState('');
    const [consultaion_m_f, setConsultaion_m_f] = useState('');
    const handleDateConsultaion_m = (dates) => {
        const [start, end] = dates;
        setConsultaion_m_d(start ? moment(start).format('YYYY-MM-DD') : null);
        setConsultaion_m_f(end ? moment(end).format('YYYY-MM-DD') : null);
    };


    const [paiement_d, setPaiement_d] = useState('');
    const [paiement_f, setPaiement_f] = useState('');
    const handleDatePaiement = (dates) => {
        const [start, end] = dates;
        setPaiement_d(start ? moment(start).format('YYYY-MM-DD') : null);
        setPaiement_f(end ? moment(end).format('YYYY-MM-DD') : null);
    };


    const [hadj_d, sethadj_d] = useState('');
    const [hadj_f, setHadj_f] = useState('');
    const handleDateHadj = (dates) => {
        const [start, end] = dates;
        sethadj_d(start ? moment(start).format('YYYY-MM-DD') : null);
        setHadj_f(end ? moment(end).format('YYYY-MM-DD') : null);
    };


    const UpdateSession = async () => {
      try {
        alert(id_session)
        const response = await axios.put('http://localhost:3000/api/session/'+id_session, { 
          annee, nbr_candidats, inscription_d, inscription_f, tirage_d, tirage_f, consultaion_m_d, consultaion_m_f, paiement_d, paiement_f, hadj_d, hadj_f
        });
        alert("Enregistrement avec succées");
      } catch (error) {
        alert(error);
          console.error('Error fetching data:', error);
      }
    };

    const handleChangeValue = (event) => {
      const { name, value } = event.target;
      setNbr_Candidats(value);
    };

    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const [selectedAlgo, setSelectedAlgo] = useState(null);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
}
    return (
        <div>
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
          <div className="p-9 flex flex-col items-start">
            <div className='flex'>
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-black">Session de Elhadj  </h2>
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-black">  _Année 2024 </h1>
            </div>

            
            <div className="flex justify-between mb-8 mt-6 ">
              <button
                  className="text-[#1D1D1B] text-md font-medium flex justify-between  border-[#D8A353] rounded-md bg-[#D8A353] border p-2"
                onClick={UpdateSession}>
                <img className="h-3 w-3  mt-2 mx-2  " src={add} />
                Enregistrer le modification
              </button>
            </div>
            {/* <Cards /> */}
            <div>
    <div >



<div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
  
<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50">
  <div class="absolute top-4 px-2 text-gray-700"> 
  <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7 '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Nombre de places Total</h3>
</div>    
    <div class="mb-6 mt-10 shadow-xl">
    <input type="text" name="nbr_candidats" id="nbr_candidats" value={nbr_candidats} onChange={handleChangeValue} class="bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 h-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>

    <p class="text-3xl"></p>
  </div>
</div>



<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transfrom transition duration-500 hover:scale-105 hover:rounded-2xl h-40 w-50">
  <div class="absolute top-4 px-2 text-gray-700">
  <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7 '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Mode de tirage </h3>
</div>
    <div class="relative mb-6 mt-10">
      <Combobox className="z-0" style={{ width: 'calc(100% - 4px)' }} openAddAdminModal={openAddAdminModal} /> 
    </div>
 
    <p class="text-3xl"></p>
  </div>
</div>

<div class=" relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
    <div class="absolute top-4 px-2 text-gray-700 ">

        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
            <TiTime className='h-7 w-7 '/>  
            <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Période d'inscription</h3>
        </div>
        <div class="relative mb-6 mt-10">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DateRangePicker onChange={handleDateInsciption} localeText={{ start: inscription_d, end: inscription_f }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
    </div>
</div>

<div class="relative  flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="absolute top-4 px-2 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7 '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Péride de tirage</h3>
</div>
            <div class="relative  mb-6 mt-10 ">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker onChange={handleDateTirage} localeText={{ start: tirage_d, end: tirage_f }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
        <div class="absolute top-4 px-2 text-gray-700 p-1">
        <div class="absolute flex top-0 px-2 text-gray-700 items-center ">
    <TiTime className='h-7 w-7  '/>  
    <h3 class="ml-2 flex-auto text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Consultation du médecin</h3>
</div>
            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker onChange={handleDateConsultaion_m} localeText={{ start: consultaion_m_d, end: consultaion_m_f }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50">
        <div class=" absolute top-4 px-4 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7 '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Péride du paiment</h3>
</div>            <div class="relative mb-6 mt-10">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker onChange={handleDatePaiement} localeText={{ start: paiement_d, end: paiement_f }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="absolute top-4 px-4 text-gray-700 ">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7  '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Péride de confirmation des vols</h3>
</div>            <div class="relative mb-6 mt-10 ">
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Date debut', end: 'Date fin' }} />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
    </div>

<div class="relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow   transfrom transition duration-500 hover:scale-105  hover:rounded-2xl h-40 w-50"> 
        <div class="px-4 text-gray-700">
        <div class="absolute top-0 px-2 text-gray-700 flex items-center ">
    <TiTime className='h-7 w-7 '/>  
    <h3 class="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Péride de Elhadj</h3>
</div>
            <div class="relative mb-6 mt-10">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangePicker']}>
                  <DateRangePicker onChange={handleDateHadj} localeText={{ start: hadj_d, end: hadj_f }} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
        </div>
    </div>
    </div>











    <div className="bg-white px-4 pt-3 pb-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
  <div className="max-w-[1420px]">
    <MUIDataTable
      title={""}
      data={recentWilayaData}
      columns={columns}
      options={options}
    />
  </div>  
</div>
</div>
</div>
</div>

{isAddAdminModalOpen && selectedAlgo && selectedAlgo.name === "Par age" && (
          <TirageAge onClose={closeAddAdminModal} />
        )}

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
    )
}