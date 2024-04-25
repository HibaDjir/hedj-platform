import React from "react";
import { useState } from "react";
import heroBg from "../images/houdjadjes.jpeg";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Herolgin() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };
  return (
    <div
      dir="rtl "
      className="w-full h-[87vh] mx-auto  text-right flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="flex flex-col justify-center items-center text-white mt-20">
        <h1 className="text-5xl text-wrap font-bold ">23:57</h1>
        <p className="text-3xl">الأربعاء، 3 رمضان 1445 هـ</p>
        <p  className="text-3xl">الموافق 13 مارس 2024 م</p>
        {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
      </div>
    </div>
  );
}

export default Herolgin;
