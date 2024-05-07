import React, { useRef, useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import AddAdmin from "../images/AddAdmin.png";



function AddMed({ onClose }) {
  const [selectedWilaya, setSelectedWilaya] = useState(null)
  const [selectedEtat, setSelectedEtat] = useState(null)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NumeroTelephone, setNumeroTelephone] = useState('');
  const [adrPro, setAdrPro] = useState('');
  const [wilayas, setWilayas] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const etatOptions = [ 
    { value: "active", label: "Active" }, 
    { value: "inactive", label: "Desactive" } 
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

  const handleWilayaChange = (selectedOption) => { 
    setSelectedWilaya(selectedOption)
  };


  const handleEtatChange = (selectedOption) => { 
    setSelectedEtat(selectedOption)
  };
  


  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);


    console.log(selectedWilaya.value)

    axios.post('http://localhost:3000/api/medecin/createMedecin', {firstName,lastName,email,password, adr_pro: adrPro, NumeroTelephone,wilaya: selectedWilaya.value, 
    etat:selectedEtat.value})
    .then(res=>{

      setIsLoading(false);
      alert("تم إنشاء الحساب بنجاح! ");
      onClose();
        if (res.ok) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setErrorMessage('')

        // Show success alert
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

  
  return (
    <div ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div onClick={(e) => e.stopPropagation()} className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[680px] rounded-3xl bg-[#F7F6F3]">
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
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={NumeroTelephone}
            onChange={(e) => setNumeroTelephone(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              value={selectedWilaya}
            />
          </div>
          <div className="flex flex-col w-full  mx-2">
            <label className="text-fake_black mb-2">Etat :</label>
            <Select styles={customStyles} placeholder=" Etat " isRtl={true} options={etatOptions} onChange={handleEtatChange} />
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
            value={adrPro}
            onChange={(e) => setAdrPro(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className='  text-[#1D1D1B] text-md font-medium flex justify-center border-[#D8A353] rounded-md bg-[#D8A353]
border p-2  mt-6 x-auto w-[200px]  h-[100px] mx-auto hover:bg-[#AD7946]'>
          Ajouter
        </button>
        {errorMessage && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 mt-2">
                {errorMessage}
              </div>)}
      </div>
    </div>
  );
}

export default AddMed;
