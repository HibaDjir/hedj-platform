import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Sidebar from "../../components/Dash_components/shared/Sidebar";
import { Link,useNavigate  } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavbarMed from "../../components/NavbarMed";

import axios from 'axios';
import { MdVisibility } from "react-icons/md";
import {jwtDecode} from 'jwt-decode';

export let idCandidat = 'dzddzddzd';

function ListePelerin() {
  const navigate=useNavigate()
  const [selectedDate, setSelectedDate] = useState({});
  const [candidats, setCandidats] = useState([]);
  
  const [daata, setDaata] = useState([]);
  const [userId, setUserId] = useState(null);

  const response = localStorage.getItem('user');
  const parsedRes = JSON.parse(response);
  const token = parsedRes.token
  const decodedToken = jwtDecode(token);

  
  useEffect(() => {

    if (decodedToken && decodedToken._id) {
      setUserId(decodedToken._id); // Store ID if found in decoded token 663bd2be3b644e05d59fd85f
      fetchMedecin(decodedToken._id)
    } 
    if (daata._id) { 
      axios.get('http://localhost:3000/api/candidature/medecin/find?fieldName=id_medecin&fieldValue='+daata._id)
      .then(responseC => {
        setCandidats(responseC.data);
      })
      .catch(error => {
          console.error('Erreur lors de la récupération des options :', error);
      });
    } 
 
        
  }, [userId, daata]);

  
  const fetchMedecin = async(id)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/masterAdmin/getMedecinByuserId/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Candidats');
        }
        const data = await response.json();
        setDaata(data);
      } catch (error) {
        console.error('Error fetching candidats:', error);
      }
  }

  const handleColumnClick = (candidat_rslt) => {
    idCandidat=candidat_rslt;
    if(idCandidat === 'dzddzddzd'){
      navigate('/listepelerin')
    }else{
      navigate('/pelerinsMed')
    }
    // Perform actions based on the clicked column index
  };
  const handleChangeDate = async (date, dataIndex, rowIndex) => {
    setSelectedDate({ ...selectedDate, [dataIndex]: date });
    const id = recentPelerenData[rowIndex]._id;const date_rdv = date;
    try {
      // Make a PUT request to the backend API to update the record
      const response = await axios.put('http://localhost:3000/api/candidature/RDV/update', { id, date_rdv });
      // Handle success (e.g., show a success message)
      alert("RDV ajoute avec succée");
  } catch (error) {
      // Handle error (e.g., show an error message)
      alert(error);
      console.error("Error:", error);
  }
  };

  const columns = [
    {
     name: "_id",
     label: "Nom",
     MdVisibility:false,
     options: {
      display: false,
      filter: true,
      sort: true,
     }
    },
    {
     name: "nom",
     label: "Nom",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "prenom",
      label: "Prenom",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "genre",
      label: "Genre",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "groupage",
      label: "Groupage",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
      name: "nss",
      label: "Numéro de sécurité sociel",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
       name: "telephone",
       label: "Telephone",
       options: {
        filter: true,
        sort: false,
       }
      },
     {
      name: "email",
      label: "Adresse email",
      options: {
       filter: true,
       sort: false,
      }
     },
     {
       name: "date_rdv",
       label: "Rendez Vous",
       options: {
         filter: false,
         sort: false,
         customBodyRenderLite: (dataIndex, rowIndex) => {
           return (
             <div>
               <DatePicker
                 className="text-black p-2 border rounded-xl border-fake_black w-full"
                 selected={selectedDate[dataIndex]}
                 value={recentPelerenData[rowIndex].date_rdv}
                 onChange={(date_rdv) => handleChangeDate(date_rdv, dataIndex, rowIndex)}
                 dateFormat="dd/MM/yyyy"
                 placeholderText="rendez vous"
               />
             </div>
           );
         },
       },
     }
   ];
    const options = {
      filterType: 'checkbox',
    };
    const recentPelerenData = candidats.map(candidat => ({
      _id: candidat._id,
      nom: (
        <a onClick={() => handleColumnClick(candidat._id)} style={{ color: "inherit", textDecoration: "inherit", cursor: 'pointer' }}>
          {candidat.nom}
        </a>
      ),
      prenom: candidat.prenom,
      groupage: candidat.groupage,
      nss: candidat.nss ,
      genre: candidat.genre,
      telephone: candidat.telephone,
      email: candidat.email,
      date_rdv: candidat.date_rdv
    })
  ); 

  return (
    <div className=" w-full h-full">
     <NavbarMed/>
    <div className="w-full overflow-hidden bg-white p-16  ">
      
           <MUIDataTable className="ml-8  rounded-sm border shadow-md border-gray-200 bg-[#FAF8F5] flex-col max-w-[1420px] justify-center"
             title={"Pelerins"}
             data={recentPelerenData}
             columns={columns}
             options={options}
           />
        
      
     </div>
     </div>
   );
}

export default ListePelerin;
