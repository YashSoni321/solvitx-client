"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaChartLine,
  FaVideo,
  FaPenFancy,
} from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../public/images/solvitx.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  {
    name: "IT Services",
    subMenu: [
      {
        name: "Web Development",
        icon: <FaLaptopCode className="text-xl text-blue-500" />,
        subMenu: ["Ecommerce Website Development"],
      },
      {
        name: "App Development",
        icon: <FaMobileAlt className="text-xl text-green-500" />,
        subMenu: ["IOS App Development", "Android App Development"],
      },
      {
        name: "API Development",
        icon: <FaCode className="text-xl text-purple-500" />,
      },
      {
        name: "Software Development",
        icon: <FaLaptopCode className="text-xl text-red-500" />,
        subMenu: [
          "Salesforce Development",
          "School Management Software",
          "Hotel Management Software",
          "Online Recruitment Software",
          "HRM Software Development",
        ],
      },
    ],
  },
  {
    name: "Marketing Services",
    subMenu: [
      {
        name: "Digital Marketing",
        icon: <FaChartLine className="text-xl text-yellow-500" />,
        subMenu: [
          "SEO Services",
          "SMM Services",
          "PPC Marketing",
          "ASO Services",
        ],
      },
      {
        name: "Video Editing",
        icon: <FaVideo className="text-xl text-pink-500" />,
      },
      {
        name: "UI UX Design",
        icon: <FaVideo className="text-xl text-pink-500" />,
      },

      {
        name: "Content Marketing",
        icon: <FaPenFancy className="text-xl text-indigo-500" />,
      },
    ],
  },
  // { name: "Careers", path: "/careers" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setActiveSubDropdown(null);
  };

  const handleSubDropdownToggle = (name: string) => {
    setActiveSubDropdown(activeSubDropdown === name ? null : name);
  };

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
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subMenu ? (
                <div className="flex items-center cursor-pointer">
                  <span className="text-white text-lg hover:text-pink-500 transition-colors">
                    {item.name}
                  </span>
                  <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
                </div>
              ) : (
                <Link href={item.path} legacyBehavior>
                  <a className="text-white text-lg hover:text-pink-500 transition-colors">
                    {item.name}
                  </a>
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              <div className="relative group">
                {/* Dropdown Menu */}
                {item.subMenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top">
                    {item.subMenu.map((subItem: any, idx) => (
                      <div key={idx} className="relative group/sub">
                        {/* Submenu Item */}
                        <div className="flex items-center justify-between px-5 py-3 hover:bg-gray-800 cursor-pointer">
                          <div className="flex items-center">
                            <span className="mr-3">{subItem.icon}</span>
                            <span className="text-white font-medium">
                              <Link
                                key={idx}
                                href={`/${subItem?.name
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`}
                                legacyBehavior
                              >
                                <a className="block p-3 hover:bg-gray-800 text-white font-medium">
                                  {subItem.name}
                                </a>
                              </Link>
                            </span>
                          </div>
                          {subItem.subMenu && (
                            <FaChevronRight className="text-sm transition-transform duration-300 group-hover/sub:rotate-90" />
                          )}
                        </div>

                        {/* Nested Submenu */}
                        {subItem.subMenu && (
                          <div className="absolute top-0 left-full w-64 bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-lg opacity-0 scale-95 group-hover/sub:opacity-100 group-hover/sub:scale-100 transition-all duration-300 origin-left">
                            {subItem.subMenu.map((nestedItem, nestedIdx) => (
                              <Link
                                key={nestedIdx}
                                href={`/${nestedItem
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                legacyBehavior
                              >
                                <a className="block px-5 py-3 hover:bg-gray-800 text-white font-medium">
                                  {nestedItem}
                                </a>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
              {navItems.map((item) => (
                <div key={item.name} className="w-4/5 max-w-xs">
                  {item.subMenu ? (
                    <div className="w-full">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-white text-2xl font-semibold hover:text-pink-500 transition-colors"
                      >
                        <span>{item.name}</span>
                        <FaChevronDown
                          className={`ml-2 text-sm transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 border-l-2 border-pink-500 space-y-3"
                            style={{ display: "block" }}
                          >
                            {item.subMenu.map((subItem, idx) => (
                              <div key={idx}>
                                {subItem.subMenu ? (
                                  <div>
                                    <button
                                      onClick={() =>
                                        handleSubDropdownToggle(subItem.name)
                                      }
                                      className="flex items-center justify-between w-full text-white text-lg hover:text-pink-500 transition-colors"
                                    >
                                      <div className="flex items-center">
                                        <span className="mr-3">
                                          {subItem.icon}
                                        </span>
                                        <span>{subItem.name}</span>
                                      </div>
                                      <FaChevronDown
                                        className={`ml-2 text-sm transition-transform duration-300 ${
                                          activeSubDropdown === subItem.name
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    {/* Nested Mobile Submenu */}
                                    <AnimatePresence>
                                      {activeSubDropdown === subItem.name && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="pl-4 border-l-2 border-pink-500 space-y-2"
                                          style={{ display: "block" }}
                                        >
                                          {subItem.subMenu.map(
                                            (nestedItem, nestedIdx) => (
                                              <Link
                                                key={nestedIdx}
                                                href={`/services/${nestedItem
                                                  .toLowerCase()
                                                  .replace(/\s+/g, "-")}`}
                                                legacyBehavior
                                              >
                                                <a
                                                  className="block py-2 text-white text-lg hover:text-pink-500 transition-colors"
                                                  onClick={() =>
                                                    setIsOpen(false)
                                                  }
                                                >
                                                  {nestedItem}
                                                </a>
                                              </Link>
                                            )
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link
                                    href={`/services/${subItem.name
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    legacyBehavior
                                  >
                                    <a
                                      className="flex items-center py-2 text-white text-lg hover:text-pink-500 transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <span className="mr-3">
                                        {subItem.icon}
                                      </span>
                                      <span>{subItem.name}</span>
                                    </a>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.path} legacyBehavior>
                      <a
                        className="text-white text-2xl font-semibold hover:text-pink-500 transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
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
