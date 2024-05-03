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
      <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[680px] rounded-3xl bg-[#F7F6F3]">
      <div className="flex justify-center items-center">
  <img className="w-20 h-20" src={AddAdmin} alt="Add Admin" />
</div>

        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col w-full mx-2">
            <label className="text-fake_black mb-2" htmlFor="firstName">
              Prenom :
            </label>
            <input
              className="text-black p-2 border rounded-md  border-fake_black w-full"
              type="text"
              placeholder="Prenom"
              name="prenom"
              required
            />
          </div>
          <div className="flex flex-col w-full mx-2">
            <label className="text-fake_black mb-2" htmlFor="lastName">
              Nom :
            </label>
            <input
              className="text-black p-2 border rounded-md  border-fake_black w-full"
              type="text"
              placeholder="Nom"
              name="nom"
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-2 ">
          <label className="text-fake_black mb-2">E-mail :</label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="text"
            name="email"
            placeholder=" E-mail"
            required
          />
        </div>

        <div className="w-full flex flex-col mt-2 ">
          <label className="text-fake_black mb-2" htmlFor="nationalité">
            Numéro de téléphone :
          </label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="number"
            name="number"
            placeholder=" Numéro de téléphone  "
            required
          />
        </div>

        <div className="w-full flex flex-col mt-2 ">
          <label className="text-fake_black mb-2">Mot de passe :</label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="password"
            name="password"
            placeholder="Mot de passe  "
            required
          />
        </div>

        <div className=" w-full flex justify-center items-center ">
          <div className="flex flex-col w-full mx-2 ">
            <label className="text-fake_black mb-2">Wilaya :</label>
            <Select
              name="wilaya"
              styles={customStyles}
              placeholder="Wilaya "
              isRtl={true}
            />
          </div>

          
          <div className="flex flex-col w-full  mx-2">
            <label className="text-fake_black mb-2">Etat :</label>
            <Select styles={customStyles} placeholder=" Etat " isRtl={true} />
          </div>
        </div>
        <div className="w-full flex flex-col mt-2">
          <label className="text-fake_black mb-2">Addresse professionnelle</label>
          <input
            className="text-black p-2 border rounded-md  border-fake_black  w-full"
            type="text"
            name="addresseExacte"
            placeholder="Addresse pro"
            required
          />
        </div>
        <button className='  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
border p-2  mt-6 x-auto w-[200px]  h-[100px] mx-auto hover:bg-[#AD7946]'>

          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AddMed;
