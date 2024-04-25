import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

function Modal({ onClose }) {
  
  //
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/signup', {firstName,lastName,email,password})
    .then(res=>{
      alert("created")
      // if(res.data.token){
      //   localStorage.setItem('token',res.data.token)
      // }
    }).catch(err => {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      console.log(err)})
  };
  //

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
    dir="rtl"
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center n"
    >
      <div className="mt-10 flex flex-col gap-5 text-white bg-transparent rounded-2xl">
        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px] h-[600px] rounded-2xl bg-[#F4EFE7]">
          <p className="text-fake_black bold text-3xl mb-10 flex justify-center">
            تسجيل حساب جديد
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="firstName">
                الإسم
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="text"
                placeholder="الإسم"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="lastName">
                القب
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="text"
                placeholder="القب"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="email">
                البريد اللإلكترون
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="email"
                placeholder="البريد اللإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-fake_black mb-2" htmlFor="password">
                كلمة السر
              </label>
              <input
                className="text-black p-2 border rounded-2xl w-full"
                type="password"
                placeholder="كلمة السر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full"
            >
              <Link to="/home">تأكيد</Link>
            </button>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
