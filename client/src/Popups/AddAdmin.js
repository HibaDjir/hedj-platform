import React, { useRef, useState,useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import AddAdmin from "../images/AddAdmin.png";

function AddADmin({ onClose }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [NumeroTelephone, setNumeroTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [WilayaName, setwilaya] = useState(null);
  const [Etat, setetat] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [wilayas, setWilayas] = useState([]);
  const etatOptions = [
    { value: "active", label: "Active" },
    { value: "Desactive", label: "Desactive" }
  ];
  useEffect(() => {
    const fetchWilayas = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/wilaya/All');
        if (!response.ok) {
          throw new Error('Failed to fetch wilayas');
        }
        const data = await response.json();
        const formattedWilayas = data.map(wilaya => ({
          value: wilaya.name,
          label: wilaya.name
        }));
        setWilayas(formattedWilayas);
      } catch (error) {
        console.error('Error fetching wilayas:', error);
      }
    };
    fetchWilayas();
  }, []);
  const handleWilayaChange = (selectedOption) => {
    setwilaya(selectedOption);
     
 
  };
  /////////////////:
  const handleEtatChange = (selectedOption) => {
    setetat(selectedOption);
 
  };
  const handelClick = (e) => {
    e.preventDefault();
    
    
   
 console.log("name is ",WilayaName.value)



  axios.post('http://127.0.0.1:3000/api/masterAdmin/createSousAdmin', {firstName,lastName,email,password,NumeroTelephone,
  name:WilayaName.value,etat:Etat.value
  })
  .then(res=>{
    onClose()
    alert('count created')
    if (res.ok) {
      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setwilaya(null);
      setetat(null);
      setErrorMessage(null);
      
    }
  }).catch(err => {
    if (err.response && err.response.data && err.response.data.message) {
      setErrorMessage(err.response.data.message);
    } else {
      setErrorMessage('An error occurred. Please try again later.');
    }
    console.log(err)
    
  })
      
  
}

const options = {
    filterType: 'checkbox',
  };
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
      <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[600px] rounded-2xl bg-[#F7F6F3]">
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={NumeroTelephone}
            onChange={(e) => setNumeroTelephone(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className=" w-full flex justify-center items-center ">
          <div className="flex flex-col w-full mx-2 ">
            <label className="text-fake_black mb-2">Wilaya :</label>
            <Select
              name="wilaya"
              styles={customStyles}
              placeholder="Wilaya"
              options={wilayas}
              isRtl={true}
              onChange={handleWilayaChange}
              value={WilayaName}
              
              />

          </div>
          <div className="flex flex-col w-full  mx-2">
            <label className="text-fake_black mb-2">Etat :</label>
            <Select styles={customStyles} placeholder=" Etat " isRtl={true}
            options={etatOptions}
            onChange={handleEtatChange}
            value={Etat}
            />
          </div>
        </div>
        
        <button onClick={handelClick} className='  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
border p-2  mt-6 x-auto w-[200px]  h-[100px] mx-auto hover:bg-[#AD7946]'>

          Ajouter
        </button>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 mt-2">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddADmin;
