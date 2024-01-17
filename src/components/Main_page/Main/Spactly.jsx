import React from "react";
import lighting from "../../../assets/Main-page/flash.svg";
import TryForFreeBTN from "./TryForFreeBTN";

export default function Spactly() {
   return (
      <section className="Spacetly ">
         <div className="row justify-content-between">
            <div className="col-lg-4 Spacetly-main  ">
               <h2 className="Spacetly-Q">
                  {" "}
                  كن مختلفا، وحسن من إنتاجية عملك مع سبيستلي{" "}
               </h2>
               <div className=" d-flex justify-content-center align-items-center img-container">
                  <div className="img col-lg-2">
                     <img src={lighting} alt="" />
                  </div>
               </div>
               <TryForFreeBTN />
               <div className="d-flex justify-content-center">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
               </div>
            </div>
            <div className="col-lg-7 row ">
               <div className="col-lg-6 text-start Spacetly-text ">
                  <div className="Spacetly-text1 ">
                     <h3>إنشاء محتوى </h3>
                     <p>
                        عالي الجودة باستخدام أكثر من 80 نموذج محتوي للذكاء
                        الاصطناعي.
                     </p>
                  </div>
                  <div className="Spacetly-text2">
                     <h3>أدوات مختلفه</h3>
                     <p>لتحسين محركات البحث SEO مدعومة بالذكاء الاصطناعي.</p>
                  </div>
                  <div className="Spacetly-text1">
                     <h3>المدقق اللغوي</h3>
                     <p>
                        الآلي المدعوم بالذكاء الاصطناعي للحصول علي محتوى خالٍ من
                        الأخطاء اللغوية.
                     </p>
                  </div>
               </div>
               <div className="col-lg-6 Spacetly-text text-start">
                  <div className="Spacetly-text2">
                     <h3>طور من إنشاء</h3>
                     <p>
                        استراتيجيات المحتوى والSEO لزيادة التفاعل مع الجمهور
                        المستهدف.
                     </p>
                  </div>
                  <div className="Spacetly-text1">
                     <h3>تقنيات متقدمة</h3>
                     <p>
                        في استخدام الذكاء الاصطناعي في تصميم الصور لجعل محتواك
                        مميزًا.
                     </p>
                  </div>
                  <div className="Spacetly-text2">
                     <h3>خيارات إعادة الصياغة</h3>
                     <p>المحتوي القديم وتنويع المحتوى بشكل فعّال وجذاب.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
