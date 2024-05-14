import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import Cnd_bg from "../images/MOSQUE.jpg";

import axios from 'axios';

import { idCandidat } from '../components/DropDownMenue';

function Consulter_candidature() {

  const [commune, setCommune] = useState([]);
  const [selectedOptionWilaya, setSelectedOptionWilaya] = useState(null);

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
          console.log("THEEEEEE RESPONSE OF CANDSSSS", idCandidat)
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
          axios.get('http://localhost:3000/api/wilaya/codeWil/find?fieldName=code&fieldValue='+jsonData.wilaya)
                  .then(response => {
                    response.data.map(wilaya => (
                      setSelectedOptionWilaya(wilaya.ar_name)
                    ));
                  })
                  .catch(error => {
                      console.error('Erreur lors de la récupération des options :', error);
                  });
          axios.get('http://localhost:3000/api/commune/codeCom/find?fieldName=code&fieldValue='+jsonData.commune)
                  .then(response => {
                    response.data.map(commune => (
                      setCommune(commune.ar_name)
                    ));
                  })
                  .catch(error => {
                      console.error('Erreur lors de la récupération des options :', error);
                  });
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  return (
    <div
      dir="rtl"
      className="w-full h-full mx-auto  text-right flex flex-col justify-center items-center bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${Cnd_bg})` }}
    >
      <div className=" flex flex-col justify-center items-center max-w-[1240px] mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl">
        <h1 className="text-fake_black  text-3xl mt-4">إستمارة الحج</h1>
        <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2 w-full  ">
        <div className="flex flex-col justify-items-center  p-5">
            <div className=" w-full flex justify-center items-center">
              <div className="flex flex-col w-full mx-2">
                <label className="text-fake_black mb-2" htmlFor="firstName">
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
                <label className="text-fake_black mb-2" htmlFor="lastName">
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

            <div className="w-full flex flex-col mt-2 ">
              <label className="text-fake_black mb-2" htmlFor="nationalité">
                الجنسية :
              </label>
              <input
                className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                name="origin"
                readOnly
                type="text"
                value={candidat.nationalite}
                placeholder="الجنسية"
                required
              />
            </div>

            <div className="w-full flex flex-col mt-2">
              <p>الحالة الإجتماعية:</p>
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
                  <label htmlFor="single" className="text-fake_black">
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
                  <label htmlFor="married" className="text-fake_black">
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
                    className="mr-2 h-4 w-4 border-fake_black rounded-xl"
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
                  <label htmlFor="widowed" className="text-fake_black">
                    ارمل(ة)
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <p>الجنس:</p>
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
                  <label htmlFor="female" className="text-fake_black">
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
                  <label htmlFor="male" className="text-fake_black">
                    ذكر
                  </label>
                </div>
              </div>
            </div>


            <div className="w-full flex flex-col ">
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
                  رقم جواز السفر :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="passportNumber"
                  value={candidat.num_passeport}
                  readOnly
                  placeholder="رقم جواز السفر :"
                  required
                />
              </div>
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
                  رقم الهاتف:
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="phoneNumber"
                  value={candidat.telephone}
                  readOnly
                  placeholder=" رقم الهاتف:"
                  required
                />
              </div>
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
                  البريد الإلكتروني :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="email"
                  value={candidat.email}
                  readOnly
                  placeholder="  البريد الإلكتروني :"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-items-center  p-5 relative">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 w-40 h-40 origin-bottom-left rotate-45"></div>
            </div>
            <div className=" w-full flex justify-center items-center ">
              <div className="flex flex-col w-full mx-2 ">
                <label className="text-fake_black mb-2" htmlFor="firstName">
                  الولاية:{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="wilaya"
                  value={selectedOptionWilaya}
                  readOnly
                  placeholder="الولاية:"
                  required
                />
              </div>
              <div className="flex flex-col w-full  mx-2">
                <label className="text-fake_black mb-2" htmlFor="lastName">
                  الدائرة:{" "}
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="commune"
                  value={commune}
                  readOnly
                  placeholder=" الدائرة:"
                  required
                />
              </div>
            </div>

            <div className="flex w-full flex-col mt-2 ">
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
                  العنوان الكامل :
                </label>
                <input
                  className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                  type="text"
                  name="address"
                  value={candidat.address}
                  readOnly
                  placeholder="العنوان الكامل"
                  required
                />
              </div>
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
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
                <label className="text-fake_black mb-2" htmlFor="nationalité">
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
            </div>
            <div className="w-full flex flex-col mt-2 ">
              <label className="text-fake_black mb-2" htmlFor="nationalité">
                أمراض مزمنة:
              </label>
              <textarea
                className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                name="maladie"
                readOnly
                rows={5} // Adjust the number of rows as needed
                cols={50}
                value={candidat.maladie_cronique}
                placeholder="أمراض مزمنة"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
     
   
    

}

export default Consulter_candidature;