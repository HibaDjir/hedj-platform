import React, { useRef, useState } from "react";
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
      <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[300px] rounded-3xl bg-[#F7F6F3]">
     

        
        

        <div className="w-full flex flex-col mt-2 ">
          <label className="text-fake_black mb-2" htmlFor="nationalité">
            Age maximum:
          </label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="number"
            name="number"
            placeholder=" Age  "
            required
          />
        </div>


        <div className="w-full flex flex-col mt-2 ">
          <label className="text-fake_black mb-2" htmlFor="nationalité">
            Age minimum:
          </label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="number"
            name="number"
            placeholder=" Age  "
            required
          />
        </div>

   
        <button className='  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
border p-2  mt-6 items-center x-auto w-[150px]  h-[50] mx-auto hover:bg-[#AD7946]'>

          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AddMed;
