import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import { idCandidat } from '../components/DropDownMenue';
import  Clear from '../images/x_icon.png';
import  upload from '../images/upload_icon.png';
import   grande_poste from '../images/GPA02.jpg';
import   cartreccp from '../images/carte-eddahabiya.jpg';
import Navbar_for_each_profile from '../components/Navbar_for_each_profile';

function Paimentcarteccp() {
    
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  const [file,setFile]=useState(null);
    const handleDragOver = (e) => {
        e.preventDefault(); 
        const selectedFile = e.target.files[0];
        if (selectedFile){
            setFile(selectedFile.name)
        }
    };
    const handleClearFile = () => {setFile(null)}

    const [candidat, setCandidat] = useState([]);
    const [single, setSingle] = useState([]);
    const [married, setMarried] = useState([]);
    const [divorced, setDivorced] = useState([]);
    const [widowed, setwiWdowed] = useState([]);
    const [male, setMale] = useState([]);
    const [female, setFemale] = useState([]);
  
    useEffect(() => {
      fetchCandidat();
    }, []);
    const fetchCandidat = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/candidature/'+idCandidat);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setCandidat(jsonData);
            setFemale(false);
            setMale(false);
            setSingle(false);
            setMarried(false);
            setDivorced(false);
            setwiWdowed(false);
  
            if(jsonData.genre === 'ذكر') setMale(true);
            else setFemale(true);
  
            if(jsonData.civilite === 'اعزب/عزباء') setSingle(true);
            else if(jsonData.civilite === 'متزوج(ة)') setMarried(true);
            else if(jsonData.civilite === 'مطلق(ة)') setDivorced(true);
            else setwiWdowed(true);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
  return (
    <div dir="rtl" className="w-full h-full mx-auto  text-right flex flex-col justify-center items-center  p-5"
    style={{ backgroundImage: `url(${grande_poste})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar_for_each_profile/>
        <div className="flex flex-col justify-center items-center lg:w-[1240px] h-auto
        mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl mt-16">



<div className='flex justify-center items-center'>
  <div className="flex justify-item ">
   
    <h1 className="text-fake_black text-3xl  ml-2 mt-4 mb-2">إجراء الدفع عبر بطاقة البريد الجاري</h1>
   
  </div>
</div>
<div className=" mx-auto  grid md:grid-cols-2 w-full  ">

        <div className="flex flex-col justify-center   p-4 rounded-md ">
        
        <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="firstName">
                  الإسم:{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="الإسم"
                  name="firstName"
                  value={candidat.prenom}
                  readOnly
                  required
                />
              </div>
              <div className="flex flex-col w-full mx-2 ">
                <label className="text-fake_black mb-2 text-xl" htmlFor="lastName">
                  اللقب:{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl   w-full focus:outline-none border-[#C09455]"
                  type="text"
                  placeholder="القب"
                  value={candidat.nom}
                  name="lastName"
                  readOnly
                  required
                />
              </div>
            </div>
           
<div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                صاحب البطاقة:
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="صاحب البطاقة"
                  name="owner"
                  required
                />
              </div>
              </div>

            <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="carteccp">
                رقم بطاقة البريد الجاري:
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="رقم بطاقة البريد الجاري"
                  name="carteccp"
                  required
                />
              </div>

           




              </div>
           
           



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="code">
                رمز الأمان : 
                  {" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl focus:outline-none focus:border-[#C09455]
                  w-full"
                  type="text"
                  placeholder="رمز الأمان"
                  name="code"
                  required
                />
              </div>
              </div>
             



              



              <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="owner">
                تاريخ الانتهاء:
                  {" "}
                </label>
                <DatePicker
                  className="text-black p-2 border rounded-xl  focus:outline-none focus:border-[#C09455]   w-full"
                  selected={selectedDate}
                  onChange={handleChangeDate}
                  dateFormat="dd/MM/yyyy"
                  locale={ar}
                  placeholderText="تاريخ الانتهاء
"
                />
              </div>
              </div>


              <div className=" w-full flex justify-center items-center">
                <button  className="w-full border border-[#D4A373]  text-brown_palette rounded-2xl p-4 m-2 hover:bg-[#D8A353] hover:text-fake_black "
            >
                 تأكيد
                </button>
                </div>

        </div>



         


        <div className="flex flex-col justify-center p-4 ">
   
    
          <img  className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
     
      src={cartreccp} 
    alt="exemple carte ccp" />
      </div>
  </div>
  


      
    </div>
    </div>
  )
}

export default Paimentcarteccp
