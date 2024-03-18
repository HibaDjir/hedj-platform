import { ReactTyped } from "react-typed";
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
import Navbar from "../components/Navbar";
function Manassik() {
  async function checkAuthentication() {
    try {
        // Retrieve token from localStorage
        const token = localStorage.getItem('token');

        // Check if token exists
        if (token) {
            // Import navbar-lgn if token exists
            const NavbarLgn = require('../components/NavbarLogin');
            return NavbarLgn;
        } else {
            // Import nav-bar if token does not exist
            const NavBar = require('../components/Navbar');
            return NavBar;
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
}checkAuthentication()
  return (
    <div dir="rtl">
      <Navbar />
      <div className="w-full bg-white_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={ihram}
            alt="first mansak"
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
              الطواف بالقدوم
              - بداية الحج والعمرة
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
              الصفا والمروة 
              - ركنان من أركان الحج والعمرة
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
              الوقوف بعرفة
              : وقوف الحجاج في عرفة
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
            <p className="text-brown_palette font-bold">رمي الجمر الصغير</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              رمي الجمر وتذكير بتفاني إبراهيم عليه السلام
            </h1>
            <p className="text-black_palette">
              رمي الجمر الصغير هو إحدى مناسك الحج، حيث يقوم الحجاج برمي الجمر
              بحصى في مشعر منى تخليدًا للتفاني والطاعة الذي أظهره النبي إبراهيم
              عليه السلام عندما أمره الله بذبح ابنه إسماعيل. يذكر هذا الفعل
              العظيم الحجاج بالتضحية والتفاني في سبيل الله، ويجسد قوة الإيمان
              والطاعة.
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

      <div className="w-full  bg-white_palette py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={Tawaf_el_qoudoum}
            alt="ذبح الهدي"
          />
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">ذبح الهدي</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              تقديم الشكر والتضحية في سبيل الله
            </h1>
            <p className="text-black_palette">
              ذبح الهدي هو مناسك الحج التي تتضمن تقديم التضحية والشكر لله تعالى.
              يُقدم الحجاج في هذه اللحظة تضحية بحيوان من الأنعام مثل الأغنام أو
              الأبقار، وذلك تقربًا لله ولنيل رضاه. يعتبر ذبح الهدي تعبيرًا عن
              التضحية والإيمان العميق بأوامر الله واستعداداً للتضحية في سبيله.
            </p>
            <ReactTyped
              strings={[
                'قال الله تعالى في سورة الكوثر (108:2): "فَصَلِّ لِرَبِّكَ وَانْحَرْ"',
                'وفي سورة الحج (22:37): "لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا وَلَٰكِن يَنَالُهُ التَّقْوَىٰ مِنكُمْ"',
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
            <p className="text-brown_palette font-bold">حلق الشعر أو قصه</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-black_palette py-2">
              الانتقال إلى حالة الإحرام الكاملة
            </h1>
            <p className="text-black_palette">
              حلق الشعر أو قصه هو إحدى مناسك الحج التي تتضمن قص شعر رأس الحاج أو
              المعتمر. يقوم الحاج أو المعتمر بهذه العملية كجزء من الاستعداد للحج
              والدخول في حالة الإحرام الكاملة. يعتبر حلق الشعر أو قصه تعبيرًا عن
              التواضع والاستعداد للقاء الله بحالة من الطهارة والإخلاص.
            </p>
            <ReactTyped
              strings={[
                'عن أبي هريرة، قال رسول الله صلى الله عليه وسلم: "مَنْ حلق أو قصَّر فليتم حجَّه وإليه حجُّ الإفراد"',
                'وفي سورة البقرة (2:196): "فَمَن كَانَ مِنكُم مَّرِيضًا أَو بِهِ أَذًى مِّن رَّأْسِهِ فَفِدْيَةٌ مِّن صِيَامٍ أَو صَدَقَةٍ أَو نُسُكٍ"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>

          <img
            className="w-[500px] mx-auto my-4  border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={bold_guy}
            alt="حلق الشعر أو قصه"
          />
        </div>
      </div>

      <div className="w-full bg-white_palette py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <img
            className="w-[500px] mx-auto my-4 border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={Tawaf_lng}
            alt="الطواف بالإفاضة"
          />
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">الطواف بالإفاضة</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black_palette py-2">
              الانتقال إلى حالة الإحرام الكاملة
            </h1>
            <p className="text-black_palette">
              الطواف بالإفاضة هو مناسك الحج يوم الثاني من أيام التشريق، حيث يقوم
              الحجاج بالطواف حول الكعبة الشريفة بعد الانتهاء من مناسك الوقوف في
              عرفة ورمي الجمر والذبح وحلق الشعر أو قصه. يعتبر هذا الطواف من أهم
              مناسك الحج، حيث يتم فيه استكمال الطواف الأول والتقرب إلى الله
              بحالة من الطهارة والإخلاص.
            </p>
            <ReactTyped
              strings={[
                'عن أبي هريرة، قال رسول الله صلى الله عليه وسلم: "مَنْ حلق أو قصَّر فليتم حجَّه وإليه حجُّ الإفراد"',
                'وفي سورة البقرة (2:196): "فَمَن كَانَ مِنكُم مَّرِيضًا أَو بِهِ أَذًى مِّن رَّأْسِهِ فَفِدْيَةٌ مِّن صِيَامٍ أَو صَدَقَةٍ أَو نُسُكٍ"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-taupe_palette py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">رمي الجمار الكبير</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black_palette py-2">
              تأدية مناسك الحج بتقوى واستعداد للتغيير
            </h1>
            <p className="text-black_palette">
              رمي الجمار الكبير هو أحد مناسك الحج يوم الثاني عشر من شهر ذو
              الحجة، حيث يقوم الحجاج برمي الجمر الكبير بالحصى السبع مرات، وذلك
              تأديةً لأمر الله تعالى وتقرباً إليه. يعتبر هذا الفعل رمزًا لرفض
              الشيطان وتقوية الإيمان والاستعداد للتغيير والتجديد.
            </p>
            <ReactTyped
              strings={[
                'يقول الله تعالى في القرآن الكريم: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"',
                'وفي الحديث الشريف عن أبي هريرة رضي الله عنه قال: "قال رسول الله صلى الله عليه وسلم: فما من يوم أكثر من أن يعتق الله فيه عبدا من النار من يوم عرفة، وإنه ليدنو ثم يباهي بهم الملائكة فيقول: ما أراد هؤلاء"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>

          <img
            className="w-[500px] mx-auto my-4 border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={sa3y_safa_marwa_02}
            alt="رمي الجمار الكبير"
          />
        </div>
      </div>

      <div className="w-full bg-white_palette py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <img
            className="w-[500px] mx-auto my-4 border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={Tawaf}
            alt="الطواف الوداع"
          />
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">الطواف الوداع</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black_palette py-2">
              توديع بيت الله بالدعاء والتضرع
            </h1>
            <p className="text-black_palette">
              الطواف الوداع هو الطواف الأخير الذي يقوم به الحاج أو المعتمر قبل
              مغادرته مكة المكرمة. يعتبر هذا الطواف فرصة للتوديع والوداع مع بيت
              الله الحرام، حيث يتوجه المؤمن بالدعاء والتضرع لله تعالى ويطلب منه
              المغفرة والرحمة والبركة في رحلته العودة.
            </p>
            <ReactTyped
              strings={[
                "في هذه اللحظة يسأل المؤمن الله أن يقبل منه حجه وعمرته، وأن يعيده سالماً إلى أهله ومحبيه.",
                "ويقول الحاج في قلبه وداعاً لبيت الله الحرام مؤمناً بأن الله قد قبل منه عبادته وتوبته، وأنه سيعود إلى هذا المكان المبارك إن شاء الله.",
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-taupe_palette py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">قضاء يوم التروية</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black_palette py-2">
              التفكير والتأمل في معاني الحج
            </h1>
            <p className="text-black_palette">
              يوم التروية هو اليوم الذي يقضيه الحجاج في مشعر منى قبل يوم عيد
              الأضحى. يعتبر هذا اليوم فرصة للتفكير والتأمل في معاني الحج وأهميته
              في الحياة الإسلامية. يقضي الحجاج يوم التروية بالتضرع والدعاء إلى
              الله تعالى وتقديم الطاعات والتوبة من الذنوب.
            </p>
            <ReactTyped
              strings={[
                "في هذا اليوم، يسعى الحجاج لتحقيق أهداف الحج من التواضع والتقوى وتقديم الخير للآخرين.",
                'وفي هذا السياق، قال النبي محمد صلى الله عليه وسلم: "ما من يوم أكثر من أن يعتق الله فيه عبداً من النار من يوم عرفة، وإنه ليدنو ثم يباهي بهم الملائكة فيقول: ما أراد هؤلاء".',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>

          <img
            className="w-[500px] mx-auto my-4 border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={sa3y_safa_marwa_01}
            alt="قضاء يوم التروية"
          />
        </div>
      </div>
      <div className="w-full bg-white_palette py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 w-full">
          <img
            className="w-[500px] mx-auto my-4 border rounded-3xl border-gray-300 shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={LastTawaf}
            alt="الطواف السنة"
          />
          <div className="flex flex-col justify-center">
            <p className="text-brown_palette font-bold">الطواف السنة</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-black_palette py-2">
              تعبير عن التواضع والتقرب من الله
            </h1>
            <p className="text-black_palette">
              الطواف السنة هو الطواف الذي يؤديه الحاج أو المعتمر بعد أداء الطواف
              الأول بالقدوم والطواف الوداع. يتميز هذا الطواف بأنه سنة مؤكدة عن
              النبي صلى الله عليه وسلم، ويعتبر تعبيراً عن التواضع والتقرب من
              الله تعالى. يتمثل هذا الفعل في دورة حول الكعبة الشريفة سبع مرات،
              حيث يبتعد الحاج عن الشهوات ويذكر الله في هذا العمل العظيم.
            </p>
            <ReactTyped
              strings={[
                'يقول الله تعالى في القرآن الكريم: "وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"',
                'وفي الحديث الشريف عن أبي هريرة رضي الله عنه قال: "قال رسول الله صلى الله عليه وسلم: فما من يوم أكثر من أن يعتق الله فيه عبدا من النار من يوم عرفة، وإنه ليدنو ثم يباهي بهم الملائكة فيقول: ما أراد هؤلاء"',
              ]}
              typeSpeed={200}
              backSpeed={10000}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manassik;
