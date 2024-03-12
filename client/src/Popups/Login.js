import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Modal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current == e.target) {
      onClose();
    }
  };
  return (
    <div
   
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex flex-col gap-5 text-whiteb bg-transparent rounded-2xl">
        

        <div className="flex flex-col justify-center py-16 px-4 mx-auto w-[400px]  rounded-2xl bg-[#F2EBDF]   ">
          <p className="text-fake_black bold text-3xl mb-10 flex justify-center ">
            تسجيل الدخول
          </p>
          <form className="signup-form">
            <label className=" text-fake_black mb-2" for="email ">
              البريد اللإلكترون{" "}
            </label>
            <input
              className="text-black mb-2  mt-2  p-2 border  rounded-2xl w-full"
              type="email"
              placeholder="البريد اللإلكتروني"
              required
            />

            <label className="text-fake_black mb-2 " htmlFor="password">
              كلمة السر
            </label>

            <input
              className="text-black mb-2  mt-2  p-2 border  rounded-2xl w-full"
              type="password"
              placeholder="كلمة السر"
              required
            />

            <button
              type="submit"
              className="bg-[#D4A373] text-white hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2 "
            >
              <Link to="/home">تأكيد</Link>
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}

export default Modal;
