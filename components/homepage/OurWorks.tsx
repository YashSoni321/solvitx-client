import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Bg1 from "../../public/images/bg1.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const projects = [
  {
    title: "Magnetic AI",
    description:
      "European B2B AI Specializing in E-Commerce and Fintech Solutions",
    src: Bg1,
    alt: "iPhone 14 Pro mockup with text 'PASTE DESIGN HERE' on a purple background",
  },
  {
    title: "Chip Systems",
    description:
      "European B2B AI Specializing in E-Commerce and Fintech Solutions",
    src: Bg1,
    alt: "Tablet mockup with text 'CREATOOM' and abstract design on a purple background",
  },
  {
    title: "Chip Systems",
    description:
      "European B2B AI Specializing in E-Commerce and Fintech Solutions",
    src: Bg1,
    alt: "Minimalistic design with a dark background and a round table",
  },
  {
    title: "Chip Systems",
    description:
      "European B2B AI Specializing in E-Commerce and Fintech Solutions",
    src: Bg1,
    alt: "Phone mockup with text 'European Space Week 2022' on a dark background",
  },
];

const OurWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className=" "
      >
        <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={fadeInUp}
            className="text-6xl md:text-8xl text-start font-bold leading-tight"
          >
            <p>Our Works</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="tracking-wide text-base/8 md:text-5xl font-bold">
              We let our work speak for itself. Explore our portfolio{" "}
              <span className="text-gray-400">
                to see how we turn ideas into results, creativity into impact,
                and vision into awards.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="group relative overflow-hidden rounded-xl   transition-shadow duration-300"
          >
            {/* Image with hover zoom */}
            <div className="overflow-hidden">
              <Image
                src={project.src}
                alt={project.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                height={800}
                width={600}
              />
            </div>

            {/* Info Section */}
            {(project.title || project.description) && (
              <div className="p-4 bg-white bg-opacity-90 backdrop-blur-md">
                {project.title && (
                  <p className="text-xl font-bold leading-tight">
                    {project.title}
                  </p>
                )}
                {project.description && (
                  <p className="text-sm font-medium text-gray-600">
                    {project.description}
                  </p>
                )}
              </div>
            )}

            {/* Hover + Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-black hover:text-white transition-colors duration-300 text-3xl font-bold">
                +
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex justify-center mt-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="relative px-6 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-lg overflow-hidden group transition-all duration-300">
          <span className="relative z-10">View More</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
        </button>
      </motion.div>
    </div>
  );
};

export default OurWorks;
