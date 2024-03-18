import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel_01_01 from "../images/Hotelspic/hotel1.1.jpeg";
import hotel_01_02 from "../images/Hotelspic/hotel1.2.jpeg";
import hotel_01_03 from "../images/Hotelspic/hotel1.3.jpeg";
import hotel_01_04 from "../images/Hotelspic/hotel1.4.jpeg";
import hotel_01_05 from "../images/Hotelspic/hotel1.5.jpeg";
import hotel_01_06 from "../images/Hotelspic/hotel1.6.jpeg";
import hotel_01_07 from "../images/Hotelspic/hotel1.7.jpeg";
import hotel_01_08 from "../images/Hotelspic/hotel1.8.jpeg";
import hotel_01_09 from "../images/Hotelspic/hotel1.9.jpeg";

import hotel_02_01 from "../images/Hotelspic/hotel2.1.jpg";
import hotel_02_02 from "../images/Hotelspic/hotel2.2.jpg";
import hotel_02_03 from "../images/Hotelspic/hotel2.3.jpg";
import hotel_02_04 from "../images/Hotelspic/hotel2.4.jpg";
import hotel_02_05 from "../images/Hotelspic/hotel2.5.jpg";
import hotel_02_07 from "../images/Hotelspic/hotel2.7.jpg";
import hotel_02_08 from "../images/Hotelspic/hotel2.8.jpg";


import hotel_03_01 from "../images/Hotelspic/hotel3.1.jpg";
import hotel_03_02 from "../images/Hotelspic/hotel3.2.jpg";
import hotel_03_03 from "../images/Hotelspic/hotel3.3.jpg";
import hotel_03_04 from "../images/Hotelspic/hotel3.4.jpg";
import hotel_03_05 from "../images/Hotelspic/hotel3.5.jpg";




function ManassikSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const Manassik = [
    {
      name: "فندق ثري بوينتس",
      images: [hotel_01_09, hotel_01_08, hotel_01_07,hotel_01_06,hotel_01_05,hotel_01_04,hotel_01_03,hotel_01_02,hotel_01_01],
      distance: "1.7 كم من الحرم",
     prest_01: "غرفة قياسية توأم ",
     prest_02: "شامل الإفطار",
   
       
    },
    {
      name: "فندق سويس اوتيل ",
      images: [ hotel_02_08, hotel_02_07,hotel_02_05,hotel_02_04,hotel_02_03,hotel_02_02,hotel_02_01],
      distance: "2.4 كم من الحرم ",
     prest_01:"غرفة قياسية توأم " ,
     prest_02:  "شامل الإفطار",
    
    },
    {
      name: "فندق بركة برهان",
      images: [ hotel_03_05,hotel_03_04,hotel_03_03,hotel_03_02,hotel_03_01],
      distance:"متر من الحرم 250" ,
     prest_01:"غرفة قياسية توأم " ,
     prest_02:"لا حاجة لأي دفعة مسبق" , 
        
    },
    {
      name: "فندق ثري بوينتس",
      images: [hotel_01_09, hotel_01_08, hotel_01_07,hotel_01_06,hotel_01_05,hotel_01_04,hotel_01_03,hotel_01_02,hotel_01_01],
      distance: "1.7 كم من الحرم",
     prest_01: "غرفة قياسية توأم ",
     prest_02: "شامل الإفطار",
   
       
    },
    {
      name: "فندق سويس اوتيل ",
      images: [ hotel_02_08, hotel_02_07,hotel_02_05,hotel_02_04,hotel_02_03,hotel_02_02,hotel_02_01],
      distance: "2.4 كم من الحرم ",
     prest_01:"غرفة قياسية توأم " ,
     prest_02:  "شامل الإفطار",
    
    },
    {
      name: "فندق بركة برهان",
      images: [ hotel_03_05,hotel_03_04,hotel_03_03,hotel_03_02,hotel_03_01],
      distance:"متر من الحرم 250" ,
     prest_01:"غرفة قياسية توأم " ,
     prest_02:"لا حاجة لأي دفعة مسبق" , 
        
    },
    {
      name: "فندق ثري بوينتس",
      images: [hotel_01_09, hotel_01_08, hotel_01_07,hotel_01_06,hotel_01_05,hotel_01_04,hotel_01_03,hotel_01_02,hotel_01_01],
      distance: "1.7 كم من الحرم",
     prest_01: "غرفة قياسية توأم ",
     prest_02: "شامل الإفطار",
   
       
    },
    {
      name: "فندق سويس اوتيل ",
      images: [ hotel_02_08, hotel_02_07,hotel_02_05,hotel_02_04,hotel_02_03,hotel_02_02,hotel_02_01],
      distance: "2.4 كم من الحرم ",
     prest_01:"غرفة قياسية توأم " ,
     prest_02:  "شامل الإفطار",
    
    },
    {
      name: "فندق بركة برهان",
      images: [ hotel_03_05,hotel_03_04,hotel_03_03,hotel_03_02,hotel_03_01],
      distance:"متر من الحرم 250" ,
     prest_01:"غرفة قياسية توأم " ,
     prest_02:"لا حاجة لأي دفعة مسبق" , 
        
    },
    {
      name: "فندق ثري بوينتس",
      images: [hotel_01_09, hotel_01_08, hotel_01_07,hotel_01_06,hotel_01_05,hotel_01_04,hotel_01_03,hotel_01_02,hotel_01_01],
      distance: "1.7 كم من الحرم",
     prest_01: "غرفة قياسية توأم ",
     prest_02: "شامل الإفطار",
   
       
    },
    {
      name: "فندق سويس اوتيل ",
      images: [ hotel_02_08, hotel_02_07,hotel_02_05,hotel_02_04,hotel_02_03,hotel_02_02,hotel_02_01],
      distance: "2.4 كم من الحرم ",
     prest_01:"غرفة قياسية توأم " ,
     prest_02:  "شامل الإفطار",
    
    },
    {
      name: "فندق بركة برهان",
      images: [ hotel_03_05,hotel_03_04,hotel_03_03,hotel_03_02,hotel_03_01],
      distance:"متر من الحرم 250" ,
     prest_01:"غرفة قياسية توأم " ,
     prest_02:"لا حاجة لأي دفعة مسبق", 
        
    },
    {
      name: "فندق ثري بوينتس",
      images: [hotel_01_09, hotel_01_08, hotel_01_07,hotel_01_06,hotel_01_05,hotel_01_04,hotel_01_03,hotel_01_02,hotel_01_01],
      distance: "1.7 كم من الحرم",
     prest_01: "غرفة قياسية توأم ",
     prest_02: "شامل الإفطار",
   
       
    },
    {
      name: "فندق سويس اوتيل ",
      images: [ hotel_02_08, hotel_02_07,hotel_02_05,hotel_02_04,hotel_02_03,hotel_02_02,hotel_02_01],
      distance: "2.4 كم من الحرم ",
     prest_01:"غرفة قياسية توأم " ,
     prest_02:  "شامل الإفطار",
    
    },
    {
      name: "فندق بركة برهان",
      images: [ hotel_03_05,hotel_03_04,hotel_03_03,hotel_03_02,hotel_03_01],
      distance:"متر من الحرم 250" ,
     prest_01:"غرفة قياسية توأم " ,
     prest_02:"لا حاجة لأي دفعة مسبق" , 
        
    },
    
   
  ];

  return (
    <div dir="rtl" className="flex flex-col justify-center items-center text-right">
      <h2 className="text-3xl font-extrabold mt-10">اطلع حول عروضنا</h2>
      <div className="w-3/4 mx-auto mt-20">
        <Slider {...settings} className="slider">
          {Manassik.map((m, index) => (
            <div key={index} className="max-w-[250px] h-auto p-10 text-fake_black rounded-xl cursor-pointer shadow-md bg-taupe_palette">
              <div className="rounded-t-xl overflow-hidden">
                <Slider
                  dots={true}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={true} 

                >
                  {m.images.map((img, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={img} className="h-44 w-44 rounded-xl  focus:bg-none" alt={`Hotel ${index + 1} Image ${imgIndex + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex flex-col justify-center  p-2 gap-2 ">
                <p className="text font-semibold text-brown_palette">{m.name}</p>
                <p className="text-right">{m.distance}
                </p>
                <p className="text-right">{m.prest_01}
                </p>
                <p className="text-right">{m.prest_02}
                </p>
                <p className="text-right">{m.prest_03}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ManassikSlider;
