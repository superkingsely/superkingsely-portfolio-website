'use client';
import { useAllprojectstore } from '@/features/allprojects/store'
import React, { useEffect, useState } from 'react'

const Page = () => {
  
  const{
    allprojectscard,allprojectsdetails
  }=useAllprojectstore()
  const [projectObjDetails,setProjectObjDetails]=useState({})

  useEffect(()=>{

  })
  return (
    <div>
      <div className='max-w-[1200px] mx-auto mt-[50px] bg-gray-300 p-[20px] ' >
          <div className="screen">
              <div className="title">project title</div>
              <div className="img w-full border h-[60vh] mt-[20px] ">

              </div>
          </div>
          <div className="des flex justify-center text-center mt-[20px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita?
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