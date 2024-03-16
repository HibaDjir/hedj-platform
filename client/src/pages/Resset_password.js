import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Resset_password() {
  //
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate()
  const {id,token}=useParams()
    const handleSubmit = (e) =>{
      e.preventDefault();
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      axios.post(`http://localhost:3000/api/users/resetPassword/${id}/${token}`, {password})
      .then(res=>{
     if(res.data.status==="success"){
      navigate('/login')
      alert('password updated')
     }
     
      }).catch(err=>{
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      })
    }
 
  //

  return (
    <div dir= "rtl"className=" flex justify-items-center bg-taupe_palette max-w-[1240px] max-h-screen">
       
       <div
            
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
          >
            <div className="mt-10 flex flex-col gap-5 text-black_palette bg-transparent rounded-2xl">
              <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] rounded-2xl bg-[#F2EBDF]">
                <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
                  إسترجاع كلمة السر{" "}
                </p>
                <form className="signup-form" onSubmit={handleSubmit}>
                  <label className="text-black-palette" htmlFor="password">
                    كلمة السر
                  </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="password"
                    placeholder="كلمة السر"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
      
                  <label className="text-black-palette" htmlFor="password">
                    تأكيد كلمة السر{" "}
                  </label>
      
                  <input
                    className="mb-2 mt-2 p-2 border rounded-2xl w-full"
                    type="password"
                    placeholder="تأكيد كلمة السر "
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
      
                  <button
                    type="submit"
                    className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2"
                  >
                    تأكيد
                  </button>
                  {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                </form>
              </div>
            </div>
          </div>
       </div>
    
  )
}

export default Resset_password
