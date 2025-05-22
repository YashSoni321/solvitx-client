"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import icons
import {
  FaLaptopCode,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaShoppingCart,
  FaServer,
  FaWhatsapp,
  FaInstagram,
  FaArrowRight,
  FaQuoteLeft,
  FaRegLightbulb,
  FaSyncAlt,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiAngular,
  SiVuedotjs,
  SiPython,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Function to animate numbers
const CountUpAnimation = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const duration = 1500; // 1.5 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(target * progress);

      if (isMounted) {
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
        if (isMounted) {
          setCount(target); // Ensure it ends on target
        }
      }
    }, frameRate);

    return () => {
      isMounted = false;
      clearInterval(counter);
    };
  }, [target]);

  return <span>{count}</span>;
};

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    details: "",
  });
  const [activeTab, setActiveTab] = useState("web");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.service ||
      !formData.details
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form Data:", formData); // Log form data
    window.location.href = "/thank-you";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What range of digital services does Solvitx provide?",
      answer:
        "Solvitx offers a comprehensive suite of digital solutions, including bespoke web development, dynamic mobile app creation, strategic digital marketing campaigns, advanced SEO optimization, intuitive UI/UX design, and scalable custom software development to elevate your business.",
    },
    {
      question: "What is the typical project timeline for a new website?",
      answer:
        "Project timelines are tailored to complexity. A standard informational website might take 2-4 weeks, whereas intricate e-commerce platforms or custom web applications could range from 2-3 months. We provide a precise timeline after a thorough requirement analysis.",
    },
    {
      question: "Does Solvitx offer post-launch maintenance and support?",
      answer:
        "Absolutely. We provide a variety of ongoing maintenance and support packages designed to keep your digital assets secure, up-to-date, and performing at their peak. Our dedicated support team is readily available to address any emerging issues.",
    },
    {
      question: "How is project pricing determined at Solvitx?",
      answer:
        "Every project is unique. Pricing is based on specific requirements, features, complexity, and overall scope. We believe in transparency and provide detailed, itemized quotes after fully understanding your vision and business objectives.",
    },
    {
      question: "Can Solvitx help improve my existing website's performance?",
      answer:
        "Yes, definitely! We offer website audit services, performance optimization, SEO enhancements, and redesign services to revitalize your existing online presence and improve user engagement and conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Floating Social Media Links */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[100] flex flex-col gap-3">
        <motion.a
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
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
          href="https://instagram.com/YOUR_INSTAGRAM"
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

      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Solvitx
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              {[
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#technologies", label: "Technologies" },
                { href: "#contact", label: "Get Quote" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
            <a
              href="tel:+1234567890"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm font-semibold flex items-center gap-2"
            >
              Call Now
              <FaArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - White */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-50">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-100 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gray-900 leading-tight"
            >
              Ignite Your Digital Future
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                With Solvitx Innovations
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Crafting extraordinary digital experiences. We fuse cutting-edge
              web solutions with strategic digital marketing to propel your
              business growth. Partner with us for digital excellence.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
              >
                Explore Services <FaArrowRight />
              </motion.a>
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 border-2 border-blue-600"
              >
                Learn About Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section - Black theme, but with better contrast and form */}
      <section id="about" className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block"
              >
                Who We Are
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Pioneering Digital Excellence, <br />
                Empowering Your Vision.
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-300 mb-6 text-lg leading-relaxed"
              >
                At Solvitx, we're more than developers; we're architects of
                digital transformation. We specialize in crafting powerful,
                bespoke solutions that propel businesses into the modern digital
                landscape. Our mastery in web development and digital marketing
                ensures you not only compete but lead.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
              >
                {[
                  {
                    icon: <FaLaptopCode className="text-blue-400" />,
                    label: "Innovative Web Development",
                  },
                  {
                    icon: <FaChartLine className="text-blue-400" />,
                    label: "Strategic Digital Marketing",
                  },
                  {
                    icon: <FaMobileAlt className="text-blue-400" />,
                    label: "Cutting-Edge App Solutions",
                  },
                  {
                    icon: <FaSearch className="text-blue-400" />,
                    label: "Advanced SEO Optimization",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-gray-200">{item.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 md:p-10 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
                Ready to Start? Get a Free Quote!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name_about" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name_about"
                    type="text"
                    name="name"
                    placeholder="Your Full Name *"
                    onChange={handleInputChange}
                    value={formData.name}
                    className="w-full p-3.5 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile_about" className="sr-only">
                    Mobile Number
                  </label>
                  <input
                    id="mobile_about"
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    onChange={handleInputChange}
                    value={formData.mobile}
                    className="w-full p-3.5 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email_about" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email_about"
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    onChange={handleInputChange}
                    value={formData.email}
                    className="w-full p-3.5 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service_about" className="sr-only">
                    Service Required
                  </label>
                  <select
                    id="service_about"
                    name="service"
                    onChange={handleInputChange}
                    value={formData.service}
                    className="w-full p-3.5 bg-white/10 text-white border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="" className="text-gray-500">
                      Select Service Required *
                    </option>
                    <option value="web-development" className="text-black">
                      Web Development
                    </option>
                    <option value="digital-marketing" className="text-black">
                      Digital Marketing
                    </option>
                    <option value="app-development" className="text-black">
                      App Development
                    </option>
                    <option value="seo-optimization" className="text-black">
                      SEO Optimization
                    </option>
                    <option value="ui-ux-design" className="text-black">
                      UI/UX Design
                    </option>
                    <option value="other" className="text-black">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details_about" className="sr-only">
                    Requirement Details
                  </label>
                  <textarea
                    id="details_about"
                    name="details"
                    placeholder="Tell us about your project... *"
                    rows={3}
                    onChange={handleInputChange}
                    value={formData.details}
                    className="w-full p-3.5 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3.5 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                >
                  Send Request
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section
        id="services"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.02]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Driving Success with Tailored Digital Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From dynamic websites to impactful digital marketing, we deliver
              end-to-end solutions that empower your business to thrive and grow
              in the digital age.
            </p>
          </motion.div>

          <div className="mb-12 flex justify-center">
            <div className="inline-flex p-1 bg-gray-100 rounded-full shadow-md">
              {["web", "digital", "app"].map((tabName) => (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === tabName
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tabName === "web"
                    ? "Web Development"
                    : tabName === "digital"
                    ? "Digital Marketing"
                    : "App Development"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "web" &&
              [
                {
                  icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
                  title: "Responsive Web Design",
                  description:
                    "Stunning, mobile-first websites that captivate users and perform flawlessly on any device, ensuring an exceptional UX.",
                },
                {
                  icon: <FaServer className="text-blue-600 text-3xl" />,
                  title: "E-commerce Powerhouses",
                  description:
                    "Custom online stores with secure payments, intuitive inventory management, and conversion-optimized designs.",
                },
                {
                  icon: <FaShoppingCart className="text-blue-600 text-3xl" />,
                  title: "Dynamic CMS Development",
                  description:
                    "User-friendly Content Management Systems (CMS) enabling effortless website updates without technical expertise.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-blue-600 text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}

            {activeTab === "digital" &&
              [
                {
                  icon: <FaSearch className="text-purple-600 text-3xl" />,
                  title: "Targeted SEO Strategies",
                  description:
                    "Boost your website's search engine visibility and drive qualified organic traffic with our data-driven SEO techniques.",
                },
                {
                  icon: <FaChartLine className="text-purple-600 text-3xl" />,
                  title: "Engaging Social Media Marketing",
                  description:
                    "Cultivate brand loyalty and expand your reach through strategic, impactful social media campaigns across platforms.",
                },
                {
                  icon: <FaRegLightbulb className="text-purple-600 text-3xl" />,
                  title: "PPC & Ad Campaigns",
                  description:
                    "Maximize ROI with precision-targeted Pay-Per-Click advertising and compelling ad creatives that convert.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-purple-600 text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}

            {activeTab === "app" &&
              [
                {
                  icon: <FaMobileAlt className="text-pink-600 text-3xl" />,
                  title: "Native iOS Development",
                  description:
                    "Intuitive, high-performance iOS applications crafted for Apple's ecosystem, delivering seamless user experiences.",
                },
                {
                  icon: <FaMobileAlt className="text-pink-600 text-3xl" />,
                  title: "Robust Android Development",
                  description:
                    "Feature-rich Android apps providing excellent UX across diverse devices, built for scalability and performance.",
                },
                {
                  icon: <FaSyncAlt className="text-pink-600 text-3xl" />,
                  title: "Cross-Platform Solutions",
                  description:
                    "Build once, deploy everywhere. Efficient cross-platform apps (React Native, Flutter) for wider reach and faster TTM.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-pink-600 text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Black - Animated numbers and more dynamic background */}
      <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Our Achievements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Numbers That Speak Volumes
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our track record reflects our commitment to excellence and client
              success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 250, label: "Projects Delivered", suffix: "+" },
              { value: 98, label: "Client Satisfaction", suffix: "%" },
              { value: 10, label: "Years of Expertise", suffix: "+" },
              { value: 24, label: "Hour Support", suffix: "/7" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={index}
                viewport={{ once: true }}
                className="text-center bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  <CountUpAnimation target={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - White */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Client Voices
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Hear From Our Satisfied Partners
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Alexandra Lee",
                company: "CEO, Innovatech Solutions",
                testimonial:
                  "Solvitx didn't just build us a website; they crafted a digital experience. Our e-commerce conversion rates have soared by 150% thanks to their intuitive design and robust platform.",
                avatarInitial: "A",
                color: "bg-blue-500",
              },
              {
                name: "Marcus Chen",
                company: "Founder, TechStart Global",
                testimonial:
                  "The digital marketing strategies by Solvitx were a game-changer. We saw a 200% increase in organic traffic within three months. Their team is agile, insightful, and truly results-driven.",
                avatarInitial: "M",
                color: "bg-purple-500",
              },
              {
                name: "Sophia Miller",
                company: "Director, HealthPro Connect",
                testimonial:
                  "Our mobile app, developed by Solvitx, has received overwhelmingly positive user feedback. Their meticulous attention to detail and unwavering commitment to quality is truly commendable.",
                avatarInitial: "S",
                color: "bg-pink-500",
              },
            ].map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                <FaQuoteLeft className="text-3xl text-blue-300 absolute top-6 left-6 opacity-50" />
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed pt-8">
                  "{client.testimonial}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 ${client.color} rounded-full mr-4 flex items-center justify-center text-white text-xl font-bold shadow-md`}
                  >
                    {client.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {client.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{client.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section - Updated with better grouping and aesthetics */}
      <section
        id="technologies"
        className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Our Tech Arsenal
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Powered by Cutting-Edge Technologies
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We harness the latest and most robust technologies to build
              scalable, secure, and high-performance digital solutions tailored
              to your needs.
            </p>
          </motion.div>

          {[
            {
              title: "Frontend Frameworks",
              techs: [
                { name: "React", icon: SiReact, color: "text-sky-500" },
                { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
                { name: "Angular", icon: SiAngular, color: "text-red-600" },
                { name: "Vue.js", icon: SiVuedotjs, color: "text-emerald-500" },
              ],
            },
            {
              title: "Backend & API Development",
              techs: [
                { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
                {
                  name: "Python (Django/Flask)",
                  icon: SiPython,
                  color: "text-yellow-500",
                },
                {
                  name: "PHP (Laravel)",
                  icon: SiLaravel,
                  color: "text-orange-500",
                },
                {
                  name: "TypeScript",
                  icon: SiTypescript,
                  color: "text-blue-600",
                },
              ],
            },
            {
              title: "Database & Cloud Solutions",
              techs: [
                { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
                { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
                {
                  name: "PostgreSQL",
                  icon: SiPostgresql,
                  color: "text-indigo-500",
                },
                { name: "AWS", icon: SiMysql, color: "text-orange-400" },
              ],
            },
            {
              title: "Mobile App Development",
              techs: [
                { name: "Flutter", icon: SiFlutter, color: "text-sky-600" },
                { name: "React Native", icon: SiReact, color: "text-blue-500" },
                {
                  name: "Firebase",
                  icon: SiFirebase,
                  color: "text-yellow-500",
                },
                {
                  name: "Native iOS/Android",
                  icon: FaMobileAlt,
                  color: "text-gray-700",
                },
              ],
            },
          ].map((category) => (
            <div key={category.title} className="mb-16">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800"
              >
                {category.title}
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"
              ></motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                {category.techs.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.05 },
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      boxShadow: "0px 15px 30px -10px rgba(0,0,0,0.1)",
                    }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
                  >
                    <tech.icon
                      className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h4 className="font-semibold text-gray-700 text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {tech.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Black */}
      <section className="py-20 md:py-28 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Partner With Solvitx?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We're dedicated to your success, offering unparalleled expertise,
              innovative solutions, and unwavering support throughout your
              digital journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Seasoned Experts",
                description:
                  "Our team comprises industry veterans skilled in delivering impactful digital solutions.",
                icon: <FaUsers className="text-blue-400" />,
              },
              {
                title: "Proven Results",
                description:
                  "A strong portfolio showcasing successful projects and tangible ROI for our clients.",
                icon: <FaAward className="text-blue-400" />,
              },
              {
                title: "Agile & Adaptive",
                description:
                  "Flexible methodologies to adapt to your evolving needs and market dynamics.",
                icon: <FaSyncAlt className="text-blue-400" />,
              },
              {
                title: "Client-Centric Approach",
                description:
                  "Your goals are our priority. We collaborate closely to ensure solutions align perfectly.",
                icon: <FaRegLightbulb className="text-blue-400" />,
              },
              {
                title: "Future-Ready Tech",
                description:
                  "Leveraging the latest tools and frameworks for scalable and sustainable solutions.",
                icon: <FaRocket className="text-blue-400" />,
              },
              {
                title: "Dedicated Support",
                description:
                  "Ongoing assistance and maintenance to ensure your digital assets perform optimally.",
                icon: <FaShieldAlt className="text-blue-400" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={index}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced visual hierarchy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to common queries about our services,
              processes, and how we can help your business.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={index}
                viewport={{ once: true }}
                key={index}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 md:p-6 text-left hover:bg-gray-100 transition-all"
                >
                  <span className="font-semibold text-lg text-gray-800">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </motion.div>
                </button>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-5 md:px-6 pb-5"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Slider Section - White */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-700"
          >
            Trusted By Visionary Brands & Ambitious Startups
          </motion.h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="client-logos"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="h-24 w-40 flex items-center justify-center p-2">
                  <Image
                    src={`https://via.placeholder.com/150x60/CCCCCC/FFFFFF?text=Client+${i}`}
                    alt={`Client ${i} Logo`}
                    width={150}
                    height={60}
                    className="max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process Section - Black */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Blueprint for Your Success
            </h2>
            <p className="text-gray-300 text-lg">
              We follow a refined, systematic approach to ensure every project
              is a masterpiece of strategy and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your goals, audience, and market to craft a winning strategy.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Visualizing solutions with intuitive UI/UX design and interactive prototypes.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Agile development with rigorous testing for robust, high-quality deliverables.",
              },
              {
                step: "04",
                title: "Launch & Growth",
                description:
                  "Seamless deployment followed by ongoing support and optimization for sustained growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                custom={index}
                viewport={{ once: true }}
                className="relative p-8 bg-gray-900 rounded-2xl hover:shadow-blue-500/30 shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 absolute -top-5 -left-3 opacity-30 group-hover:opacity-70 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-400 relative z-10 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Quote Form Section (Contact) - White, more prominent */}
      <section
        id="contact"
        className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <span className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2 block">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Tell us about your vision. We're excited to learn about your
              project and discuss how Solvitx can turn your ideas into digital
              reality. Fill out the form below or call us directly.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name_contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name_contact"
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="e.g., Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company_contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_contact"
                    name="company"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="e.g., Innovate Corp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email_contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email_contact"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile_contact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile_contact"
                    name="mobile"
                    onChange={handleInputChange}
                    value={formData.mobile}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service_contact"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Interested In *
                </label>
                <select
                  id="service_contact"
                  name="service"
                  onChange={handleInputChange}
                  value={formData.service}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="" className="text-gray-500">
                    Select a service...
                  </option>
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="app-development">App Development</option>
                  <option value="seo-optimization">SEO Optimization</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="custom-software">Custom Software</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="details_contact"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Details *
                </label>
                <textarea
                  id="details_contact"
                  name="details"
                  onChange={handleInputChange}
                  value={formData.details}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Briefly describe your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px -5px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                >
                  Send Your Inquiry
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4 inline-block"
          >
            Solvitx
          </Link>
          <p className="mb-4 text-sm">
            Crafting Digital Excellence. Your Partner in Innovation.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <FaInstagram size={22} />
            </a>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Solvitx. All Rights Reserved.
          </p>
          <p className="text-xs mt-1">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
