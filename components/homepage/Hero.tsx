import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import ContactUsForm from "../common/ContactUsForm";
import Modal from "../common/Modal";

interface HeroSectionProps {
  backgroundImage: any;
  heading: string;
  highlight: string;
  subheading: string;
  buttonText: string;
}

const HeroSection = ({
  backgroundImage,
  heading,
  highlight,
  subheading,
  buttonText,
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-cover bg-center text-center px-4 py-10 sm:py-32 md:py-32 overflow-hidden">
      {/* Background image with proper sizing */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Foreground content with proper spacing */}
      <div className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl mt-14 md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {heading}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
            {highlight}
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subheading}
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg text-base md:text-lg font-semibold flex items-center gap-2 mx-auto mb-6 hover:from-pink-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText} <FaArrowRight />
        </motion.button>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Optional: Insert trust indicators here */}
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactUsForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default HeroSection;
