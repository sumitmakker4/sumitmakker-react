import React from 'react'
import { Link } from 'react-router-dom'
import homeWhiteBg from '../assets/home-white-bg.svg'
import boxlLogo from '../assets/boxl-logo.webp'

export default function Home() {

  function scrollToAboutMe() {
    const target = document.getElementById("about-me-section");
    const top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }

  return (
    <div>
      
      {/* Top Section */}
      <div className='lg:mt-40'>

        <div className='flex justify-between items-center mt-[-140px]'>

          {/* Name and basic intro */}
          <div className='flex flex-col items-start gap-5'>
            <span className='uppercase text-xl font-bold'>Hi, I'm Sumit</span>
            <span className='uppercase font-bold text-[60px] leading-[64px]'>I'm a Full Stack<br></br> Web Developer</span>

            <span className='text-[#F8F7F9]/60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nunc vulputate libero et velit interdum, ac aliquet mattis.</span>

            <Link to={'/projects'} className='bg-[#F8F7F9] text-[#1F1F1F] hover:!no-underline font-bold rounded-md text-center uppercase px-3 py-2'>View my projects</Link>
          </div>

          <img src={homeWhiteBg} className='w-[600px]'/>

        </div>
        
      </div>

      {/* Scroll Down Button */}
      <div className='flex items-center justify-center bg-[#1F1F1F] hover:bg-[#F8F7F9] hover:text-[#1F1F1F] w-14 h-14 mx-auto rounded-full shadow-[4px_12px_24px_rgba(248,247,249,0.1),0px_0px_8px_rgba(248,247,249,0.08)] mt-20 mb-20 float-animation cursor-pointer transition-colors duration-500 ease-in-out' onClick={scrollToAboutMe}>
        <i className='pi pi-arrow-down text-lg' style={{WebkitTextStrokeWidth : '1.5px'}}></i>
      </div>

      {/* About Me */}
      <div id='about-me-section' className='flex flex-col items-center gap-4 mb-20'>
        <span className='font-bold text-2xl border-b-2 uppercase mb-4'>About me</span>
        <p className='text-[#F8F7F9]/60 text-lg leading-7'>I am a Full Stack Developer who enjoys building complete applications, from user-friendly frontends to robust backends. I love solving problems and creating digital solutions that are clean, responsive, and impactful.</p>

        <div className='flex items-center'>
          <img src={boxlLogo}/>
          <p className='text-[#F8F7F9]/60 text-lg leading-7'>I started my career at Boxl Technologies as a Junior Web Developer, where I gained hands-on experience with real projects, built responsive websites, and worked with APIs. This role gave me a strong foundation in professional development.</p>
        </div>

        <div className='flex'>
          <p className='text-[#F8F7F9]/60 text-lg leading-7'>Currently, I work at Lyxel and Flamingo on advanced full stack projects, focusing on scalable applications and modern frameworks. This experience has helped me grow, take ownership of tasks, and continue evolving as a developer.</p>
        </div>

      </div>

    </div>
  )
}
