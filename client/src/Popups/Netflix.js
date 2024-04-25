import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import user from "../images/User.png";
import user_out from "../images/User_outlined.png";
import Add from "../images/Untitled.png";

function Netflix({ onClose }) {
  const modalRef = useRef();

  useEffect(() => {
    // Focus the close button when the modal opens
    modalRef.current.focus();
  }, []);

  const closeModal = () => {
    onClose();
  };

  

  const [candidature, setCandidature] = useState([]);

  useEffect(() => {
      fetchCandidature();
  }, []);

  const fetchCandidature = async () => {
      try {
          const response = await fetch('http://localhost:3000/api/candidature/');
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
