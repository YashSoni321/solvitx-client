"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaLaptopCode,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../public/images/solvitx.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Web Development",
          path: "/webdevelopment",
          icon: <FaLaptopCode className="text-xl text-blue-500" />,
        },
        {
          name: "App Development",
          path: "/appdevelopment",
          icon: <FaMobileAlt className="text-xl text-green-500" />,
        },
        {
          name: "Digital Marketing",
          path: "/digitalmarketing",
          icon: <FaChartLine className="text-xl text-purple-500" />,
        },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/work" },
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
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <div className="flex items-center cursor-pointer text-white text-lg  hover:text-pink-500 transition-colors">
                  <Link href={link.path} legacyBehavior>
                    <a className="text-white text-lg  hover:text-pink-500 transition-colors">
                      {link.name}
                    </a>
                  </Link>
                  <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
                </div>
              ) : (
                <Link href={link.path} legacyBehavior>
                  <a className="text-white text-lg  hover:text-pink-500 transition-colors">
                    {link.name}
                  </a>
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {link.hasDropdown && (
                <div className="absolute left-0 mt-2 w-64 rounded-lg overflow-hidden bg-gray-900/95 backdrop-blur-lg shadow-lg transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-300">
                  {link.dropdownItems?.map((item, idx) => (
                    <Link key={idx} href={item.path} legacyBehavior>
                      <a className="flex items-center px-5 py-3 hover:bg-gray-800 transition-colors">
                        <span className="mr-3">{item.icon}</span>
                        <span className="text-white font-medium">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              className="fixed top-0 right-0 bottom-0 w-screen h-screen bg-black flex flex-col items-center justify-center space-y-6 md:hidden z-40 overflow-auto"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="w-4/5 max-w-xs">
                  {link.hasDropdown ? (
                    <div className="w-full">
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className="flex items-center justify-between w-full text-white text-2xl font-semibold hover:text-pink-500 transition-colors"
                      >
                        <span>{link.name}</span>
                        <FaChevronDown
                          className={`ml-2 text-sm transition-transform duration-300 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 border-l-2 border-pink-500 space-y-3"
                          >
                            {link.dropdownItems?.map((item, idx) => (
                              <Link key={idx} href={item.path} legacyBehavior>
                                <a
                                  className="flex items-center py-2 text-white text-lg hover:text-pink-500 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="mr-3">{item.icon}</span>
                                  <span>{item.name}</span>
                                </a>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.path} legacyBehavior>
                      <a
                        className="text-white text-2xl font-semibold hover:text-pink-500 transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" legacyBehavior>
                <a
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-md hover:shadow-pink-500/30 transition-all duration-300 mt-4"
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
