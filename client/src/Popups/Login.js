import React, { useRef } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'


function Modal({ onClose }) {

  //
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthContext()
    
    const navigate=useNavigate()

    const handleSubmit = async (e) =>{
      e.preventDefault();

      axios.post('http://localhost:3000/api/users/login', {email,password})
      .then(res=>{
        if(res.data.token){
          localStorage.setItem('token',res.data.token)
        }
        alert("logged in")
        if(res.data.Role === 'admin'){
          navigate('/dashboard')
        }else{
          navigate('/homelgin')
      }
      }).catch(err => {
        console.log(err)
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      })

      setIsLoading(true);

      const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })

    const json = await response.json()

    console.log(response)
    console.log(json.message)


    if (response.status !== 200) {
      setError(json.message)
    }else if( response.status===200 ){
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      // update the auth context
      dispatch({type: 'LOGIN', payload: json})
      // Navigate only if there's no error
      navigate('/homelgin',{replace: true})
      setIsLoading(false);
    }

   


    }

 
  const handleResetPasswordClick = () => {
    onClose();};
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current == e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-whiteb bg-transparent rounded-2xl">
        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px]  rounded-2xl bg-[#F2EBDF]   ">
          <p className="text-fake_black bold text-3xl mb-10 flex justify-center ">
            تسجيل الدخول
          </p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className=" text-fake_black mb-2" for="email ">
              البريد اللإلكترون{" "}
            </label>
            <input
              className="text-black mb-2  mt-2  p-2 border  rounded-2xl w-full"
              type="email"
              placeholder="البريد اللإلكتروني"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-fake_black mb-2 " htmlFor="password">
              كلمة السر
            </label>

            <input
              className="text-black mb-2  mt-2  p-2 border  rounded-2xl w-full"
              type="password"
              placeholder="كلمة السر"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
               <p className="mt-4 text-black mb-2   p-2 ">
              {' '} هل نسيت كلمة المرور؟{' '}
              <Link 
              to="/mail_conf" onClick={handleResetPasswordClick}  className="text-brown_palette hover:text-taupe_palette">
                انقر هنا لإعادة تعيينها
              </Link>
              
            </p>

            <button
              type="submit"
              className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2 "
            >
              {isLoading ? 'جاري المعالجة...' : <Link to="/home">تأكيد</Link>}
            </button>

            {errorMessage && (
  <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 mt-2">
    {errorMessage}
  </div>
)}
  </form>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;

