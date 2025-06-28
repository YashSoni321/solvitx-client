"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Ecommerce from "../../public/images/ecommerce.jpg";
import Banking from "../../public/images/banking.jpg";
import Dashboard from "../../public/images/dashboard.jpg";
import Home from "../../public/images/home.jpg";
import Healthcare from "../../public/images/healthcare.jpg";
import Education from "../../public/images/education.jpg";
import SectionHeading from "../common/SectionHeading";
import SectionContent from "../common/SectionContent";
import Slider from "react-slick";
import { sliderSettings } from "./StageOfWork";

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
    src: "/images/projects/ecommerce.jpg",
    alt: "E-commerce Platform",
    category: "Web Development",
    link: "/projects/ecommerce",
  },
  {
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication.",
    src: Banking,
    alt: "Mobile Banking App",
    category: "Mobile App",
    link: "/projects/banking",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time business analytics with AI-driven insights and predictive modeling.",
    src: Dashboard,
    alt: "Analytics Dashboard",
    category: "AI/ML",
    link: "/projects/analytics",
  },
  {
    title: "Smart Home Automation",
    description:
      "IoT-based home automation system with voice control and energy optimization.",
    src: Home,
    alt: "Smart Home Automation",
    category: "IoT",
    link: "/projects/smart-home",
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform for patient management and telemedicine.",
    src: Healthcare,
    alt: "Healthcare System",
    category: "Healthcare",
    link: "/projects/healthcare",
  },
  {
    title: "Educational Platform",
    description:
      "Interactive learning platform with virtual classrooms and progress tracking.",
    src: Education,
    alt: "Educational Platform",
    category: "Education",
    link: "/projects/education",
  },
];

const OurWorks = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial="hidden" whileInView="visible">
        <SectionHeading
          title="Our Works"
          description="We let our work speak for itself. Explore our portfolio to see how we turn ideas into results, creativity into impact, and vision into awards."
          theme="dark"
          titleSize="large"
        />
      </motion.div>

      {/* Grid for md+ and Carousel for sm */}
      <div className="mt-12">
        {/* For mobile view - Carousel */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <motion.div className="group relative overflow-hidden rounded-xl bg-white">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute top-4 right-4 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm z-10">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* For tablet/desktop - Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-2xl bg-white"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3}
                />
                <div className="absolute top-4 right-4 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm z-10">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurWorks;
