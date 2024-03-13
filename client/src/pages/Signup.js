import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import horloge from "../images/horloge_makkah.jpeg";

function Signup ()  {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

 
  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/signup', {firstName,lastName,email,password})
    .then(res=>{
      alert("created")

      if(res.data.token){
        localStorage.setItem('token',res.data.token)
      }

   
    }).catch(err => console.log(err))
  };

  return (
    <div dir="rtl" className="w-full bg-white bg-opacity-70">
      <div className="mx-auto grid md:grid-cols-2">
        <img
          className="w-full mx-auto"
          alt="kaaba"
          src={horloge}
          style={{ marginRight: '-100px' }}
        />
        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[500px] h-screen">
          <p className="text-vert_claire bold text-3xl mb-4 flex justify-center">
            تسجيل حساب جديد
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="text-vert_claire mb-2" htmlFor="firstName">
              الإسم
            </label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="text"
              placeholder="الإسم"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label className="text-vert_claire mb-2" htmlFor="lastName">
              القب
            </label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="text"
              placeholder="القب"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label className="text-vert_claire mb-2" htmlFor="email">
              البريد اللإلكتروني
            </label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="email"
              placeholder="البريد اللإلكتروني"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="text-vert_claire mb-2" htmlFor="password">
              كلمة السر
            </label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="password"
              placeholder="كلمة السر"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-900 to-green-700 text-dorée p-2 rounded-2xl w-full mt-2"
            >
              تأكيد
            </button>
          </form>
          <p className="mt-4 text-vert_claire">
            {' '}
            تملك حسابا مسبقا؟ دخولك من هذاالحساب{' '}
            <Link to="/login" className="text-vert_claire hv:text-fake_black"  >
              بالنقرهنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

