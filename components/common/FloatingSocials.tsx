"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FloatingSocials = () => {
  return (
    <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[100] flex flex-col gap-3">
      <motion.a
        href="https://wa.me/+917232899120"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-xl hover:bg-green-600 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </motion.a>
      <motion.a
        href="https://instagram.com/SolvitX"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
        aria-label="Visit our Instagram"
      >
        <FaInstagram size={20} />
      </motion.a>
    </div>
  );
};

export default FloatingSocials;
