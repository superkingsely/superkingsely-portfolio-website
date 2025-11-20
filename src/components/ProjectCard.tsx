
import React from 'react'
import { StaticImageData } from "next/image"
import { Projectscard } from '@/features/allprojects/types';
// interface Projectcard{
//     projectTitle:string,
//     img:StaticImageData

// }
interface ProjectCardProps {
  data: Projectscard;
}
const ProjectCard = ({data}: ProjectCardProps) => {
  return (
    <div style={{backgroundImage: `url(${data.img.src})`}} className='card border border-[rgba(0,0,0,0.3)]  flex flex-col bg-cover items-center justify-center gap-[20px] rounded-lg h-[200px]'>
            <span className='text-2xl text-amber-300 font-[700] bg-[rgba(0,0,0,0.5)] text-center  px-[30px] py-[10px] ' >{data.title}</span>
            <button className='border py-[3px] px-[30px] cursor-pointer bg-[rgba(0,0,0,0.5)] font-[700] text-amber-300 ' >view project Details</button>
    </div>
  )
}

export default ProjectCard