"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../public/images/solvitx.png";
import Modal from "./common/Modal";
import ContactUsForm from "./common/ContactUsForm";

// Simplified menu structure
const navItems = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about" },
  {
    name: "IT Services",
    path: "/services",
    subMenu: [
      {
        name: "Web Development",
        path: "/web-development",
        icon: <FaLaptopCode className="text-xl text-blue-500" />,
        subItems: ["Ecommerce Website Development"],
      },
      {
        name: "App Development",
        path: "/mobile-app-development",
        icon: <FaMobileAlt className="text-xl text-green-500" />,
        subItems: ["IOS App Development", "Android App Development"],
      },
      {
        name: "API Development",
        path: "/api-development",
        icon: <FaCode className="text-xl text-purple-500" />,
      },
      {
        name: "Software Development",
        path: "/software-development",
        icon: <FaLaptopCode className="text-xl text-red-500" />,
        subItems: [
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
    path: "/services",
    subMenu: [
      {
        name: "Digital Marketing",
        path: "/digital-marketing",
        icon: <FaChartLine className="text-xl text-yellow-500" />,
        subItems: [
          "SEO Services",
          "SMM Services",
          "PPC Marketing",
          "ASO Services",
        ],
      },
      {
        name: "Video Editing",
        path: "/video-editing",
        icon: <FaVideo className="text-xl text-pink-500" />,
      },
      {
        name: "UI UX Design",
        path: "/ui-ux-design",
        icon: <FaVideo className="text-xl text-pink-500" />,
      },
      {
        name: "Content Marketing",
        path: "/content-marketing",
        icon: <FaPenFancy className="text-xl text-indigo-500" />,
      },
    ],
  },
  { name: "Contact us", path: "/contact" },
];

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleMenuToggle = (e: any, name: any) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === name ? null : name);
    setActiveSubMenu(null);
  };

  const handleSubMenuToggle = (e: any, name: any) => {
    e.stopPropagation();
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };

  // Handle link clicks - close menu for links, keep open for expandable items
  const handleLinkClick = (item: any, e: any) => {
    // If item has submenu, don't close the menu, just navigate
    if (!item.subMenu) {
      closeMobileMenu();
    }
  };

  const handleSubLinkClick = (subItem: any, e: any) => {
    // If subItem has subItems, don't close the menu
    if (!subItem.subItems) {
      closeMobileMenu();
    }
  };

  const handleNestedLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-lg py-3" : "bg-white/90 py-5"
      } border-b border-gray-100`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src={LogoImage}
            alt="SolvitX"
            className="h-10 w-auto drop-shadow-md"
            priority
          />
          <div className="px-4 py-1"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.subMenu ? (
                <div className="flex items-center cursor-pointer">
                  <Link href={item.path}>
                    <span className="text-blue-900 hover:text-pink-600 font-medium transition-colors">
                      {item.name}
                    </span>
                  </Link>
                  <FaChevronDown className="ml-1 text-xs text-blue-900 group-hover:rotate-180 transition-transform duration-300" />
                </div>
              ) : (
                <Link href={item.path}>
                  <span className="text-blue-900 hover:text-pink-600 font-medium transition-colors">
                    {item.name}
                  </span>
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.subMenu && (
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-0 mt-2 w-64 bg-white/95 border border-gray-100 rounded-lg shadow-lg transition-all duration-300 origin-top">
                  {item.subMenu.map((subItem, idx) => (
                    <div key={idx} className="relative group/sub">
                      <Link href={subItem.path}>
                        <div className="flex items-center justify-between px-5 py-3 hover:bg-blue-50">
                          <div className="flex items-center">
                            <span className="mr-3">{subItem.icon}</span>
                            <span className="text-blue-900">
                              {subItem.name}
                            </span>
                          </div>
                          {subItem.subItems && (
                            <FaChevronRight className="text-xs text-blue-900" />
                          )}
                        </div>
                      </Link>

                      {/* Nested Dropdown */}
                      {subItem.subItems && (
                        <div className="absolute invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 top-0 left-full ml-2 w-64 bg-white/95 border border-gray-100 rounded-lg shadow-lg transition-all duration-300">
                          {subItem.subItems.map((nestedItem, nestedIdx) => (
                            <Link
                              key={nestedIdx}
                              href={`/${nestedItem
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <div className="px-5 py-3 hover:bg-blue-50 text-blue-900">
                                {nestedItem}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* <Link href="/contact">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-pink-500/30 hover:scale-105 transition-transform duration-300">
              Get Started
            </span>
          </Link> */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-pink-500 px-5 py-2  text-white rounded-full shadow-lg text-base md:text-lg font-semibold flex items-center gap-2 mx-auto hover:from-pink-500 hover:to-blue-600 transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="md:hidden relative z-50 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
              <FaTimes className="text-red-600 text-xl" />
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
              <FaBars className="text-blue-900 text-xl" />
            </div>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md border-t border-gray-100 flex flex-col p-6 pt-20 overflow-y-auto z-40">
            {navItems.map((item) => (
              <div key={item.name} className="py-2 border-b border-gray-200">
                {item.subMenu ? (
                  <div>
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.path}
                        onClick={(e) => handleLinkClick(item, e)}
                        className="flex-1"
                      >
                        <span className="text-blue-900 text-lg font-medium">
                          {item.name}
                        </span>
                      </Link>
                      <button
                        onClick={(e) => handleMenuToggle(e, item.name)}
                        className="p-2 ml-2"
                      >
                        <FaChevronDown
                          className={`text-blue-900 transition-transform ${
                            activeMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {activeMenu === item.name && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.subMenu.map((subItem, idx) => (
                          <div key={idx} className="py-1">
                            <div className="flex items-center justify-between">
                              <Link
                                href={subItem.path}
                                onClick={(e) => handleSubLinkClick(subItem, e)}
                                className="flex-1"
                              >
                                <span className="flex items-center text-blue-800">
                                  <span className="mr-2">{subItem.icon}</span>
                                  {subItem.name}
                                </span>
                              </Link>
                              {subItem.subItems && (
                                <button
                                  onClick={(e) =>
                                    handleSubMenuToggle(e, subItem.name)
                                  }
                                  className="p-2 ml-2"
                                >
                                  <FaChevronDown
                                    className={`text-blue-900 text-xs transition-transform ${
                                      activeSubMenu === subItem.name
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                              )}
                            </div>

                            {subItem.subItems &&
                              activeSubMenu === subItem.name && (
                                <div className="pl-6 py-2 space-y-2">
                                  {subItem.subItems.map(
                                    (nestedItem, nestedIdx) => (
                                      <Link
                                        key={nestedIdx}
                                        href={`/${nestedItem
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        onClick={handleNestedLinkClick}
                                      >
                                        <span className="block py-1 text-blue-700 hover:text-pink-600">
                                          {nestedItem}
                                        </span>
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={(e) => handleLinkClick(item, e)}
                  >
                    <span className="block py-2 text-blue-900 text-lg font-medium">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
            {/* <Link href="/contact" onClick={closeMobileMenu} className="mt-6">
              <span className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 rounded-full text-center font-semibold text-white">
                Get Started
              </span>
            </Link> */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full shadow-lg text-base md:text-lg font-semibold flex items-center gap-2 mx-auto mb-6 hover:from-pink-500 hover:to-blue-600 transition-all"
            >
              Get Started 121
            </motion.button>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactUsForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </nav>
  );
};

export default Navbar;
