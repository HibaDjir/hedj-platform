import React, { useState, useEffect } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import ConfModal from "../Popups/ConfimCandid";
import Cnd_bg from "../images/MOSQUE.jpg";
import add from "../images/add_khel.png";

function Consulter_candidature() {
 
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.15rem",
      borderRadius: "0.5rem",
      width: "100%",
    }),
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
                <Select
                  styles={customStyles}
                  readOnly
                  placeholder=" الولاية:"
                  isRtl={true}
                />
              </div>
              <div className="flex flex-col w-full  mx-2">
                <label className="text-fake_black mb-2" htmlFor="lastName">
                  الدائرة:{" "}
                </label>
                <Select
                
                  styles={customStyles}
                  readOnly
                  placeholder=" الدائرة:"
                  isRtl={true}
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
                  readOnly
                  placeholder="العنوان الكامل"
                  required
                />
              </div>
              <div className="w-full flex flex-col mt-2 ">
                <label className="text-fake_black mb-2" htmlFor="nationalité">
                  الزمرة الدموية :
                </label>

                <Select
                
                  styles={customStyles}
                  readOnly
                  placeholder="الزمرة الدموية"
                  isRtl={true}
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
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col mt-2">
              <label className="text-fake_black mb-2" htmlFor="nationalité">
                أمراض مزمنة:
              </label>
              <div className=" grid grid-cols-2 mt-2">
                <div className=" flex w-ful flex-col">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      readOnly
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      السكري
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      readOnly
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      الربو
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      readOnly
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      المناعة الذاتية
                    </label>
                  </div>
                </div>
                <div className=" flex w-ful flex-col">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      readOnly
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      ضغط الدم
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      readOnly
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      أمراض الدم
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      readOnly
                      className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      لا يوجد
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  justify-around w-full mt-8">
              <label
                className="text-fake_black mb-2 mt-2"
                htmlFor="nationalité"
              >
                مرض مزمن أخر:
              </label>
              <input
                className="text-black p-2 border   border-fake_black  rounded-xl  "
                type="text"
                placeholder="مرض مزمن أخر "
                readOnly
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
