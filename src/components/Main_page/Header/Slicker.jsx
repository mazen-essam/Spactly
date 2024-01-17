import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo_1 from "../../../assets/Main-page/image 2.png";
import logo_2 from "../../../assets/Main-page/image 3.png";
import logo_3 from "../../../assets/Main-page/image 4.png";
import logo_4 from "../../../assets/Main-page/image 5.png";
import logo_5 from "../../../assets/Main-page/image 6.png";
import logo_6 from "../../../assets/Main-page/image 7.png";
import logo_7 from "../../../assets/Main-page/image 8.png";

export default function Slicker() {
   const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 5,
      // slidesToScroll: 1,
      autoplay: true,
      speed: 3500,
      autoplaySpeed: 100,
      cssEase: "linear",
   };
   return (
      <div className="slider">
         <Slider {...settings}>
            <div className="">
               <img src={logo_1} alt="" />
            </div>
            <div className="">
               <img src={logo_2} alt="" />
            </div>
            <div className="">
               <img src={logo_3} alt="" />
            </div>
            <div className="">
               <img src={logo_4} alt="" />
            </div>
            <div className="">
               <img src={logo_5} alt="" />
            </div>
            <div className="">
               <img src={logo_6} alt="" />
            </div>
            <div className="">
               <img src={logo_7} alt="" />
            </div>
         </Slider>
      </div>
   );
}
