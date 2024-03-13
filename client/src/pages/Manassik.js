import { ReactTyped } from "react-typed";
import ihram from "../images/NussukiPic/ihram.jpg";
import Tawaf_lng from "../images/NussukiPic/tawaf.jpg";
import Tawaf_el_qoudoum from "../images/NussukiPic/hudjadj_qadimouuun.jpg";
import sa3y_safa_marwa_01 from "../images/NussukiPic/sa3y_safa_marwa.jpg";
import sa3y_safa_marwa_02 from "../images/NussukiPic/sa3y_safa_marwa_02.jpg";
import djabal_aarafa from "../images/NussukiPic/djabal_aarafa.jpeg";
import djabal from "../images/NussukiPic/djabal.jpg";
function Manassik() {
  return (
    <div dir="rtl">
      <div className="w-full bg-white_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={ihram}
            alt="Tawaf_el_qoudoum"
          ></img>
          <div className="flex flex-col justify-center lg:col-span-2 mr-10">
            <p className="text-brown_palette font-bold">
              إحرام - بداية رحلة الحج
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              اللحظة الفاصلة التي تبدأ بها رحلة الحاج نحو بيت الله الحرام
            </h1>
            <p className="text-black_palette">
              إحرام هي البداية الرسمية لرحلة الحج، وهي اللحظة التي ينوي فيها
              الحاج البدء في أداء مناسك الحج. يلتزم الحاج بالإحرام من إحدى
              الميقات المحددة، ويكون ملبسًا بملابس الإحرام، ويتجنب بعض التصرفات
              المحددة، مع التوجه نحو بيت الله الحرام في مكة المكرمة. إحرام هو
              تعبير عن التواضع والانقطاع عن الدنيا الدنيئة، حيث يكون الحاج كمن
              يعيش في حالة طهارة واستعداد للوقوف أمام الله.
            </p>
            <ReactTyped
              strings={[
                'قال الله تعالى في سورة آل عمران (3:97): "فِيهِ آيَاتٌ بَيِّنَاتٌ مَّقَامُ إِبْرَٰهِيمَ وَمَن دَخَلَهُ كَانَ آمِنًا ۗ وَاللَّهُ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا ۚ وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ عَنِ الْعَالَمِينَ"',
                'عَنْ أَبِي هُرَيْرَةَ، قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: "العُمْرَةُ إِلَى العُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الجَنَّةُ" (رواه البخاري ومسلم).',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>

      <div className="w-full  bg-taupe_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">
              الطواف بالقدوم - بداية الحج والعمرة
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              تقرب إلى الله بأولى خطواتك حول الكعبة
            </h1>
            <p className="text-black_palette">
              الطواف بالقدوم هو الطواف الذي يؤديه الحاج أو المعتمر عند دخوله مكة
              المكرمة وبداية رحلته نحو بيت الله الحرام. يعبر الحاج بذلك عن حبه
              واحترامه لبيت الله، ويرمز إلى استعداده للالتزام بالمناسك. يُؤدي
              هذا الطواف بعد أداء الإحرام والدخول إلى حالة من الطهارة والإخلاص.
            </p>
            <ReactTyped
              strings={[
                'عن أبي هريرة، قال رسول الله صلى الله عليه وسلم: "مَنْ طَافَ بِالْبَيْتِ وَقَصَّرَ، ثُمَّ عَادَ إِلَيْهِ فَقَصَّرَ ثُمَّ عَادَ إِلَيْهِ فَقَصَّرَ، كَانَتْ صَلَاتُهُ مَعَ الْبَيْتِ فِي كُلِّ طَوَافٍ، غَنِيَّةً عَنِ الْعَلَمِ" (رواه مسلم).',
                'قال الله تعالى في سورة البقرة (2:158): "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>

          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={Tawaf_el_qoudoum}
            alt="ttawaf"
          ></img>
        </div>
      </div>

      <div className="w-full bg-white_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={sa3y_safa_marwa_01}
            alt="third roukn"
          ></img>
          <div className="flex flex-col justify-center ">
            <p className="text-brown_palette font-bold">
              الصفا والمروة - ركنان من أركان الحج والعمرة
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              تجسيد للسير في طاعة الله والبحث عن التوبة والمغفرة
            </h1>
            <p className="text-black_palette">
              الصفا والمروة هما تلتان من الجبال الصغيرة المشهورتين في مكة
              المكرمة وجزء أساسي من مناسك الحج والعمرة. يقوم الحاج أو المعتمر
              بالسير بينهما سبع مرات خلال الطواف، نسيانًا أصلهما في بناء البيت،
              وذلك استجابة لقصة هاجر وابنها إسماعيل عليهما السلام. السير بين
              الصفا والمروة يرمز إلى البحث عن التوبة والاستغفار.
            </p>
            <ReactTyped
              strings={[
                'قال الله تعالى في سورة البقرة (2:158): "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ ۖ فَمَنْ حَجَّ الْبَيْتَ أَوِ اعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا ۚ وَمَن تَطَوَّعَ خَيْرًا فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ"',
                'عن أبي هريرة، قال رسول الله صلى الله عليه وسلم: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ، رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ" (رواه البخاري ومسلم).',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>

      <div className="w-full  bg-taupe_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">
              الوقوف بعرفة: وقوف الحجاج في عرفة
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              الاستماع لدعوة الله وتجديد العهد في عرفة
            </h1>
            <p className="text-black_palette">
              الوقوف بعرفة هو أحد أهم المناسك في رحلة الحج، حيث يقوم الحجاج
              بالوقوف في هذا الموقع الشريف تلبية لدعوة الله واستجابة لأمره.
              يتوجه الحجاج إلى عرفة بقلوب متواضعة وخاشعة، يستشعرون خلال هذه
              اللحظات العظيمة قرب الله وعظمته. وفي هذا الوقت يتجدد العهد مع
              الله، ويقوم الحجاج بالدعاء والتضرع إليه بطلب المغفرة والرحمة.
            </p>
            <ReactTyped
              strings={[
                'قال الله تعالى في سورة آل عمران (3:97): "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا"',
                'وفي سورة البقرة (2:198): "وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَى كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>

          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={djabal_aarafa}
            alt="the third roukn"
          />
        </div>
      </div>

      <div className="w-full  bg-white_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={djabal}
            alt="the fourth roukn"
          ></img>
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">
              مُضَافَةٌ: التوجه من عرفة إلى مُضَافَةٍ
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              الرحلة المقدسة من عرفة إلى مُضَافَةٍ
            </h1>
            <p className="text-black_palette">
              بعد إتمام وقفة عرفة، يتوجه الحجاج في رحلة مقدسة نحو مُضَافَةٍ، وهي
              المكان الذي زاره النبي محمد صلى الله عليه وسلم بعد الوقوف في عرفة.
              يترتب على هذه الرحلة العديد من الفوائد والمعاني الروحية، حيث يذكر
              الحجاج ويتأملون في أهمية الطاعة والتقوى، ويستشعرون قربهم من الله
              واستجابته لدعائهم.
            </p>
            <ReactTyped
              strings={[
                "وفي هذه الرحلة، يتحلى الحجاج بروح الصبر والتفاؤل، مؤمنين بأن الله سيقبل منهم جهودهم وسيتقبل دعائهم. ومع اقترابهم من مُضَافَةٍ، يتعمقون في التفكير في عظمة الله وعظمة الحج، ويتضرعون إليه بقلوبٍ خاشعة ومتواضعة.",
                "هذه الرحلة هي فرصة للحجاج لتجديد العهد مع الله وتحديد الأهداف في حياتهم، والتفكير في كيفية تطبيق القيم الإسلامية في حياتهم اليومية. يعتبر هذا المرحلة من أهم المحطات في رحلة الحج، حيث يمكن للحجاج الاستفادة من اللحظات الهادئة والمتأملة لتعزيز إيمانهم وتوجيههم نحو الخير والبركة.",
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>

      <div className="w-full  bg-taupe_palette py-16 px-4 ">
  <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
    <div className="flex flex-col justify-center">
      <p className="text-brown_palette font-bold">
        رمي الجمر الصغير
      </p>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
        رمي الجمر وتذكير بتفاني إبراهيم عليه السلام
      </h1>
      <p className="text-black_palette">
        رمي الجمر الصغير هو إحدى مناسك الحج، حيث يقوم الحجاج برمي الجمر بحصى في مشعر منى تخليدًا للتفاني والطاعة الذي أظهره النبي إبراهيم عليه السلام عندما أمره الله بذبح ابنه إسماعيل. يذكر هذا الفعل العظيم الحجاج بالتضحية والتفاني في سبيل الله، ويجسد قوة الإيمان والطاعة.
      </p>
      <ReactTyped
        strings={[
          'قال الله تعالى في سورة الصافات (37:107): "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ"',
          'وفي سورة الصافات (37:102): "وَفَدَيْنَا عَلَيْهِ الذِّبْحَ الْعَظِيمَ"',
        ]}
        typeSpeed={200}
        backSpeed={10000}
        loop
      />
    </div>

    <img
      className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={sa3y_safa_marwa_02}
      alt="رمي الجمر الصغير"
    />
  </div>
</div>

    </div>
  );
}

export default Manassik;
