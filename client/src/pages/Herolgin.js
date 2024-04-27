import React, { useState, useEffect } from "react";
import "moment/locale/ar";
import "moment/locale/fr"; // Import French locale
import "moment-hijri";
import moment from "moment";

import heroBg from "../images/houdjadjes.jpeg";
const hijriMonthNames = [
  "محرّم", "صفر", "ربيع الأول", "ربيع الثاني", "جمادى الأولى", "جمادى الآخرة",
  "رجب", "شعبان", "رمضان", "شوّال", "ذو القعدة", "ذو الحجة"
];
function Herolgin() {
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

  // Set moment locale to Arabic for Gregorian and Hijri dates
  moment.locale("ar");



  // actually this is just showing the date in arabic not in hijri 
  const hijriDayOfWeek = moment(currentHijriDate, "iYYYY/iM/iD").format("dddd");
  const hijriDay = currentGregorianDate.format("D");
  const hijriMonth = moment(currentHijriDate, "iYYYY/iM/iD").format("MMMM");
  const hijriYear =currentGregorianDate.format("YYYY");

  // Set moment locale to French for time
  moment.locale("fr");

  // Format current time
  const currentTime = currentGregorianDate.format("HH:mm:ss");

  return (
    <div
      dir="rtl"
      className="w-full h-[87vh] mx-auto text-right flex flex-col justify-center bg-cover bg-center cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
      }}
    >
      <div className="flex flex-col justify-center items-center px-10 py-10 rounded-md gap-4">
  <div className="bg-gray px-4 rounded-md">

    <p className="text-4xl text-fake_black flex justify-center">{currentTime}</p>
 
    
    <p className="text-2xl text-fake_black">{`${hijriDayOfWeek}, ${hijriDay} ${hijriMonth} ${hijriYear}`}</p>
  </div>
</div>

      </div>
   
  );
}

export default Herolgin;
