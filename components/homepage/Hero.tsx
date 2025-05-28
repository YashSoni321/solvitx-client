"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const clientLogos = [
  // Replace with your real client logo URLs or use placeholders
  "https://via.placeholder.com/100x40?text=Client+1",
  "https://via.placeholder.com/100x40?text=Client+2",
  "https://via.placeholder.com/100x40?text=Client+3",
  "https://via.placeholder.com/100x40?text=Client+4",
];

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br from-white via-blue-50 to-purple-50 text-center px-4 py-24 md:py-32">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
      >
        Empowering Your Digital Growth
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
          With Trust & Innovation
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
      >
        Solvitx delivers reliable web, app, and marketing solutions trusted by
        businesses worldwide. Let us help you build your digital future with
        confidence.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/contact")}
        className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 mx-auto mb-8 hover:from-pink-500 hover:to-blue-600 transition-all"
      >
        Get Started <FaArrowRight />
      </motion.button>
      {/* Trust Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex flex-col items-center gap-4"
      >
        {/* <span className="text-gray-500 text-sm md:text-base font-medium">
          Trusted by 200+ clients
        </span> */}
        {/* <div className="flex flex-wrap justify-center gap-6">
          {clientLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              width={100}
              height={40}
              className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
