"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaSearch,
  FaChartLine,
  FaMobileAlt,
  FaGlobe,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaCode,
  FaTools,
  FaDatabase,
  FaRocket,
  FaFileAlt,
  FaUsers,
  FaStar,
  FaHashtag,
  FaImage,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ASO Services
const asoServices = [
  {
    title: "Keyword Research",
    description: "Comprehensive keyword analysis for optimal app visibility.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "App Store Optimization",
    description: "Optimize your app listing for better discoverability.",
    icon: <FaMobileAlt className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Review Management",
    description: "Monitor and respond to app reviews effectively.",
    icon: <FaStar className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Localization",
    description: "Adapt your app for global markets and languages.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Performance Tracking",
    description: "Monitor and analyze app performance metrics.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Visual Optimization",
    description: "Optimize app screenshots and preview videos.",
    icon: <FaImage className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Increased Visibility",
    description: "Improve your app's discoverability in app stores.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    title: "Higher Rankings",
    description: "Achieve better rankings in app store search results.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "More Downloads",
    description: "Drive more organic downloads to your app.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Better ROI",
    description: "Maximize your return on investment with ASO.",
    icon: <FaStar className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "ASO Experts",
    description: "Experienced team in app store optimization.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description: "Strategies based on comprehensive analytics.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Results",
    description: "Successful ASO campaigns across industries.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "App Analysis",
    description: "Comprehensive analysis of your app and competitors.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "Creating a detailed ASO optimization plan.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Implementation",
    description: "Executing the optimization strategy.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Monitoring & Optimization",
    description: "Continuous tracking and improvement.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is App Store Optimization (ASO)?",
    answer:
      "ASO is the process of optimizing mobile apps to rank higher in app store search results, increasing visibility and organic downloads.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results typically start appearing within 2-4 weeks, with full optimization effects visible in 2-3 months.",
  },
  {
    question: "Is ASO different for iOS and Android?",
    answer:
      "Yes, while the principles are similar, each platform has unique algorithms and optimization requirements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer continuous monitoring, optimization, and support to maintain and improve your app's performance.",
  },
];

export default function ASOServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>App Store Optimization Services | SolvitX</title>
        <meta
          name="description"
          content="Professional App Store Optimization services by SolvitX. Increase app visibility, drive more downloads, and improve app store rankings."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/aso-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            App Store Optimization
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Boost your app's visibility and drive more organic downloads with
            our expert ASO services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Audit
          </motion.button>
        </motion.div>
      </motion.section>

      <DescSection
        heading="Our Web Development Services"
        image="/images/services/WebDevelopment.jpg"
        title="Modern Web Development Solutions"
        content="We specialize in creating cutting-edge web applications using the latest technologies. Our team of expert developers delivers scalable, secure, and high-performance solutions tailored to your business needs. From responsive design to complex web applications, we ensure your digital presence stands out in today's competitive market."
        position="left"
      />

      <DescSection
        heading="Custom Solutions for Your Business"
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      />

      {/* Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our ASO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {asoServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Our ASO Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Working Process Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our ASO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-blue-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-6 rounded-xl bg-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className="text-blue-400 transition-transform duration-300 transform">
                    {activeFaq === index ? (
                      <FaChevronUp className="h-5 w-5" />
                    ) : (
                      <FaChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeFaq === index ? "max-h-96 p-6 pt-0" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Boost Your App's Visibility?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free app store audit and discover how our ASO services can
            increase your app's visibility and downloads.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Audit
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
