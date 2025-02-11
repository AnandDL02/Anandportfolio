import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJquery, SiMediafire } from "react-icons/si";

function Skill() {
  return (
    <>
      <div className="section-1 w-full mt-[80px] border-[1px] p-6 bg-gray-100">
        <div className="title text-center mb-8">
          <p className="text-pink-500 tracking-widest text-sm font-medium uppercase">
            My Skills
          </p>
          <h1 className="text-gray-800 text-4xl md:text-5xl font-bold">
            Using Now
          </h1>
        </div>
        <div className=" lg:h-[400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <FaHtml5 className="text-orange-500 text-6xl" />
            <p className="mt-2 text-lg font-medium">HTML5</p>
          </div>

          <div className="flex flex-col items-center animate__animated animate__rollIn">
            <FaCss3Alt className="text-blue-500 text-6xl" />
            <p className="mt-2 text-lg font-medium">CSS3</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <FaBootstrap className="text-purple-600 text-6xl" />
            <p className="mt-2 text-lg font-medium">Bootstrap</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <SiJquery className="text-blue-400 text-6xl" />
            <p className="mt-2 text-lg font-medium">jQuery</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <FaJs className="text-yellow-500 text-6xl" />
            <p className="mt-2 text-lg font-medium">JavaScript</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <FaReact className="text-blue-500 text-6xl animate-spin" />
            <p className="mt-2 text-lg font-medium">React</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <FaGitAlt className="text-red-500 text-6xl" />
            <p className="mt-2 text-lg font-medium">Git</p>
          </div>

          <div className="flex flex-col items-center  animate__animated animate__rollIn">
            <SiMediafire className="text-teal-500 text-6xl" />
            <p className="mt-2 text-lg font-medium">Media Query</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
