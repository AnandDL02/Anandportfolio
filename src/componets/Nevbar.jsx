import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5"; // Close icon for sidebar
import { Link } from "react-router-dom";
import Home from "./Home";

function Nevbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nevbar w-full h-[80px] bg-white fixed top-0 flex justify-between items-center px-[5vw] md:px-[5vw] z-50">
        <div className="logo flex justify-center items-center">
          <Link to={"/"} className="capitalize md:text-[25px] text-[20px] font-[600]">anand dalsaniya.</Link>
        </div>

        <div className="section-2 flex justify-center items-center gap-[10px]">
          <div className="tag hidden md:block">
            <div className="anchertag flex justify-end capitalize gap-[25px] font-[500] text-[15px] items-center">
             <Link to={"/"}>Home</Link>
             <Link to={"/about"}>About</Link>
             <Link to={"/work"}>Work</Link>
             <Link to={"/skill"}>skills</Link>
             <Link to={"/contact"}>Contact</Link>
            </div>
          </div>
          <div 
            className="menu w-[40px] h-[40px] rounded-[20px] border-[1px] flex justify-center items-center bg-[#000000cc] md:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <IoMenu className="text-white text-[18px]" />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-[#000000de] text-white transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        }`}
      >
        <div className="flex justify-end items-center p-6">
          
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <IoClose />
          </button>
        </div>
        <ul className="flex flex-col gap-5 p-4">
             <Link to={"/"} className="block p-2 hover:bg-gray-800">Home</Link>
             <Link to={"/about"} className="block p-2 hover:bg-gray-800">About</Link>
             <Link to={"/work"} className="block p-2 hover:bg-gray-800">Work</Link>
             <Link to={"/skill"} className="block p-2 hover:bg-gray-800">Skills</Link>
             <Link to={"/contact"} className="block p-2 hover:bg-gray-800">Contact</Link>
        </ul>
      </div>
    </>
  );
}

export default Nevbar;
