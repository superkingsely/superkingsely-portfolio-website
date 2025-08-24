import React from 'react'
import Title from './Title'
import Image from 'next/image'
import img1 from '../../public/asset2/html-css-js.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const Projects1 = () => {

  return (
    <div id='projects' >
        <div className="content max-w-[1200px] mx-auto min-h-[50vh] px-[20px] md:px-[0px] mt-[50px] ">
            <div className="title">
                <Title word1='My Awesome' word2='Projects'/>
            </div>
            <div className="slider   flex justify-center px-[20px] md:px-[50px] relative mt-[30px] ">
                <div className="slide group relative flex justify-center  w-full max-w-[900px] shadow-lg min-h-[60vh] p-[40px] ">
                    <div className="img max-w-[900px] h-[60vh] ">
                        <Image width={100} height={100} src={img1} alt=''/>
                    </div>
                    
                    <div className="cover absolute bottom-0 w-full transition-all duration-1000 ease-linear h-0 group-hover:h-full bg-[rgba(0,0,0,0.5)] cursor-pointer overflow-hidden  ">
                        <Link href={'/html-css-js'} className='flex flex-col justify-center items-center gap-[20px]  h-[inherit] ' >

                        <div className="title">
                            <span className='text-white md:text-[70px] text-[40px] font-bold ' >HTMl CSS JS Project</span>
                        </div>
                        <div className="description text-white  max-w-[600px] flex justify-center text-center ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor rerum ducimus excepturi consequuntur vel totam, tempore quo itaque quibusdam. Dolor fugit laborum voluptatem quas, nisi excepturi quam! Ipsum, id.
                        </div>
                        <div className="btn w-full flex justify-center ">
                            <button className='bg-white max-w-[400px] md:max-w-[600px]  w-full cursor-pointer  ' >Click To View All ...</button>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="screen-info">
                        <div className="btn left w-[60px] h-[60px] rounded-full shadow-lg flex justify-center items-center absolute left-[20px] top-[28vh] cursor-pointer "> <FaArrowLeft  /> </div>
                        <div className="btn left w-[60px] h-[60px] rounded-full shadow-lg flex justify-center items-center absolute right-[20px] top-[28vh] cursor-pointer "> <FaArrowRight  /> </div>
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