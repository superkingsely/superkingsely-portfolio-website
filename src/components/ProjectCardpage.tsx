"use client";

import ProjectCard from "@/components/ProjectCard";
import { useAllprojectstore } from "@/features/allprojects/store";
import { Projectscard } from "@/features/allprojects/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectCardpage = () => {
  const { allprojectscard } = useAllprojectstore();
  const path = usePathname();

  const [filtered, setFiltered] = useState<Projectscard[]>([]);

  useEffect(() => {
    if (!path || allprojectscard.length === 0) return;

    // Extract category from pathname
    // Example: "/react-projects" → "react-projects"
    const category = path.split("/")[1];

    console.log("PATH:", path);
    console.log("CATEGORY:", category);
    console.log("ALL CARDS:", allprojectscard);

    // Filter cards by category
    const arr = allprojectscard.filter(
      (obj: Projectscard) => obj.category === category
    );

    setFiltered(arr);
  }, [path, allprojectscard]);

  return (
    <div className="py-[40px] bg-gray-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-[20px]">

        {/* PAGE TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold text-center bg-white shadow p-4 rounded-lg capitalize">
          {path.replace("/", "")} Collection
        </h1>

        {/* GRID */}
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[25px]">

          {filtered.length === 0 && (
            <p className="text-center w-full col-span-full text-gray-500 text-xl">
              No projects found for this category.
            </p>
          )}

          {filtered.map((obj) => (
            <Link
              key={obj.id}
              href={`/${obj.category}/${obj.id}`}
              className="block hover:scale-[1.03] transition-all"
            >
              <div className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl border border-gray-200">
                <ProjectCard data={obj} />
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ProjectCardpage;













// 'use client';
// import ProjectCard from '@/components/ProjectCard';
// import { useAllprojectstore } from '@/features/allprojects/store'
// import { Projectscard } from '@/features/allprojects/types';
// import Link from 'next/link';
// import { useParams, usePathname } from 'next/navigation';
// import React, { useEffect, useState } from 'react'

// const ProjectCardpage = () => {
//   const{
//     allprojectscard
//   }=useAllprojectstore()
//   const [filterarray,setFilterarray]=useState(allprojectscard)
//   const path=usePathname()
//   const param=useParams()
  

// useEffect(()=>{
//   console.log(path,param,allprojectscard,'net come on')
//   setFilterarray(prev=>{
//     return prev.filter((obj:Projectscard)=>obj.category===path)
//   })
// },[])

//   return (
//     <div>

//       <div className='max-w-[1200px] mx-auto ' >
//         <div className="title   mt-[50px] flex justify-center text-3xl md:text-[40px] capitalize font-[700] text-[rgba(66,66,66,0.99)] bg-white shadow-lg py-[10px] ">
//           <span className='text-center' >my awesome {path.slice(1)} </span>
//         </div>
//         <div className="collection bg-[rgba(0,0,0,0.05)]  min-h-[70vh] mt-[20px] gap-[20px] grid grid-cols-1 md:grid-cols-3 p-[20px] shadow-lg ">
//           {
//             filterarray.map((obj:Projectscard)=>{
//               return(

//           <Link key={obj.id} href={`${obj.category}/${obj.id}`} className='border-8 border-amber-300' >
//             <ProjectCard  data={obj} />
//           </Link>
//               )
//             })
//           }
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProjectCardpage