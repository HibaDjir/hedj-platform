import React, { useRef, useState,useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import AddAdmin from "../images/AddAdmin.png";

function AddMed({ onClose }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.15rem",
      borderRadius: "0.5rem",
      width: "100%",
    }),
  };


  const [nbrcan, setNbrcan] = useState();

  useEffect(() => {
    setNbrcan('12345')
    
}, []);

  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[300] rounded-3xl bg-[#F7F6F3]">
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-black mb-4 ">Ajouter Une Commune</h2>

        <div className="w-full flex justify-center items-center">
          


        <div className="flex flex-col w-full mx-2 ">
            <label className="text-fake_black mb-2">Commune :</label>
            <Select
              name="Commune"
              styles={customStyles}
              placeholder="Commune "
              
            />
          </div>


        </div>
       

        
        

        <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-full mx-2 ">
          <label className="text-fake_black mb-2" htmlFor="nationalité">
            Numéro de Places:
          </label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="number"
            name="number"
            placeholder=" Numéro "
            required
          />
        </div>
          <div className="flex flex-col w-full mx-2">
            <label className="text-fake_black mb-2" htmlFor="lastName">
              Nombre de Candidats :
            </label>
            <div className="bg-white text-black p-2 border rounded-md  border-fake_black  w-full">
            {nbrcan}
            </div>
          </div>
        </div>



      
        <button className='items-center  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
border p-2  mt-6 x-auto w-[200px]  h-[100] mx-auto hover:bg-[#AD7946]'>

          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AddMed;
