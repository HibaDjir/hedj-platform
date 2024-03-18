import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import berra from "../images/log-in.png";
import user from "../images/User.png";
import user_out from "../images/User_outlined.png";
import Add from "../images/Untitled.png";
function Netflix({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      dir="rtl"
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center n"
    >
      <div className="flex flex-col justify-center py-8 px-4 mx-auto w-[600px] h-auto rounded-2xl bg-[#F4EFE7]">
        <div className="flex justify-between ">
          <div className="flex justify-center items-center">
            <img
              src={berra}
              className="h-[40px] w-[40px] ml-2 transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            <p className=" text-brown_palette">تسجيل الخروج</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex flex-col text-right ml-2">
              <p className=" text-fake_black">إسم المستخدم</p>
              <p className=" text-brown_palette"> معلوممات الحساب</p>
            </div>
            <img src={user} className="h-[50px] w-[50px]" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">

        <div className="flex flex-col justify-center items-center ml-4">
            <Link to="/candidature">
              <img
                src={user_out}
                className="h-[60px] w-[60px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                alt="Add"
              />
            </Link>
            <p className=" text-fake_black"> الإسم و اللقب</p>

          </div>


          <div className="flex flex-col justify-center items-center">
            <Link to="/candidature">
              <img
                src={Add}
                className="h-[60px] w-[60px] transition-transform duration-500 ease-in-out transform hover:scale-110"
                alt="Add"
              />
            </Link>
            <p className=" text-brown_palette "> تسجيل شخص آخر</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Netflix;
