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

        <div className='relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center lg:items-start'>

          <div className='flex flex-col lg:items-start px-4 sm:px-6 md:px-10 gap-3 md:gap-4 lg:gap-5 mt-8 lg:mt-30'>
            <span className="uppercase font-bold text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] text-center lg:text-start">Hi, I'm Sumit</span>

            <span className="uppercase font-bold leading-tight block text-[36px] sm:text-[44px] md:text-[52px] xl:text-[60px] text-center lg:text-start">I'm a Full Stack <br /> Web Developer</span>

            <span className="text-[#A9A9A9] home-header-msm-hidden text-[12px] sm:text-[14px] md:text-[15px] xl:text-[16px] leading-relaxed text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet mattis.</span>

            <span className="text-[#A9A9A9] home-header-msm-block text-[12px] sm:text-[14px] md:text-[15px] xl:text-[16px] leading-relaxed text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nunc vulputate libero et velit interdum, ac aliquet mattis.</span>

            <Link to={"/projects"} className="inline-block w-max bg-[#F8F7F9] text-[#1F1F1F] font-bold uppercase text-[12px] sm:text-[14px] md:text-[15px] xl:text-[16px] px-4 py-2 mt-3 rounded-md text-center hover:!no-underline mx-auto lg:ms-0">View my projects</Link>
          </div>

          <img src={homeWhiteBg} className='block w-full lg:absolute max-w-[450px] lg:right-[-100px] lg:max-w-[600px] lg:ml-30 mt-10'/>

        </div>
        
      </div>

      {/* Scroll Down Button */}
      <div className='flex items-center justify-center bg-[#1F1F1F] hover:bg-[#F8F7F9] hover:text-[#1F1F1F] w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full shadow-[4px_12px_24px_rgba(248,247,249,0.1),0px_0px_8px_rgba(248,247,249,0.08)] mt-14 md:mt-18 lg:mt-60 mb-14 md:mb-16 lg:mb-20 float-animation cursor-pointer transition-colors duration-500 ease-in-out' onClick={scrollToAboutMe}>
        <i className='pi pi-arrow-down text-base md:text-md lg:text-lg' style={{WebkitTextStrokeWidth : '1.5px'}}></i>
      </div>

      {/* About Me */}
      <div id="about-me-section" className="flex flex-col items-center gap-6 mb-8 md:mb-15 lg:mb-20 text-center md:text-left">
        {/* Heading */}
        <span className="font-bold uppercase border-b-2 text-xl md:text-2xl lg:text-3xl mb-1 md:mb-4 lg:mb-6">About me</span>

        <div className='text-sm md:text-base lg:text-lg'>
          <p className="text-[#A9A9A9] max-w-3xl">
            I am a Full Stack Developer who enjoys building complete applications,
            from user-friendly frontends to robust backends. I love solving problems
            and creating digital solutions that are clean, responsive, and impactful.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 max-w-4xl">
            <img src={boxlLogo} className="hidden md:block h-14 md:h-16" />
            <p className="text-[#A9A9A9]">
              I started my career at Boxl Technologies as a Junior Web Developer,
              where I gained hands-on experience with real projects, built responsive
              websites, and worked with APIs. This role gave me a strong foundation
              in professional development.
            </p>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-4 mt-4 max-w-4xl">
            <img src={landfLogo} className="hidden md:block h-14 md:h-16" />
            <p className="text-[#A9A9A9]">
              Currently, I work at Lyxel and Flamingo on advanced full stack
              projects, focusing on scalable applications and modern frameworks. This
              experience has helped me grow, take ownership of tasks, and continue
              evolving as a developer.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-6'>
        <span className='font-bold text-xl md:text-2xl lg:text-3xl border-b-2 uppercase mb-1 md:mb-4 lg:mb-6'>Projects</span>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          
          {
            projects.map(project => <Project item={project}/>)
          }

        </div>
      </div>

    </div>
  )
}
