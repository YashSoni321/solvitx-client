"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Ecommerce from "../../public/images/ecommerce.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce solution with advanced inventory management and payment integration.",
    src: Ecommerce,
    alt: "E-commerce Platform",
    category: "Web Development",
    link: "/projects/ecommerce",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication.",
    src: "/images/banking.jpg",
    alt: "Mobile Banking App",
    category: "Mobile App",
    link: "/projects/banking",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time business analytics with AI-driven insights and predictive modeling.",
    src: "/images/dashboard.jpg",
    alt: "Analytics Dashboard",
    category: "AI/ML",
    link: "/projects/analytics",
  },
  {
    title: "Smart Home Automation",
    description:
      "IoT-based home automation system with voice control and energy optimization.",
    src: "/images/home.jpg",
    alt: "Smart Home Automation",
    category: "IoT",
    link: "/projects/smart-home",
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform for patient management and telemedicine.",
    src: Ecommerce,
    alt: "Healthcare System",
    category: "Healthcare",
    link: "/projects/healthcare",
  },
  {
    title: "Educational Platform",
    description:
      "Interactive learning platform with virtual classrooms and progress tracking.",
    src: Ecommerce,
    alt: "Educational Platform",
    category: "Education",
    link: "/projects/education",
  },
];

const OurWorks = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className=""
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            custom={index}
            className="group relative overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-2xl bg-white"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 3}
              />
              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm z-10">
                {project.category}
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.link}
                className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <button className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-black hover:text-white transition-colors duration-300 text-2xl font-bold opacity-0 group-hover:opacity-100">
                +
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/projects"
          className="relative px-8 py-4 text-lg font-semibold text-white bg-black rounded-full shadow-lg overflow-hidden group transition-all duration-300"
        >
          <span className="relative z-10">View All Projects</span>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>
      </motion.div>
    </div>
  );
};

export default OurWorks;
