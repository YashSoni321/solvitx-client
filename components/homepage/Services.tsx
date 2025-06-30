"use client";
import React, { useState, useEffect, useRef } from "react";
import AppDevelopmentImage from "../../public/images/services/AppDevelopment.jpg";
import DigitalMarketingImage from "../../public/images/services/Digitalmarketing.jpg";
import SoftwareDevelopmentImage from "../../public/images/services/SoftwareDevelopment.jpg";
import WebDevelopmentImage from "../../public/images/services/WebDevelopment.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  FaArrowRight,
  FaLightbulb,
  FaPencilRuler,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import Link from "next/link";
import { useRouter } from "next/router";

// Enhanced service data with icons and more details
const services = [
  {
    id: "Web-Development",
    title: "Web Development",
    icon: <FaPencilRuler className="text-pink-500 text-3xl" />,
    shortDesc: "",
    content:
      "Lightning fast, functional, responsive websites tailored to your brand and business goals- built to perform.",
    link: "/webdevelopment",
    benefits: ["Ecommerce Website Development"],
    imageUrl: WebDevelopmentImage,
    color: "from-pink-600 to-purple-600",
  },
  {
    id: "App-Development",
    title: "App Development",
    icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    shortDesc: "",
    link: "/appdevelopment",
    content:
      " Let your ideas reach out to the mass with our interactive apps that deliver seamless user experience and real results.",
    benefits: [
      "IOS App Development",
      "Android App Development",
      "API Development",
    ],
    imageUrl: AppDevelopmentImage,
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    link: "/digitalmarketing",
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    shortDesc: "",
    content:
      "Take a leap in your digital presence with our strategic digital marketing services. We create visibility, drive engagement, and deliver results that cuts through noise and drives growth",
    benefits: [
      "SEO Services",
      "SMM Services",
      "PPC Marketing Services",
      "ASO Services",
      "Brand Development",
      "Video Editing",
      "Content Marketing",
      ,
    ],
    imageUrl: DigitalMarketingImage,
    color: "from-blue-600 to-teal-500",
  },
  {
    id: "Software-Development",
    title: "Software Development",
    link: "/softwaredevelopment",
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    shortDesc: "",
    content:
      "Channelise all your work through a single software system. If you can think of it, we can build it for you.",
    benefits: [
      " Salesforce Development",
      "School Management Software",
      "Hotel Management Software",
      "Online Recruitment Software",
      "HRM Software Development",

      ,
    ],
    imageUrl: SoftwareDevelopmentImage,
    color: "from-pink-600 to-purple-600",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const router = useRouter();

  // Detect when components are in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scrollYProgress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax and scale effects
  const headerY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const servicesScale = useTransform(smoothProgress, [0.2, 0.4], [0.8, 1]);
  const servicesOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);

  // Automatic rotation if no user interaction
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (hoveringItem === null) {
  //       setActiveService((prev) => (prev + 1) % services.length);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [hoveringItem]);

  // Background particles

  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveService((prevValue) => {
  //       // logic 
  //       if(prevValue >= 4){
  //         return 1
  //       }else{
  //         return prevValue + 1
  //       }
  //     })
  //   }, 2000);
  // }, [])
  

  const particleCount = 30;
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.2,
    speedY: (Math.random() - 0.5) * 0.2,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <section
      className="bg-gradient-to-b from-black to-gray-900 relative overflow-hidden py-20"
      ref={containerRef}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            // style={{
            //   x: `${particle.x}%`,
            //   y: `${particle.y}%`,
            //   width: `${particle.size}px`,
            //   height: `${particle.size}px`,
            //   opacity: particle.opacity,
            // }}
            // animate={{
            //   x: [`${particle.x}%`, `${particle.x + particle.speedX * 100}%`],
            //   y: [`${particle.y}%`, `${particle.y + particle.speedY * 100}%`],
            // }}
            // transition={{
            //   duration: 15 + (particle.id % 10),
            //   repeat: Infinity,
            //   repeatType: "reverse",
            //   ease: "linear",
            // }}
          />
        ))}
      </div>

      {/* Header - "GROW SERVICES" */}
      <motion.div
        // style={{ y: headerY, o }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="text-center">
          {/* <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 mb-8 tracking-tighter"
          >
            SERVICES
          </motion.h2> */}
          <SectionHeading
            title="Services"
            description="We Bring Tech + Strategy Together, Seamlessly, building solutions that create an impact"
            theme="gradient"
            titleSize="large"
          />
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We Bring Tech + Strategy Together, Seamlessly, building solutions
            that create an impact
          </motion.p> */}
        </div>
      </motion.div>

      {/* Main Services Content */}
      <motion.div
        style={{ scale: servicesScale, opacity: servicesOpacity }}
        className="container mx-auto px-4 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Navigation */}

          <div className="lg:col-span-2">
            <div className="sticky top-32">
              {/* <h3 className="text-2xl text-white mb-8 font-bold">
                Our Expertise
              </h3> */}

              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    onClick={() => {
                      setActiveService(index);
                    }}
                    onMouseEnter={() => setHoveringItem(index)}
                    onMouseLeave={() => setHoveringItem(null)}
                    className={`cursor-pointer p-6 rounded-xl transition-all duration-400 ${
                      activeService === index
                        ? `bg-gradient-to-r ${service.color} shadow-lg shadow-${
                            service.color.split(" ")[0]
                          }/20`
                        : "bg-gray-900/40 hover:bg-gray-800/60"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          activeService === index
                            ? "bg-white/20"
                            : "bg-gray-800"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {service.shortDesc}
                        </p>

                        {activeService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                          >
                            <ul className="grid grid-cols-2 gap-2 mt-4">
                              {service.benefits.map((benefit, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-white text-sm font-bold"
                                >
                                  <span className="mr-2 text-xs">●</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>

                            <motion.button
                              whileHover={{ x: 5 }}
                              className="mt-6 flex items-center text-white text-sm font-medium"
                            >
                              <Link href={service.link}>Learn more</Link>
                              <FaArrowRight className="ml-2 text-xs" />
                            </motion.button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Showcase */}
          <div className="lg:col-span-3" ref={galleryRef}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                      className="w-full h-full"
                    >
                      {/* <img
                        src={services[activeService].imageUrl}
                        alt={services[activeService].title}
                        className="w-full h-full object-cover"
                      /> */}
                      <Image
                        src={services[activeService].imageUrl}
                        alt={services[activeService].title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${services[activeService].color} opacity-60 mix-blend-multiply`}
                      ></div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-12 z-10">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-4xl font-bold text-white mb-6"
                    >
                      {services[activeService].title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-white/90 mb-8 max-w-xl"
                    >
                      {services[activeService].content}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all flex items-center space-x-2">
                        <span>Explore Service</span>
                        <FaArrowRight />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Service Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeService === index
                      ? `bg-gradient-to-r ${services[index].color}`
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`View service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-16 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold text-white mb-6">
            Ready to turn your vision into reality?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let’s build something powerful— together.
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            Get in Touch →
          </motion.button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
