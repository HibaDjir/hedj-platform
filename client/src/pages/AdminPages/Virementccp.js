import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import  Clear from '../../images/x_icon.png';
import  upload from '../../images/upload_icon.png';
import   grande_poste from '../../images/GPA02.jpg';
import   cartreccp from '../../images/carte-eddahabiya.jpg';
import Navbar_for_each_profile from '../../components/Navbar_for_each_profile';

import Sidebar from '../../components/Dash_components/shared/Sidebar';

import { idCandidat } from '../AdminPages/Paiment';

function Virementccp() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [candidat, setCandidat] = useState([]);

  useEffect(() => {
    fetchCandidat();
  }, []);


  const fetchCandidat = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/candidature/'+idCandidat);
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setCandidat(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  const handleAppClick = async (result_paie) => {
    try {

      await axios.put('http://localhost:3000/api/candidature/ValidPaie/update', {idCandidat, result_paie});
      alert('Opération avec succée');
    } catch (error) {
      alert('Error uploading file:', error);
    }
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  }
  return (
    <div>
    <div className='w-full flex overflow-hidden
'><div className={`fixed  top-0 left-0 h-screen z-50 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0  sm:w-auto`} >
<Sidebar />
</div>
<div className=" w-full flex flex-col">
        <div className={`flex flex-col flex-1 pl-10 sm:pl-14 md:pl-20 lg:pl-64  gap-5 transition-margin ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
     
        <div className="flex flex-col justify-center items-center max-w-[1240px] 
        mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl mt-7">



<div className='flex justify-center items-center'>
  <div className="flex justify-item ">
   
    <h1 className="text-fake_black text-3xl  ml-2 mt-4 mb-2">paiement par mandat postal






</h1>
   
  </div>
</div>
<div className=" mx-auto  grid md:grid-cols-2 w-full  ">






        <div className="flex flex-col justify-center   p-4 rounded-md ">
        
        <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="firstName">
                  Prénom{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  value={candidat.prenom}
                  readOnly
                  required
                />
              </div>
              <div className="flex flex-col w-full mx-2 ">
                <label className="text-fake_black mb-2 text-xl" htmlFor="lastName">
                  Nom{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl   w-full focus:outline-none border-[#C09455]"
                  type="text"
                  placeholder="Nom"
                  value={candidat.nom}
                  name="lastName"
                  readOnly
                  required
                />
              </div>

             


            </div>
           
            <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="ccp">
                CCP :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="CCP"
                  name="ccp"
                  value={candidat.num_compte}
                  required
                  readOnly
                />
              </div>

              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="clefccp">
                Clé:
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="Clé"
                  name="clefccp"
                  value={candidat.cle_compte}
                  required
                  readOnly
                />
              </div>




              </div>
           
           



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="rip">
               RIP :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="RIP"
                  name="rip"
                  value={candidat.num_rib}
                  required
                  readOnly
                />
              </div>
              </div>
             



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                Intitulé :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="Intitulé"
                  name="owner"
                  value={candidat.propreitaire_compte}
                  required
                  readOnly
                />
              </div>
              </div>



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                Date de naissance
                  {" "}
                </label>
                <DatePicker
                  className="text-black p-2 border rounded-xl  focus:outline-none border-[#C09455]   w-full"
                  value={candidat.date_naissance}
                 
                  dateFormat="dd/MM/yyyy"
               readOnly
                  placeholderText="Date de naissance"
                />
              </div>
              </div>


              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="Adresse">
                Adresse	:
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="Adresse	"
                  name="Adresse"
                  value={candidat.address}
                  required
                  readOnly
                />
              </div>
              </div>

              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="code">
               Décision :
                  {" "}
                </label>
                <div className=" w-full flex justify-center items-center">
                <button  className="w-full border border-[#D4A373]  text-brown_palette rounded-2xl p-4 m-2 hover:bg-[#D8A353] hover:text-fake_black "
                    onClick={() => handleAppClick(1)}>
                 Approuvé
                </button>
                <button  className="w-full border border-[#D4A373]  text-brown_palette rounded-2xl p-4 m-2 hover:bg-[#D8A353] hover:text-fake_black "
                    onClick={() => handleAppClick(2)}>
                  Non Approuvé
                </button>
                </div>
              </div>
              </div>
        </div>



         


     
        <div className="flex flex-col justify-center p-4 ">
   
          <img  className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
       // f blaset src je pense ghadi thettou url ta3 l file
       
    alt="here you will display the file fetched from the database" />
      </div>
  
  


        
                    
  


  </div>
  
  </div>

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
  )
}

export default Virementccp
