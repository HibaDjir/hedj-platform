import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import horloge from "../images/horloge_makkah.jpeg";
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/login', {email,password})
    .then(res=>{
      if(res.data.Role === 'admin'){
        navigate('/dashboard')
      }else{
        navigate('/home')
      
    }
    }).catch(err => console.log(err))
  }
  return (
    <div dir="rtl" className="w-full bg-white page-content">
      <div className="mx-auto grid md:grid-cols-2">
        <img
          className="w-full mx-auto"
          alt="kaaba"
          src={horloge}
          style={{ marginRight: '-100px', marginTop: '-50px' }}
        />

        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[500px] h-{100vh}">
          <p className="text-vert_foncé bold text-3xl mb-4 flex justify-center">تسجيل الدخول</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="text-vert_claire" htmlFor="email">البريد اللإلكتروني</label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="email"
              placeholder="البريد اللإلكتروني"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-vert_claire" htmlFor="password">كلمة السر</label>
            <input
              className="mb-2 mt-2 p-2 border border-vert_claire rounded-2xl w-full"
              type="password"
              placeholder="كلمة السر"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="mt-4 text-vert_claire">
              {' '} هل نسيت كلمة المرور؟{' '}
              <Link to="/reset_password" className="text-vert_claire hover:text-vert_foncés">
                انقر هنا لإعادة تعيينها
              </Link>
            </p>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-900 to-green-700 text-dorée p-2 rounded-2xl w-full mt-2"
            >
              تأكيد
            </button>
          </form>

          <p className="mt-4 text-vert_claire">
            {' '} إذا كنت لا تملك حساب سجل{' '}
            <Link to="/signup" className="text-vert_claire hover:text-vert_foncés">
              بالنقر هنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

