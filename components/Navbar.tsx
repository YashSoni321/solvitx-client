"use client";
import { useState, useEffect, useCallback, ReactElement } from "react";
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

interface SubMenuItem {
  name: string;
  icon: ReactElement;
  subMenu?: string[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  let closeTimeout: NodeJS.Timeout;
  let closeSubTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
      if (closeSubTimeout) clearTimeout(closeSubTimeout);
    };
  }, []);

  const handleMenuEnter = useCallback((itemName: string) => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setHoveredItem(itemName);
  }, []);

  const handleMenuLeave = useCallback(() => {
    if (!isMenuClicked) {
      closeTimeout = setTimeout(() => {
        setHoveredItem(null);
        setHoveredSubItem(null);
      }, 300);
    }
  }, [isMenuClicked]);

  const handleSubMenuEnter = useCallback((subItemName: string) => {
    if (closeSubTimeout) clearTimeout(closeSubTimeout);
    setHoveredSubItem(subItemName);
  }, []);

  const handleSubMenuLeave = useCallback(() => {
    if (!isMenuClicked) {
      closeSubTimeout = setTimeout(() => {
        setHoveredSubItem(null);
      }, 300);
    }
  }, [isMenuClicked]);

  const handleMenuClick = useCallback((itemName: string) => {
    setIsMenuClicked(true);
    setHoveredItem(itemName);
  }, []);

  const handleSubMenuClick = useCallback((subItemName: string) => {
    setHoveredSubItem(subItemName);
  }, []);

  const handleClickOutside = useCallback(() => {
    setIsMenuClicked(false);
    setHoveredItem(null);
    setHoveredSubItem(null);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleMobileMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleMobileDropdownToggle = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
    setActiveSubDropdown(null);
  };

  const handleMobileSubDropdownToggle = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setActiveSubDropdown(activeSubDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const getFormattedPath = (name: string) => {
    return `/${name.toLowerCase().replace(/\s+/g, "")}`;
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
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMenuEnter(item.name)}
              onMouseLeave={handleMenuLeave}
              onClick={(e) => {
                e.stopPropagation();
                if (item.subMenu) {
                  handleMenuClick(item.name);
                }
              }}
            >
              {item.subMenu ? (
                <div className="flex items-center cursor-pointer">
                  <span className="text-white text-lg hover:text-pink-500 transition-colors">
                    {item.name}
                  </span>
                  <FaChevronDown
                    className={`ml-1 text-sm transition-transform duration-300 ${
                      hoveredItem === item.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
              ) : (
                <Link href={item.path} legacyBehavior>
                  <a className="text-white text-lg hover:text-pink-500 transition-colors">
                    {item.name}
                  </a>
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              {item.subMenu && hoveredItem === item.name && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 origin-top"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.subMenu.map((subItem: SubMenuItem, idx) => (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => handleSubMenuEnter(subItem.name)}
                      onMouseLeave={handleSubMenuLeave}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubMenuClick(subItem.name);
                      }}
                    >
                      {/* Submenu Item */}
                      <div className="flex items-center justify-between px-5 py-3 hover:bg-gray-800 cursor-pointer">
                        <div className="flex items-center">
                          <span className="mr-3">{subItem.icon}</span>
                          <span className="text-white font-medium">
                            {!subItem.subMenu ? (
                              <Link
                                href={getFormattedPath(subItem.name)}
                                legacyBehavior
                              >
                                <a className="block p-3 hover:bg-gray-800 text-white font-medium">
                                  {subItem.name}
                                </a>
                              </Link>
                            ) : (
                              subItem.name
                            )}
                          </span>
                        </div>
                        {subItem.subMenu && (
                          <FaChevronRight
                            className={`text-sm transition-transform duration-300 ${
                              hoveredSubItem === subItem.name ? "rotate-90" : ""
                            }`}
                          />
                        )}
                      </div>

                      {/* Nested Submenu */}
                      {subItem.subMenu && hoveredSubItem === subItem.name && (
                        <div
                          className="absolute top-0 left-full w-64 bg-gray-900/90 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 origin-left"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {subItem.subMenu.map(
                            (nestedItem: string, nestedIdx: number) => (
                              <Link
                                key={nestedIdx}
                                href={getFormattedPath(nestedItem)}
                                legacyBehavior
                              >
                                <a className="block px-5 py-3 hover:bg-gray-800 text-white font-medium">
                                  {nestedItem}
                                </a>
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
          ))}
          <Link href="/contact" legacyBehavior>
            <a className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-pink-500/30 hover:scale-105 transition-transform duration-300">
              Get Started
            </a>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMobileMenuToggle}
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
                        onClick={(e) =>
                          handleMobileDropdownToggle(e, item.name)
                        }
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
                          >
                            {item.subMenu.map((subItem, idx) => (
                              <div key={idx}>
                                {subItem.subMenu ? (
                                  <div>
                                    <button
                                      onClick={(e) =>
                                        handleMobileSubDropdownToggle(
                                          e,
                                          subItem.name
                                        )
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
                                        >
                                          {subItem.subMenu.map(
                                            (nestedItem, nestedIdx) => (
                                              <Link
                                                key={nestedIdx}
                                                href={getFormattedPath(
                                                  nestedItem
                                                )}
                                                onClick={closeMobileMenu}
                                                className="block py-2 text-white text-lg hover:text-pink-500 transition-colors"
                                              >
                                                {nestedItem}
                                              </Link>
                                            )
                                          )}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link
                                    href={getFormattedPath(subItem.name)}
                                    onClick={closeMobileMenu}
                                    className="flex items-center py-2 text-white text-lg hover:text-pink-500 transition-colors"
                                  >
                                    <span className="mr-3">{subItem.icon}</span>
                                    <span>{subItem.name}</span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="text-white text-2xl font-semibold hover:text-pink-500 transition-colors block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-md hover:shadow-pink-500/30 transition-all duration-300 mt-4"
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
