"use client"; // if you’re using Next.js App Router
import Link from 'next/link'

import React, { useEffect } from "react";
import { useNavStore, navItems } from "../features/header/store"; // adjust path
import { FiMenu } from 'react-icons/fi';
import { useIsMobile } from '@/hooks/Ismobile';

const Header = () => {
    const { active, setActive, isSidebarOpen, toggleSidebar } = useNavStore();
    const isMobile = useIsMobile();
    // fn
   

//     useEffect(()=>{
//         console.log(active)
//     },[active])

//     useEffect(() => {

//   if (typeof window !== "undefined" && window.innerWidth<700 ) {
//     console.log("width:", window.innerWidth,'effect');
//   }else{
//     toggleSidebar(false)
//     console.log('desktop');
    
//   }
// }, [window.innerWidth]);
  return (
    <header className='sticky top-0 z-[999]'>
        <div className="header-content min-h-[10vh] max-w-[1200px] mx-auto flex justify-between items-center  relative px-[20px] md:px-[0px] bg-white ">
            <span className="logo">Superking</span>

            <nav onClick={toggleSidebar} className={`absolute md:static md:h-[10vh] top-0  transition-all duration-1000 ease-linear right-0 overflow-hidden ${isSidebarOpen?'w-[50vw] bg-gray-200 ':'w-[0vw] '} md:w-full md:bg-white h-[100vh] `} >
                <ul className={` mt-[15vh] md:mt-[0] flex flex-col gap-[20px] md:flex-row md:justify-end md:items-center md:h-[10vh] `} >
                   {
                    navItems.map(item=>{
                        return(
                            <li className='' key={item.name} >
                                <Link 
                                onClick={()=>{
                                    setActive(item);
                                    toggleSidebar;
                                }}
                                className=' w-[100%] flex justify-center py-[5px] ' href={item.id} >{item.name}</Link>
                            </li>
                        )
                    })
                   }
                </ul>
            </nav>
            <span onClick={toggleSidebar} className=" md:hidden cursor-pointer "> <FiMenu/> </span>
        </div>
    </header>
  )
}

export default Header