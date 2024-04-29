import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FAQ() {
  const initialContent = [
    {
      question: "هل يمكنني تسجيل زوجتي وأطفالي في الحج بحساب واحد؟",
      answer:
        "نعم، يمكنك ذلك. يتيح مدير الملف الخاص بنا للمستخدمين إضافة عدة مرشحين.",
    },
    {
      question: "أنا امرأة،كيف يمكنني التسجيل لأداء الحج؟",
      answer:
        "يمكنك التسجيل على منصتنا، ولكن  يجب تسجيل  محرم ليصحبك.",
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
    <div dir="rtl" className="w-full  flex flex-col justify-center items-center">
      <h2 className="text-3xl font-extrabold mt-10 mb-10">أكثر الأسئلة المتداولة</h2>
      <div className="max-w-[1240px]  flex flex-wrap justify-center ">
        {initialContent.map((item, index) => (
          <div key={index} className="mx-auto mb-4 w-full md:w-5/12">
            <div className="rounded-3xl bg-taupe_palette">
              <div className="p-4 text-xl relative font-medium ">
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
    </div>
  );
}

export default FAQ;