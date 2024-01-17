import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Plan.css";
import first from "../../../assets/Main-page/peter-olexa-pL7IreX9AGY-unsplash 8.png";
import second from "../../../assets/Main-page/peter-olexa-pL7IreX9AGY-unsplash 8 2.png";
import third from "../../../assets/Main-page/peter-olexa-pL7IreX9AGY-unsplash 8 3.png";
import forth from "../../../assets/Main-page/peter-olexa-pL7IreX9AGY-unsplash 11.png";
import fifth from "../../../assets/Main-page/peter-olexa-pL7IreX9AGY-unsplash 11 2.png";
import Plan_icon from "../../../assets/Main-page/element-11.svg";
import book from "../../../assets/Main-page/book.svg";
import edit from "../../../assets/Main-page/edit-2.svg";
import optimize from "../../../assets/Main-page/Optimization.svg";
import market from "../../../assets/Main-page/marketing.svg";
// Active Icons (replace these with your actual active icons)
import planActive from "../../../assets/Main-page/element-1.png";
import bookActive from "../../../assets/Main-page/book2.svg";
import editActive from "../../../assets/Main-page/edit-22.svg";
import optimizeActive from "../../../assets/Main-page/Optimization2.svg";
import marketActive from "../../../assets/Main-page/marketing2.svg";
import TryForFreeBTN from "./TryForFreeBTN";
import playBtn from "../../../assets/Main-page/Play button.svg";
import { useState } from "react";
const sections = [
   {
      title: "احصل على تخطيط كامل للكلمات المفتاحية لتحسين محركات البحث.",
      text1: "تحليل الكلمات المفتاحية لتحسين نتائج محركات البحث",
      text2: "تخطيط استراتيجي للمحتوى بناءً على تحليل الكلمات المفتاحية.",
      text3: "استخدام الذكاء الاصطناعي لتحسين أداء الصفحة وتحسين المحتوى.",
      text4: "مراقبة وتقييم أداء الكلمات المفتاحية لتعديل الاستراتيجيات وتحسين النتائج.",
      img: first,
      id: 1,
      lable: "تخطيط",
   },
   {
      title: " اكتب محتوى محسن لمحركات البحث (SEO) لضمان تصنيف أفضل.",
      text1: "إنشاء محتوى محسّن باستخدام الذكاء الاصطناعي لتحسين تصنيف الموقع.",
      text2: "كتابة محتوى فريد يسهم في تعزيز هوية العلامة التجارية والتميز الرقمي.",
      text3: "تحسين محركات البحث لمراقبة الاتجاهات وتحليل الكلمات الرئيسية.",
      text4: "إنشاء محتوى واقعي يتفاعل بشكل طبيعي مع القرّاء باستخدام الذكاء الاصطناعي.",
      img: third,
      id: 2,
      lable: "إنشاء",
   },
   {
      title: "تدقيق المحتوى وتوافقه مع السيو وإجراءاته لتحقيق الاستفادة الكاملة.",
      text1: "تحسين محتوى SEO بواسطة الذكاء الاصطناعي لضمان فعالية الاستراتيجيات.",
      text2: "توفير تدقيق تلقائي لمحتوى SEO والامتثال لإرشادات محركات البحث.",
      text3: "تحليل استخدام الكلمات المفتاحية بتقنيات ذكية لإنشاء محتوى محسّن بفعالية.",
      text4: "توجيهات فورية لتحسين محتواك بشكل دائم وتعزيز تصنيفات موقعك في نتائج البحث.",
      img: forth,
      id: 3,
      lable: "تحسين",
   },
   {
      title: "احصل على رؤى كاملة حول حركة المرور على موقعك الالكتروني.",
      text1: "تحليل سلوك المستخدمين لتعزيز السيو وتحسين تجربة المستخدم.",
      text2: "اكتساب فهم شامل حول زوار الموقع لتحسين استراتيجيات التسويق الرقمي.",
      text3: "استخدام تقارير التحليل لتحديد الفرص وتحسين أداء الموقع على محركات البحث.",
      text4: "توفير أدوات تحليل متقدمة لمراقبة تأثير التغييرات على الموقع وفهم تفاعل الجمهور.",
      img: fifth,
      id: 4,
      lable: "تحليل",
   },
];

export default function LabTabs() {
   const [value, setValue] = useState("1");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const renderIcon = (tabValue, iconNormal, iconActive, title) => {
      return (
         <div className="img">
            <img src={value === tabValue ? iconActive : iconNormal} alt="" />
            <span className="text-capitalize"> {title}</span>
         </div>
      );
   };

   return (
      <section className="Plan">
         <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
               <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                     onChange={handleChange}
                     aria-label="lab API tabs example"
                  >
                     <Tab
                        label={renderIcon("1", Plan_icon, planActive, "تخطيط")}
                        value="1"
                     />

                     <Tab
                        label={renderIcon("2", edit, editActive, "إنشاء")}
                        value="2"
                     />
                     <Tab
                        label={renderIcon(
                           "3",
                           optimize,
                           optimizeActive,
                           "تحسين"
                        )}
                        value="3"
                     />
                     <Tab
                        label={renderIcon("4", market, marketActive, "تحليل")}
                        value="4"
                     />
                  </TabList>
               </Box>

               {sections.map((item) => {
                  return (
                     <TabPanel value={item.id.toString()} key={item.id}>
                        <div className="row justify-content-between align-items-center Plan-container text-start">
                           <div className="col-lg-5 col-md-12 col-sm-12 Plan-2">
                              <div className="img">
                                 <img
                                    src={item.img}
                                    alt=""
                                    className="overlay"
                                 />

                                 <img
                                    src={playBtn}
                                    alt=""
                                    className="play-img"
                                 />
                              </div>
                           </div>
                           <div className="col-lg-5 col-md-12 col-sm-12 Plan-1">
                              <h3>{item.title}</h3>
                              <p className="p-blue">{item.text1}</p>
                              <p className="p-pink">{item.text2}</p>
                              <p className="p-blue">{item.text3}</p>
                              <p className="p-pink">{item.text4}</p>

                              <div className="row align-items-center try-container">
                                 <div className="col-lg-4">
                                    <div className="button ">
                                       <button className="try-for-free-btn">
                                          Try for Free
                                       </button>
                                    </div>
                                 </div>

                                 <div className="try-plan col-lg-8">
                                    Build topical authority with content
                                    strategies and keyword clusters, powered by
                                    AI.
                                 </div>
                              </div>
                           </div>
                        </div>
                     </TabPanel>
                  );
               })}
            </TabContext>
         </Box>
      </section>
   );
}
