import React from 'react'
import js from '../assets/logo/js.svg'
import bootstrap from '../assets/logo/bootstrap.svg'
import git from '../assets/logo/git.svg'
import java from '../assets/logo/java.svg'
import kotlin from '../assets/logo/kotlin.svg'
import mongodb from '../assets/logo/mongodb.svg'
import nextjs from '../assets/logo/nextjs.svg'
import nodejs from '../assets/logo/nodejs.svg'
import react from '../assets/logo/react.svg'
import tailwind from '../assets/logo/tailwind.svg'
import SkillItem from '../components/ui/SkillItem'

export default function About() {

  const skills = [
    {label : 'Javascript',icon : js},
    {label : 'React',icon : react},
    {label : 'NextJs',icon : nextjs},
    {label : 'NodeJs',icon : nodejs},
    {label : 'Tailwind',icon : tailwind},
    {label : 'Bootstrap',icon : bootstrap},
    {label : 'MongoDb',icon : mongodb},
    {label : 'Git',icon : git},
    {label : 'Java',icon : java},
    {label : 'Kotlin',icon : kotlin},
  ]

  return (
    <div id='about-me-section' className='flex flex-col items-center gap-4'>
      
      <p className='text-[#A9A9A9] text-xl leading-7'>I am a passionate full-stack developer with a strong foundation in building both web and mobile applications. My journey in tech began with app development in Java and Kotlin, later evolving into hybrid app development with React Native, and eventually into full-fledged website development using modern JavaScript frameworks. This diverse experience has helped me adapt quickly to new technologies and create user-focused solutions.</p>
      
      <p className='text-[#A9A9A9] text-xl leading-7 mt-2'>At my first company, BOXL Technologies, I worked as a Junior Web Developer where I honed my skills in React.js, Node.js, and backend API integrations. My role exposed me to real-world client projects, where I learned the importance of writing clean, maintainable code and collaborating with cross-functional teams to deliver products on time.</p>

      <p className='text-[#A9A9A9] text-xl leading-7 mt-2'>Currently, I am working at Lyxel and Flamingo, where I continue to grow as a developer by tackling challenging projects that push me to refine my technical expertise. Here, I have been able to apply my frontend and backend knowledge to build scalable applications, while also keeping a strong focus on user experience and performance optimization.</p>

      <p className='text-[#A9A9A9] text-xl leading-7 mt-2'>Beyond my professional work, I enjoy experimenting with side projects that combine creativity with functionality. From building test and quiz platforms for competitive exams like NEET and JEE, to developing habit-tracking and real estate platforms, I constantly look for ways to solve real problems with code. These projects not only sharpen my technical skills but also fuel my passion for creating tools that people actually use.</p>

      <div className='flex flex-col items-center mt-10'>
        <span className='font-bold text-3xl uppercase mb-10'>Skills</span>
        <div className='grid grid-cols-5 gap-5'>
          {
            skills.map(item => <SkillItem item={item}/>)
          }

        </div>
      </div>

    </div>
  )
}
