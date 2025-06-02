"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import heroImg from "../public/images/hero_image.jpg";

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
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaChevronRight,
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
import Footer from "@/components/homepage/Footer";
import { workStages } from "./contact";
import { budgetOptions } from "@/components/common/ContactUsForm";
import { clients } from "@/components/homepage/Teams";
import HeroSection from "@/components/homepage/Hero";

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
export const CountUpAnimation = ({ target }: { target: number }) => {
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
  const [formData, setFormData] = useState<any>({
    name: "",
    mobile: "",
    email: "",
    service: "",
    details: "",
  });
  const [activeTab, setActiveTab] = useState("web");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prevStage) => (prevStage + 1) % workStages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Form state
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   budget: "",
  //   message: "",
  // });

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Budget options

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName} ${formData?.name}`,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: "SolvitX Team",
    };
    console.log("templateParams", templateParams);

    // Use the email config values
    console.log("emailConfig", emailConfig);

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });

        // Reset success message after a delay
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        setSubmitError("Failed to send your message. Please try again later.");
      });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Basic form validation
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.mobile ||
  //     !formData.service ||
  //     !formData.details
  //   ) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }
  //   console.log("Form Data:", formData); // Log form data
  //   window.location.href = "/thank-you";
  // };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Log input changes

    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What range of digital services does SolvitX provide?",
      answer:
        "SolvitX offers a comprehensive suite of digital solutions, including bespoke web development, dynamic mobile app creation, strategic digital marketing campaigns, advanced SEO optimization, intuitive UI/UX design, and scalable custom software development to elevate your business.",
    },
    {
      question: "What is the typical project timeline for a new website?",
      answer:
        "Project timelines are tailored to complexity. A standard informational website might take 2-4 weeks, whereas intricate e-commerce platforms or custom web applications could range from 2-3 months. We provide a precise timeline after a thorough requirement analysis.",
    },
    {
      question: "Does SolvitX offer post-launch maintenance and support?",
      answer:
        "Absolutely. We provide a variety of ongoing maintenance and support packages designed to keep your digital assets secure, up-to-date, and performing at their peak. Our dedicated support team is readily available to address any emerging issues.",
    },
    {
      question: "How is project pricing determined at SolvitX?",
      answer:
        "Every project is unique. Pricing is based on specific requirements, features, complexity, and overall scope. We believe in transparency and provide detailed, itemized quotes after fully understanding your vision and business objectives.",
    },
    {
      question: "Can SolvitX help improve my existing website's performance?",
      answer:
        "Yes, definitely! We offer website audit services, performance optimization, SEO enhancements, and redesign services to revitalize your existing online presence and improve user engagement and conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Floating Social Media Links */}

      {/* Header/Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              SolvitX
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
      </nav> */}

      {/* Hero Section - White */}

      <HeroSection
        backgroundImage={heroImg}
        heading="Empowering Your Digital Growth"
        highlight="With Trust & Innovation"
        subheading="SolvitX delivers reliable web, app, and marketing solutions trusted by businesses worldwide. Let us help you build your digital future with confidence."
        buttonText="Get Started"
      />

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
                At SolvitX, we're more than developers; we're architects of
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
                    name="phone"
                    placeholder="Mobile Number *"
                    onChange={handleInputChange}
                    value={formData.phone}
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
                    name="budget"
                    onChange={handleInputChange}
                    value={formData.budget}
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
                    name="message"
                    placeholder="Tell us about your project... *"
                    rows={3}
                    onChange={handleInputChange}
                    value={formData.message}
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
                  "SolvitX didn't just build us a website; they crafted a digital experience. Our e-commerce conversion rates have soared by 150% thanks to their intuitive design and robust platform.",
                avatarInitial: "A",
                color: "bg-blue-500",
              },
              {
                name: "Marcus Chen",
                company: "Founder, TechStart Global",
                testimonial:
                  "The digital marketing strategies by SolvitX were a game-changer. We saw a 200% increase in organic traffic within three months. Their team is agile, insightful, and truly results-driven.",
                avatarInitial: "M",
                color: "bg-purple-500",
              },
              {
                name: "Sophia Miller",
                company: "Director, HealthPro Connect",
                testimonial:
                  "Our mobile app, developed by SolvitX, has received overwhelmingly positive user feedback. Their meticulous attention to detail and unwavering commitment to quality is truly commendable.",
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
      {/* <section
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
      </section> */}

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
              Why Partner With SolvitX?
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
            {clients.map((client, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="h-24 w-40 flex items-center justify-center p-2">
                  {/* <Image
                    src={`https://dummyimage.com/600x400/000/fff`}
                    alt={`Client ${i} Logo`}
                    width={150}
                    height={60}
                    className="max-h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  /> */}
                  <img
                    width={150}
                    height={60}
                    className="max-h-22 w-auto object-contain hover:opacity-100 transition-opacity duration-300 "
                    src={client.logo}
                    alt=""
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
      <section id="contact-form" className="bg-black py-20 px-4">
        <div className="container mx-auto">
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              {submitSuccess && (
                <div className="bg-green-600/20 border border-green-600 text-green-100 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              {submitError && (
                <div className="bg-red-600/20 border border-red-600 text-red-100 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-gray-300 mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-300 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2" htmlFor="budget">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option} disabled={index === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
            {/* About SolvitX */}
            <div className="mb-16 relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              <h3 className="text-3xl font-bold text-white mb-6">
                About SolvitX
              </h3>

              <div className="text-gray-300 space-y-6">
                <p>
                  We&apos;re not just another tech company. At SolvitX, we
                  combine creativity, technical expertise, and business acumen
                  to create digital solutions that make a real difference.
                </p>

                {/* Animated Stages of Work showcase */}
                <div className="relative h-60 w-full overflow-hidden rounded-xl shadow-xl">
                  {/* Animated background */}
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 bg-gradient-to-br ${workStages[activeStage].color}`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      key={`icon-${activeStage}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4"
                    >
                      {workStages[activeStage].icon}
                    </motion.div>

                    <motion.h4
                      key={`title-${activeStage}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-2xl font-bold text-white mb-2"
                    >
                      {workStages[activeStage].title}
                    </motion.h4>

                    <motion.p
                      key={`desc-${activeStage}`}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-white/90 max-w-md"
                    >
                      {workStages[activeStage].description}
                    </motion.p>
                  </div>

                  {/* Stage indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {workStages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeStage === index ? "bg-white w-6" : "bg-white/50"
                        }`}
                        aria-label={`Go to stage ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <p>
                  Since our founding, we have helped businesses of all sizes
                  transform their digital presence and build products that their
                  users love.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-gray-800 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Jaipur, Rajasthan 302003</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-gray-800 p-3 rounded-full">
                    <FaEnvelope className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">
                      {/* solvitxsolutions@gmail.com{" "} */}
                      <a href="mailto:solvitxsolutions@gmail.com">
                        solvitxsolutions@gmail.com
                      </a>
                      <br />
                      {/* support@SolvitX.com */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
