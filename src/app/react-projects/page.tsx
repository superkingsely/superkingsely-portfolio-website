'use client';
import ProjectCard from '@/components/ProjectCard';
import { useAllprojectstore } from '@/features/allprojects/store'
import { Projectscard } from '@/features/allprojects/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  const{
    allprojectscard
  }=useAllprojectstore()
  const [filterarray,setFilterarray]=useState(allprojectscard)
  const path=usePathname()
  

useEffect(()=>{
  console.log(path)
  setFilterarray(prev=>{
    return prev.filter((obj:Projectscard)=>obj.category===path)
  })
},[allprojectscard])

  return (
    <div>

      <div className='max-w-[1200px] mx-auto ' >
        <div className="title border mt-[50px] flex justify-center text-[40px] capitalize font-[700] ">
          <span>my awesome {path.slice(1)} </span>
        </div>
        <div className="collection bg-[rgba(0,0,0,0.5)]  min-h-[70vh] mt-[20px] gap-[20px] grid grid-cols-1 md:grid-cols-3 p-[20px] ">
          {
            filterarray.map((obj:Projectscard)=>{
              return(

          <Link key={obj.id} href={'/project-details'}>
            <ProjectCard projectTitle={obj.title}/>
          </Link>
              )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default Page