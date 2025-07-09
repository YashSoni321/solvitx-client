import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImage from "../../public/images/solvitx.png";

const LandingPageFooter = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-10 pb-6">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>

      {/* Floating action buttons (WhatsApp & Call) */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[100] flex flex-col gap-3">
        <motion.a
          href="https://wa.me/917232899120"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:bg-green-600 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </motion.a>
        <motion.a
          href="tel:+917232899120"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-3 rounded-full shadow-xl hover:bg-blue-600 transition-all"
          aria-label="Call Us"
        >
          <FaPhone size={20} />
        </motion.a>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-b border-gray-700/50 pb-6">
          {/* Logo & About */}
          <div className="text-center md:text-left max-w-sm">
            <Link href="/" className="inline-block mb-3">
              <Image
                src={LogoImage}
                alt="SolvitX"
                height={36}
                width={120}
                className="invert brightness-0 filter"
                priority
              />
            </Link>
            <p className="text-xs text-gray-400">
              Crafting digital excellence and innovative solutions for
              sustainable business growth.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-gray-400">
            <h3 className="text-base font-semibold text-white mb-2 text-center md:text-left">
              Contact Us
            </h3>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-purple-400 h-4 w-4 mt-1" />
              <span>Jaipur, Rajasthan 302003</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400 h-4 w-4" />
              <a
                href="mailto:solvitxsolutions@gmail.com"
                className="hover:text-purple-300 transition-colors"
              >
                solvitxsolutions@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-purple-400 h-4 w-4" />
              <a
                href="tel:+917232899120"
                className="hover:text-purple-300 transition-colors"
              >
                +91 7232899120
              </a>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} SolvitX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
