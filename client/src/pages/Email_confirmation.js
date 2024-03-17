

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar_psw";

function EmailConfirmation() {
   
  //  const [email, setEmail] = useState('');
  //  const navigate = useNavigate();
   
  //  const handleSubmit = (e) =>{
  //    e.preventDefault();
  //    axios.post('http://localhost:3000/api/users/forgetpassword', {email})
  //    .then(res=>{
  //      alert("logged in");
  //    }).catch(err => console.log(err));
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/users/forgetpassword', {email})
    .then(res=>{
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
   

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div dir="rtl" className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-md w-full bg-white_palette shadow-3xl rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-6 text-center">جاري البحث عن حسابك</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="email" className="block mb-2">
              البريد اللإلكتروني
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl py-2 px-3 mb-4 focus:outline-none focus:border-brown_palette"
              placeholder="البريد اللإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <Link
                to="/home"
                className="text-gray-600 hover:text-taupe_palette transition-colors mb-2 sm:mb-0 sm:self-center"
              >
                إلغاء
              </Link>
              <button
                type="submit"
                className="bg-taupe_palette text-white py-2 px-4 rounded-md hover:bg-brown_palette transition-colors self-center"
              >
                
                  متابعة
                
              </button>
            </div>
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

export default EmailConfirmation;