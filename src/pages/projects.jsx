import React from 'react'
import { projects } from '../data'
import Project from '../components/projects/Project'

export default function Projects() {
  return (
    <div className='grid grid-cols-3 gap-10 mb-20'>
          
        {
        projects.map(project => <Project item={project}/>)
        }

    </div>
  )
}
