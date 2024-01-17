import React, { useEffect, useState } from "react";
import "./Features.css";
import arrow_R from "../../../assets/Main-page/arrow-right.svg";
import Slider from "react-slick";
import frame1 from "../../../assets/Main-page/Frame 1.png";
import frame2 from "../../../assets/Main-page/Frame 2.png";
import frame3 from "../../../assets/Main-page/Frame 3.png";

export default function Features() {
   const [value, setValue] = useState(1);
   useEffect(() => {
      const interval = setInterval(() => {
         setValue((prevValue) => (prevValue === 3 ? 1 : prevValue + 1));
      }, 2000); // Changes state every 2 seconds

      // Clear the interval when the component unmounts or before setting a new interval
      return () => clearInterval(interval);
   }, []);
   const handleValueSlider = () => {
      if (value != 3)
         setValue((prevState) => {
            return prevState + 1;
         });
      else {
         setValue(1);
      }
   };
   const handleValue1 = () => {
      setValue(1);
   };
   const handleValue2 = () => {
      setValue(2);
   };
   const handleValue3 = () => {
      setValue(3);
   };
   return (
      <section className="Features">
         <div className="title">
            <h2>المنصة العربية الأولى</h2>
            <p>المصممة خصيصاً لتحسين محركات البحث SEO وزيادة زيارات موقعك</p>
         </div>
         <div className="row justify-content-center Features-Main">
            <div className="col-lg-5 col-md-10 col-sm-10 slider">
               <div className="row ">
                  <div
                     className={
                        value == 1
                           ? "slider-img-fix col-lg-6 col-md-6 col-sm-6"
                           : "slider-img-fix col-lg-3 col-md-3 col-sm-3"
                     }
                  >
                     <div className="slider-img1"></div>
                     {/* <img src={frame1} alt="" /> */}
                  </div>
                  <div
                     className={
                        value == 2
                           ? "slider-img-fix col-lg-6 col-md-6 col-sm-6"
                           : "slider-img-fix col-lg-3 col-md-3 col-sm-3"
                     }
                  >
                     <div className="slider-img2"></div>
                     {/* <img src={frame2} alt="" /> */}
                  </div>
                  <div
                     className={
                        value == 3
                           ? "slider-img-fix col-lg-6 col-md-6 col-sm-6"
                           : "slider-img-fix col-lg-3 col-md-3 col-sm-3"
                     }
                  >
                     <div className="slider-img3"></div>
                     {/* <img src={frame3} alt="" /> */}
                  </div>
               </div>
               <div className="dots_container">
                  <div
                     className={value == 1 ? "active-dot" : "dots"}
                     onClick={handleValue1}
                  ></div>
                  <div
                     className={value == 2 ? "active-dot" : "dots"}
                     onClick={handleValue2}
                  ></div>
                  <div
                     className={value == 3 ? "active-dot" : "dots"}
                     onClick={handleValue3}
                  ></div>
               </div>
            </div>
            <div className="col-lg-5 Features_text col-md-10 col-sm-10 text-start">
               <p>
                  سبيس مود : الذكاء الاصطناعي الأكثر تطورًا في إنشاء المقالات
               </p>
               <h3>
                  قم بإنشاء مقال كامل وفق SEO في <span>5</span> دقائق!
               </h3>
               <p>
                  قم بإنشاء مقال كامل محسّن لمحركات البحث (SEO) بأقل قدر من
                  المدخلات وأقصى قدر من الكفاءة في 5 خطوات بسيطة.
               </p>
               <div className="Diff-btn">
                  <button className="">
                     اكتب مقال مجاناً في 5 دقائق الآن!
                  </button>
               </div>
            </div>
         </div>
         <div>
            <div className="box-container row justify-content-center">
               <div className="box col-lg-2 col- col-md-5 col-sm-5 mt-2">
                  <h3>
                     تحسين المحتوى{" "}
                     <span className="d-inline-block">
                        <img src={arrow_R} alt="" />
                     </span>
                  </h3>
                  <p>
                     تحسين المحتوى لأعلى جودة باستخدام ادواتنا عبر الذكاء
                     الاصطناعي.
                  </p>
               </div>
               <div className="box col-lg-2 col-md-5 col-sm-5 mt-2">
                  <h3>
                     الكتابة بالذكاء الاصطناعي{" "}
                     <span className="d-inline-block">
                        <img src={arrow_R} alt="" />
                     </span>{" "}
                  </h3>
                  <p>قم بإنشاء محتوى عالي الجودة الآن عبر مختلف الخيارات.</p>
               </div>
               <div className="box col-lg-2 col-md-5 col-sm-5 mt-2">
                  <h3>
                     تخصيص الكلمات المفتاحية{" "}
                     <span className="d-inline-block">
                        <img src={arrow_R} alt="" />
                     </span>{" "}
                  </h3>
                  <p>اختيار افضل الكلمات المفتاحية وفق استراتيجية SEO.</p>
               </div>
               <div className="box col-lg-2 col-md-5 col-sm-5 mt-2 highlight">
                  <h3>
                     <div className="img">
                        <img src={arrow_R} alt="" />
                     </div>
                     اكتشف المزيد مجاناً{" "}
                  </h3>
               </div>
            </div>
         </div>
      </section>
   );
}
