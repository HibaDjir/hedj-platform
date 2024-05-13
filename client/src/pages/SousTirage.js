import React, {useState, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddAdminModal from "../Popups/AddMed";
import add from "../images/mini_add.png";
import { FaCirclePlay } from "react-icons/fa6";
import Sidebar from '../components/Dash_components/shared/SidebarSous'
import Header from '../components/Dash_components/shared/HeaderSous'
import Combobox from '../components/Dash_components/combobox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TiTime } from "react-icons/ti";
import Select from "react-select";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

import axios from 'axios';

export default function SousTirage() {


  const [communes, setCommunes] = useState([]);
  
  const [id_session, setSession] = useState(null);
  
  const [nbrTotalPelerin, setNbrTotalPelerin] = useState(null);
  
  const [code_algo, setCode_algo] = useState(null);

  const [pelerins, setPelerins] = useState([]);

    const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
    useEffect(() => {
        const selectedDiv = document.getElementById(selectedAlgorithm);
        if (selectedDiv) {
          selectedDiv.style.borderColor = "#D8A353";
        }
    
        // Reset border color of other divs
        const divs = document.querySelectorAll('.algorithm-div');
        divs.forEach(div => {
          if (div.id !== selectedAlgorithm) {
            div.style.borderColor = "";
          }
        });
        //avant ca on get la wilaya du user comme on a fait linking soudash fetchWilaya
        axios.get('http://localhost:3000/api/wilaya/65ff830ed96578ad80742c2f')//on utilise un autre get wilaya by name qui donne la meme reponse, la wilaya
          .then(response => {
            console.log("response of api/wilaya/", response.data)
            const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
            //alert('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99');
            axios.get('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99')
              .then(responseC => {
                console.log("response of api/commune", responseC.data)
              const additionalOptions = responseC.data.map(commune => ({value: commune.code+"|"+commune.nb_places, label: commune.ar_name}));
              setCommunes(additionalOptions);
              })
              .catch(error => {
                  console.error('Erreur lors de la récupération des options :', error);
              });
          }) 
          .catch(error => {
              console.error('Erreur lors de la récupération des options :', error);
          });
       
          axios.get('http://localhost:3000/api/session/stateSession/find?fieldName=state&fieldValue=En cours')
          .then(response => {
            console.log("response of api/session/stateSession", response.data)

            setSession(response.data._id);setCode_algo(response.data.algo_selected);
          })
          .catch(error => {
              console.error('Erreur lors de la récupération des options :', error);
          });  
             //on ajoute un get de typeTirage pour age bracket (min max et chance)
          axios.get('http://localhost:3000/api/wilaya/65ff830ed96578ad80742c2f')//meme chose
            .then(response => {
              console.log("response of api/wilaya/ 2 eme", response.data)

              
              const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
              //alert('http://localhost:3000/api/commune/find?fieldName=code&minValue='+additionalOptions.code+'00&maxValue='+additionalOptions.code+'99');
              axios.get('http://localhost:3000/api/candidature/wilaya/prise/find?fieldName=wilaya&fieldValue='+additionalOptions.code)
                .then(responseC => {
                  console.log("response of api/candidature/wilaya/prise/find", responseC.data)
                  setPelerins(responseC.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des options :', error);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            }); 
          setDebutinsc('Charles')
          setMode('Par age')
          setDebutpaiment("Oran")
          setFinpaiment("Oran")
      }, []);


    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          padding: "0.15rem",
          borderRadius: "0.5rem",
          width: "100%",
        
        }),
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
          label: "Adresse email",
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
        const recentPelerenData = pelerins.map(candidat => ({
          nom: candidat.nom,
          prenom: candidat.prenom,
          date_naissance: candidat.date_naissance,
          lieu_naissance: candidat.lieu_naissance,
          civilite: candidat.civilite,
          genre: candidat.genre,
          num_passeport: candidat.num_passeport,
          telephone: candidat.telephone,
          email: candidat.email,
          address: candidat.address,
          groupage: candidat.groupage,
          nss: candidat.nss 
        })
      ); 



    const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
    const openAddAdminModal = () => {
      setIsAddAdminModalOpen(true);
    };
  
    const closeAddAdminModal = () => {
      setIsAddAdminModalOpen(false);
    };



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


    const [commune, setSelectedOptionCommune] = useState(null);
    const handleChangeCommune = (event) => {
      const selectedValue = (event.value).split("|");
      setSelectedOptionCommune(parseInt(selectedValue[0]));setNbrTotalPelerin(selectedValue[1]);

    };

    //ici on appele notre alogorithmes avec switch case de mode_algo
    //en haut on utilise useeffect pour fetch de pelerinsByCommune
    const startTirage = async () => {
      // Get the input value for the clicked row
      try {
          // Make a PUT request to the backend API to update the record
          const response = await axios.put('http://localhost:3000/api/tirage/Tirage', { id_session, commune, nbrTotalPelerin, code_algo }); //ici on appele ntre ctrlr
           
          axios.get('http://localhost:3000/api/wilaya/65ff830ed96578ad80742c2f')
            .then(response => {
              const additionalOptions = response.data;//.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
              axios.get('http://localhost:3000/api/candidature/wilaya/prise/find?fieldName=wilaya&fieldValue='+additionalOptions.code)
                .then(responseC => {
                  setPelerins(responseC.data);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des options :', error);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            }); 
          // Handle success (e.g., show a success message)
          alert("Record updated successfully");
      } catch (error) {
          // Handle error (e.g., s
          alert(error);
          console.error("Error:", error);
      }

  };

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
          
<div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
      <div
        id="tranche-age"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("tranche-age")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Tranche d'age</p>
      </div>

      <div
        id="numero-inscription"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("numero-inscription")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Nombre d'inscription</p>
      </div>

      <div
        id="aleatoire"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("aleatoire")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Aléatoire</p>
      </div>

      <div
        id="performant"
        className="algorithm-div relative flex justify-center items-center border bg-[#FAF8F5] rounded-2xl overflow-hidden shadow transform transition duration-500 hover:scale-105 hover:rounded-2xl  h-40 w-50"
        onClick={() => setSelectedAlgorithm("performant")}
      >
        <div className="absolute top-4 px-2 text-gray-700">
          <div className="top-0 px-2 text-gray-700 flex items-center ">
            <h3 className="ml-2 text-sm font-extrabold text-[#C09455] tracking-wider font-The-Year-of-The-Camel">Tirage par</h3>
          </div>    
        </div>
        <p className="text-2xl text-center font-semibold text-gray-600">Tous les Performances</p>
      </div>
    </div>

{/*Tableau*/}

      <div className="bg-white px-4 pt-3 mr-4 rounded-sm  border-gray-200 flex-1 flex-col max-w-[1420px]   ">

       
<div className="max-w-[1420px]">



<div className="flex justify-between mb-8 mt-6 p-3">
  <div className="flex items-stretch">
    <div className="flex p-4 ">
    

    <div className="flex flex-col mx-2 h-12 w-auto">
      <Select
        name="commune"
        styles={customStyles}
        options={communes}
        onChange={handleChangeCommune}
        isRtl={true}
        
      />
    </div>
    <button
      className="text-[#1D1D1B] text-md font-medium flex justify-between border-[#D8A353] rounded-md bg-[#D8A353] border items-center h-10 p-2 mr-2"
      onClick={startTirage}
    >
      <FaCirclePlay className="h-6 w-6 mt-2 mx-2  " src={add} />
      Commencer le tirage
    </button>
    <button
      className="text-[#1D1D1B] font-medium flex justify-between border-[#D8A353] rounded-md bg-[#D8A353] border items-center h-10 p-2 mr-2"
      onClick={startTirage}
    >
      <MdOutlineSlowMotionVideo className="h-6 w-6 mt-2 mx-2  " src={add} />
      Affichage Séquentiel
    </button>
    </div>
  </div>
</div>


<MUIDataTable
title={""}
data={recentPelerenData}
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