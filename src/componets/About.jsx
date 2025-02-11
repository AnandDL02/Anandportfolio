import React from 'react'
import img1 from "../assets/bg.jpg"
import 'animate.css';

function About() {
  return (
    <>
     <div className="aboutpage w-full h-[800px] lg:w-full lg:h-[600px] mt-[80px]">
        <div className="info px-[5vw] w-full h-[200px]  lg:w-full lg:h-[200px] flex  justify-center items-center flex-col">
          <p className='text-[rgb(249,0,77)] tracking-[2px] text-[14px] font-[500] uppercase'>about</p>
          <h1 className='text-[rgb(60,62,65)] text-[40px] font-[700] text-center '>Web-Developer</h1>
        </div>
        <div className="project lg:w-full h-auto  lg:flex   " >         
          <div className="p1 lg:w-[50%] lg:h-[300px] w-[100%] h-[300px]  px-[5vw] flex  animate__animated animate__bounceInLeft">
            <img src={img1} className="w-[100%] h-[100%] rounded-[20px] object-cover" />
          </div>
          
          <div className="p2 lg:w-[50%] lg:h-[300px] w-full h-[300px]  px-[5vw] flex justify-center items-center animate__animated animate__bounceInRight">
            <p className='md:text-[15px] text-[rgb(60,62,65)] text-[12px] md:leading-8'>As a Web-Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, Bootstrap ,JQuery and React . I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting PSD to HTML and Figma to HTML tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
          </div>
    
        </div>
    </div>
    </>
  )
}

export default About