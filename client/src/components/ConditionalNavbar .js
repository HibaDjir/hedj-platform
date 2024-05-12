import React from 'react';

const ConditionalNavbar = ({ events }) => {
  const currentDate = new Date();

  const calculateRemainingTime = (eventDate) => {
    const remainingTime = new Date(eventDate) - currentDate;

    const remainingMonths = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
    const remainingWeeks = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 7));
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (remainingMonths > 1) {
      return `${remainingMonths} أشهر المتبقية`;
    } else if (remainingWeeks > 1) {
      return `${remainingWeeks} أسبوعًا متبقيًا`;
    } else if (remainingDays > 1) {
      return `${remainingDays} يومًا و ${remainingHours} ساعة متبقية`;
    } else if (remainingTime <= 0) {
      return "انتهت المرحلة";
    } else {
      return "أقل من يوم واحد متبقي";
    }
  };

  const shouldDisplayEvent = (eventName) => {
    const eventIndex = events.findIndex(event => event.name === eventName);
    if (eventIndex === -1) {
      return false;
    }
    if (eventName === 'تقديم الطلب') {
      return true;
    }
    const previousEventDate = new Date(events[eventIndex - 1].date);
    return previousEventDate.getTime() + (24 * 60 * 60 * 1000) < currentDate.getTime();
  };

  return (
    <nav dir='rtl' className=" flex justify-between items-center text-white  h-10 max-w-1240 mx-auto px-4 navbar bg-[#D8A353] bg-opacity-70">
      <div className="w-full flex  justify-around">
        {events.map((event, index) => (
          shouldDisplayEvent(event.name) &&
          <span key={index}>{event.name}: {calculateRemainingTime(event.date)}</span>
        
        )) }
      </div>
    </nav>
  );
};

export default ConditionalNavbar;
