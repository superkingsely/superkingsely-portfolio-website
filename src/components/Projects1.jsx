import React from 'react'
import Title from './Title'
import Image from 'next/image'
import img1 from '../../public/asset2/html-css-js.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Projects1 = () => {

  return (
    <div id='projects' >
        <div className="content max-w-[1200px] mx-auto min-h-[50vh] px-[20px] md:px-[0px] mt-[50px] ">
            <div className="title">
                <Title word1='My Awesome' word2='Projects'/>
            </div>
            <div className="slider  border flex justify-center px-[20px] md:px-[50px] relative mt-[30px] ">
                <div className="slide group relative flex justify-center border w-full max-w-[900px] shadow-lg min-h-[60vh] p-[40px] ">
                    <div className="img max-w-[900px] h-[60vh] ">
                        <Image width={100} height={100} src={img1} alt=''/>
                    </div>
                    <div className="cover absolute bottom-0 w-full transition-all duration-1000 ease-linear h-0 group-hover:h-full bg-[rgba(0,0,0,0.5)] cursor-pointer overflow-hidden  ">
                        <div className="title">
                            <span>HTMl CSS JS Project</span>
                        </div>
                    </div>
                </div>
                <div className="screen-info">
                        <div className="btn left w-[60px] h-[60px] rounded-full shadow flex justify-center items-center absolute left-[20px] top-[28vh] cursor-pointer "> <FaArrowLeft  /> </div>
                        <div className="btn left w-[60px] h-[60px] rounded-full shadow flex justify-center items-center absolute right-[20px] top-[28vh] cursor-pointer "> <FaArrowRight  /> </div>
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