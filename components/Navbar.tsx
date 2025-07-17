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
        path: "/app-development",
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
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubMenu(null);
  }, []);

  const handleMenuToggle = useCallback((e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setActiveMenu(prev => (prev === name ? null : name));
    setActiveSubMenu(null);
  }, []);

  const handleSubMenuToggle = useCallback((e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setActiveSubMenu(prev => (prev === name ? null : name));
  }, []);

  const handleClickOutside = useCallback(() => {
    if (isOpen) closeMobileMenu();
  }, [isOpen, closeMobileMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-lg py-3" : "bg-white/90 py-5"} border-b border-gray-100`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image src={LogoImage} alt="SolvitX" className="h-10 w-auto drop-shadow-md" priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.path}>
                <span className="text-blue-900 hover:text-pink-600 font-medium transition-colors flex items-center">
                  {item.name}
                  {item.subMenu && <FaChevronDown className="ml-1 text-xs" />}
                </span>
              </Link>

              {/* Dropdown */}
              {item.subMenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200 z-30">
                  {item.subMenu.map((subItem) => (
                    <div key={subItem.name} className="relative group/sub">
                      <Link href={subItem.path}>
                        <div className="flex items-center justify-between px-4 py-3 hover:bg-blue-50">
                          <div className="flex items-center gap-2">
                            {subItem.icon}
                            <span>{subItem.name}</span>
                          </div>
                          {subItem.subItems && <FaChevronRight className="text-xs" />}
                        </div>
                      </Link>

                      {/* Nested Dropdown */}
                      {subItem.subItems && (
                        <div className="absolute top-0 left-full ml-2 w-64 bg-white border rounded-lg shadow-lg opacity-0 group-hover/sub:opacity-100 group-hover/sub:visible invisible transition-all duration-200 z-40">
                          {subItem.subItems.map((nested) => (
                            <Link key={nested} href={`/${nested.toLowerCase().replace(/\s+/g, "-")}`}>
                              <div className="px-4 py-2 hover:bg-blue-50">{nested}</div>
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

          {/* CTA */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-pink-500 px-5 py-2 text-white rounded-full shadow-lg text-base font-semibold hover:from-pink-500 hover:to-blue-600 transition-all"
          >
            Let's Talk
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(prev => !prev);
          }}
          className="md:hidden p-2 rounded-full shadow-md bg-white border"
        >
          {isOpen ? <FaTimes className="text-red-600 text-xl" /> : <FaBars className="text-blue-900 text-xl" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 p-6 pt-20 z-40 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b py-2">
                <div className="flex justify-between items-center">
                  <Link href={item.path} onClick={closeMobileMenu} className="text-blue-900 text-lg font-medium">
                    {item.name}
                  </Link>
                  {item.subMenu && (
                    <button onClick={(e) => handleMenuToggle(e, item.name)}>
                      <FaChevronDown className={`text-blue-900 transform transition-transform ${activeMenu === item.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {activeMenu === item.name && item.subMenu && (
                  <div className="ml-4 mt-2">
                    {item.subMenu.map((sub) => (
                      <div key={sub.name} className="mb-1">
                        <div className="flex justify-between items-center">
                          <Link href={sub.path} onClick={closeMobileMenu} className="text-blue-800 flex items-center gap-2">
                            {sub.icon}
                            {sub.name}
                          </Link>
                          {sub.subItems && (
                            <button onClick={(e) => handleSubMenuToggle(e, sub.name)}>
                              <FaChevronDown className={`text-xs ${activeSubMenu === sub.name ? "rotate-180" : ""}`} />
                            </button>
                          )}
                        </div>
                        {sub.subItems && activeSubMenu === sub.name && (
                          <div className="ml-4 mt-1">
                            {sub.subItems.map((nested) => (
                              <Link
                                key={nested}
                                href={`/${nested.toLowerCase().replace(/\s+/g, "-")}`}
                                onClick={closeMobileMenu}
                                className="block text-blue-700 hover:text-pink-600 py-1"
                              >
                                {nested}
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

            {/* CTA */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg w-full font-semibold hover:from-pink-500 hover:to-blue-600 transition-all"
            >
              Let's Talk
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactUsForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </nav>
  );
};

export default Navbar;
