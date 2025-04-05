"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeTransition = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

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

const sections = [
  {
    title: "Art-direction & Consulting",
    content:
      "Whether your website needs a facelift or you want stunning team photos, we’ve got you covered to keep everything fresh and on point. Our goal is to ensure your visuals are not just cool, but timeless and perfectly aligned with your vision.",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/EEkbPlvQVewywreZQm8rB5d8Vz0BKIr-aHSmQ1FLNkc.jpg", // Change to your image path
  },
  {
    title: "Creative Strategy & Planning",
    content:
      "Our creative strategy focuses on establishing a cohesive vision for your brand, ensuring that every piece we create resonates with your audience.",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/bJurzwZrOLTPh0jzNOq09pKtrYhH_RqD1RwAALFspFg.jpg",
  },
  {
    title: "Digital Marketing & SEO",
    content:
      "In today's digital world, effective marketing and SEO are crucial. We offer comprehensive services to enhance your online visibility.",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/qhwdBE2qRUQeUL7SQ_iVz-Gxsth0BnZ-Cgs8-RCXNL0.jpg",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollY = e.currentTarget.scrollTop;
    const sectionHeight = window.innerHeight; // or fixed value if your section isn't h-screen
    const index = Math.round(scrollY / sectionHeight);

    if (index >= 0 && index < sections.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-12">
        {/* Title & Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="bg-black"
        >
          <div className="my-2 py-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInUp}
              className="text-6xl text-white md:text-8xl text-start font-bold leading-tight"
            >
              <p>
                GROW <br /> SERVICES
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="py-8">
              <p className="tracking-wide text-white text-base/8 md:text-5xl font-bold">
                We develop sites that help your business grow and sustain
                clients and increase conversion.
                <span className="text-gray-400">
                  We offer a comprehensive approach to website and digital
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Services Scroll Section */}
      <div className="relative flex w-full">
        {/* Left Scrolling Sections */}
        <div
          className="w-1/2 snap-y snap-mandatory relative z-10 overflow-y-scroll h-screen"
          onScroll={handleScroll} // ✅ Now on the actual scrollable container
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-screen snap-start flex flex-col justify-center items-start px-10 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white"
            >
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                {section.title}
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
                {section.content}
              </p>

              <div className="mt-8 w-full relative group rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                <img
                  src={section.imageUrl}
                  alt={section.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  <p className="text-white text-lg font-semibold">
                    View Project
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300"
              >
                <span>Load More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Right Sticky Image */}
        <div className="w-1/2 min-h-screen h-screen sticky top-0 right-0 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={sections[currentIndex]?.imageUrl}
              src={sections[currentIndex]?.imageUrl}
              alt="section image"
              className="w-full h-full object-cover shadow-2xl"
              {...fadeTransition}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;
