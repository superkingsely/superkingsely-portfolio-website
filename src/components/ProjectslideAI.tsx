
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

            {/* Project Image */}
            <div className="w-full h-[60vh]">
              <Image
                src={project.image}
                alt={project.name}
                width={900}
                height={600}
                className="w-full h-full object-contain p-6"
              />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-6 cursor-pointer">
              
              <Link href={project.url} className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {project.name}
                </h2>

                <p className="text-white max-w-[600px] text-lg mb-6">
                  {project.des || "Click to explore all projects in this category."}
                </p>

                <button className="bg-white text-black px-8 py-2 rounded-lg shadow font-semibold hover:bg-gray-200">
                  View Category
                </button>
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
