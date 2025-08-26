"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/solvitx.png";
import Modal from "./Modal";
import ContactUsForm from "./ContactUsForm";

const WebDevLandingPageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 50;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    console.log("element", element);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // e.g., closing a menu
  };

  //   const navItems = [
  //     { label: "About", href: "#about" },
  //     { label: "Services", href: "#services" },
  //     { label: "Our Clients", href: "#clients" },
  //     { label: "Process", href: "#process" },
  //     { label: "Contact", href: "#contact-form" },
  //   ];
  const navItems = [
    // { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    // { label: "Why Choose Us", href: "#whychooseus" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Clients", href: "#clients" },
    // { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing-stacks" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            {/* <Link href="/landingpage" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                SolvitX
              </span>
            </Link> */}
            <Link href="/landing-page">
              <Image
                src={LogoImage}
                alt="SolvitX"
                className="h-10 w-auto drop-shadow-md"
                priority
              />
              <div className="px-4 py-1"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleSmoothScroll(item.href.substring(1))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-lg transition-colors duration-300 hover:text-blue-600 font-bold ${
                  scrolled ? "text-gray-700" : "text-gray-700"
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* CTA Button */}
            {/* <a
              //   onClick={() => handleSmoothScroll("about")}
              //   whileHover={{ scale: 1.05 }}
              //   whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              Get Started
            </a> */}
            <motion.a
              href="https://wa.me/+917232899120"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              //   className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-xl hover:bg-green-600 transition-all"
              aria-label="Chat on WhatsApp"
              className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              <p className="flex items-center space-x-2">
                Get Started <FaWhatsapp className="ml-3" size={20} />
              </p>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-gray"
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 mb-4"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleSmoothScroll(item.href.substring(1))}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300 font-medium"
              >
                {/* {item.label} */}
                <Link href={item.href}> {item.label}</Link>
              </motion.button>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-6 pt-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactUsForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </motion.nav>
  );
};

export default WebDevLandingPageNavbar;
