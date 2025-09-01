import React from 'react'

interface Projectcard{
    projectTitle:string,

}
const ProjectCard = ({projectTitle}:Projectcard) => {
  return (
    <div className="card bg-[white]   flex flex-col items-center justify-center gap-[20px] rounded-lg h-[200px] ">
            <span className='text-2xl' >{projectTitle}</span>
            <button className='border py-[3px] px-[30px] cursor-pointer ' >view project Details</button>
    </div>
  )
}

export default ProjectCard