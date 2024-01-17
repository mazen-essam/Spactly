import React from "react";
import p_pic from "../../../assets/Main-page/5a7357df839770cc8c9ad6bafa72f64b.jpeg";
import "./StoryProfile.css";
export default function StoryProfile({ name, title }) {
   return (
      <div className="profile-story">
         <div className="row  justify-content-start align-items-center">
            <div className="col-lg-2 p-0 img">
               <img src={p_pic} alt="" />
            </div>
            <div className="col-lg-7 p-0 name">
               <h6 className="mb-0">{name}</h6>
               <p className="mb-0">{title}</p>
            </div>
         </div>
         <div>
            <p>
               The keyword grouping is a great feature. I also like the AI
               content writing interface. The cruise mode is very user-friendly.
               I highly recommend it.
            </p>
         </div>
      </div>
   );
}
