import React from "react";
import "./Power.css";
import arrow_right from "../../../assets/Main-page/arrow-right.svg";
export default function Power() {
   return (
      <section className="Power">
         <div className="mb-5">
            <h2>وقت أقل - جودة أفضل </h2>
            <p>
               ابدأ الآن مجاناً{" "}
               <span>
                  <img src={arrow_right} alt="" />
               </span>
            </p>
         </div>
         <div className="row justify-content-between align-items-center ">
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>أفكار إعلانية</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>وصف الإعلان</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>اتخاذ إجراء CTA</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>الأسئلة المتداولة FAQ</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>أفكار المقالات</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>مقدمة المقالة</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>عناوين المنتجات</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>وصف المنتج</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>عنوان البريد الإلكتروني</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>بريد إلكتروني ترويجي</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>عناوين الفيديو</p>
               <div>المزيد</div>
            </div>
            <div className="col-lg-3 m-2 col-md-5 col-sm-12">
               <p>أفكار فيديوهات تيك توك</p>
               <div>المزيد</div>
            </div>
         </div>
      </section>
   );
}
