"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaApple,
  FaCode,
  FaMobile,
  FaRocket,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaChartBar,
  FaShieldAlt,
  FaChartPie,
  FaGlobe,
  FaSearch,
  FaTools,
  FaDatabase,
  FaServer,
  FaCloud,
  FaLock,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import heroImg from "../public/images/heroimages/IOS.jpg";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";

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

// iOS Services
const iosServices = [
  {
    title: "Native iOS Development",
    description: "Custom iOS apps built with Swift and Objective-C.",
    icon: <FaApple className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "UI/UX Design",
    description: "Human Interface Guidelines compliant, elegant interfaces.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Backend Integration",
    description: "Seamless integration with RESTful APIs and databases.",
    icon: <FaServer className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Cloud Services",
    description: "Integration with iCloud and other cloud platforms.",
    icon: <FaCloud className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Security Implementation",
    description: "Advanced security features and data protection.",
    icon: <FaLock className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Performance Optimization",
    description: "Optimized for speed, battery life, and memory usage.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Premium User Base",
    description: "Access to high-value iOS users worldwide.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored apps for your specific business needs.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "Higher Revenue",
    description: "iOS users typically spend more on apps and in-app purchases.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Easy Integration",
    description: "Seamless integration with Apple services.",
    icon: <FaCode className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified iOS developers with years of experience.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Latest Technologies",
    description: "Using modern iOS development tools and practices.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing across multiple devices.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Continuous support and maintenance services.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understand your app requirements and target audience.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Planning",
    description: "Create wireframes and plan the development process.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development",
    description: "Build your app with best practices and standards.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "4",
    title: "Testing & Launch",
    description: "Test thoroughly and launch on App Store.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What technologies do you use for iOS development?",
    answer:
      "We use Swift and Objective-C for native development, along with modern iOS development tools like Xcode, SwiftUI, and UIKit.",
  },
  {
    question: "How long does it take to develop an iOS app?",
    answer:
      "Development time varies based on complexity and features. A simple app might take 2-3 months, while complex apps can take 4-8 months or more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, updates, and feature enhancements to keep your app running smoothly.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement industry-standard security practices, conduct regular security audits, and follow Apple's security guidelines to protect your app and user data.",
  },
];

export default function iOSAppDevelopment() {
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
        <title>iOS App Development Services | SolvitX</title>
        <meta
          name="description"
          content="Expert iOS app development services by SolvitX. We build native iOS applications using Swift and Objective-C."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/digital-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            iOS App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Build powerful, scalable, and user-friendly iOS applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </motion.section> */}
      <HeroSection
        backgroundImage={heroImg}
        heading="IOS App Development"
        highlight=""
        subheading="Build powerful, scalable, and user-friendly iOS applications."
        buttonText="Get a Free Consultation"
      />

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
            Our iOS Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iosServices.map((service, index) => (
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
            Why Choose iOS Development?
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
            Why Choose Our Services?
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
            Our Development Process
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
            Ready to Build Your iOS App?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how we can help you create a
            powerful iOS application.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Consultation
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
