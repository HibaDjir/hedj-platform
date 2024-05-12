import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import { idCandidat } from '../../components/DropDownMenue';
import  Clear from '../../images/x_icon.png';
import  upload from '../../images/upload_icon.png';
import   grande_poste from '../../images/GPA02.jpg';
import   cartreccp from '../../images/carte-eddahabiya.jpg';
import Navbar_for_each_profile from '../../components/Navbar_for_each_profile';
import Sidebar from '../../components/Dash_components/shared/Sidebar';
function Virementccp() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 flex-col max-w-[1420px]  ml-64 ">

    <Sidebar/>
     
        <div className="flex flex-col justify-center items-center max-w-[1240px] h-auto
        mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl mt-16">



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
            >
                 Approuvé
                </button>
                <button  className="w-full border border-[#D4A373]  text-brown_palette rounded-2xl p-4 m-2 hover:bg-[#D8A353] hover:text-fake_black "
            >
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
  )
}

export default Virementccp
