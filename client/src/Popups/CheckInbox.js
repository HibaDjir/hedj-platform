import React, { useRef, useState } from "react";
import Select from "react-select";
import { MdMarkEmailRead } from "react-icons/md";
function AddMed({ onClose }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.15rem",
      borderRadius: "0.5rem",
      width: "100%",
    }),
  };

  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-[9999] bg-fixed  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="items-center text-center  py-16 px-7 mx-auto w-[400px] h-[300px] rounded-3xl bg-[#ebeae7]">
        <div className="  ">
        <MdMarkEmailRead className="h-9 w-9"/>

 <h3> Check your Inbox !</h3>

 </div>
      </div>
    </div>
  );
}

export default AddMed;
