import React from "react";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import "./Header.css";
import TypeAnim from "./TypeAnimation";
import Slicker from "./Slicker";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
   const [textColor, setTextColor] = useState(0);
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = (event) => {
      setInputValue(event.target.value);
   };

   const handleSearch = () => {
      // Implement your search logic here
      console.log("Search:", inputValue);
   };
   const [colors, setColors] = useState(["color1", "color2"]);
   if (textColor === 2) {
      setTextColor(0);
   }
   return (
      <header className="Main-header">
         <Nav />
         <TypeAnim />
         <div className="header-ai">
            <p>Your AI Co-pilot that powers the entire SEO content lifecycle</p>
         </div>
         <div className=" search-bar">
            <input type="text" name="search" value={inputValue} placeholder="Write What you need"/>
            <button className="btn">Get a Demo</button>
            
         </div>
         <div className="row  align-items-center">
            <Slicker />
         </div>
      </header>
   );
}
