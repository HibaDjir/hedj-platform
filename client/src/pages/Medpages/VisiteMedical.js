import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { idCandidat } from '../../components/DropDownMenue';
import  Clear from '../../images/x_icon.png';
import  pic  from '../../images/NussukiPic/bold-guy.jpg';
import  upload from '../../images/upload_icon.png';
import   medical_examination from '../../images/medical-examination.jpg';
import Navbar_for_each_profile from '../../components/Navbar_for_each_profile';
import Sidebar from '../../components/Dash_components/shared/Sidebar';
import NavbarMed from '../../components/NavbarMed';
function VisiteMedical() {


    const [antecedants_med, setantecedants_med] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setantecedants_med([...antecedants_med, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        const newantecedants_med = [...antecedants_med];
        newantecedants_med.splice(index, 1);
        setantecedants_med(newantecedants_med);
    };
    const [file,setFile]=useState(null);
    const handleDragOver = (e) => {
        e.preventDefault(); 
        const selectedFile = e.target.files[0];
        if (selectedFile){
            setFile(selectedFile.name)
        }
    };
    const handleClearFile = () => {setFile(null)}
  return (

    <div   className=" overflow-hidden  w-full h-full mx-auto   flex flex-col justify-center items-center bg-cover bg-center p-5  overflow-x-hidden overflow-y-hidden"
    style={{ backgroundImage: `url(${medical_examination})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       <NavbarMed/>
     
        <div className=" mt-16 flex flex-col justify-center items-center w-[1240px]  h-auto
        mx-auto  bg-[#FAF8F5]  bg-opacity-100  rounded-xl shadow-2xl  overflow-hidden  ">



<div className='flex justify-center items-center'>
  <div className="flex justify-item ">
   
    <h1 className="text-fake_black text-3xl mt-6 ml-2">La finalisation du rapport médical</h1>
   
  </div>
</div>
<div   className=" mx-auto  grid md:grid-cols-2 w-full  ">

       
        <div  className="w-full flex flex-col mt-2 ">
        <div className="flex flex-col justify-center   p-4 rounded-md ">
                <label  className="text-fake_black mb-2 text-xl " htmlFor="nationalité">
                Numéro d'assurance maladie :
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]  w-full"
                  type="text"
                  placeholder="Numéro d'assurance maladie "
                //  value={candidat.nss}
                  readOnly
                  required
                />
              </div>
              <div className="flex justify-center   p-4 rounded-md ">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="firstName">
                  Prénom :{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]
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
                 Nom :{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl   w-full focus:outline-none focus:border-[#C09455]"
                  type="text"
                  placeholder="Nom"
             
                  name="lastName"
                  readOnly
                  required
                />
              </div>

             


            </div>
           
            <div className="flex flex-col justify-center   p-4 rounded-md ">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black mb-2 text-xl" htmlFor="dayrofbirth">
                Date de naissance : {" "}
                </label>
                <DatePicker
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]   w-full"
                  readOnly
                  
                 // value={candidat.date_naissance}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Date de naissance "
                />
              </div>
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black mb-2 text-xl" htmlFor="placeofbirth">
               Lieu de naissance :
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]  w-full"
                  type="text"
                  name="birthp"
                  //value={candidat.lieu_naissance}
                  readOnly
                  placeholder=" Lieu de naissance"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col justify-center   p-4 rounded-md ">
              <p className='text-xl'>État civil :</p>
              <div className="w-full flex  mt-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="single"
                   // checked={single}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
                  />
                  <label htmlFor="single" className="text-fake_black text-xl mr-8">
                  Célibataire
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="married"
                   // checked={married}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
                  />
                  <label htmlFor="married" className="text-fake_black text-xl mr-8">
                  Marié(e)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="divorced"
                 //   checked={divorced}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl text-xl"
                  />
                  <label htmlFor="divorced" className="text-fake_black text-xl mr-8">
                  Divorcé(e)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="widowed"
                   // checked={widowed}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
                  />
                  <label htmlFor="widowed" className="text-fake_black text-xl">
                  Veuf(ve)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center   p-4 rounded-md ">
              <p className='text-xl'>Le genre :</p>
              <div className="flex w-full mt-2 ">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    //checked={female}
                    readOnly
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
                    name="gender"
                  />
                  <label htmlFor="female" className="text-fake_black text-xl mr-8">
                    Femme
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                  //  checked={male}
                    readOnly
                    className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
                    name="gender"
                  />
                  <label htmlFor="male" className="text-fake_black text-xl">
                   Homme
                  </label>
                </div>
              </div>
            </div>



            <div className="flex flex-col justify-center   p-4 rounded-md ">
                <label className="text-fake_black mb-2 text-xl" htmlFor="nationalité">
                Le groupe sanguin :
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]  w-full"
                  type="text"
                  placeholder="Le groupe sanguin"
                 // value={candidat.groupage}
                  readOnly
                  required
                />
              </div>
              <div className="flex flex-col justify-center   p-4 rounded-md ">
              <label className="text-fake_black mb-2 text-xl" >
              Maladies chroniques :
              </label>
              <textarea
                className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]  w-full"
                name="maladie"
                readOnly
                rows={2} // Adjust the number of rows as needed
                cols={50}
                //value={candidat.maladie_cronique}
                placeholder="Maladies chroniques "
                required
              />
            </div>



            <div className="flex flex-col justify-center   p-4 rounded-md ">
            <h1 className="text-2xl  mb-4">
L'interrogatoire médical : </h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="
                    Ajouter un antécédent médical"
                    className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                
            </form>
            <div className="flex flex-col justify-center   p-4 rounded-md ">
            <ul >
                {antecedants_med.map((todo, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-between border-b py-2 p-8"
                    >
                        <span>{todo}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500"
                        >
                           Supprimer
                        </button>
                    </li>
                ))}
            </ul>
            </div>
        </div>

        <div className="flex flex-col justify-center   p-4 rounded-md ">
  <p className='text-xl'>Validation du Dossier Médical :</p>
  <div className="flex w-full mt-2 justify-around p-8">
    <div className="flex items-center">
      <input
        type="radio"
        id="valide"
        className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
        name='validationStatus'
      />
      <label htmlFor="valide" className="text-fake_black text-xl">
        Validé
      </label>
    </div>
    <div className="flex items-center">
      <input
        type="radio"
        id="non_valide"
        className="mr-2 h-4 w-4focus:outline-none focus:border-[#C09455] rounded-xl"
        name='validationStatus'
      />
      <label htmlFor="non_valide" className="text-fake_black text-xl">
        Non validé
      </label>
    </div>
  </div>
</div>


        </div>


   

         


        <div className="flex flex-col justify-center p-4 ">




    <label htmlFor='input' className='block text-slate-800  mb-1.5 text-xl'>
      
Visualisation des analyses
    </label>
    <img  className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
       // f blaset pic je pense ghadi thettou url ta3 l file
        src={pic}    
    alt="here you will display the file fetched from the database" />

</div>

<div className="flex flex-col justify-center p-4 ">

</div>

      </div>
    </div>
    </div>
  )
}

export default VisiteMedical

