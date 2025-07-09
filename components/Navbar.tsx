"use client";
import { useState, useEffect, useCallback } from "react";
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
import dynamic from "next/dynamic";

// Dynamically import heavy components
const Modal = dynamic(() => import("./common/Modal"), { ssr: false });
const ContactUsForm = dynamic(() => import("./common/ContactUsForm"), {
  ssr: false,
});

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

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Function to close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  }, []);

  const handleMenuToggle = useCallback(
    (e: any, name: any) => {
      e.stopPropagation();
      setActiveMenu(activeMenu === name ? null : name);
      setActiveSubMenu(null);
    },
    [activeMenu]
  );

  const handleSubMenuToggle = useCallback(
    (e: any, name: any) => {
      e.stopPropagation();
      setActiveSubMenu(activeSubMenu === name ? null : name);
    },
    [activeSubMenu]
  );

  // Handle link clicks - close menu for links, keep open for expandable items
  const handleLinkClick = useCallback(
    (item: any, e: any) => {
      // If item has submenu, don't close the menu, just navigate
      if (!item.subMenu) {
        closeMobileMenu();
      }
    },
    [closeMobileMenu]
  );

  const handleSubLinkClick = useCallback(
    (subItem: any, e: any) => {
      // If subItem has subItems, don't close the menu
      if (!subItem.subItems) {
        closeMobileMenu();
      }
    },
    [closeMobileMenu]
  );

  const handleNestedLinkClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

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
            sizes="(max-width: 768px) 100px, 150px"
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
                        <div className="flex items-center p-3 hover:bg-gray-50 transition-colors">
                          {subItem.icon}
                          <span className="ml-3 text-gray-700 hover:text-blue-600">
                            {subItem.name}
                          </span>
                          {subItem.subItems && (
                            <FaChevronRight className="ml-auto text-xs text-gray-400 group-hover/sub:text-blue-500 transition-colors" />
                          )}
                        </div>
                      </Link>

                      {/* Nested Submenu */}
                      {subItem.subItems && (
                        <div className="absolute invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 left-full top-0 ml-1 w-64 bg-white/95 border border-gray-100 rounded-lg shadow-lg transition-all duration-300 origin-left">
                          {subItem.subItems.map((nestedItem, nestedIdx) => (
                            <Link
                              key={nestedIdx}
                              href={`/${nestedItem
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <div className="p-3 hover:bg-gray-50 transition-colors">
                                <span className="text-gray-700 hover:text-blue-600">
                                  {nestedItem}
                                </span>
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

          {/* CTA Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <FaArrowRight className="text-sm" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? (
            <FaTimes className="text-xl text-gray-700" />
          ) : (
            <FaBars className="text-xl text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100 shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                {item.subMenu ? (
                  <div>
                    <div
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={(e) => handleMenuToggle(e, item.name)}
                    >
                      <Link
                        href={item.path}
                        onClick={(e) => handleLinkClick(item, e)}
                      >
                        <span className="text-gray-700 font-medium">
                          {item.name}
                        </span>
                      </Link>
                      <FaChevronDown
                        className={`text-xs text-gray-500 transition-transform ${
                          activeMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-1"
                      >
                        {item.subMenu.map((subItem, idx) => (
                          <div key={idx}>
                            <div
                              className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                              onClick={(e) =>
                                handleSubMenuToggle(e, subItem.name)
                              }
                            >
                              <Link
                                href={subItem.path}
                                onClick={(e) => handleSubLinkClick(subItem, e)}
                              >
                                <div className="flex items-center">
                                  {subItem.icon}
                                  <span className="ml-2 text-gray-600">
                                    {subItem.name}
                                  </span>
                                </div>
                              </Link>
                              {subItem.subItems && (
                                <FaChevronRight
                                  className={`text-xs text-gray-500 transition-transform ${
                                    activeSubMenu === subItem.name
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                />
                              )}
                            </div>

                            {subItem.subItems &&
                              activeSubMenu === subItem.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="ml-4 mt-1 space-y-1"
                                >
                                  {subItem.subItems.map(
                                    (nestedItem, nestedIdx) => (
                                      <Link
                                        key={nestedIdx}
                                        href={`/${nestedItem
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        onClick={handleNestedLinkClick}
                                      >
                                        <div className="p-2 hover:bg-gray-50 rounded">
                                          <span className="text-gray-500 text-sm">
                                            {nestedItem}
                                          </span>
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </motion.div>
                              )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path} onClick={closeMobileMenu}>
                    <div className="p-3 hover:bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <motion.button
                onClick={() => {
                  setIsModalOpen(true);
                  closeMobileMenu();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started <FaArrowRight className="text-sm" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactUsForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
