'use client';
import { useAllprojectstore } from '@/features/allprojects/store'
import { projectsdetail } from '@/features/allprojects/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
  
  const{
    allprojectscard,allprojectsdetails
  }=useAllprojectstore()
  const [projectObjDetails,setProjectObjDetails]=useState<projectsdetail|any>({})
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
      <div className='max-w-[1200px] mx-auto mt-[50px] bg-gray-300 p-[20px] ' >
          <div className="screen">
              <div className="title">{projectObjDetails.title}</div>
              <div className="img w-full border h-[60vh] mt-[20px] ">

              </div>
          </div>
          <div className="des flex justify-center text-center mt-[20px] ">
            {projectObjDetails.des}
              
          </div>
          <div className="btn  flex gap-[10px] mt-[20px] ">
              <button className='border flex-1 ' >SRC</button>
              <button className='border flex-1 ' >LIVE</button>
          </div>
      </div>
    </div>
  )
}

export default Page