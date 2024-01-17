import React from "react";
import "./Stop.css";
import rating_1 from "../../../assets/Main-page/rating1.png";
import rating_2 from "../../../assets/Main-page/rating2.png";
import rating_3 from "../../../assets/Main-page/rating3.png";
export default function Stop() {
   return (
      <section className="Stop">
         <div className="Stop-title">
            <div className="white-bar"></div>
            <h1>ONE STOP SOLUTION</h1>
            <h2>Maximizing your ROI is now a given.</h2>
            <h5>
               Rated 4.8 by SEO strategists, modern marketers, agencies, and
               founders!
            </h5>
         </div>
         <div className="Stop-stars">
            <div className="d-flex justify-content-between">
               <div className="col-lg-4">
                  <div>
                     <div className="main-img">
                        <img src="" alt="" />
                     </div>
                  </div>
                  <div>
                     <div>
                        <div className="img">
                           <img src="" alt="" />
                        </div>
                        <div className="img">
                           <img src="" alt="" />
                        </div>
                        <div className="img">
                           <img src="" alt="" />
                        </div>
                        <div className="img">
                           <img src="" alt="" />
                        </div>
                        <div className="img">
                           <img src="" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4"></div>
               <div className="col-lg-4"></div>
            </div>
         </div>
         <div className="Stop-rating">
            <div className="row justify-content-between Stop-rating-container">
               <div className="col-lg-4 text-center">
                  <div className="img">
                     <img src={rating_1} alt="" />
                  </div>

                  <p>
                     <span>Ease of Use </span>
                     <br />
                     AI Writing Assistant Average : 9.3
                  </p>
               </div>
               <div className="col-lg-4 text-center">
                  {" "}
                  <div className="img">
                     <img src={rating_2} alt="" />
                  </div>
                  <p>
                     <span>Quality of Support </span>
                     <br />
                     AI Writing Assistant Average:9.1
                  </p>
               </div>
               <div className="col-lg-4 text-center">
                  {" "}
                  <div className="img">
                     <img src={rating_3} alt="" />
                  </div>
                  <p>
                     <span>Ease of Setup </span>
                     <br />
                     AI Writing Assistant Average : 9.3
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
