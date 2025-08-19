import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react"; // Adjust path if needed
import ContactUsForm from "../common/ContactUsForm";
import Modal from "../common/Modal";
import OptimizedImage from "../common/OptimizedImage";

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
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-cover bg-center text-center px-4 py-10 sm:py-32 md:py-32 overflow-hidden ">
      {/* Background logo image */}
      <OptimizedImage
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover  z-0 w-full h-full"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl mt-14 md:text-5xl font-extrabold text-white mb-6">
          {heading}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
            {highlight}
          </span>
        </h1>

        <motion.p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          {subheading}
        </motion.p>

        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg text-base md:text-lg font-semibold flex items-center gap-2 mx-auto mb-6 hover:from-pink-500 hover:to-blue-600 transition-all"
        >
          {buttonText} <FaArrowRight />
        </motion.button>

        <motion.div className="flex flex-col items-center gap-4">
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
