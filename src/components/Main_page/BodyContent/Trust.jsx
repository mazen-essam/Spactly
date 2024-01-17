import React from "react";
import "./Trust.css";
import heart from "../../../assets/Main-page/heart.svg";
import like from "../../../assets/Main-page/like.svg";
import profile_logo from "../../../assets/Main-page/user.svg";
import C1 from "../../../assets/Main-page/fced3ecd9ffc0e4a514986f4ef2f5178.jpeg";
import C2 from "../../../assets/Main-page/4d2677d841c8815e0965b100cbb81ae1.jpeg";
import C3 from "../../../assets/Main-page/460659e281db8e77acbf9284509b4ec5.jpeg";
import C4 from "../../../assets/Main-page/5a7357df839770cc8c9ad6bafa72f64b.jpeg";

export default function () {
   return (
      <section className="Trust">
         <div className="trust-banner">
            <span className="trust-text">
               Trusted by <span className="highlight">1Mn+</span> marketers of
               the world's leading brands{" "}
               <span className="img">
                  <img src={heart} alt="" />
               </span>
            </span>
            <div className="logos">
               <div className="logo-container">
                  <div className="logo square pink"></div>
               </div>
               <div className="logo-container">
                  {" "}
                  <div className="logo square blue"></div>
               </div>
            </div>
         </div>
         <div className="trust-comments">
            <div className="row justify-content-center ">
               <div className="item col-lg-3 col-md-6 col-sm-12 row justify-content-end">
                  <div className="col-lg-2 d-flex align-items-end">
                     <div className="img">
                        <img src={like} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex align-items-center img">
                              <img
                                 src={C1}
                                 className="rounded-circle col-lg-2"
                                 alt="Esther Howard"
                              />
                              <h5 className="card-title mb-0 p-head">
                                 Brooklyn Simmons <br />{" "}
                                 <span className="p-sub">Brooklyn Simmons</span>
                              </h5>
                           </div>

                           <p className="card-text">
                              Scalenut’s content is profound and factual. I rely
                              on the "quora answer" and SEO modules to craft
                              long-form content swiftly. Impressive results!
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="item col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                     <div className="card-body">
                        <div className="d-flex align-items-center img">
                           <img
                              src={C2}
                              className="rounded-circle me-2  col-lg-2"
                              alt="Esther Howard"
                           />
                           <h5 className="card-title mb-0 p-head">
                              Esther Howard
                              <br /> <span className="p-sub">Offmax</span>
                           </h5>
                        </div>

                        <p className="card-text">
                           Vitae tellus bibendum nibh integer auctor pretium
                           sed. Sollicitudin tristique euismod elit.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="item col-lg-3 col-md-6 col-sm-12 row justify-content-end">
                  <div className="col-lg-2 d-flex align-items-end">
                     <div className="img">
                        <img src={profile_logo} alt="" />
                     </div>
                  </div>
                  <div className="col-lg-12">
                     <div className="card">
                        <div className="card-body">
                           <div className="d-flex align-items-center img">
                              <img
                                 src={C3}
                                 className="rounded-circle   col-lg-2"
                                 alt="Esther Howard"
                              />
                              <h5 className="card-title mb-0 p-head">
                                 Arlene McCoy
                                 <br /> <span className="p-sub">bloopixel</span>
                              </h5>
                           </div>

                           <p className="card-text">
                              Its long-form assistant is everything you need to
                              create great article outlines. It shows you SERP
                              data including your competitors & their article
                              outlines.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="item col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                     <div className="card-body">
                        <div className="d-flex align-items-center img">
                           <img
                              src={C4}
                              className="rounded-circle   col-lg-2"
                              alt="Esther Howard"
                           />
                           <h5 className="card-title mb-0 p-head">
                              Jane Cooper <br />{" "}
                              <span className="p-sub">unpexel</span>
                           </h5>
                        </div>

                        <p className="card-text">
                           The keyword grouping is a great feature. I also like
                           the AI content writing interface. The cruise mode is
                           very user-friendly. I highly recommend it.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
