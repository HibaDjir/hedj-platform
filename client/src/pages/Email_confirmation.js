import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function Email_confirmation() {
  //
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate=useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/forgetpassword', {email})
    .then(res=>{
      alert(res.message)
      navigate('/home')
    }
    ).catch(err => {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      console.log(err)})
  }
  //
  return (
    <div>
        <div className=" flex justify-items-center bg-taupe_palette max-w-[1240px] max-h-screen">
       
       <div
            
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          >
            <div className="mt-10 flex flex-col gap-5 text-black_palette bg-transparent rounded-2xl">
              <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] rounded-2xl bg-[#F2EBDF]">
                <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
               VEUILLEZ SAISIR VOTRE MAIL
               </p>
                <form  onSubmit={handleSubmit}>
                  <label className="text-black-palette" htmlFor="email">
                 EMAIL </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="email"
                    placeholder="veuillez saisir votre mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                  />
      
      
                  <button
                    type="submit"
                    className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2"
                  >
                   Confirmer
                </button>
                            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                </form>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Email_confirmation
