"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCogs, FaBrain, FaRocket } from "react-icons/fa";
import HeroImage from "../../public/images/heroImg.jpg"; // Replace with actual HeroImage
import { useState, useEffect } from "react";

const innovativeThoughts = [
  {
    text: "Transforming Ideas into Digital Reality",
    category: "Development",
  },
  {
    text: "Building Tomorrow's Solutions Today",
    category: "Innovation",
  },
  {
    text: "Driving Growth Through Digital Excellence",
    category: "Marketing",
  },
  {
    text: "Crafting Seamless User Experiences",
    category: "Design",
  },
  {
    text: "Empowering Businesses with AI Solutions",
    category: "Technology",
  },
];

const Hero = () => {
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentThoughtIndex(
          (prev) => (prev + 1) % innovativeThoughts.length
        );
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
      </div>

      {/* Overlay + Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center space-y-10">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
        >
          Turning IT Challenges into Smart Solutions
        </motion.h1>

        {/* Innovative Thoughts Animation */}
        <div className="h-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAnimating ? 1 : 0, y: isAnimating ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-lg font-semibold text-pink-400 mb-2">
              {innovativeThoughts[currentThoughtIndex].category}
            </span>
            <p className="text-base md:text-2xl text-gray-200 italic">
              {innovativeThoughts[currentThoughtIndex].text}
            </p>
          </motion.div>
        </div>

        {/* Animated Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-3 gap-8 mt-10"
        >
          <div className="flex flex-col items-center group">
            <div className="relative">
              <FaBrain className="text-5xl text-pink-400 mb-2 animate-bounce" />
              <motion.div
                className="absolute -inset-2 bg-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-white font-semibold">Strategy</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="relative">
              <FaCogs className="text-5xl text-blue-400 mb-2 animate-spin-slow" />
              <motion.div
                className="absolute -inset-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-white font-semibold">Engineering</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="relative">
              <FaRocket className="text-5xl text-green-400 mb-2 animate-pulse" />
              <motion.div
                className="absolute -inset-2 bg-green-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <p className="text-white font-semibold">Launch</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-500 transition-all group relative overflow-hidden"
        >
          <span className="relative z-10">Explore Our Work</span>
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            animate={{
              x: ["0%", "100%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
