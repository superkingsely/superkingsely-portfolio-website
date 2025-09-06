// 'use client';
// import React, { useEffect } from 'react'
// import Title from './Title'
// import Image from 'next/image'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// import Link from 'next/link'
// import { useProjectStore } from '@/features/Projects/store';

// const Projects1 = () => {
    
//      const {
//     projects,
//     currentIndex,
//     next,
//     prev,
//     goTo,
//     autoSlide,
//     stopSlide,
//   } = useProjectStore();    
//   const project = projects[currentIndex];

// //   effect fn
//    // Start auto slide on mount
//   useEffect(() => {
//     autoSlide();
//     return () => stopSlide(); // cleanup when unmounted
//   }, [autoSlide, stopSlide]);

//   return (
//     <div id='projects' >
//         <div className="content max-w-[1200px] mx-auto min-h-[50vh] px-[20px] md:px-[0px] mt-[50px] bg-[#eee] py-[100px] ">
//             <div className="title">
//                 <Title word1='My Awesome' word2='Projects'/>
//             </div>
//             <div className="slider   flex justify-center px-[20px] md:px-[50px] relative mt-[30px] ">
//                 <div className="slide group relative flex justify-center  w-full max-w-[900px] bg-[white] shadow-lg min-h-[60vh] p-[40px] ">
//                     <div className="img max-w-[900px] h-[60vh] ">
//                         <Image
//                         width={900}
//                         height={600}
//                         className="object-contain"
//                         src={project.image} alt=''
//                         />
//                     </div>
                    
//                     <div className="cover absolute bottom-0 w-full transition-all duration-1000 ease-linear h-full  md:h-0 md:group-hover:h-full bg-[rgba(0,0,0,0.5)] cursor-pointer overflow-hidden z-[300]  ">
//                         <Link href={project.url} className='flex flex-col justify-center items-center gap-[20px]  h-[inherit] ' >

//                         <div className="title">
//                             <span className='text-white md:text-[70px] text-[40px] font-bold ' >{project.name}</span>
//                         </div>
//                         {/* des */}
//                         <div className="description text-white  max-w-[600px] flex justify-center text-center ">
//                             {project.des || "No description yet"}
//                         </div>
//                         <div className="btn w-full flex justify-center ">
//                             <button className='bg-white max-w-[400px] md:max-w-[600px]  w-full cursor-pointer  ' >
//                                 <Link href={project.url} className='z-[500] w-full py-[5px]  ' >Click To View All ...</Link>
//                             </button>
//                         </div>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="screen-info">
//                         <div 
//                          onClick={prev}
//                         className="btn left w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute left-[20px] top-[28vh] cursor-pointer bg-[white] "> <FaArrowLeft  /> </div>
//                         <div
//                          onClick={next}
//                         className="btn left w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute right-[20px] top-[28vh] cursor-pointer bg-[white] "> <FaArrowRight  /> </div>
//                         <div className="indicator">
//                             <div className="dot  "></div>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Projects1


'use client';
import React, { useEffect } from 'react'
import Title from './Title'
import Image from 'next/image'
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

  // Prevent hydration mismatch: if no project yet, render fallback
  if (!project) {
    return (
      <div id="projects" className="flex justify-center items-center min-h-[50vh]">
        <p>Loading projects...</p>
      </div>
    );
  }

  // Start auto slide on mount
  useEffect(() => {
    autoSlide();
    return () => stopSlide();
  }, [autoSlide, stopSlide]);

  return (
    <div id="projects">
      <div className="content max-w-[1200px] mx-auto min-h-[50vh] px-[20px] md:px-0 mt-[50px] bg-[#eee] py-[100px]">
        <div className="title">
          <Title word1="My Awesome" word2="Projects" />
        </div>

        <div className="slider flex justify-center px-[20px] md:px-[50px] relative mt-[30px]">
          <div className="slide group relative flex justify-center w-full max-w-[900px] bg-white shadow-lg min-h-[60vh] p-[40px]">
            
            {/* Project image */}
            <div className="img max-w-[900px] h-[60vh]">
              <Image
                width={900}
                height={600}
                className="object-contain"
                src={project.image}
                alt={project.name || "Project image"}
              />
            </div>

            {/* Overlay */}
            <div className="cover absolute bottom-0 w-full transition-all duration-1000 ease-linear h-full md:h-0 md:group-hover:h-full bg-[rgba(0,0,0,0.5)] cursor-pointer overflow-hidden z-[300] px-[50px] ">
              <Link href={project.url} className="flex flex-col justify-center items-center gap-[20px] h-full">
                
                <div className="title">
                  <span className="text-white md:text-[70px] text-[40px] font-bold">
                    {project.name}
                  </span>
                </div>

                {/* Description */}
                <div className="description text-white max-w-[600px] flex justify-center text-center">
                  {project.des || "No description yet"}
                </div>

                {/* Button */}
                <div className="btn w-full flex justify-center bg-white ">
                  {/* <Link
                    href={project.url}
                    className="bg-white max-w-[600px] w-full text-center py-[5px] font-medium"
                  >
                  Click To View All ...
                  </Link> */}
                  Click To View All ...
                </div>

              </Link>
            </div>
          </div>

          {/* Controls */}
          <div className="screen-info">
            <div
              onClick={prev}
              className="btn left w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute left-[20px] top-[28vh] cursor-pointer bg-white z-[400] "
            >
              <FaArrowLeft />
            </div>

            <div
              onClick={next}
              className="btn right w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full shadow-lg flex justify-center items-center absolute right-[20px] top-[28vh] cursor-pointer bg-white z-[400] "
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="btn mt-[30px] flex justify-center ">
          <Link className='border max-w-[300px] bg-white w-full text-center py-[3px] '  href={'/all-projects'}>View All Projects</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects1
