
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import { idCandidat } from '../components/DropDownMenue';
import  Clear from '../images/x_icon.png';
import  upload from '../images/upload_icon.png';
import   medical_examination from '../images/medical-examination.jpg';
import Navbar_for_each_profile from '../components/Navbar_for_each_profile';


function EtatSantee() {


    const [file,setFile]=useState(null);
    const handleDragOver = (e) => {
        e.preventDefault(); 
        const selectedFile = e.target.files[0];
        if (selectedFile){
            setFile(selectedFile.name);
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
    const [is_read_only, setIsReadOnly] = useState(false);

  
    useEffect(() => {
      fetchCandidat();
    }, []);
    const fetchCandidat = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/candidature/cand/'+idCandidat);
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

            if(jsonData.file_medical != null) setIsReadOnly(true);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('id', idCandidat);
        await axios.post('http://localhost:3000/api/candidature/upload', {file, idCandidat});
        alert('File uploaded successfully');
      } catch (error) {
        alert('Error uploading file:', error);
      }
    };

  return (

    <div dir="rtl" className="w-full h-full mx-auto  text-right flex flex-col justify-center items-center bg-cover bg-center p-5"
    style={{ backgroundImage: `url(${medical_examination})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar_for_each_profile/>
        <div className="flex flex-col justify-center items-center w-[1240px] h-auto
        mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl">



<div className='flex justify-center items-center'>
  <div className="flex justify-item ">
   
    <h1 className="text-fake_black text-3xl  ml-2">تكميل الملف الصحي</h1>
   
  </div>
</div>
<div className=" mx-auto  grid md:grid-cols-2 w-full  ">

        <div className="flex flex-col justify-center   p-4 rounded-md ">
        <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2 text-xl " htmlFor="nationalité">
                  رقم التأمين الصحي :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  placeholder="رقم التأمين الصحي"
                  value={candidat.nss}
                  readOnly
                  required
                />
              </div>
        <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black text-xl mb-2" htmlFor="firstName">
                  الإسم:{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black 
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
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  placeholder="القب"
                  value={candidat.nom}
                  name="lastName"
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="  w-full flex  mt-2  justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black mb-2" htmlFor="dayrofbirth">
                  تاريخ الملاد :{" "}
                </label>
                <DatePicker
                  className="text-black p-2 border rounded-xl  border-fake_black   w-full"
                  readOnly
                  locale={ar}
                  value={candidat.date_naissance}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="تاريخ الملاد"
                />
              </div>
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black mb-2" htmlFor="placeofbirth">
                  مكان الملاد :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="birthp"
                  value={candidat.lieu_naissance}
                  readOnly
                  placeholder="مكان الملاد"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col mt-2">
              <p className='text-xl'>الحالة الإجتماعية:</p>
              <div className="w-full flex mt-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="single"
                    checked={single}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
                  />
                  <label htmlFor="single" className="text-fake_black text-xl">
                    اعزب/عزباء
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="married"
                    checked={married}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
                  />
                  <label htmlFor="married" className="text-fake_black text-xl">
                    متزوج(ة)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="divorced"
                    checked={divorced}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl text-xl"
                  />
                  <label htmlFor="divorced" className="text-fake_black">
                    مطلق(ة)
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="widowed"
                    checked={widowed}
                    readOnly
                    name="maritalStatus"
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
                  />
                  <label htmlFor="widowed" className="text-fake_black text-xl">
                    ارمل(ة)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <p className='text-xl'>الجنس:</p>
              <div className="flex w-full mt-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="female"
                    checked={female}
                    readOnly
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
                    name="gender"
                  />
                  <label htmlFor="female" className="text-fake_black text-xl">
                    أنثى
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="male"
                    checked={male}
                    readOnly
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
                    name="gender"
                  />
                  <label htmlFor="male" className="text-fake_black text-xl">
                    ذكر
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2 text-xl" htmlFor="nationalité">
                  الزمرة الدموية :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  placeholder="الزمرة الدموية"
                  value={candidat.groupage}
                  readOnly
                  required
                />
              </div>
              <div className="w-full flex flex-col mt-2 ">
              <label className="text-fake_black mb-2 text-xl" htmlFor="nationalité">
                أمراض مزمنة:
              </label>
              <textarea
                className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                name="maladie"
                readOnly
                rows={2} // Adjust the number of rows as needed
                cols={50}
                value={candidat.maladie_cronique}
                placeholder="أمراض مزمنة"
                required
              />
              {!is_read_only && <div className=" w-full flex justify-center items-center">
                <button  className="w-full border border-[#D4A373]  text-brown_palette rounded-2xl p-4 m-2 hover:bg-[#D8A353] hover:text-fake_black "
                  onClick={handleUpload} >
                 تأكيد
                </button>
              </div>}
            </div>
        </div>



         


        <div className="flex flex-col justify-center p-4 ">
    <label htmlFor='input' className='block text-slate-800  mb-1.5 text-xl'>
        تحميل الملف
    </label>
    <div className='flex items-start w-full'>
        {file ? (
      <div className='my-3'>
      <div className='relative inline-block'>
          <div className='p-2 bg-gray-200 text-gray-800 rounded-md shadow-md'>
              <span className='text-black font-medium text-lg'>اسم الملف: </span>
              <span>{file}</span>
          </div>
          <button className='absolute -top-2 -right-2 bg-red-500 text-white cursor-pointer rounded-full p-1 shadow-md' onClick={handleClearFile}>
              <img src={Clear} alt="Clear" className="h-4 w-4" />
          </button>
          <img  className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
       // f blaset src je pense ghadi thettou url ta3 l file
       
    alt="here you will display the file fetched from the database" />
      </div>
  </div>
  


        ) : (
            <label htmlFor='dragdrop-file' className='flex flex-col items-center justify-center w-full h-[80vh] border-[#C09455] border-dashed border-2 rounded-md cursor-pointer bg-gray-50'>
                <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <img src={upload} alt="Upload"/> 
                {!is_read_only && <p className='mb-2 text-xl '> 
                        <span className=' text-xl'>انقر للتحميل</span>
                        <br/>
                        سحب وإفلات
                    </p>}
                {!is_read_only && <p className='text-md text-gray-500 '>
                        SVG؟ PNG؟ JPG أو JPEG (بحد أقصى 800 × 400 بكسل)
                    </p>}
                </div>
                {!is_read_only && <input id='dragdrop-file' name='file' type='file' hidden onChange={handleDragOver}/>}
            </label>
        )}
    </div>
</div>

      </div>
    </div>
    </div>
  );
}

export default EtatSantee;
