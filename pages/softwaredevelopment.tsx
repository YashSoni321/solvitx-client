"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaTools,
  FaRocket,
  FaFileAlt,
  FaUsers,
  FaStar,
  FaHashtag,
  FaImage,
  FaGlobe,
  FaLock,
  FaBolt,
  FaExchangeAlt,
  FaBell,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/Software Development.jpg";
import heroImgMobile from "../public/images/hero-mobile/SDM.jpg";
import useIsMobile from "@/hooks/useIsMobile";

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

// Software Development Services
const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your specific business needs.",
    icon: <FaCode className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Web Application Development",
    description:
      "Modern, responsive web applications with cutting-edge features.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: <FaMobileAlt className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud-based applications and infrastructure.",
    icon: <FaCloud className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Database Management",
    description: "Efficient data storage and management solutions.",
    icon: <FaDatabase className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "API Development",
    description: "Robust APIs for seamless integration and data exchange.",
    icon: <FaExchangeAlt className="text-4xl" />,
    color: "text-indigo-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Scalability",
    description: "Solutions that grow with your business needs.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Security",
    description: "Enterprise-grade security measures and protocols.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "Performance",
    description: "High-performance applications optimized for speed.",
    icon: <FaBolt className="text-3xl" />,
  },
  {
    title: "Reliability",
    description: "Stable and reliable software solutions.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Experienced developers with proven track record.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Agile Methodology",
    description: "Flexible development process for better results.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing for flawless performance.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your business needs and goals.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Planning",
    description: "Creating detailed architecture and UI/UX design.",
    icon: <FaFileAlt className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development",
    description: "Agile development with regular updates.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "4",
    title: "Testing & Deployment",
    description: "Thorough testing and smooth deployment.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Additional Features
const additionalFeatures = [
  {
    title: "Real-time Updates",
    description: "Instant notifications and data synchronization.",
    icon: <FaBell className="text-3xl" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive insights and reporting tools.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Multi-platform Support",
    description: "Cross-platform compatibility.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Custom Integrations",
    description: "Seamless integration with existing systems.",
    icon: <FaExchangeAlt className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is the typical development timeline?",
    answer:
      "Timelines vary based on project complexity, typically ranging from 3-6 months for a complete solution.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes, we offer comprehensive maintenance and 24/7 support services.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of technologies including React, Node.js, Python, Java, and more.",
  },
  {
    question: "How do you ensure software security?",
    answer:
      "We implement industry-standard security practices and regular security audits.",
  },
];

export default function SoftwareDevelopment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Software Development | SolvitX</title>
        <meta
          name="description"
          content="Professional software development services by SolvitX. Custom solutions for your business needs."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80" />
          <div className="absolute inset-0 bg-[url('/images/software-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
            Transform Your Ideas into Reality
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Custom software solutions that drive innovation and growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </motion.section> */}
      <HeroSection
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="Software Development"
        highlight=""
        subheading="Custom software solutions that drive innovation and growth."
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
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Software Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Software Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{benefit.icon}</div>
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
      <motion.section className="py-10 bg-gray-900">
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
                <div className="text-purple-400 mb-4">{item.icon}</div>
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
      <motion.section className="py-10 bg-gray-800">
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
                <div className="absolute -top-4 -left-4 bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-purple-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Features Section */}
      <motion.section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-6 rounded-xl bg-gray-900 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className="text-purple-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Build Your Software Solution?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our software development
            services can transform your business.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
