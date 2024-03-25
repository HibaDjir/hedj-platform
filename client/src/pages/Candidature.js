import React, { useState, useEffect } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import ConfModal from "../Popups/ConfimCandid";
import Cnd_bg from "../images/MOSQUE.jpg";
import add from "../images/add_khel.png";

function Candidature() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthp, setBirthp] = useState('');
  const [origin, setOrigin] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleChangeSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    const firstNameFilled = firstName!== '';
    const lastNameFilled = lastName!== '';
    const selectedDateFilled = selectedDate !== null;
   
    const originFilled = origin!== '';
    const passportNumberFilled = passportNumber !== '';
    const phoneNumberFilled = phoneNumber!== '';
    const emailFilled = email!== '';
    const addressFilled = address!== '';
    const bloodGroupSelected = selectedOption !== null;
    
    const isFormValid =
      firstNameFilled &&
      lastNameFilled &&
      selectedDateFilled &&
  
      originFilled &&
      passportNumberFilled &&
      phoneNumberFilled &&
      emailFilled &&
      addressFilled &&
      bloodGroupSelected;
    
    setIsFormFilled(isFormValid);
  }, [firstName, lastName, selectedDate, birthp, origin, passportNumber, phoneNumber, email, address, selectedOption]);

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  const [isConfModalOpen, setIsConfModalOpen] = useState(false);
  const openConfModal = () => {
    setIsConfModalOpen(true);
  };

  const closeConfModal = () => {
    setIsConfModalOpen(false);
  };

  const options = [
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    { value: "O-", label: "O-" },
  ];

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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
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
                  selected={selectedDate}
                  onChange={handleChangeDate}

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
                  onChange={(e) => setBirthp(e.target.value)}
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
                onChange={(e) => setOrigin(e.target.value)}
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
        onChange={handleChangeSelect}
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
        onChange={handleChangeSelect}
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
        onChange={handleChangeSelect}

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
        onChange={handleChangeSelect}
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
        onChange={handleChangeSelect}

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
        onChange={handleChangeSelect}
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
                  onChange={(e) => setPassportNumber(e.target.value)}
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
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={selectedOption}
                  onChange={handleChangeSelect}
                  options={options}
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
                  //nssiteh oumbe3 nwelli 3endeh
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
                required
              />
            </div>
            {isFormFilled && selectedOption && selectedOption.value === "female" && (
  <div className="flex justify-center items-center w-full mt-10">
    <img
      src={add}
      className="text-fake_black h-[40px] w-[40px] ml-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
    />
    <p className="text-xl text-fake_black">تسجيل المحرم للمرأة</p>
  </div>
)}

          </div>
        </div>

        <button className="text-white text-2xl bg-brown_palette rounded-md mx-auto w-[300px]  h-[50px] mb-2 border border-brown_palette"
        onClick={openConfModal}>
          تأكيد{" "}
        </button>
        {isConfModalOpen && <ConfModal onClose={closeConfModal} />}
      </div>
    </div>
  );
     
   
    

}

export default Candidature;
