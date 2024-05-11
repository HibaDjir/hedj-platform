import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero  from './Herolgin';
import Navbar from '../components/Navbar_for_each_profile';
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


function Home_each_profile() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  

  const hotels = [
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
  const initialContent = [
    {
      question: "هل يمكنني تسجيل زوجتي وأطفالي في الحج بحساب واحد؟",
      answer:
        "نعم، يمكنك ذلك. يتيح مدير الملف الخاص بنا للمستخدمين إضافة عدة مرشحين.",
    },
    {
      question: "أنا امرأة، هل يمكنني التسجيل لأداء الحج؟",
      answer:
        "يمكنك التسجيل على منصتنا، ولكن للحصول على فرصة أكبر للفوز بالقرعة، يجب أن يكون لديك محرم ليصحبك.",
    },
    {
      question: "كيف يمكنني التأكد من أنني سأكون محظوظًا بالفوز في القرعة لأداء الحج؟",
      answer:
        "تقدم منصتنا عبر الإنترنت خوارزميات مختلفة تعالج طلباتكم واحدة تلو الأخرى باستخدام معايير اختيار محددة بعناية، لتوفير فرصة للجميع لأداء الحج.",
    },

    {
      question: "ما هي الخطوات التي يجب اتباعها أثناء أداء الحج؟",
      answer:
        "يمكنكم الاطلاع على صفحة المناسك في شريط البحث التي ستشرح لكم خطوة بخطوة الأعمال الاثني عشر التي يجب القيام بها خلال هذه الفعالية الدينية، مدعومة بالآيات القرآنية والأحاديث النبوية.",
    },

    {
      question: "ماذا أفعل إذا واجهت مشكلة عند الوصول؟",
      answer: "يمكنكم التواصل معنا في أي وقت.",
    },
    {
      question: "ما هي المستندات المطلوبة لاستكمال طلبي؟",
      answer:
        "بمجرد التسجيل في موقعنا، يمكنك الوصول إلى ملفك الشخصي لملء نموذج الطلب، وسنتأكد من إرسال بريد إلكتروني لكم فورًا بعد القرعة لتوضيح الوثائق التي يجب إضافتها إلى الملف.",
    },
  ];

  const [expandState, setExpandState] = useState(Array(initialContent.length).fill(false));

  const toggleExpand = (index) => {
    const newExpandState = [...expandState];
    newExpandState[index] = !newExpandState[index];
    setExpandState(newExpandState);
  };
  return (
  <div  className='w-full h-full flex flex-col justify-center items-center bg-white_palette'>
    <Navbar />
    <Hero/>
    <section dir ="rtl" id='hotel-slider' className='w-full h-screen flex flex-col justify-center items-center  '>
    <h2 className="text-3xl font-extrabold mt-10">اطلع حول عروضنا</h2>
      <div className="w-3/4 mx-auto mt-20  ">
        <Slider {...settings} className="slider">
          {hotels.map((m, index) => (
            <div key={index} className="mx-auto max-w-[250px] h-[400px] text-fake_black rounded-xl cursor-pointer shadow-md bg-taupe_palette ">
              <div className=" p-8 mx-auto overflow-hidden">
                <Slider
                  dots={false}
                  infinite={true}
                  speed={300}
                  slidesToShow={1}
                  slidesToScroll={1}
                  arrows={false} >
                  {m.images.map((img, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={img} className=" h-44 w-44 rounded-xl  items-center  focus:bg-none" alt={`Hotel ${index + 1} Image ${imgIndex + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex flex-col justify-center items-center  p-1 gap-2 ">
                <p className="text font-semibold text-brown_palette mb-2">{m.name}</p>
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
    </section>
    

    <section id='manassik_slider' className='w-full h-screen flex flex-col justify-center items-center text-right '>
  <h2 className="text-3xl font-extrabold mt-10">مناسك الحج</h2>
  <div className="w-3/4 mx-auto mt-20">
    <Slider {...settings} className="slider " >
      {Manassik.map((m, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="max-w-[250px] h-[350px] text-fake_black rounded-xl cursor-pointer shadow-md bg-taupe_palette pt-4">
            <div className="rounded-t-xl flex justify-center items-center">
              <img src={m.img} className="h-44 w-44 rounded-xl shadow-lg" alt={m.name} />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className="text font-semibold text-brown_palette">{m.name}</p> 
              <p>{m.review}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

    <section id='about_us' className='max-w-[1240px] h-screen flex flex-col justify-center items-center text-right '>
    <h2 className="text-3xl font-extrabold mt-10 mb-10">من نحن ؟</h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
        <div className="flex flex-col justify-center rounded-2xl shadow-lg p-2 gap-5 bg-taupe_palette m-5 ">
          {" "}
          <p className=" text-xl">
            مرحبًا بكم في لبيك ، المكان المخصص لأولئك الذين ينطلقون في رحلة الحج
            الروحية. وُلدت منصتنا من التفاني العميق لتسهيل وتحسين تجربة هذه
            الرحلة المقدسة. في [اسم موقعك]، نؤمن بتعزيز التضمين والشفافية
            والتفاني طوال العملية بأكملها. مهمتنا هي توفير فرصة ميسرة وعادلة
            للأفراد الذين يسعون لخوض رحلة الحج الرائعة.
          </p >
        </div>
        <div className="flex flex-col justify-center rounded-2xl shadow-lg p-2 gap-5 bg-taupe_palette  m-5">
        <p className=" text-xl">
            ما يميزنا هو نهجنا الدقيق في عملية اختيار المشاركين. من خلال نموذج
            تسجيل مصمم بعناية، تليه سحب شفاف بناءً على شروط ومعايير محددة، نسعى
            لضمان أن لدى كل راغب فرصة متساوية. ينتقل الذين يحظون بالفوز في السحب
            إلى الخطوة التالية، حيث يتم إجراء فحص طبي شامل، بإشراف محترفين ذوي
            خبرة، لتأكيد جاهزيتهم لهذه الرحلة الروحية.
          </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
        <div className="flex flex-col justify-center rounded-2xl shadow-lg p-2 gap-5 bg-taupe_palette  m-5">
        <p className=" text-xl">
            في [اسم موقعك]، نحن أكثر من مجرد منصة؛ نحن مجتمع يربطنا التفاني
            المشترك لرحلة الحج المقدسة. انضم إلينا حيث نقوم بإنشاء فضاء يعزز
            الوحدة والروحانية والهدف لجميع الذين يسعون للانطلاق في هذه الرحلة
            الرائعة."
          </p>
        </div>
        <div className="flex flex-col justify-center rounded-2xl shadow-lg p-2 gap-5 bg-taupe_palette  m-5">
        <p className=" text-xl">
            مرحبًا بكم في لبيك ، المكان المخصص لأولئك الذين ينطلقون في رحلة الحج
            الروحية. وُلدت منصتنا من التفاني العميق لتسهيل وتحسين تجربة هذه
            الرحلة المقدسة. في [اسم موقعك]، نؤمن بتعزيز التضمين والشفافية
            والتفاني طوال العملية بأكملها. مهمتنا هي توفير فرصة ميسرة وعادلة
            للأفراد الذين يسعون لخوض رحلة الحج الرائعة.
          </p>
        </div>
      </div>
    </section>
    
    <section id='FAQ' className='w-full h-screen flex flex-col justify-center items-center text-right  bg-taupe_palette'>
    <h2 className="text-3xl font-extrabold mt-10 mb-10">أكثر الأسئلة المتداولة</h2>
      <div className="max-w-[1240px] w-full px-4 flex flex-col justify-center">
        {initialContent.map((item, index) => (
          <div key={index} className="w-full  mx-auto mb-4">
            <div className="rounded-3xl bg-brown_palette">
              <div className="p-4 text-xl relative font-medium">
                <div>{item.question}</div>
                <button
                  className="text-xl absolute bottom-0 left-0 p-4"
                  aria-label="question-expander"
                  onClick={() => toggleExpand(index)}
                >
                  {expandState[index] ? (
                    <FontAwesomeIcon icon={faChevronUp} className="w-5" />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} className="w-5" />
                  )}
                </button>
              </div>
              <div className={expandState[index] ? "p-4 bg-brown_palette rounded-b-3xl" : "hidden"}>
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Home_each_profile