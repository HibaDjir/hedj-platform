
import React, { useState, useEffect } from "react";
import "moment/locale/ar";
import "moment/locale/fr"; // Import French locale
import "moment-hijri";
import moment from "moment";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

import heroBg from "../images/houdjadjes.jpeg";
import heroBg_01 from "../images/serqa_nussuki_01.jpg";
import heroBg_02 from "../images/serqa_nussuki_02.jpg";


function Herolgin() {
  const hijriMonthNames = [
    "محرّم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوّال",
    "ذو القعدة",
    "ذو الحجة",
  ];
  const [currentGregorianDate, setCurrentGregorianDate] = useState(moment());
  const [currentHijriDate, setCurrentHijriDate] = useState(
    moment().format("iYYYY/iM/iD")
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGregorianDate(moment());
      setCurrentHijriDate(moment().format("iYYYY/iM/iD"));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Set moment locale to Arabic for Hijri date
  moment.locale("ar");
// actually this is just showing the date in arabic not in hijri
const hijriDayOfWeek = moment(currentHijriDate, "iYYYY/iM/iD").format("dddd");
const hijriDay = currentGregorianDate.format("D");
const hijriMonth = moment(currentHijriDate, "iYYYY/iM/iD").format("MMMM");
const hijriYear = currentGregorianDate.format("YYYY");
  // Set moment locale to French for Gregorian date
  moment.locale("fr");
  const currentTime = currentGregorianDate.format("HH:mm:ss");

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div
      dir="rtl"
      className="w-full h-[87vh] mx-auto text-right flex flex-col justify-center bg-cover bg-center cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg_01})`,
      }}
    >
      <div className="flex flex-col justify-center items-center px-10 py-10 rounded-md gap-4">
        <div className="bg-gray px-4 rounded-md">
          <h1 className="text-4xl text-white flex justify-center">
            {currentTime}
          </h1>
          <p className="text-2xl text-white">{`${hijriDayOfWeek}, ${hijriDay} ${hijriMonth} ${hijriYear}`}</p>
        </div>
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