"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaSearch,
  FaLock,
  FaChartLine,
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
  FaCreditCard,
  FaTruck,
  FaUserShield,
  FaBell,
  FaGift,
  FaComments,
  FaDollarSign,
  FaGlobe,
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

// Ecommerce Features
const ecommerceFeatures = [
  {
    title: "Product Management",
    description:
      "Comprehensive product catalog with advanced filtering and search.",
    icon: <FaShoppingCart className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Mobile Responsive",
    description: "Seamless shopping experience across all devices.",
    icon: <FaMobileAlt className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Advanced Search",
    description: "Intelligent search with filters and suggestions.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Secure Payments",
    description: "Multiple payment gateways with PCI compliance.",
    icon: <FaLock className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time insights into sales and customer behavior.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Inventory Management",
    description: "Automated stock tracking and alerts.",
    icon: <FaClipboardList className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Increased Sales",
    description: "Drive more conversions with optimized shopping experience.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "24/7 Availability",
    description: "Your store is open for business around the clock.",
    icon: <FaBell className="text-3xl" />,
  },
  {
    title: "Global Reach",
    description: "Expand your market beyond geographical boundaries.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Cost Efficiency",
    description: "Reduce operational costs with automation.",
    icon: <FaDollarSign className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Ecommerce Experts",
    description: "Experienced team in online retail solutions.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your specific business needs.",
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
    description: "Understanding your business needs and goals.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Development",
    description: "Creating a user-friendly and scalable solution.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Testing & Optimization",
    description: "Ensuring flawless performance and security.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "Deploying your store and providing ongoing support.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Additional Features
const additionalFeatures = [
  {
    title: "Multi-Currency Support",
    description: "Accept payments in multiple currencies.",
    icon: <FaCreditCard className="text-3xl" />,
  },
  {
    title: "Shipping Integration",
    description: "Seamless integration with major shipping carriers.",
    icon: <FaTruck className="text-3xl" />,
  },
  {
    title: "Customer Accounts",
    description: "Secure user accounts with order history.",
    icon: <FaUserShield className="text-3xl" />,
  },
  {
    title: "Promotions & Discounts",
    description: "Create and manage special offers.",
    icon: <FaGift className="text-3xl" />,
  },
  {
    title: "Live Chat Support",
    description: "Real-time customer assistance.",
    icon: <FaComments className="text-3xl" />,
  },
  {
    title: "SEO Optimization",
    description: "Built-in tools for better search visibility.",
    icon: <FaSearch className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "How long does it take to develop an ecommerce website?",
    answer:
      "Development time varies based on complexity, typically ranging from 2-4 months for a fully-featured store.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes, we offer both responsive web design and native mobile apps for iOS and Android.",
  },
  {
    question: "What payment gateways do you support?",
    answer:
      "We integrate with major payment processors including Stripe, PayPal, and local payment methods.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and 24/7 technical support.",
  },
];

export default function EcommerceWebsiteDevelopment() {
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
        <title>Ecommerce Website Development | Solvitx</title>
        <meta
          name="description"
          content="Professional ecommerce website development by Solvitx. Create a powerful online store with advanced features and seamless user experience."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/ecommerce-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Transform Your Business Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Build a powerful ecommerce platform that drives sales and delights
            customers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
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
            Powerful Ecommerce Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => (
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
            Why Go Online?
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

      {/* Additional Features Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative"
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
      <motion.section className="py-20 bg-gray-800">
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
            Ready to Launch Your Online Store?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our ecommerce solutions can
            transform your business.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
