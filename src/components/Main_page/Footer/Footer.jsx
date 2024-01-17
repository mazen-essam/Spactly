import React from "react";
import "./Footer.css";
import logo from "../../../assets/Main-page/Screenshot 2024-01-16 014148_transparent.png";
export default function Footer() {
   return (
      <section className="footer">
         <div className="Main-footer">
            <div className="img">
               <img src={logo} alt="" />
            </div>
            <div>
               <h4>قم بتوسيع نطاق عملك مجاناً الآن!</h4>
               <p>
                  المنصة العربية الأولى والوحيدة المصممة بعناية فائقة لتحقيق
                  النتائج الفعّالة من خلال إنشاء محتوى ذكي وتحسين محركات البحث
                  باستخدام تقنيات الذكاء الاصطناعي
               </p>
            </div>
            <div className="btn">
               <button className="">ابدأ الآن مجاناً</button>
            </div>
         </div>
         <div className="footer-info pt-5">
            <div className="row justify-content-between mb-5">
               <div className="col-lg-3 col-md-6 col-sm-12">
                  <h5 className="mb-5 fs-3">المميزات</h5>
                  <ul className="me-0 ms-0 ps-0 pe-0">
                     <li className="mb-2">
                        أكثر من 80 نوعًا من نماذج المحتوي.
                     </li>
                     <li className="mb-2">تخطيط كامل للكلمات المفتاحية.</li>
                     <li className="mb-2">محتوى محسن لمحركات البحث.</li>
                     <li className="mb-2">تدقيق المحتوى وتوافقه مع السيو.</li>
                     <li className="mb-2">رؤى كاملة حول حركة المرور.</li>
                     <li className="mb-2 footer-link">اكتشف المزيد</li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                  <h5 className="mb-5 fs-3">الحلول</h5>
                  <ul className="me-0 ms-0 ps-0 pe-0">
                     <li className="mb-2">كتابة المقالات</li>
                     <li className="mb-2">كتابة محتوي السوشيال ميديا</li>
                     <li className="mb-2">تحسين محركات البحث</li>
                     <li className="mb-2">استراتيجيات المحتوى</li>
                     <li className="mb-2">التسويق عبر البريد الإلكتروني</li>
                     <li className="mb-2">اكتشف المزيد</li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                  <h5 className="mb-5 fs-3">الدعم</h5>
                  <ul className="me-0 ms-0 ps-0 pe-0">
                     <li className="mb-2">تواصل معانا</li>
                     <li className="mb-2">الإبلاغ عن خطأ</li>
                     <li className="mb-2">الإبلاغ عن عطل</li>
                     <li className="mb-2">طلب ميزة جديدة</li>
                     <li className="mb-2">المدونة</li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-12">
                  <h5 className="mb-5 fs-3">المجتمع</h5>
                  <p>
                     انضم إلى مجتمعنا عبر فيسبوك النابض بالحياة وسيطر على SERP
                     من خلال تحسين محركات البحث وتسويق المحتوى المدعوم بالذكاء
                     الاصطناعي.
                  </p>
               </div>
            </div>
            <div className="footer-last text-center mt-5">
               <p className="fs-4 fw-bold">
                  ابدأ الآن مجاناً وأنشئ أكثر من 80 نوعًا من نماذج المحتوي في
                  ثوانٍ باستخدام سبيستلي
               </p>
            </div>
            <div></div>
         </div>
      </section>
   );
}
