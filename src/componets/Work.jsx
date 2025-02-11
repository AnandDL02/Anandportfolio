import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";

function Work() {
  return (
    <div className="workpage px-[5vw] py-12 mt-16 ">
      
      <div className="text-center">
        <p className="text-pink-500 tracking-widest text-sm font-medium uppercase">
          Work
        </p>
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold">My Portfolio</h1>
      </div>  


      <div className="project-1 rounded-[20px] mt-10  lg:w-full lg:h-[350px] w-full h-auto  lg:flex ">
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] animate__animated animate__bounceInLeft">
          <img
            src="https://brandlogos.net/wp-content/uploads/2022/10/bookmyshow-logo_brandlogos.net_rzqea.png"
            className=" lg:object-cover  rounded-[20px] shadow-lg lg:w-full lg:h-full w-[100%] h-[350px]"
            alt="Project Preview"
          />
        </div>
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] lg:flex lg:flex-col lg:justify-evenly  flex flex-col justify-evenly  px-[5vw]  lg:px-[5vw]">

          <h1 className="text-red-600 lg:text-3xl md:text-3xl text-2xl font-bold capitalize">book my show</h1> 
          <p className="lg:text-gray-700 text-[12px] lg:text-[15px] md:text-[16px]">

          BookMyShow is built using modern web technologies like HTML, Tailwind CSS, Node.js, React, and JavaScript to provide a seamless user experience.
React.js is used for the frontend, making the interface dynamic, fast, and interactive.
Tailwind CSS helps in designing a responsive and visually appealing UI with minimal effort.
With these technologies, BookMyShow ensures smooth ticket booking, fast performance, and a great user experience.          </p>
          <div className=" lg:w-[250px] lg:h-[45px] w-[220px] h-[40px] lg:flex flex  lg:justify-between justify-between ">
            <a
              href="https://github.com/AnandDL02/Book-my-show"
              className="flex items-center lg:text-[15px] text-[12px] gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="#"
              className="flex items-center text-[12px] lg:text-[15px] gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="project-2 rounded-[20px] mt-10  lg:w-full lg:h-[350px] w-full h-auto  lg:flex ">
       <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] lg:flex lg:flex-col lg:justify-evenly  flex flex-col justify-evenly  px-[5vw]  lg:px-[5vw]">

          <h1 className="text-blue-600 lg:text-3xl md:text-3xl text-2xl font-bold capitalize">Phyllo</h1> 
          <p className="lg:text-gray-700 text-[12px] lg:text-[15px] md:text-[16px]">  Phyllo is a website I created using HTML, CSS, and Bootstrap. It features a clean design, responsive layout, and modern UI components. The site is optimized for mobile and desktop devices using Bootstrap’s grid system.
          </p>
          <div className=" lg:w-[250px] lg:h-[45px] w-[220px] h-[40px] lg:flex flex  lg:justify-between justify-between ">
            <a
              href="https://github.com/AnandDL02/Phyllo"
              className="flex items-center lg:text-[15px] text-[12px] gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="https://sage-meringue-11ad65.netlify.app/"
              className="flex items-center text-[12px] lg:text-[15px] gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] animate__animated animate__bounceInRight">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/e14bb5161343067.Y3JvcCwxMDM2LDgxMCwwLDExMg.png"
            className=" lg:object-cover rounded-[20px] shadow-lg lg:w-full lg:h-full w-[100%] h-[350px]"
            alt="Project Preview"
          />
        </div>
      </div>
      <div className="project-3 rounded-[20px] mt-10  lg:w-full lg:h-[350px] w-full h-auto  lg:flex ">
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] animate__animated animate__bounceInLeft">
          <img
            src="https://cdn.askmeoffers.com/wp-content/uploads/2023/05/24120234/lenskart-review-1200x675.webp"
            className=" lg:object-cover  rounded-[20px] shadow-lg lg:w-full lg:h-full w-[100%] h-[350px]"
            alt="Project Preview"
          />
        </div>
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] lg:flex lg:flex-col lg:justify-evenly  flex flex-col justify-evenly  px-[5vw]  lg:px-[5vw]">

          <h1 className="text-black-600 lg:text-3xl md:text-3xl text-2xl font-bold capitalize">lenskart</h1> 
          <p className="lg:text-gray-700 text-[12px] lg:text-[15px] md:text-[16px]">
          Lenckart is a website I built using HTML, Tailwind CSS, jQuery, and React. It combines Tailwind's utility-first styling with React's dynamic capabilities for a modern and responsive design. jQuery is used to handle DOM manipulation and add interactive elements, This project showcases my expertise in integrating multiple tools and frameworks to create a seamless and feature-rich web application.      </p>
          <div className=" lg:w-[250px] lg:h-[45px] w-[220px] h-[40px] lg:flex flex  lg:justify-between justify-between ">
            <a
              href="https://github.com/AnandDL02/Lenckart"
              className="flex items-center lg:text-[15px] text-[12px] gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="https://ornate-salamander-c8d84f.netlify.app/"
              className="flex items-center text-[12px] lg:text-[15px] gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="project-4 rounded-[20px] mt-10  lg:w-full lg:h-[350px] w-full h-auto  lg:flex ">
       <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] lg:flex lg:flex-col lg:justify-evenly  flex flex-col justify-evenly  px-[5vw]  lg:px-[5vw]">

          <h1 className="text-pink-600 lg:text-3xl md:text-3xl text-2xl font-bold capitalize">itaca</h1> 
          <p className="lg:text-gray-700 text-[12px] lg:text-[15px] md:text-[16px]">   Itaca is a website I developed using HTML, Tailwind CSS, Bootstrap, and React, responsive design powered by Tailwind's utility React adds dynamic functionality and efficient rendering to enhance the user experience. This project highlights my skills in combining frameworks and libraries to create a professional, interactive web application.
  
          </p>
          <div className=" lg:w-[250px] lg:h-[45px] w-[220px] h-[40px] lg:flex flex  lg:justify-between justify-between ">
            <a
              href="https://github.com/AnandDL02/Itaca"
              className="flex items-center lg:text-[15px] text-[12px] gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="https://cheery-quokka-60e53b.netlify.app/home/home"
              className="flex items-center text-[12px] lg:text-[15px] gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
        <div className=" lg:w-[50%] lg:h-[350px] w-[100%] h-[350px] animate__animated animate__bounceInRight">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpni9rXgwEviM1GCZaCj98VxtDd6weRA6jw&s"
            className=" lg:object-cover rounded-[20px] shadow-lg lg:w-full lg:h-full w-[100%] h-[350px]"
            alt="Project Preview"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Work;
