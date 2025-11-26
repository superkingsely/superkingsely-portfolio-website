
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useProjectStore } from "@/features/Projects/store";
import Title from "./Title";

const ProjectslideAI = () => {
  const {
    projects,
    currentIndex,
    next,
    prev,
    autoSlide,
    stopSlide,
  } = useProjectStore();

  const project = projects[currentIndex];

  useEffect(() => {
    autoSlide();
    return () => stopSlide();
  }, [autoSlide, stopSlide]);

  if (!project) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        Loading Projects…
      </div>
    );
  }

  return (
    <div id="projects" className="py-[80px] bg-[#f5f7fa]">
      <div className="max-w-[1200px] mx-auto px-[20px]">

        <Title word1="My Awesome" word2="Projects" />

        {/* Slider Wrapper */}
        <div className="relative mt-[40px]">

          {/* Slide */}
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group bg-white shadow-xl rounded-xl overflow-hidden min-h-[60vh]"
          >

           {/* Image */}
<div className="img w-full h-[250px] sm:h-[350px] md:h-[60vh] flex justify-center items-center">
  <Image
    src={project.image}
    alt={project.name}
    width={900}
    height={600}
    className="object-contain w-full h-full"
    priority
  />
</div>

{/* Overlay */}
<div className="cover absolute inset-0 h-full 
    md:h-0 md:group-hover:h-full 
    transition-all duration-700 bg-black/50 
    z-[300] px-[20px] sm:px-[40px] cursor-pointer">

  <Link href={project.url} className="flex flex-col justify-center items-center gap-5 h-full">
    <span className="text-white text-[32px] sm:text-[50px] md:text-[70px] font-bold">
      {project.name}
    </span>

    <p className="text-white max-w-[600px] text-center">
      {project.des || "No description yet"}
    </p>

    <div className="bg-white text-black px-6 py-2 rounded-md shadow-md">
      Click To View All ...
    </div>
  </Link>

</div>


          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg h-[50px] w-[50px] rounded-full flex items-center justify-center hover:bg-gray-100"
          >
            <FaArrowRight />
          </button>

        </div>

        {/* View All */}
        <div className="mt-[40px] flex justify-center">
          <Link
            href="/all-projects"
            className="bg-black text-white px-10 py-3 rounded-lg shadow hover:bg-gray-800"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectslideAI;
