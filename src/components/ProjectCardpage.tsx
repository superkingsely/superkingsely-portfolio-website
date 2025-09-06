'use client';
import ProjectCard from '@/components/ProjectCard';
import { useAllprojectstore } from '@/features/allprojects/store'
import { Projectscard } from '@/features/allprojects/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProjectCardpage = () => {
  const{
    allprojectscard
  }=useAllprojectstore()
  const [filterarray,setFilterarray]=useState(allprojectscard)
  const path=usePathname()
  const param=useParams()
  

useEffect(()=>{
  console.log(path,param)
  setFilterarray(prev=>{
    return prev.filter((obj:Projectscard)=>obj.category===path)
  })
},[allprojectscard])

  return (
    <div>

      <div className='max-w-[1200px] mx-auto ' >
        <div className="title  mt-[50px] flex justify-center text-3xl md:text-[40px] capitalize font-[700] text-[rgba(66,66,66,0.99)] bg-white shadow-lg py-[10px] ">
          <span>my awesome {path.slice(1)} </span>
        </div>
        <div className="collection bg-[rgba(0,0,0,0.05)]  min-h-[70vh] mt-[20px] gap-[20px] grid grid-cols-1 md:grid-cols-3 p-[20px] shadow-lg ">
          {
            filterarray.map((obj:Projectscard)=>{
              return(

          <Link key={obj.id} href={`${obj.category}/${obj.id}`} className='' >
            <ProjectCard projectTitle={obj.title} img={obj.img}  />
          </Link>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default ProjectCardpage