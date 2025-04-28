"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCogs, FaBrain, FaRocket } from "react-icons/fa";
import HeroImage from "../../public/images/heroImg.jpg"; // Replace with actual HeroImage

const Hero = () => {
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
          className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
        >
          <span className="text-primary underline decoration-wavy">
            Solving
          </span>{" "}
          IT with expertise
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl text-xl md:text-2xl text-gray-200"
        >
          In this ever-changing world, we re-imagine technological solutions
          with marketing expertise.
        </motion.p>

        {/* Animated Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="grid grid-cols-3 gap-8 mt-10"
        >
          <div className="flex flex-col items-center">
            <FaBrain className="text-5xl text-pink-400 mb-2 animate-bounce" />
            <p className="text-white font-semibold">Strategy</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCogs className="text-5xl text-blue-400 mb-2 animate-spin-slow" />
            <p className="text-white font-semibold">Engineering</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-5xl text-green-400 mb-2 animate-pulse" />
            <p className="text-white font-semibold">Launch</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-500 transition-all"
        >
          Explore Our Work
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
