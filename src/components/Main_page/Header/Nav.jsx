import React, { useState } from "react";
import Logo from "../../../assets/Main-page/Logo.png";
import vector from "../../../assets/Main-page/Vector.png";
import menu from "../../../assets/Main-page/menu.png";
import "./Nav.css";
export default function Nav() {
   const [menuOpen, setMenuOpen] = useState(false);
   const handleMenu = () => {
      if (menuOpen === true) {
         setMenuOpen(false);
      } else {
         setMenuOpen(true);
      }
   };
   return (
      <nav className="nav-bar row  align-items-center ">
         {/* <div className="br"> */}
         <div className=" img col-lg-3 col-xl-2 col-md-3 col-sm-6 col-xs-9">
            <img src={Logo} alt="" />
         </div>
         <div className="nav-pages col-md-9 col-lg-9 col-xl-8 col-sm-6 col-xs-2  ">
            <ul className="first-nav row justify-content-end align-items-center">
               <li className="col-lg-1 col-xl-2">تسجيل دخول </li>
               <li className=" col-lg-1 m-0 col-xl-1">
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
                  المدونه{" "}
               </li>
               <li className="col-lg-1 col-xl-1 m-0">
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
                  الباقات{" "}
               </li>
               <li className="col-lg-1 col-xl-1 m-0">
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
                  مميزاتنا
               </li>
               <li className="col-lg-2 col-xl-2 m-0">
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
                  سبيس شات
               </li>
               <li className="col-lg-1 col-xl-1 m-0">منصتنا </li>
               <li className="col-lg-1 col-xl-1 m-0">الرئيسية</li>
               <li className="nav-sign col-lg-2">
                  <button className="btn"> إنشاء حساب</button>
               </li>
            </ul>
            <div className="img-burger">
               <img src={menu} alt="" onClick={handleMenu} />
            </div>
         </div>
         {menuOpen && (
            <div className="burger text-start">
               <ul className="row justify-content-end align-items-center">
                  <li className="col-lg-1 m-0 col-xl-1 mt-2">منصتنا</li>
                  <li className="col-lg-1 m-0 col-xl-1 mt-2">الرئيسية</li>
                  <li className="col-lg-2 col-xl-1 mt-2">تسجيل دخول </li>
                  <li className=" col-lg-2 col-xl-1 mt-2">
                     <div className="img">
                        <img src={vector} alt="" />
                     </div>
                     المدونه{" "}
                  </li>
                  <li className="col-lg-2 col-xl-1 mt-2">
                     <div className="img">
                        <img src={vector} alt="" />
                     </div>
                     الباقات{" "}
                  </li>
                  <li className="col-lg-2 col-xl-1 mt-2">
                     <div className="img">
                        <img src={vector} alt="" />
                     </div>
                     مميزاتنا
                  </li>
                  <li className="col-lg-2 col-xl-2 mt-2">
                     <div className="img">
                        <img src={vector} alt="" />
                     </div>
                     سبيس شات
                  </li>
                  <li className="nav-sign col-lg-2 mt-2">
                     <button className="btn"> إنشاء حساب</button>
                  </li>
               </ul>
            </div>
         )}
         {/* </div> */}
      </nav>
   );
}
{
   /* <div className="img col-lg-3 col-xl-2 col-md-5 col-sm-6">
            <img src={Logo} alt="" />
         </div>
         <div className="col-lg-9 row justify-content-end align-items-center">
            <ul className="nav-pages col-lg-9 row justify-content-end align-items-center">
               <li className="col-lg-2">
                  تسجيل دخول{" "}
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
               <li className="col-lg-1">
                  المدونه{" "}
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
               <li className="col-lg-1">
                  الباقات{" "}
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
               <li className="col-lg-1">
                  مميزاتنا
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
               <li className="col-lg-2">
                  سبيس شات
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
               <li className="col-lg-1">منصتنا </li>
               <li className="col-lg-1">
                  الرئيسية
                  <div className="img">
                     <img src={vector} alt="" />
                  </div>
               </li>
            </ul>
             <div className="burger-nav">
               <button className="burger-btn">المزيد</button>
            </div> 
            <div className="nav-sign col-lg-2">
               <button className="btn"> إنشاء حساب</button>
            </div>
         </div> */
}
