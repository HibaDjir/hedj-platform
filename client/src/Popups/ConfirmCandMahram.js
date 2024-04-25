import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ConfirmCandidMahram({ onClose }) {
  const modalRef = useRef();
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const handleConfirm = () => {
    navigate("/candidature");
  };


  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[9999] bg-fixed flex justify-center items-center"
     
    >
      <div className="mt-10 flex flex-col gap-5 text-whiteb bg-transparent rounded-2xl">
        <div className="flex flex-col justify-center items-center py-16 px-4 mx-auto w-auto rounded-2xl bg-black bg-opacity-50 backdrop-blur-sm">
          <h1 className="text-white bold text-3xl mb-10 flex justify-center ">
            هل أنت متأكد من جميع البيانات ؟
          </h1>

          <div className="flex justify-between w-full">
            <button
              type="button"
              className="bg-white_palette text-fake_black hover:bg-taupe_palette p-2 rounded-2xl w-full mt-2 ml-5"
              onClick={onClose}
            >
              تغيير
            </button>

            <button
              type="button"
              className="bg-[#D4A373] text-fake_black hover:bg-[#AD7946] p-2 rounded-2xl w-full mt-2"
              onClick={handleConfirm}
            >
              تأكيد
            </button>
          </div>
          <p className="text-xl font-semibold text-brown_palette mt-5">
            لا ينكنك تغيير البيانات بعد التأكيد.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmCandidMahram;
