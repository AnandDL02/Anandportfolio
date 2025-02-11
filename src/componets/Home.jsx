import React from "react";
import AdvancedHeadlineEffect from "./AdvancedHeadlineEffect";
import pic1 from "../assets/pic.jpg"

function Home() {
  return (
    
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-[5vw] md:px-12 lg:px-[5vw] py-20">
      <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-3xl md:text-4xl font-semibold capitalize text-[#000000d0] animate__animated  animate__fadeInDown">Hello, I am</p>
        <h1 className="text-4xl md:text-5xl font-bold capitalize text-[#000000d0] rgb(236,72,153) animate__animated animate__fadeInLeft">
          <AdvancedHeadlineEffect />
        </h1>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed animate__animated animate__fadeInLeft">
          Aspiring for a challenging career in front-end development to use my learned skills for the best results.
        </p>
        <button className="bg-[#000000d0] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-48 mx-auto lg:mx-0 animate__animated  animate__fadeInUp">
          Download CV
        </button>
      </div>

      <div className="w-full  lg:w-1/2 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] bg-gray-300 dark:bg-gray-700 rounded-full border-4  border-[#000000b9] flex items-center justify-center animate__animated animate__fadeInRight">
            <img src={pic1} alt=""  className="w-[100%] h-[100%] rounded-full object-cover"/>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
