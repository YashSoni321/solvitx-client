import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react"; // Adjust path if needed
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
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center bg-cover bg-center text-center px-4 py-24 md:py-32 overflow-hidden">
      {/* Background logo image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover  z-0 w-full h-full"
        priority
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          {heading}
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
            {highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
        >
          {subheading}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 mx-auto mb-8 hover:from-pink-500 hover:to-blue-600 transition-all"
        >
          {buttonText} <FaArrowRight />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Optional: Insert trust indicators here */}
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactUsForm />
      </Modal>
    </section>
  );
};

export default HeroSection;
