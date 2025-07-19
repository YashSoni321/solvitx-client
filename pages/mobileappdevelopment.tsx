"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaAndroid,
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

// App Development Types
const appTypes = [
  {
    title: "Android App Development",
    description: "Native Android applications built with Kotlin and Java.",
    icon: <FaAndroid className="text-4xl" />,
    color: "text-green-500",
    link: "/android-app-development",
  },
  {
    title: "iOS App Development",
    description: "Native iOS applications built with Swift and Objective-C.",
    icon: <FaApple className="text-4xl" />,
    color: "text-blue-500",
    link: "/ios-app-development",
  },
  {
    title: "Hybrid App Development",
    description: "Cross-platform applications using React Native and Flutter.",
    icon: <FaCode className="text-4xl" />,
    color: "text-purple-500",
    link: "/hybrid-app-development",
  },
];

// Benefits
const benefits = [
  {
    title: "Native Performance",
    description: "Optimized performance for each platform.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Platform-Specific Features",
    description: "Leverage unique features of each platform.",
    icon: <FaMobile className="text-3xl" />,
  },
  {
    title: "Cost-Effective",
    description: "Save time and resources with hybrid development.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Wider Reach",
    description: "Target multiple platforms with a single codebase.",
    icon: <FaGlobe className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Experienced developers in all major platforms.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Agile Development",
    description: "Flexible and iterative development process.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing across all platforms.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Continuous support and maintenance.",
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
    description: "Test thoroughly and launch on app stores.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "Which platform should I choose for my app?",
    answer:
      "The choice depends on your target audience, budget, and app requirements. We can help you make the right decision based on your specific needs.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development time varies based on complexity, features, and platform. A simple app might take 2-3 months, while complex apps can take 4-8 months or more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, updates, and feature enhancements to keep your app running smoothly.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement industry-standard security practices, conduct regular security audits, and follow platform-specific security guidelines to protect your app and user data.",
  },
];

export default function MobileAppDevelopment() {
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
        <title>Mobile App Development Services | SolvitX</title>
        <meta
          name="description"
          content="Expert mobile app development services by SolvitX. We build native and hybrid applications for Android, iOS, and cross-platform solutions."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/digital-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Mobile App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Build powerful, scalable, and user-friendly mobile applications for
            any platform.
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

      {/* App Types Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Mobile App Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <Link href={type.link} key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className={`${type.color} mb-4`}>{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {type.title}
                  </h3>
                  <p className="text-gray-300">{type.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Mobile App Development?
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
            Ready to Build Your Mobile App?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how we can help you create a
            powerful mobile application.
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
