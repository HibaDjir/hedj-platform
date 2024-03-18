import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ihram from "../images/NussukiPic/ihram.jpg";
import Tawaf_lng from "../images/NussukiPic/tawaf.jpg";
import Tawaf_el_qoudoum from "../images/NussukiPic/hudjadj_qadimouuun.jpg";
import sa3y_safa_marwa_01 from "../images/NussukiPic/sa3y_safa_marwa.jpg";
import sa3y_safa_marwa_02 from "../images/NussukiPic/sa3y_safa_marwa_02.jpg";
import djabal_aarafa from "../images/NussukiPic/djabal_aarafa.jpeg";
import djabal from "../images/NussukiPic/djabal.jpg";
import bold_guy from "../images/NussukiPic/bold-guy.jpg";
import Tawaf from "../images/NussukiPic/tawaf_01.jpg";
import LastTawaf from "../images/NussukiPic/tawaf_02.jpg";

function ManassikSlider() {
  var settings = {
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Manassik = [
    {
      name: "إحرام",
      img: ihram,
      review:
        "اللحظة التي ينوي فيها الحاج البدء في أداء مناسك الحج",
    },
    {
      name: "الطواف بالقدوم",
      img: Tawaf_el_qoudoum,
      review:
        "بداية رحلته نحو بيت الله الحرام",
    },
    {
      name: " الصفا والمروة",
      img: sa3y_safa_marwa_01,
      review: "  تجسيد للسير في طاعة الله والبحث عن التوبة والمغفرة",
    },
    {
      name: " الوقوف بعرفة",
      img: djabal_aarafa,
      review:
        "يقوم الحجاج بالوقوف في هذا الموقع الشريف تلبية لدعوة الله واستجابة لأمره",
    },
    {
      name: "رمي الجمر ",
      img: sa3y_safa_marwa_02,
      review: "رمي الجمر وتذكير بتفاني إبراهيم عليه السلام",
    },
    {
      name: "ذبح الهدي",
      img: Tawaf_el_qoudoum,
      review: "تقديم الشكر والتضحية في سبيل الله",
    },
    ,
    {
      name: "حلق الشعر أو قصه",
      img: bold_guy,
      review: " الانتقال إلى حالة الإحرام الكاملة",
    },
    ,
    {
      name: "الطواف بالإفاضة",
      img: Tawaf_lng,
      review: "يتم فيه استكمال الطواف الأول والتقرب إلى الله بحالة من الطهارة والإخلاص",
    },
    ,
    {
      name: "رمي الجمار الكبير",
      img: sa3y_safa_marwa_02,
      review: "تأدية مناسك الحج بتقوى واستعداد للتغيير",
    },
    ,
    {
      name: "الطواف الوداع",
      img:Tawaf,
      review: "توديع بيت الله بالدعاء والتضرع",
    },
    ,
    {
      name: "قضاء يوم التروية",
      img: sa3y_safa_marwa_01,
      review: "التفكير والتأمل في معاني الحج",
    },

    {
      name: "الطواف السنة",
      img:LastTawaf,
      review: "تعبير عن التواضع والتقرب من الله",
    },
  ];
  return (
    <div dir="rtl" className=" flex flex-col justify-center items-center text-right">
    <h2 className="text-3xl font-extrabold mt-10">مناسك الحج</h2>
    <div className="w-3/4 mx-auto mt-20">
    <Slider {...settings} className="slider">
      {Manassik.map((m, index) => (
    
        <div key={index} className=" flex flex-col justify-center items-center max-w-[250px]  h-[400px] p-10 text-fake_black rounded-xl cursor-pointer  shadow-md bg-taupe_palette">
          <div className="rounded-t-xl flex justify-center items-center">
            <img src={m.img} className="h-44 w-44 rounded-xl shadow-lg" alt={m.name} />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <p className="text font-semibold text-brown_palette">{m.name}</p> 
            <p>{m.review}</p>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  </div>
  
  );
  
}

export default ManassikSlider;
