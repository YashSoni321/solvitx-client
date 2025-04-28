"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaAd,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaPalette,
  FaHeadset,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaChartBar,
  FaShieldAlt,
  FaChartPie,
  FaBullseye,
  FaMobile,
  FaGlobe,
  FaPlayCircle,
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

// PPC services
const ppcServices = [
  {
    title: "Google Ads",
    description:
      "Strategic campaigns on Google Search, Display, and Shopping networks.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Social Media Ads",
    description:
      "Targeted advertising on Facebook, Instagram, LinkedIn, and Twitter.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Remarketing",
    description:
      "Re-engage visitors who have shown interest in your products or services.",
    icon: <FaBullseye className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Mobile Advertising",
    description: "Optimize campaigns for mobile users and app installations.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Display Advertising",
    description: "Visual ads across websites and apps in your target network.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Video Advertising",
    description: "Engaging video ads on YouTube and other video platforms.",
    icon: <FaPlayCircle className="text-4xl" />,
    color: "text-orange-500",
  },
];

// PPC benefits
const ppcBenefits = [
  {
    title: "Immediate Results",
    description:
      "Start driving traffic and leads as soon as your campaigns go live.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Targeted Traffic",
    description: "Reach your ideal customers with precise targeting options.",
    icon: <FaBullseye className="text-3xl" />,
  },
  {
    title: "Measurable ROI",
    description: "Track every dollar spent and optimize for maximum return.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Flexible Budgeting",
    description:
      "Control your ad spend and adjust budgets based on performance.",
    icon: <FaChartPie className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Certified Experts",
    description:
      "Our team holds certifications from Google, Facebook, and other platforms.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Make decisions based on real-time data and performance metrics.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Transparent Reporting",
    description: "Get detailed insights into your campaign performance.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring and optimization of your campaigns.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Strategy Development",
    description: "Analyze your goals and create a customized PPC strategy.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Campaign Setup",
    description: "Create and optimize campaigns with precise targeting.",
    icon: <FaAd className="text-3xl" />,
  },
  {
    step: "3",
    title: "Launch & Monitor",
    description: "Launch campaigns and monitor performance in real-time.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    step: "4",
    title: "Optimize & Scale",
    description: "Continuously optimize campaigns and scale successful ones.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "How much should I budget for PPC advertising?",
    answer:
      "Budget depends on your industry, competition, and goals. We recommend starting with a minimum of $1,000/month for effective campaigns, but we can work with various budget levels.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "You can start seeing results within days of launching campaigns. However, it typically takes 2-3 months to fully optimize and achieve consistent performance.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "While we can't guarantee specific results, we guarantee our best efforts and proven strategies. We focus on improving your key metrics and ROI.",
  },
  {
    question: "How do you measure PPC success?",
    answer:
      "We track metrics like click-through rate, conversion rate, cost per acquisition, and return on ad spend. Regular reports show your campaign performance and ROI.",
  },
];

export default function PPCMarketingService() {
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
        <title>PPC Marketing Services | Solvitx</title>
        <meta
          name="description"
          content="Expert PPC marketing services by Solvitx. Drive targeted traffic and maximize ROI with our data-driven pay-per-click advertising strategies."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-red-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/ppc-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Drive Results with PPC Advertising
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Get immediate traffic and leads with our expert PPC marketing
            services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free PPC Audit
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

      {/* Our Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our PPC Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcServices.map((service, index) => (
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
            Why Invest in PPC Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ppcBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{benefit.icon}</div>
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
            Why Choose Our PPC Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{item.icon}</div>
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
            Our PPC Management Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-red-400 mb-4">{step.icon}</div>
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
                  <span className="text-red-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-red-900 to-orange-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Drive More Traffic and Leads?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free PPC audit and discover how we can help you maximize your
            advertising ROI.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
