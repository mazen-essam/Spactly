import React from "react";
import Header from "../Header/Header";
import "./Main.css";
import Spactly from "./Spactly";
import "./Spactly.css";
import "./Different.css";
import Different from "./Different";
import LabTabs from "./Plan";
import Features from "../BodyContent/Features";
import Trust from "../BodyContent/Trust";
import Stop from "../BodyContent/Stop";
import Story from "../BodyContent/Story";
import Footer from "../Footer/Footer";
import Power from "../BodyContent/Power";

export default function Main() {
   return (
      <>
         <main className="Main">
            <div>
               <div className="Main-background-h">
                  <Header />
               </div>
               {/* section Spacetly start */}
               <div className="Main-background-1">
                  <Spactly />
               </div>
               {/* section Spacetly end */}
               {/* section Different start */}
               <div className="Main-background-2">
                  <Different />
               </div>
               {/* section Different end */}
               {/* section Plan start */}
               <div className="Main-background-3">
                  <LabTabs />
               </div>
               {/* section Plan end */}
               {/* section Features start */}

               <div className="Main-background-4">
                  <Features />
               </div>
               {/* section Features end */}
               <div className="Main-background-6">{/* <PlayStore/> */}</div>
               {/* section Trust start */}
               <div className="Main-backgrond-5">
                  {/* <Trust /> */}
                  <Power />
               </div>
               {/* section Trust end */}
               {/* section Stop start */}

               {/* section Stop end */}
               {/* section story start */}
               <div>{/* <Story /> */}</div>
               {/* section story end */}
            </div>
         </main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}
