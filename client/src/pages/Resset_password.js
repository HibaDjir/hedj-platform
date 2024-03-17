
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar_psw";

function Resset_password() {
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
              setErrorMessage('Passwords do not match');
              return;
            }
    axios
      .post(`http://localhost:3000/api/users/resetPassword/${id}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          navigate("/home");
          alert("password updated");
        }
      })
      .catch(err =>{
        if (err.response && err.response.data && err.response.data.message) {
                   setErrorMessage(err.response.data.message);
                } else {
                 setErrorMessage('An error occurred. Please try again later.');
                }
      });
  };

  

  return (
    <div dir="rtl" className='min-h-screen  bg-gray-100 '>
    <Navbar />
    <div
      
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      
      <div className="max-w-md w-full bg-white_palette  shadow-3xl rounded-3xl p-6">
        <h2 className="text-xl font-bold mb-10">جاري إسترجاع كلمة السر</h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <label htmlFor="password" className="text-black-palette">
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
          <label htmlFor="confirm-password" className="text-black-palette">
            تأكيد كلمة السر
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
    <section className="fixed bottom-0 left-0 w-full bg-taupe_palette text-white py-4 text-center">
        <h1>Footer</h1>
        <p>khoutti hadda hebbit n3emreh ktiba</p>
        <p>ma 3labalich 3lah banli chbab hak</p>
        <p>Facebook and netflix inspiration</p>
        <p>ma t'qelqouch oumbe3 nelgaled tbel3it chbab</p>
      </section>
    </div>
  );
}

export default Resset_password;