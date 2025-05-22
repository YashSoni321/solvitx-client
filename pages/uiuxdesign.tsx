"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaPalette,
  FaMobile,
  FaDesktop,
  FaUserFriends,
  FaChartLine,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaChartBar,
  FaChartPie,
  FaSearch,
  FaTools,
  FaLock,
  FaCode,
  FaRocket,
  FaPen,
  FaLayerGroup,
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

// UI/UX Services
const uiUxServices = [
  {
    title: "User Research",
    description: "In-depth analysis of user needs and behaviors.",
    icon: <FaUserFriends className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Wireframing",
    description: "Create detailed wireframes for your digital products.",
    icon: <FaPen className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "UI Design",
    description: "Beautiful and intuitive user interfaces.",
    icon: <FaPalette className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "UX Design",
    description: "Optimize user experience and interactions.",
    icon: <FaDesktop className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Prototyping",
    description: "Interactive prototypes for user testing.",
    icon: <FaLayerGroup className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Mobile Design",
    description: "Responsive designs for all devices.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Enhanced Usability",
    description: "Intuitive interfaces that users love.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Higher Engagement",
    description: "Keep users engaged with your product.",
    icon: <FaChartPie className="text-3xl" />,
  },
  {
    title: "Better Conversion",
    description: "Optimized designs that drive results.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Brand Consistency",
    description: "Maintain a cohesive brand identity.",
    icon: <FaPalette className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Designers",
    description: "Experienced UI/UX professionals.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "User-Centered Approach",
    description: "Designs focused on user needs.",
    icon: <FaUserFriends className="text-3xl" />,
  },
  {
    title: "Latest Tools",
    description: "Using modern design tools and techniques.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "Continuous Support",
    description: "Ongoing design support and updates.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Research",
    description: "Understand user needs and business goals.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design",
    description: "Create wireframes and visual designs.",
    icon: <FaPen className="text-3xl" />,
  },
  {
    step: "3",
    title: "Prototype",
    description: "Build interactive prototypes.",
    icon: <FaLayerGroup className="text-3xl" />,
  },
  {
    step: "4",
    title: "Test & Iterate",
    description: "User testing and design refinement.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual elements and layout, while UX (User Experience) design focuses on the overall user journey and interaction with the product.",
  },
  {
    question: "How long does the design process take?",
    answer:
      "The timeline varies based on project complexity, but typically ranges from 4-12 weeks, including research, design, prototyping, and testing phases.",
  },
  {
    question: "Do you provide design system documentation?",
    answer:
      "Yes, we create comprehensive design systems that include style guides, component libraries, and documentation to ensure consistency across your product.",
  },
  {
    question: "How do you ensure designs are accessible?",
    answer:
      "We follow WCAG guidelines and conduct accessibility testing to ensure our designs are usable by people with various abilities and disabilities.",
  },
];

export default function UIUXDesign() {
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
        <title>UI/UX Design Services | Solvitx</title>
        <meta
          name="description"
          content="Expert UI/UX design services by Solvitx. We create beautiful, intuitive, and user-centered digital experiences."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/digital-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            UI/UX Design
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Create beautiful, intuitive, and user-centered digital experiences.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
            Our UI/UX Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiUxServices.map((service, index) => (
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
            Why Invest in UI/UX Design?
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
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Design Process
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
      <motion.section className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Digital Experience?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our UI/UX design services
            can elevate your product.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Consultation
          </motion.button>
        </div>
      </motion.section>
      {/* </motion.section>
      </motion.section>
      </motion.section> */}

      {/* Footer */}
      <Footer />
    </>
  );
}
