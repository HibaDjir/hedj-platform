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

function Carteccp() {
  return (
    <div>
   <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 flex-col max-w-[1420px]  ml-64 ">

       
    <Sidebar/>
        <div className="flex flex-col justify-center items-center max-w-[1240px] h-auto
        mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl mt-16">



<div className='flex justify-center items-center'>
  <div className="flex justify-item ">
   
    <h1 className="text-fake_black text-3xl  ml-2 mt-4 mb-2">Le paiement par carte  CCP.</h1>
   
  </div>
</div>
<div className=" mx-auto  grid md:grid-cols-2 w-full  ">

        <div className="flex flex-col justify-center   p-4 rounded-md ">
        
        <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="firstName">
                 Prénom :
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455] hover:cursor-pointer
                  w-full"
                  type="text"
                  placeholder="Prénom"
                  name="firstName"
                  //value={candidat.prenom}
                  readOnly
                  required
                />
              </div>
              <div className="flex flex-col w-full mx-2 ">
                <label className="text-fake_black mb-2 text-xl" htmlFor="lastName">
                Nom :
                </label>
                <input
                  className="text-black p-2 border rounded-xl   w-full focus:outline-none border-[#C09455] hover:cursor-pointer"
                  type="text"
                  placeholder="Nom"
                //  value={candidat.nom}
                  name="lastName"
                  readOnly
                  required
                />
              </div>

             


            </div>
           
<div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                Le titulaire de la carte :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455] hover:cursor-pointer
                  w-full"
                  type="text"
                  placeholder="Le titulaire de la carte"
                  name="owner"
                  required
                  readOnly
                />
              </div>
              </div>

            <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="carteccp">
                Numéro de la carte du compte courant :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455] hover:cursor-pointer
                  w-full"
                  type="text"
                  placeholder="Numéro de la carte du compte courant "
                  name="carteccp"
                  required
                  readOnly
                />
              </div>

           




              </div>
           
           



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="code">
                Code de sécurité :
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455] hover:cursor-pointer
                  w-full"
                  type="text"
                  placeholder="Code de sécurité "
                  name="code"
                  required
                  readOnly
                />
              </div>
              </div>
             



              



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                Date d'expiration :
                  {" "}
                </label>
                <DatePicker
                  className="text-black p-2 border rounded-xl  focus:outline-none border-[#C09455] hover:cursor-pointer   w-full"
                 
                  dateFormat="dd/MM/yyyy"
                  locale={ar}
                  placeholderText="Date d'expiration
" readOnly
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
     
      src={cartreccp} 
    alt="exemple carte ccp" />
      </div>
  </div>
  


      
    </div>
    </div>
    </div>
  )
}

export default Carteccp
