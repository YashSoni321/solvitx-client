"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCogs,
  FaChartLine,
  FaUsers,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaCode,
  FaTools,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import heroImg from "../public/images/heroimages/Saleforce_Developement.jpg";
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

// Salesforce Services
const salesforceServices = [
  {
    title: "Custom Development",
    description:
      "Tailored Salesforce solutions for your unique business needs.",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Integration Services",
    description:
      "Seamless integration with your existing systems and applications.",
    icon: <FaCogs className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Mobile Solutions",
    description: "Mobile-first Salesforce applications for on-the-go access.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Cloud Migration",
    description: "Smooth transition to Salesforce cloud platform.",
    icon: <FaCloud className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Security Implementation",
    description: "Robust security measures and compliance solutions.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Analytics & Reporting",
    description: "Advanced analytics and custom reporting solutions.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Enhanced Productivity",
    description: "Streamline operations and boost team efficiency.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Improved Customer Experience",
    description: "Deliver exceptional customer service and support.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security and compliance.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "Scalable Solutions",
    description: "Grow your business with flexible Salesforce solutions.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Certified Experts",
    description: "Team of certified Salesforce developers and consultants.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your specific business requirements.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Track Record",
    description: "Successful implementations across industries.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your business needs and objectives.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Solution Design",
    description: "Creating a detailed implementation plan.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "Building and testing the Salesforce solution.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Support",
    description: "Launching and maintaining the solution.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Salesforce Development?",
    answer:
      "Salesforce Development involves creating custom applications and solutions on the Salesforce platform to meet specific business needs, including custom objects, workflows, and integrations.",
  },
  {
    question: "How long does Salesforce implementation take?",
    answer:
      "Implementation time varies based on complexity, but typically ranges from 4-12 weeks for standard implementations, and longer for complex custom solutions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including healthcare, finance, retail, manufacturing, and technology, providing tailored Salesforce solutions for each sector.",
  },
  {
    question: "Do you provide post-implementation support?",
    answer:
      "Yes, we offer comprehensive post-implementation support including maintenance, updates, and 24/7 technical assistance to ensure smooth operations.",
  },
];

export default function SalesforceDevelopment() {
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
        <title>Salesforce Development Services | SolvitX</title>
        <meta
          name="description"
          content="Expert Salesforce development services by SolvitX. Custom solutions, integration, and implementation for your business needs."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/salesforce-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Salesforce Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your business with custom Salesforce solutions.
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
        heading="Salesforce Development"
        highlight=""
        subheading="Transform your business with custom Salesforce solutions."
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
            Our Salesforce Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesforceServices.map((service, index) => (
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
            Why Choose Salesforce?
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our Salesforce development
            services can help your business grow.
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
