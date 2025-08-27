'use client';
import React, { useEffect } from 'react'
import Title from './Title'
import Image from 'next/image'
import img1 from '../../public/asset2/html-css-js.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { useProjectStore } from '@/features/Projects/store';

const Projects1 = () => {
    
     const {
    projects,
    currentIndex,
    next,
    prev,
    goTo,
    autoSlide,
    stopSlide,
  } = useProjectStore();    
  const project = projects[currentIndex];

//   effect fn
   // Start auto slide on mount
  useEffect(() => {
    autoSlide();
    return () => stopSlide(); // cleanup when unmounted
  }, [autoSlide, stopSlide]);

  return (
    <div id='projects ' >
        <div className="content max-w-[1200px] mx-auto min-h-[50vh] px-[20px] md:px-[0px] mt-[50px] bg-[#eee] py-[100px] ">
            <div className="title">
                <Title word1='My Awesome' word2='Projects'/>
            </div>
            <div className="slider   flex justify-center px-[20px] md:px-[50px] relative mt-[30px] ">
                <div className="slide group relative flex justify-center  w-full max-w-[900px] bg-[white] shadow-lg min-h-[60vh] p-[40px] ">
                    <div className="img max-w-[900px] h-[60vh] ">
                        <Image
                        width={900}
                        height={600}
                        className="object-contain"
                        src={project.image} alt=''
                        />
                    </div>
                    
                    <div className="cover absolute bottom-0 w-full transition-all duration-1000 ease-linear h-full  md:h-0 md:group-hover:h-full bg-[rgba(0,0,0,0.5)] cursor-pointer overflow-hidden z-[300]  ">
                        <Link href={project.url} className='flex flex-col justify-center items-center gap-[20px]  h-[inherit] ' >

                        <div className="title">
                            <span className='text-white md:text-[70px] text-[40px] font-bold ' >{project.name}</span>
                        </div>
                        {/* des */}
                        <div className="description text-white  max-w-[600px] flex justify-center text-center ">
                            {project.des || "No description yet"}
                        </div>
                        <div className="btn w-full flex justify-center ">
                            <button className='bg-white max-w-[400px] md:max-w-[600px]  w-full cursor-pointer  ' >Click To View All ...</button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="screen-info">
                        <div 
                         onClick={prev}
                        className="btn left w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute left-[20px] top-[28vh] cursor-pointer bg-[white] "> <FaArrowLeft  /> </div>
                        <div
                         onClick={next}
                        className="btn left w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute right-[20px] top-[28vh] cursor-pointer bg-[white] "> <FaArrowRight  /> </div>
                        <div className="indicator">
                            <div className="dot  "></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects1