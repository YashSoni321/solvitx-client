"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaUserTie,
  FaSearch,
  FaCalendarAlt,
  FaChartBar,
  FaBell,
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
  FaMoneyBillWave,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/ORS.jpg";

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

// Recruitment Features
const recruitmentFeatures = [
  {
    title: "Job Posting",
    description: "Create and manage job listings across multiple platforms.",
    icon: <FaFileAlt className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Candidate Search",
    description:
      "Advanced search and filtering capabilities for finding the right talent.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Interview Scheduling",
    description: "Automated interview scheduling and calendar management.",
    icon: <FaCalendarAlt className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Resume Management",
    description: "Organize and track candidate resumes and applications.",
    icon: <FaUserTie className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive recruitment metrics and insights.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Team Collaboration",
    description: "Collaborative tools for hiring teams.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Time Efficiency",
    description: "Streamline recruitment processes and reduce hiring time.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Better Hiring Decisions",
    description:
      "Make data-driven decisions with comprehensive candidate insights.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Cost Reduction",
    description: "Lower recruitment costs through automation and efficiency.",
    icon: <FaMoneyBillWave className="text-3xl" />,
  },
  {
    title: "Enhanced Candidate Experience",
    description: "Provide a smooth and professional application process.",
    icon: <FaUserTie className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "HR Technology Experts",
    description: "Experienced team in recruitment technology.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your organization's hiring needs.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Success",
    description: "Successful implementations across industries.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your recruitment needs and processes.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "System Design",
    description: "Creating a detailed implementation plan.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "Building and testing the software solution.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Training",
    description: "Launching the system and training staff.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Online Recruitment Software?",
    answer:
      "Online Recruitment Software is a comprehensive solution that helps organizations manage the entire hiring process, from job posting to candidate selection, streamlining recruitment operations.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on organization size and requirements, typically ranging from 4-8 weeks for standard implementations.",
  },
  {
    question: "Is the software customizable?",
    answer:
      "Yes, our software can be customized to meet your specific requirements, including custom workflows, reports, and integration with existing systems.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we offer comprehensive training for HR teams and ongoing technical support to ensure smooth operations.",
  },
];

export default function OnlineRecruitmentSoftware() {
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
        <title>Online Recruitment Software | SolvitX</title>
        <meta
          name="description"
          content="Comprehensive online recruitment software by SolvitX. Streamline hiring processes, enhance candidate experience, and make better hiring decisions."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/recruitment-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Online Recruitment Software
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your hiring process with our comprehensive recruitment
            solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Demo
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={heroImg}
        heading="Online Recruitment Software"
        highlight=""
        subheading="Transform your hiring process with our comprehensive recruitment solution."
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

      {/* Features Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${feature.color} mb-4`}>{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
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
            Why Choose Our Software?
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
            Implementation Process
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
            Ready to Transform Your Hiring Process?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free demo and discover how our recruitment software can
            streamline your hiring process and help you find the best talent.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Demo
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
