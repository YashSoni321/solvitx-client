"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChartLine,
  FaSearch,
  FaBullseye,
  FaUsers,
  FaMobile,
  FaGlobe,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaChartBar,
  FaChartPie,
  FaRocket,
  FaTools,
  FaLock,
  FaCode,
  FaPen,
  FaLayerGroup,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";

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

// Digital Strategy Services
const digitalStrategyServices = [
  {
    title: "Digital Transformation",
    description: "Comprehensive strategy for digital business evolution.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Market Analysis",
    description: "In-depth research and competitive analysis.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Customer Journey Mapping",
    description: "Optimize customer experience across all touchpoints.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Performance Analytics",
    description: "Data-driven insights and optimization strategies.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Omnichannel Strategy",
    description: "Seamless integration across all digital channels.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Mobile Strategy",
    description: "Comprehensive mobile-first approach.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Competitive Advantage",
    description: "Stay ahead in the digital landscape.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Increased ROI",
    description: "Maximize your digital investments.",
    icon: <FaChartPie className="text-3xl" />,
  },
  {
    title: "Better Customer Engagement",
    description: "Enhanced digital customer experiences.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Future-Proof Business",
    description: "Adapt to evolving digital trends.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Strategic Experts",
    description: "Experienced digital strategists.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description: "Strategies based on analytics and insights.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored strategies for your business.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "Ongoing Support",
    description: "Continuous strategy refinement.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Analysis",
    description: "Comprehensive business and market assessment.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Planning",
    description: "Develop strategic roadmap and KPIs.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Implementation",
    description: "Execute digital transformation initiatives.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "4",
    title: "Optimization",
    description: "Continuous monitoring and improvement.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is digital strategy?",
    answer:
      "Digital strategy is a comprehensive plan that outlines how a business will use digital technologies to achieve its goals, improve operations, and create value for customers.",
  },
  {
    question: "How long does it take to develop a digital strategy?",
    answer:
      "The timeline varies based on business complexity, but typically takes 4-8 weeks for a comprehensive strategy, including research, planning, and implementation roadmap.",
  },
  {
    question: "What metrics do you track for digital strategy success?",
    answer:
      "We track various KPIs including digital engagement, conversion rates, customer satisfaction, ROI, and business growth metrics specific to your industry.",
  },
  {
    question: "How do you ensure strategy alignment with business goals?",
    answer:
      "We start with a deep understanding of your business objectives and ensure every digital initiative directly contributes to achieving these goals through regular alignment checks.",
  },
];

export default function DigitalStrategy() {
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
        <title>Digital Strategy Services | Solvitx</title>
        <meta
          name="description"
          content="Expert digital strategy services by Solvitx. We help businesses transform and thrive in the digital age."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
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
            Digital Strategy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your business with data-driven digital strategies.
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
            Our Digital Strategy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalStrategyServices.map((service, index) => (
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
            Why Invest in Digital Strategy?
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
            Our Strategic Process
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
            Get a free consultation and discover how our digital strategy
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
