import React from 'react'
import { Link } from 'react-router-dom'
import homeWhiteBg from '../assets/home-white-bg.svg'
import boxlLogo from '../assets/logo/boxl-logo.webp'
import landfLogo from '../assets/logo/l&f-logo.svg'
import Project from '../components/projects/Project'
import {projects} from '../data/index'

export default function Home() {

  function scrollToAboutMe() {
    const target = document.getElementById("about-me-section");
    const top = target.getBoundingClientRect().top + window.scrollY - 50;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  }

  return (
    <div>
      
      {/* Top Section */}
      <div>

        <div className='relative flex justify-center lg:justify-between'>

          {/* Name and basic intro */}
          <div className='flex flex-col items-start gap-5 mt-3 lg:mt-30'>
            <span className='uppercase text-xl font-bold'>Hi, I'm Sumit</span>
            <span className='uppercase font-bold text-[60px] leading-[64px]'>I'm a Full Stack<br></br> Web Developer</span>

            <span className='text-[#A9A9A9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nunc vulputate libero et velit interdum, ac aliquet mattis.</span>

            <Link to={'/projects'} className='bg-[#F8F7F9] text-[#1F1F1F] hover:!no-underline font-bold rounded-md text-center uppercase px-3 py-2'>View my projects</Link>
          </div>

          <img src={homeWhiteBg} className='hidden lg:block absolute right-[-100px] w-[600px] ml-30'/>

        </div>
        
      </div>

      {/* Scroll Down Button */}
      <div className='flex items-center justify-center bg-[#1F1F1F] hover:bg-[#F8F7F9] hover:text-[#1F1F1F] w-14 h-14 mx-auto rounded-full shadow-[4px_12px_24px_rgba(248,247,249,0.1),0px_0px_8px_rgba(248,247,249,0.08)] mt-30 lg:mt-60 mb-20 float-animation cursor-pointer transition-colors duration-500 ease-in-out' onClick={scrollToAboutMe}>
        <i className='pi pi-arrow-down text-lg' style={{WebkitTextStrokeWidth : '1.5px'}}></i>
      </div>

      {/* About Me */}
      <div id='about-me-section' className='flex flex-col items-center gap-4 mb-20'>
        <span className='font-bold text-3xl border-b-2 uppercase mb-10'>About me</span>
        <p className='text-[#A9A9A9] text-xl leading-7'>I am a Full Stack Developer who enjoys building complete applications, from user-friendly frontends to robust backends. I love solving problems and creating digital solutions that are clean, responsive, and impactful.</p>
        <div className='flex items-center mt-2'>
          <img src={boxlLogo} className='hidden lg:block h-16'/>
          <p className='text-[#A9A9A9] text-lg leading-7'>I started my career at Boxl Technologies as a Junior Web Developer, where I gained hands-on experience with real projects, built responsive websites, and worked with APIs. This role gave me a strong foundation in professional development.</p>
        </div>

        <div className='flex mt-2'>
          <p className='text-[#A9A9A9] text-lg leading-7'>Currently, I work at Lyxel and Flamingo on advanced full stack projects, focusing on scalable applications and modern frameworks. This experience has helped me grow, take ownership of tasks, and continue evolving as a developer.</p>
          <img src={landfLogo} className='hidden lg:block h-16'/>
        </div>

      </div>

      <div className='flex flex-col items-center gap-4'>
        <span className='font-bold text-3xl border-b-2 uppercase mb-10'>Projects</span>
        
        <div className='grid grid-cols-3 gap-10'>
          
          {
            projects.map(project => <Project item={project}/>)
          }

        </div>
      </div>

    </div>
  )
}
