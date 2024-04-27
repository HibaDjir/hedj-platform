import React, { useState, useEffect } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar";
import ConfModal from "../Popups/ConfimCandid";
import { CSSTransition } from 'react-transition-group';


import Cnd_bg from "../images/MOSQUE.jpg";
import add from "../images/add_khel.png";
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Candidature() {


  const [isDivVisible, setIsDivVisible] = useState(true);

  const handleLinkClick = () => {
    // Hide the div when the link is clicked to trigger exit animation
    setIsDivVisible(false);
  };

  const navigate = useNavigate();
  const [formCandidature, setFormCandidature] = useState({
    nom: '',
    prenom: '',
    lieu_naissance: '',
    nationalite: '',
    civilite: '',
    genre: '',
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

  const [selectedDate, setSelectedDate] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeSelect = (selectedOption) => {
    const { name, id } = selectedOption.target;
    switch (id) {
      case "single":
        formCandidature.civilite = "اعزب/عزباء";
        break;
      case "married":
        formCandidature.civilite = "متزوج(ة)";
        break;
      case "divorced":
        formCandidature.civilite = "مطلق(ة)";
        break;
      case "widowed":
        formCandidature.civilite = "ارمل(ة)";
        break;
      case "female":
        formCandidature.genre = "أنثى";
        setIsVisible(true);
        break;
      case "male":
        setIsVisible(false);
        formCandidature.genre = "ذكر";
        break;
      default:
        // code block to be executed if none of the cases match
    }

    //setSelectedOption(selectedOption);
  };

  const handleChangeDate = (date) => {
    setSelectedDate(date);
  };

  //manipuler confirmer_cnadid
  const [isConfModalOpen, setIsConfModalOpen] = useState(false);
  const openConfModal = () => {
    setIsConfModalOpen(true);
  };

  const closeConfModal = () => {
    setIsConfModalOpen(false);
  };
  
  const [wilayas, setWilayas] = useState([]);
  const [condidatures, setCondidature] = useState([]);
  const [id_session, setSession] = useState(null);
  const [annee, setAnnee] = useState(null);
  const [id_user, setIdUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/wilaya/All')
            .then(response => {
              const additionalOptions = response.data.map(wilaya => ({value: wilaya.code, label: wilaya.ar_name}));
              setWilayas(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });

    axios.get('http://localhost:3000/api/candidature/genre/find?fieldName=genre&fieldValue=ذكر')
            .then(response => {
              const additionalOptions = response.data.map(condidature => ({value: condidature._id, label: condidature.nom +" "+ condidature.prenom}));
              setCondidature(additionalOptions);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });

    axios.get('http://localhost:3000/api/session/stateSession/find?fieldName=state&fieldValue=En cours')
            .then(response => {
              setSession(response.data._id);setAnnee(response.data.annee);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    axios.get('http://localhost:3000/TestLogin?fieldName=token&fieldValue='+token)
            .then(response => {
              axios.get('http://localhost:3000/api/users/'+response.data)
                      .then(responseF => {
                        setIdUser(response.data)
                        //alert(responseF.data)
                      })
                      .catch(error => {
                          console.error('Erreur lors de la récupération des options :', error);
                      });
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

  const [AllCandidatures, setAllCandidatures] = useState([]);

  useEffect(() => {
      fetchAllCandidatures();
  }, []);

  const fetchAllCandidatures = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/candidature/');
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setAllCandidatures(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        // Send form data to the backend
        var civilite = formCandidature.civilite;
        var genre = formCandidature.genre;
        var maladie_cronique = "[";

        var mahrem_rslt = selectedOptionCandidature;
        if(genre === 'ذكر') mahrem_rslt = null;

        
        if(formCandidature.maladie_cronique_s === true) maladie_cronique = maladie_cronique + ", السكري";
        if(formCandidature.maladie_cronique_ds === true) maladie_cronique = maladie_cronique + ", ضغط الدم";
        if(formCandidature.maladie_cronique_g === true) maladie_cronique = maladie_cronique + ", المناعة الذاتية";
        if(formCandidature.maladie_cronique_ms === true) maladie_cronique = maladie_cronique + ", أمراض الدم";
        if(formCandidature.maladie_cronique_r === true) maladie_cronique = maladie_cronique + ", الربو";

        maladie_cronique = maladie_cronique + ","+ formCandidature.maladie_cronique_au + "]";
        if(formCandidature.maladie_cronique_n_m === true) maladie_cronique = "";

        const wilaya = selectedOptionWilaya, commune = selectedOptionCommune, groupage = selectedOptionGroupage.value,
        date_naissance = selectedDate, lieu_naissance = formCandidature.lieu_naissance,
        nom = formCandidature.nom, prenom = formCandidature.prenom, nationalite = formCandidature.nationalite,
        num_passeport = formCandidature.num_passeport, telephone = formCandidature.telephone, email = formCandidature.email,
        address = formCandidature.address, nss = formCandidature.nss;

        if(genre === 'أنثى' && mahrem_rslt == null){
          alert("Il est nécessaire de compléter El Mahrem pour un candidat féminin.");// le message de blocage pour un candidat féminin ne remplie pas el mahrem
        }else{
          try {
                const response = await fetch('http://localhost:3000/api/candidature/genre/find?fieldName=num_passeport&fieldValue='+num_passeport);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                var canAdd = false;
                for (const key in jsonData) {
                  if(jsonData[key].id_session === id_session) {
                    canAdd = true; 
                    break;
                  }
                }
                if(canAdd === false){

                  var id_mahrem=''
                  if(genre === 'ذكر') id_mahrem = null;
                  else id_mahrem = mahrem_rslt.value;

                  const response = await axios.post('http://localhost:3000/api/candidature', { 
                    nom, prenom, date_naissance, lieu_naissance, nationalite, civilite, genre, num_passeport, telephone, email, wilaya, commune, address, groupage, nss, maladie_cronique,id_mahrem,id_session,id_user
                  });
                  alert("Enregistrement avec succées");
                  navigate("/homelgin");
                }else{
                  alert("Le numéro de passeport de Cette candidat existe déjà dans l'année "+annee );// le message de blocage pour un candidature dèjà inscris
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    } catch (error) {
      alert("Erreur d'enregistrement :\n"+error);
    }
  };
  return (
    <div
      dir="rtl"
      className="w-full h-full mx-auto  text-right flex flex-col justify-center items-center bg-cover bg-center p-5"
      style={{ backgroundImage: `url(${Cnd_bg})` }}
    >
        <CSSTransition
        in={isDivVisible}
        timeout={500}
        classNames="page-exit page-exit-active " 
        unmountOnExit
      >
      <div className="flex flex-col justify-center items-center max-w-[1240px] mx-auto  bg-[#EAE1D1]  bg-opacity-90  rounded-xl shadow-2xl">
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
                  name="prenom"
                  value={formCandidature.prenom} onChange={handleChangeValue}
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
                  name="nom"
                  value={formCandidature.nom} onChange={handleChangeValue}
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
                  name="lieu_naissance"
                  value={formCandidature.lieu_naissance} onChange={handleChangeValue}
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
                name="nationalite"
                value={formCandidature.nationalite} onChange={handleChangeValue}
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
                    name="genre"
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
                    name="genre"
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
                  name="num_passeport"
                  value={formCandidature.num_passeport} onChange={handleChangeValue}
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
                  name="telephone"
                  value={formCandidature.telephone} onChange={handleChangeValue}
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
                  value={formCandidature.email} onChange={handleChangeValue}
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
                  name="wilaya"
                  styles={customStyles}
                  onChange={handleChangeWilaya}
                  options={wilayas}
                  placeholder=" الولاية:"
                  isRtl={true}
                />
              </div>
              <div className="flex flex-col w-full  mx-2">
                <label className="text-fake_black mb-2" htmlFor="lastName">
                  الدائرة:{" "}
                </label>
                <Select
                  name="commune"
                  styles={customStyles}
                  options={communes}
                  onChange={handleChangeCommune}
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
                  value={formCandidature.address} onChange={handleChangeValue}
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
                  //value={selectedOptionGroupage}
                  onChange={handleChangeGroupage}
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
                required
              />
            </div>
     

            {isVisible && 
            <div><Link to="/candidature_mahram">
            <div className="flex justify-center items-center w-full mt-10">
              <img
                src={add}
                className="text-fake_black h-[40px] w-[40px] ml-2 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
                />
            
              <p className="text-xl text-fake_black">تسجيل المحرم للمرأة</p>
            </div>
            </Link>
            <Select
            
              styles={customStyles}
              options={condidatures}
              placeholder="إختر محرم"
              id="mahrem"
              name="mahrem"
              onChange={handleChangeCandidature}
              isRtl={true}
            /></div>}

          </div>
        </div>

        <button className="text-white text-2xl bg-brown_palette rounded-md mx-auto w-[300px]  h-[50px] mb-2 border border-brown_palette"
        onClick={openConfModal}>
          تأكيد{" "}
        </button>
        {isConfModalOpen && <ConfModal onClose={closeConfModal} onConfirm={handleSubmit} />}
      </div>
      </CSSTransition>
    </div>
  ); 

}

export default Candidature;
