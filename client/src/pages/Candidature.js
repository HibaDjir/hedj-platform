import React from "react";
import { useState } from "react";
import Select from "react-select";
import Cnd_bg from "../images/MOSQUE.jpg";
import Cnd from "../images/candidature.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";

function Candidature() {
  const options = [
    { value: "O+", label: "O+" },
    { value: "AB+", label: "AB+" },
    { value: "O-", label: "O-" },
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      padding: "0.15rem",
      borderRadius: "0.5rem",
      width: "100%",
    }),
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div
      dir="rtl"
      className="w-full  mx-auto  text-right flex flex-col justify-center items-center bg-cover bg-center"
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
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
                placeholder="الإسم"
                name="firstName"
                required
              />
            </div>
            <div className="flex flex-col w-full mx-2 ">
              <label className="text-fake_black mb-2" htmlFor="lastName">
                اللقب:{" "}
              </label>
              <input
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
                placeholder="القب"
                name="lastName"
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
                className="text-black p-2 border rounded-xl  w-full"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
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
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
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
              className="text-black p-2 border rounded-xl  w-full"
              type="text"
              placeholder="الجنسية"
              required
            />
          </div>

          <div className="w-full flex flex-col  mt-2">
            <p> الحالة الإجتماعية :</p>
            <div className=" w-full flex mt-2 ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
                  اعزب/عزباء
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
                  متزوج(ة)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
                  مطلق(ة)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
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
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
                  أنثى
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                />
                <label htmlFor="myCheckbox" className="text-fake_black">
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
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
                placeholder="رقم جواز السفر :"
                required
              />
            </div>
            <div className="w-full flex flex-col mt-2 ">
              <label className="text-fake_black mb-2" htmlFor="nationalité">
                رقم الهاتف:
              </label>
              <input
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
                placeholder=" رقم الهاتف:"
                required
              />
            </div>
            <div className="w-full flex flex-col mt-2 ">
              <label className="text-fake_black mb-2" htmlFor="nationalité">
                البريد الإلكتروني :
              </label>
              <input
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
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
                onChange={handleChange}
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
                className="text-black p-2 border rounded-xl  w-full"
                type="text"
                placeholder="رقم التأمين الصحي"
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
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                  />
                  <label htmlFor="myCheckbox" className="text-fake_black">
                    السكري
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                  />
                  <label htmlFor="myCheckbox" className="text-fake_black">
                    الربو
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
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
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                  />
                  <label htmlFor="myCheckbox" className="text-fake_black">
                    ضغط الدم
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                  />
                  <label htmlFor="myCheckbox" className="text-fake_black">
                    أمراض الدم
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded-xl l"
                  />
                  <label htmlFor="myCheckbox" className="text-fake_black">
                    لا يوجد
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  justify-around w-full mt-8">
            <label className="text-fake_black mb-2 mt-2" htmlFor="nationalité">
              مرض مزمن أخر:
            </label>
            <input
              className="text-black p-2 border rounded-xl  "
              type="text"
              placeholder="مرض مزمن أخر "
              required
            />
          </div>
        </div>
      </div>




      <button className="text-white text-2xl bg-brown_palette rounded-md mx-auto w-[300px]  h-[50px] mb-2">تأكيد </button>
      </div>
    </div>
  );
}

export default Candidature;
