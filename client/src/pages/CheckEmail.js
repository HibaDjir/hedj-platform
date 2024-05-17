import { useEffect, useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar_psw";
import Logo from "../images/LOGO.png"
import { BsFillEnvelopeCheckFill } from "react-icons/bs";

function EmailConfirmation() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate()
  const { id, token } = useParams(); // Extract id and token from URL
  console.log(id, token)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/users/${id}/verify/${token}`)
    .then(res=>{
      console.log(res)
     }).catch(err => {
      if (err.response && err.response.data && err.response.data.message) {
                        setErrorMessage(err.response.data.message);
                   } else {
                   setErrorMessage('An error occurred. Please try again later.');
                 }
      console.log(err)})
}, []);


  
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/home')

   }
   

  return (

    <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center relative'>

    <div className="bg-[#C09455] w-full  fixed top-0 left-0 z-0">
        <div className="container mx-auto flex justify-center items-center">
            {/* You can add content here if needed */}
            <div className="container mx-auto flex justify-between items-center w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <p className="text-sm">&copy; 2024 Labayka. All rights reserved.</p>
            <div className="flex space-x-11">
                <a className="text-sm hover:underline"> <Link to="/home">الصفحة الرئيسية</Link></a>
                <a href="#" className="text-sm hover:underline">من نحن؟</a>
                <a href="#" className="text-sm hover:underline">اتصل بنا</a>
            </div>
        </div>
        </div>
    </div>

    <div className="bg-gray-100 rounded-lg p-6 max-w-md w-full h-[400px] shadow-2xl flex flex-col items-center justify-center z-10">
        <div dir="rtl" className="text-center">
            <BsFillEnvelopeCheckFill className="h-16 w-16 text-[#D8A353] mx-auto mb-6 animate-bounce" />
            <h2 className="text-xl font-bold mb-10 p-4">شكرا لانضمامكم لنا ! </h2>
            <button className="rounded-full bg-white hover:bg-[#C09455] px-6 py-3 border-[2px]">
            <Link to="/home">الصفحة الرئيسية</Link>
</button>


        </div>
    </div>

    <footer className="fixed bottom-0 left-0 w-full bg-[#C09455] text-black text-center z-10">
       
    </footer>
</div>






  );
}

export default EmailConfirmation;