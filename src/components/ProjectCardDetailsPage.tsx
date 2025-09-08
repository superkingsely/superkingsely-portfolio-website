'use client';
import { useAllprojectstore } from '@/features/allprojects/store'
import { projectsdetail } from '@/features/allprojects/types';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ProjectCardDetailsPage = () => {
  // <projectsdetail|any>
  const{
    allprojectsdetails
  }=useAllprojectstore()
  const [projectObjDetails,setProjectObjDetails]=useState<projectsdetail>({} as projectsdetail)
  const params=useParams()

  useEffect(()=>{
    const filterobj=allprojectsdetails.filter((obj:projectsdetail)=>{
      return obj.id.toString()===params.id
    })

    console.log(params,filterobj)
    setProjectObjDetails({...filterobj[0]})
  },[])
  return (
    <div>
      <div className='max-w-[1200px] mx-auto my-[50px] bg-[rgba(0,0,0,0.05)] p-[20px] ' >
          <div className="screen">
              <div className="title text-2xl ">{projectObjDetails.title}</div>
              <div className="img w-full border h-[60vh] mt-[20px] ">
                  <Image priority  src={projectObjDetails.img || "/fallback.png"} alt='image' width={600} height={300} />
              </div>
          </div>
          <div className="des flex justify-center text-center mt-[20px] ">
            <span>{projectObjDetails.des}

             <Link target='_blank' className='text-blue-500'  href={`${projectObjDetails.src}`}> Read More (readMe File)...</Link>
            </span>
           
              
          </div>
          <div className="btn  flex gap-[10px] mt-[20px] ">
              <Link target="_blank" className={`flex-1 border flex justify-center bg-blue-300 py-[5px] font-[700] `} href={`${projectObjDetails.src}`}>SRC</Link>
              <Link target="_blank"  className={`flex-1 border  justify-center bg-green-300 py-[5px] font-[700] ${projectObjDetails.live===''?'hidden':'flex'} `} href={`${projectObjDetails.live}`}>LIVE</Link>
          </div>
      </div>
    </div>
  )
}

export default ProjectCardDetailsPage