import React from "react";
import "./Story.css";
import StoryProfile from "./StoryProfile";

export default function Story() {
   return (
      <section className="Story">
         <div className="Story-head text-center">
            <h1>SUCCESS STORIES</h1>
            <h2>Bring Scale to Your Story</h2>
            <p>
               From small businesses to large enterprises,
               <br /> companies all over the world are using Scalenut to <br />{" "}
               improve their content efforts and SERP ranking.
            </p>
         </div>
         <div className="Story-overlay">
            <div className="row Story-item">
               <div className=" col-lg-3">
                  <StoryProfile name="Jane Cooper" title="unpexel" />
               </div>
               <div className="col-lg-3">
                  <StoryProfile name="Jane Cooper" title="unpexel" />
               </div>
               <div className=" col-lg-3">
                  <StoryProfile name="Jane Cooper" title="unpexel" />
               </div>
               <div className=" col-lg-3">
                  <StoryProfile name="Jane Cooper" title="unpexel" />
               </div>
            </div>
         </div>
      </section>
   );
}
