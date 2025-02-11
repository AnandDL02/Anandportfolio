import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";

function Work() {
  return (
    <div className="workpage  px-[5vw] py-12 mt-16">
      
      <div className="text-center">
        <p className="text-pink-500 tracking-widest text-sm font-medium uppercase">
          Work
        </p>
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold">My Portfolio</h1>
      </div>     
      <div className="project-1 w-full flex flex-col lg:flex-row items-center gap-6 mt-12 rounded-[10px]">
        <div className="w-full lg:w-1/2 animate__animated animate__bounceInLeft">
          <img
            src="https://brandlogos.net/wp-content/uploads/2022/10/bookmyshow-logo_brandlogos.net_rzqea.png"
            className="w-full h-72 rounded-xl object-cover shadow-lg"
            alt="Project Preview"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left ">
          <h1 className="text-red-600 text-3xl font-bold capitalize">book my show</h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
          BookMyShow is built using modern web technologies like HTML, Tailwind CSS, Node.js, React, and JavaScript to provide a seamless user experience.
React.js is used for the frontend, making the interface dynamic, fast, and interactive.
Tailwind CSS helps in designing a responsive and visually appealing UI with minimal effort.
With these technologies, BookMyShow ensures smooth ticket booking, fast performance, and a great user experience.          </p>
          <div className="flex justify-center lg:justify-start gap-6  mt-6">
            <a
              href="https://github.com/AnandDL02/Node.js/tree/main/BookMyShow"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="project-2 w-full flex flex-col lg:flex-row items-center gap-6 mt-12 rounded-[10px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-blue-600 text-3xl font-bold">Phyllo</h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            Phyllo is a website I created using HTML, CSS, and Bootstrap. It features a clean design, responsive layout, and modern UI components. The site is optimized for mobile and desktop devices using Bootstrap’s grid system.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="https://github.com/AnandDL02/all-project/tree/main/MEDIA%20QUERY%20%2C%20BOOTSTRAP%20%2C/phyllo"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 animate__animated animate__bounceInRight">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/e14bb5161343067.Y3JvcCwxMDM2LDgxMCwwLDExMg.png"
            className="w-full h-72 rounded-xl object-cover shadow-lg"
            alt="Project Preview"
          />
        </div>
      </div>

      <div className="project-3 w-full flex flex-col lg:flex-row items-center gap-6 mt-12 rounded-[10px]">
        <div className="w-full lg:w-1/2 animate__animated animate__bounceInLeft">
          <img
            src="https://cdn.askmeoffers.com/wp-content/uploads/2023/05/24120234/lenskart-review-1200x675.webp"
            className="w-full h-72 rounded-xl object-cover shadow-lg"
            alt="Project Preview"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-black-600 text-3xl font-bold capitalize">lenskart</h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
          Lenckart is a website I built using HTML, Tailwind CSS, jQuery, and React. It combines Tailwind's utility-first styling with React's dynamic capabilities for a modern and responsive design. jQuery is used to handle DOM manipulation and add interactive elements, This project showcases my expertise in integrating multiple tools and frameworks to create a seamless and feature-rich web application.      </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="project-4 w-full flex flex-col lg:flex-row items-center gap-6 mt-12 rounded-[10px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-pink-600 text-3xl font-bold capitalize">itaca</h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
          Itaca is a website I developed using HTML, Tailwind CSS, Bootstrap, and React, responsive design powered by Tailwind's utility React adds dynamic functionality and efficient rendering to enhance the user experience. This project highlights my skills in combining frameworks and libraries to create a professional, interactive web application.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="https://github.com/AnandDL02/all-project/commit/7d5004c80424c9059d15e64c67286c3cd76c43cf"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
            >
              <IoLogoGithub /> Code
            </a>
            <a
              href="https://cheery-quokka-60e53b.netlify.app/home/home"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              <HiOutlineExternalLink /> Live Demo
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 animate__animated animate__bounceInRight">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpni9rXgwEviM1GCZaCj98VxtDd6weRA6jw&s"
            className="w-full h-72 rounded-xl object-cover shadow-lg"
            alt="Project Preview"
          />
        </div>
      </div>
      
    </div>
    
  );
}

export default Work;
