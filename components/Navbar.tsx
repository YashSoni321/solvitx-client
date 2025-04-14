"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../public/images/solvitx.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="z-50">
            <Image
              src={LogoImage}
              alt="Solvitx"
              className="h-14 w-44 filter invert"
              priority
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} legacyBehavior>
              <a className="text-white text-xl font-bold hover:text-pink-500 transition-colors">
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/contact" legacyBehavior>
            <a className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-pink-500/30 hover:scale-105 transition-transform duration-300">
              Get Started
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-screen h-screen bg-black flex flex-col items-center justify-center space-y-10 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path} legacyBehavior>
                  <a
                    className="text-white text-2xl font-semibold hover:text-pink-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <Link href="/contact" legacyBehavior>
                <a
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-md hover:shadow-pink-500/30 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
