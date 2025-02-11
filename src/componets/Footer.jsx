import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
    <div className=" footer section-1 w-full h-[300px]  lg:w-full lg:h-[300px] bg-[black] text-white flex flex-col gap-[20px] justify-center items-center px-[5vw]">
        <div className="footer-icon lg:w-[150px] w-[150px] flex  justify-evenly  items-center text-[22px]">
        <FaLinkedinIn />
        <IoLogoGithub />
        <BsInstagram />
        </div>
       
        <h1 className=' capitalize text-center'>@anand dalsaniya all rights reserved.</h1>

    </div>
    </>
  )
}

export default Footer
