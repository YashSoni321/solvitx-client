"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChartLine,
  FaSearchDollar,
  FaBullseye,
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
  FaMobile,
  FaAd,
  FaUsers,
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

// Performance Marketing services
const performanceServices = [
  {
    title: "Paid Search Advertising",
    description: "Strategic PPC campaigns on Google and Bing for maximum ROI.",
    icon: <FaSearchDollar className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Social Media Ads",
    description:
      "Targeted advertising across Facebook, Instagram, and LinkedIn.",
    icon: <FaAd className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Display Advertising",
    description: "Visual ads across premium websites and networks.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Retargeting Campaigns",
    description: "Re-engage visitors who showed interest in your products.",
    icon: <FaBullseye className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Mobile Advertising",
    description: "Optimized campaigns for mobile-first audiences.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive tracking and optimization of campaigns.",
    icon: <FaChartPie className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Measurable Results",
    description: "Track every dollar spent and its impact on your business.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Targeted Reach",
    description: "Reach the right audience at the right time with precision.",
    icon: <FaBullseye className="text-3xl" />,
  },
  {
    title: "Quick Results",
    description: "See immediate impact on your business growth.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Scalable Growth",
    description: "Scale campaigns based on performance and business needs.",
    icon: <FaChartBar className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals in all major advertising platforms.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description: "Make decisions based on real-time analytics and insights.",
    icon: <FaChartPie className="text-3xl" />,
  },
  {
    title: "Transparent Reporting",
    description: "Clear, detailed reports on campaign performance.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    title: "24/7 Optimization",
    description: "Continuous monitoring and improvement of campaigns.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Audience Analysis",
    description: "Identify and understand your target audience segments.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    step: "2",
    title: "Campaign Strategy",
    description: "Develop data-driven advertising strategies.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Implementation",
    description: "Launch and optimize campaigns across platforms.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    step: "4",
    title: "Performance Tracking",
    description: "Monitor and optimize for maximum ROI.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Performance Marketing?",
    answer:
      "Performance Marketing is a data-driven approach to digital advertising where you only pay for specific actions or results, such as clicks, leads, or sales. It focuses on measurable outcomes and ROI.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track various KPIs including click-through rates, conversion rates, cost per acquisition, return on ad spend, and overall ROI. Our detailed analytics help optimize campaigns for maximum performance.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We manage campaigns across Google Ads, Facebook/Instagram Ads, LinkedIn Ads, and other major advertising platforms. Our team is certified in all major advertising platforms.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Performance marketing campaigns can show immediate results, with optimization leading to improved performance over time. We typically see significant improvements within the first 30-60 days.",
  },
];

export default function PerformanceMarketing() {
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
        <title>Performance Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Data-driven performance marketing solutions by SolvitX. Maximize ROI with our strategic advertising campaigns."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/digital-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-teal-400">
            Performance-Driven Marketing Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Maximize your ROI with our data-driven advertising strategies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Marketing Audit
          </motion.button>
        </motion.div>
      </motion.section>

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Modern Web Development Solutions"
        content="We specialize in creating cutting-edge web applications using the latest technologies. Our team of expert developers delivers scalable, secure, and high-performance solutions tailored to your business needs. From responsive design to complex web applications, we ensure your digital presence stands out in today's competitive market."
        position="left"
      />

      <DescSection
        heading=""
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      />

      {/* Our Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Performance Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceServices.map((service, index) => (
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
            Why Choose Performance Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{benefit.icon}</div>
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
                <div className="text-green-400 mb-4">{item.icon}</div>
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
            Our Performance Marketing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-green-400 mb-4">{step.icon}</div>
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
      <motion.section className="py-10 bg-gray-900">
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
                  <span className="text-green-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-green-900 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Boost Your Marketing Performance?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free performance marketing audit and discover how we can help
            you achieve better ROI.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
