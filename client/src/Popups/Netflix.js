import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/User.png";
import user_out from "../images/User_outlined.png";
import Add from "../images/Untitled.png";

import axios from 'axios';

function Netflix({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    // Focus the close button when the modal opens
    modalRef.current.focus();
  }, []);

  const closeModal = () => {
    onClose();
  };

  
  var id_user_n='';
  const [candidature, setCandidature] = useState([]);
  //const [id_user_n, setIdUser] = useState(null);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
    const token = tokenCookie ? tokenCookie.split('=')[1] : null;
    axios.get('http://localhost:3000/TestLogin?fieldName=token&fieldValue='+token)
            .then(response => {
              axios.get('http://localhost:3000/api/users/'+response.data)
                      .then(responseF => {
                        id_user_n = response.data;
                        fetchCandidature(id_user_n);
                        //alert(responseF.data)
                      })
                      .catch(error => {
                          console.error('Erreur lors de la récupération des options :', error);
                      });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des options :', error);
            });
    
  }, []);

  const fetchCandidature = async (id_user) => {
      try {
          const response = await fetch('http://localhost:3000/api/candidature/id_user/find?fieldName=id_user&fieldValue='+id_user);
          if (!response.ok) {
              throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setCandidature(jsonData);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-8 w-full max-w-[700px] max-h-[400px] relative"
      >
     
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <img src={user} className="h-8 mr-2" alt="User" />
            <p className="text-lg font-bold text-brown_palette">اسم المستخدم</p>
          </div>
          <button onClick={onClose} className="text-brown_palette">
            تسجيل الخروج
          </button>
        </div>
        <div className="flex justify-center items-center">
          {candidature.map(candidat => (
            <div className="flex flex-col items-center mr-8">
              <Link to="/home_each_profile">
                <img
                  src={user_out}
                  className="w-16 h-16 mb-2 transition-transform hover:scale-110"
                  alt="User Outlined"
                />
              </Link>
              <p className="text-sm text-fake_black">{candidat.nom}<br />{candidat.prenom}</p>
            </div>
          ))}
          <div className="flex flex-col items-center">
            <Link to="/candidature">
              <img
                src={Add}
                className="w-16 h-16 mb-2 transition-transform hover:scale-110"
                alt="Add"
              />
            </Link>
            <p className="text-sm text-brown_palette">تسجيل شخص آخر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
