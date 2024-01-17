import React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Header.css";
export default function TypeAnim() {
   const [textColor, setTextColor] = useState(0);
   const [colors, setColors] = useState(["color1", "color2"]);
   if (textColor === 2) {
      setTextColor(0);
   }
   return (
      <div className="typeAnim">
مساحتك اللانهائية   
         <span className={colors[textColor]}>
            <TypeAnimation
               sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "إنشاء محتوى ",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },

                  // wait 1s before replacing "Mice" with "Hamsters"
                  "تحسين تحليلات",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },"دقة اختيار ",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },"تطوير ",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },"رفع مستوى التفاعل",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },"تحسين تجربة المستخدم",
                  1000,
                  () => {
                     setTextColor((prevState) => {
                        return prevState + 1;
                     });
                  },
               ]}
               //    wrapper="span"
               speed={20}
               deletionSpeed={20}
               style={{
                  display: "inline-block",
                  fontWeight: "500",
                  //   color: colors[textColor],
               }}
               repeat={Infinity}
            />
         </span>
         <br />
         {/* <span className="search-header"> From search</span> */}
      </div>
   );
}
