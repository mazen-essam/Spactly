import React from "react";
import lighting from "../../../assets/Main-page/flash2.png";
import TryForFreeBTN from "./TryForFreeBTN";
export default function Different() {
   return (
      <section className="Diff ">
         <div className="row justify-content-around">
            <div className="Diff-section-top col-lg-5 d-flex  flex-column align-items-center">
               {/* <div className="img">
                  <img src={lighting} alt="" className="lighting-Diff" />
               </div> */}
               <div className="Diff-Diff-q">
                  <h3 className="text-center text-white">
                     Be different, be <br /> at the top!
                  </h3>
               </div>
               <div className="Diff-btn">
                  <button>Try for free</button>
               </div>
            </div>
            <div className="col-lg-5 text-end">
               <div className="item">
                  <h3>1 Mn+</h3>
                  <p>Active users</p>
               </div>
               <div className="item">
                  <p className="Diff-sh3">10X</p>
                  <p>Growth in Organic Traffic</p>
               </div>
               <div className="item">
                  <h3>5 Million+</h3>
                  <p>SEO Blogs Created</p>
               </div>
            </div>
         </div>
         <div className="Diff-all">
            <h4>
               Your<span> all-in-one </span>content marketing app
            </h4>
         </div>
      </section>
   );
}
