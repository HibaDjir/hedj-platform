import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import Cnd_bg from "../images/MOSQUE.jpg";
import add from "../images/add_khel.png";
import Cnd from "../images/candidature.jpeg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import ConfModal from "../Popups/ConfimCandid";

import axios from 'axios';

function Candidature() {

  const [formCandidature, setFormCandidature] = useState({
      nom: '',
      prenom: '',
      lieu_naissance: '',
      nationalite: '',
      civilite_c: false,
      civilite_m: false,
      civilite_v: false,
      civilite_d: false,
      genre_f: false,
      genre_m: false,
      num_passeport: '',
      telephone: '',
      email: '',
      address: '',
      nss: '',
      maladie_cronique_s: false,
      maladie_cronique_r: false,
      maladie_cronique_n_m: false,
      maladie_cronique_ms: false,
      maladie_cronique_g: false,
      maladie_cronique_ds: false,
      maladie_cronique_au: '',
  });

  const [isConfModalOpen, setIsConfModalOpen] = useState(false);
  const openConfModal = () => {
    setIsConfModalOpen(true);
  };

  const closeConfModal = () => {
    setIsConfModalOpen(false);
  };

  const [wilayas, setWilayas] = useState([]);
  const [condidatures, setCondidature] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/wilaya/All')
            .then(response => {
              const additionalOptions = response.data.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
              setWilayas(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });

    axios.get('http://localhost:3000/api/candidature/find?fieldName=genre&fieldValue=ذكر')
            .then(response => {
              const additionalOptions = response.data.map(condidature => ({value: condidature._id, label: condidature.nom +" "+ condidature.prenom}));
              setCondidature(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
  }, [])

  const options = [
    { value: "O+", label: "O+" },
    { value: "A+", label: "A+" },
    { value: "B+", label: "B+" },
    { value: "AB+", label: "AB+" },
    { value: "O-", label: "O-" },
    { value: "A-", label: "A-" },
    { value: "B-", label: "B-" },
    { value: "AB-", label: "AB-" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
  

      padding: "0.15rem",
      borderRadius: "0.5rem",
      
      width: "100%",
    }),
  };

  const [selectedOptionGroupage, setSelectedOptionGroupage] = useState(null);
  const handleChangeGroupage = (selectedOption) => {
    setSelectedOptionGroupage(selectedOption);
  };

  const [communes, setCommunes] = useState([]);
  const [selectedOptionWilaya, setSelectedOptionWilaya] = useState(null);

  const handleChangeWilaya = (event) => {
    const selectedValue = event.value;
    setSelectedOptionWilaya(selectedValue);
    axios.get('http://localhost:3000/api/commune/find?fieldName=code&minValue='+selectedValue+'00&maxValue='+selectedValue+'99')
            .then(response => {
              const additionalOptions = response.data.map(commune => ({value: commune.code, label: commune.ar_name}));
              setCommunes(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
  };

  const [selectedOptionCommune, setSelectedOptionCommune] = useState(null);

  const handleChangeCommune = (event) => {
    const selectedValue = event.value;
    setSelectedOptionCommune(selectedValue);
  };

  const [selectedOptionCandidature, setSelectedOptionCandidature] = useState(null);
  const handleChangeCandidature = (selectedOption) => {
    setSelectedOptionCandidature(selectedOption);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleChangeCheckbox = (event) => {
    const { name, checked } = event.target;
    setFormCandidature(prevState => ({
        ...prevState,
        [name]: checked
    }));
  };

  const handleChangeValue = (event) => {
      const { name, value } = event.target;
      setFormCandidature(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // Send form data to the backend
        var civilite = "";
        var genre = "ذكر";
        var maladie_cronique = "[";
        if(formCandidature.genre_f == true){ 
          genre = "أنثى";
        }
        if(genre == "أنثى"){
          civilite = "عزباء";
        }else{
          civilite = "اعزب";
        }
        
        if(formCandidature.civilite_m === true) civilite = "متزوج(ة)";
        if(formCandidature.civilite_d === true) civilite = "مطلق(ة)";
        if(formCandidature.civilite_v === true) civilite = "ارمل(ة)";
        
        if(formCandidature.maladie_cronique_s === true) maladie_cronique = maladie_cronique + ", السكري";
        if(formCandidature.maladie_cronique_ds === true) maladie_cronique = maladie_cronique + ", ضغط الدم";
        if(formCandidature.maladie_cronique_g === true) maladie_cronique = maladie_cronique + ", المناعة الذاتية";
        if(formCandidature.maladie_cronique_ms === true) maladie_cronique = maladie_cronique + ", أمراض الدم";
        if(formCandidature.maladie_cronique_r === true) maladie_cronique = maladie_cronique + ", الربو";

        maladie_cronique = maladie_cronique + ","+ formCandidature.maladie_cronique_au + "]";
        if(formCandidature.maladie_cronique_n_m === true) maladie_cronique = "";
        alert("----- 1 -----");
        const wilaya = selectedOptionWilaya, commune = selectedOptionCommune, groupage = selectedOptionGroupage.value,
        id_mahrem = selectedOptionCandidature, date_naissance = selectedDate, lieu_naissance = formCandidature.lieu_naissance,
        nom = formCandidature.nom, prenom = formCandidature.prenom, nationalite = formCandidature.nationalite,
        num_passeport = formCandidature.num_passeport, telephone = formCandidature.telephone, email = formCandidature.email,
        address = formCandidature.address, nss = formCandidature.nss;
        alert("----- 2 -----");
        const response = await axios.post('http://localhost:3000/api/candidature', { 
          nom, prenom, date_naissance, lieu_naissance, civilite, genre, num_passeport, telephone, email, wilaya, commune, address, groupage, nss, maladie_cronique,id_mahrem
        });
        console.log('Form submitted successfully:', response.data);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
  };
  return (
    <div
      dir="rtl"
      className="w-full h-full mx-auto  text-right flex flex-col justify-center items-center bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${Cnd_bg})` }}
    >
      <form className="candidature-form" onSubmit={handleSubmit}>
        <div className=" flex flex-col justify-center items-center max-w-[1240px] mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl">
          <h1 className="text-fake_black  text-3xl mt-4">إستمارة الحج</h1>
          <div className="max-w-[1240px] mx-auto  grid md:grid-cols-2 w-full  ">
            <div className="flex flex-col justify-items-center  p-5">
              <div className=" w-full flex justify-center items-center">
                <div className="flex flex-col w-full mx-2">
                  <label className="text-fake_black mb-2" htmlFor="nom">
                    الإسم:{" "}
                  </label>
                  <input
                    className="text-black p-2 border rounded-xl  border-fake_black 
                    w-full"
                    type="text"
                    placeholder="الإسم"
                    name="nom"
                    value={formCandidature.nom} onChange={handleChangeValue}
                    required
                  />
                </div>
                <div className="flex flex-col w-full mx-2 ">
                  <label className="text-fake_black mb-2" htmlFor="prenom">
                    اللقب:{" "}
                  </label>
                  <input
                    className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                    type="text"
                    placeholder="القب"
                    name="prenom"
                    value={formCandidature.prenom} onChange={handleChangeValue}
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
                    onChange={(date) => setSelectedDate(date)}
                    locale={ar}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="تاريخ الملاد"
                    name="date_naissance"
                    //required
                  />
                </div>
                <div className="flex flex-col w-full mx-2">
                  <label className="text-fake_black mb-2" htmlFor="placeofbirth">
                    مكان الملاد :
                  </label>
                  <input
                    className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                    type="text"
                    placeholder="مكان الملاد"
                    name="lieu_naissance"
                    value={formCandidature.lieu_naissance} onChange={handleChangeValue}
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
                  type="text"
                  placeholder="الجنسية"
                  name="nationalite"
                  value={formCandidature.nationalite} onChange={handleChangeValue}
                  required
                />
              </div>

              <div className="w-full flex flex-col  mt-2">
                <p> الحالة الإجتماعية :</p>
                <div className=" w-full flex mt-2 ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="civilite_c"
                      name="civilite_c"
                      checked={formCandidature.civilite_c} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4  border-fake_black  rounded-xl l"
                    />
                    <label htmlFor="civilite_c" className="text-fake_black">
                      اعزب/عزباء
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="civilite_m"
                      name="civilite_m"
                      checked={formCandidature.civilite_m} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4 border-fake_black  rounded-xl l"
                    />
                    <label htmlFor="civilite_m" className="text-fake_black">
                      متزوج(ة)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="civilite_d"
                      name="civilite_d"
                      checked={formCandidature.civilite_d} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4  border-fake_black  rounded-xl l"
                    />
                    <label htmlFor="civilite_d" className="text-fake_black">
                      مطلق(ة)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="civilite_v"
                      name="civilite_v"
                      checked={formCandidature.civilite_v} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4 border-fake_black  rounded-xl l"
                    />
                    <label htmlFor="civilite" className="text-fake_black">
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
                      id="femelle"
                      name="genre_f"
                      checked={formCandidature.genre_f} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4 border-fake_black  rounded-xl l"
                    />
                    <label htmlFor="myCheckbox" className="text-fake_black">
                      أنثى
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="male"
                      name="genre_m"
                      checked={formCandidature.genre_m} onChange={handleChangeCheckbox}
                      className="mr-2 h-4 w-4  border-fake_black  rounded-xl l"
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
                    className="text-black p-2 border rounded-xl  border-fake_black  w-full"
                    type="text"
                    placeholder="رقم جواز السفر"
                    name="num_passeport"
                    value={formCandidature.num_passeport} onChange={handleChangeValue}
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
                    placeholder=" رقم الهاتف"
                    name="telephone"
                    value={formCandidature.telephone} onChange={handleChangeValue}
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
                    placeholder="  البريد الإلكتروني"
                    name="email"
                    value={formCandidature.email} onChange={handleChangeValue}
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
                    onChange={handleChangeWilaya}
                    options={wilayas}
                    placeholder="الولاية"
                    name="wilaya"
                  />
                </div>
                <div className="flex flex-col w-full  mx-2">
                  <label className="text-fake_black mb-2" htmlFor="lastName">
                    الدائرة:{" "}
                  </label>
                  <Select
                    styles={customStyles}
                    options={communes}
                    onChange={handleChangeCommune}
                    placeholder=" الدائرة"
                    isRtl={true}
                    name="commune"
                    //value={formCandidature.commune} onChange={handleChangeValue}
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
                    placeholder="العنوان الكامل"
                    name="address"
                    value={formCandidature.address} onChange={handleChangeValue}
                    required
                  />
                </div>
                <div className="w-full flex flex-col mt-2 ">
                  <label className="text-fake_black mb-2" htmlFor="nationalité">
                    الزمرة الدموية :
                  </label>

                  <Select
                    styles={customStyles}
                    value={selectedOptionGroupage}
                    onChange={handleChangeGroupage}
                    options={options}
                    placeholder="الزمرة الدموية"
                    isRtl={true}
                    name="groupage"
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
                    name="nss"
                    value={formCandidature.nss} onChange={handleChangeValue}
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
                        id="maladie_cronique_s"
                        name="maladie_cronique_s"
                        checked={formCandidature.maladie_cronique_s} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_s" className="text-fake_black">
                        السكري
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maladie_cronique_r"
                        name="maladie_cronique_r"
                        checked={formCandidature.maladie_cronique_r} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_r" className="text-fake_black">
                        الربو
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maladie_cronique_g"
                        name="maladie_cronique_g"
                        checked={formCandidature.maladie_cronique_g} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_g" className="text-fake_black">
                        المناعة الذاتية
                      </label>
                    </div>
                  </div>
                  <div className=" flex w-ful flex-col">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maladie_cronique_ds"
                        name="maladie_cronique_ds"
                        checked={formCandidature.maladie_cronique_ds} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_ds" className="text-fake_black">
                        ضغط الدم
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maladie_cronique_ms"
                        name="maladie_cronique_ms"
                        checked={formCandidature.maladie_cronique_ms} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_ms" className="text-fake_black">
                        أمراض الدم
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="maladie_cronique_n_m"
                        name="maladie_cronique_n_m"
                        checked={formCandidature.maladie_cronique_n_m} onChange={handleChangeCheckbox}
                        className="mr-2 h-4 w-4  border-fake_black rounded-xl l"
                      />
                      <label htmlFor="maladie_cronique_n_m" className="text-fake_black">
                        لا يوجد
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  justify-around w-full mt-8">
                <label
                  className="text-fake_black mb-2 mt-2"
                  htmlFor="maladie_cronique_au"
                >
                  مرض مزمن أخر:
                </label>
                <input
                  className="text-black p-2 border   border-fake_black  rounded-xl  "
                  type="text"
                  placeholder="مرض مزمن أخر "
                  id="maladie_cronique_au"
                  name="maladie_cronique_au"
                  value={formCandidature.maladie_cronique_au} onChange={handleChangeValue}
                />
              </div>
              <div className="flex-col mt-10">
                <div className="flex justify-center items center w-full mt-10">
                  <p className="text-xl text-fake_black"> تسجيل المحرم للمرأة</p>
                  <img
                    src={add}
                    className="text-fake_black h-[40px] w-[40px] ml-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
                  />
                </div>
                <Select
                
                  styles={customStyles}
                  options={condidatures}
                  placeholder="إختر محرم"
                  id="mahrem"
                  name="mahrem"
                  onChange={handleChangeCandidature}
                  isRtl={true}
                />
              </div>
            </div>
          </div>

          <button className="text-white text-2xl bg-brown_palette rounded-md mx-auto w-[300px]  h-[50px] mb-2 border border-brown_palette"
            onClick={handleSubmit}>
            تأكيد{" "}
          </button>
          {isConfModalOpen && <ConfModal onClose={closeConfModal} />}
        </div>
      </form> 
    </div>
  );
}

export default Candidature;
