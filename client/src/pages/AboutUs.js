import React from "react";

function AboutUs() {
  return (
    <div dir="rtl" className=" flex flex-col justify-center items-center ">
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
    </div>
  );
}

export default AboutUs;
