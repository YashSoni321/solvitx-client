"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import heroImg from "../public/images/heroimages/Ecommerce1.jpg";
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

// Ecommerce Features
const ecommerceFeatures = [
  {
    title: "Product Management",
    description:
      "Extensive product catalogue featuring sophisticated search and filtering capabilities.",
    icon: <FaShoppingCart className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Mobile Responsive",
    description: "Flawless shopping experience across multiple devices",
    icon: <FaMobileAlt className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Advanced Search",
    description: "Advanced search utilising filters and recommendations.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Secure Payments",
    description: "Numerous payment gateways adhering to PCI compliance.",
    icon: <FaLock className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Analytics Dashboard",
    description: "Immediate insights into sales and customer behaviour.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Inventory Management",
    description: "Computerised stock monitoring and timely alerts.",
    icon: <FaClipboardList className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Increased Sales",
    description:
      "Increase purchases with a refined and improved buying experience",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "24/7 Availability",
    description: "Solvitx maintains nonstop service providing.",
    icon: <FaBell className="text-3xl" />,
  },
  {
    title: "Global Reach",
    description: "Expand your enterprise beyond global thresholds.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Cost Efficiency",
    description: "Minimize operational expenses through mechanisation. ",
    icon: <FaDollarSign className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Ecommerce Experts",
    description: "Skilled experts in web-based retail services.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Designed around your unique enterprise needs.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our technical support is always there to solve your problems.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Success",
    description: "Successful deployments around a variety of fields.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your commercial objectives and vision.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Development",
    description: "Building an user-friendly and adaptable framework",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Testing & Optimization",
    description: "Ensuring optimal functionality with data integrity.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "Setting your platform and ensuring dedicated assistance.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Additional Features
const additionalFeatures = [
  {
    title: "Multi-Currency Support",
    description: "Receive transactions in multiple currencies.",
    icon: <FaCreditCard className="text-3xl" />,
  },
  {
    title: "Shipping Integration",
    description: "Effortless integration with leading delivery providers.",
    icon: <FaTruck className="text-3xl" />,
  },
  {
    title: "Customer Accounts",
    description: "Encrypted user data with detailed order logs.",
    icon: <FaUserShield className="text-3xl" />,
  },
  {
    title: "Promotions & Discounts",
    description: "Create and control promotional campaigns.",
    icon: <FaGift className="text-3xl" />,
  },
  {
    title: "Live Chat Support",
    description: "Instant client support.",
    icon: <FaComments className="text-3xl" />,
  },
  {
    title: "SEO Optimization",
    description: "Inbuilt utilities for improved search exposure.",
    icon: <FaSearch className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What platforms do you build your ecommerce site on?",
    answer:
      "We build ecommerce websites on platforms like Shopify, WooCommerce, Magento, and custom solutions using modern frameworks.",
  },
  {
    question: "Do you provide mobile friendly and responsive designs?",
    answer:
      "Yes, we offer fully responsive designs that work seamlessly across desktops, tablets, and mobile devices.",
  },
  {
    question: "Can you make my e-commerce website SEO - friendly?",
    answer:
      "Absolutely. We follow best SEO practices including optimized page structures, metadata, fast load times, and mobile responsiveness.",
  },
  {
    question: "What is your estimated development time?",
    answer:
      "Development time varies based on complexity, typically ranging from 2-4 months for a fully-featured store.",
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
        <title>Best eCommerce Website Development Company in India & USA | SolvitX</title>
        <meta
          name="description"
          content="SolvitX offers scalable, secure eCommerce website development for brands in India & USA. Get custom online stores with responsive design, SEO, and payment integration."
        />
        <meta
          name="keywords"
          content="best ecommerce website development company in india, ecommerce website development usa, ecommerce website design services, custom ecommerce solutions, scalable online store development, ecommerce web development company usa, ecommerce website india, ecommerce developers in usa, ecommerce website development with SEO, ecommerce mobile responsive design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="About Us — SolvitX | Where Vision Meets Technology"
        />
        <meta
          property="og:description"
          content="Meet the team behind SolvitX and learn about our journey to create digital experiences that drive real business results."
        />
        <meta property="og:image" content="/images/solvitx.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.solvitx.com/ecommerce-website-development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
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
      </motion.section> */}
      <HeroSection
        backgroundImage={heroImg}
        heading="Build a scalable online store that will turn clicks into customers."
        highlight=""
        subheading="We help to turn your ideas into future proof eCommerce platforms that are designed to your goals."
        buttonText="Get a Free Consultation"
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom Solutions For Your Business "
        content="SolvitX is here to solve all your complex business problems in the online space with precision and style. Our clean codes, audience centric designs and scalable tech, helps you build responsive web applications that are tailored to your business goals and needs. 
All you need is an idea, and we make it all possible.
"
        position="left"
      />

      {/* <DescSection
        heading="Custom Solutions for Your Business"
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      /> */}

      {/* Features Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Do You Need An E-Commerce Web Application?
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
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-12 text-white p-y-4">
            Why Go Online?
          </h2>
          {/* <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            The goal is not just about an online presence, but an entire digital
            image that will build trust and authority for your brand.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
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
      <motion.section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Special Features
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

        {/* Why Choose Us Section */}
        <motion.section className="py-10 mt-8 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Why Should You Collaborate With SolvitX?
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
      </motion.section>
      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="What Makes SolvitX A Trusted Global Partner?
"
        content={[
          "10+ Years of Experience ",
          "97% Customer Satisfaction",
          "520+ Successful Projects",
          "20+ IT Experts",
          "84+ Clients Worldwide",
        ]}
        position="right"
      />

      {/* Working Process Section */}
      <motion.section className="py-10 bg-gray-900">
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

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="What Do Our Clients Say?
"
        content={
          "SolvitX has transformed our offline presence into a seamless e-commerce platform. From product pages to secure checkouts and third party integrations, they handled everything. Our customers loved this new experience and we have even increased our online sales by 40% since the launch. - Benjamin Mosby, CTO"
        }
        position="right"
      />

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
