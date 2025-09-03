
import React from 'react'
import { StaticImageData } from "next/image"
interface Projectcard{
    projectTitle:string,
    img:StaticImageData

}
const ProjectCard = ({projectTitle,img}:Projectcard) => {
  return (
    <div style={{backgroundImage: `url(${img.src})`}} className='card  flex flex-col items-center justify-center gap-[20px] rounded-lg h-[200px]'>
            <span className='text-2xl text-amber-300  ' >{projectTitle}</span>
            <button className='border py-[3px] px-[30px] cursor-pointer bg-[rgba(0,0,0,0.2)] font-[700] text-amber-300 ' >view project Details</button>
    </div>
  )
}

export default ProjectCard