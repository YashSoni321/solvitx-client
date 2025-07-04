"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaChartLine,
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
  FaBullseye,
  FaMobile,
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

// 360 Digital Marketing services
const digitalServices = [
  {
    title: "SEO & Content Marketing",
    description:
      "Comprehensive SEO strategies and content creation for organic growth.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic social media management and engagement across platforms.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns for measurable results and ROI.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with influencers to amplify brand reach.",
    icon: <FaBullseye className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Video Marketing",
    description: "Engaging video content for multiple platforms and purposes.",
    icon: <FaPlayCircle className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Mobile Marketing",
    description:
      "Optimized strategies for mobile-first audiences and platforms.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-yellow-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Holistic Approach",
    description: "Integrated strategies that work together for maximum impact.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Make informed choices based on real-time analytics and insights.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Consistent Branding",
    description: "Maintain brand consistency across all digital channels.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Strategies that grow with your business and adapt to changes.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Dedicated specialists in each digital marketing discipline.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Proven Results",
    description: "Track record of successful campaigns and satisfied clients.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Custom Strategies",
    description: "Tailored solutions based on your unique business needs.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and optimization of campaigns.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Discovery & Analysis",
    description: "Understand your business, goals, and target audience.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Strategy Development",
    description: "Create a comprehensive digital marketing strategy.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Implementation",
    description: "Execute strategies across all digital channels.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    step: "4",
    title: "Optimization",
    description: "Continuously monitor and improve campaign performance.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is 360° Digital Marketing?",
    answer:
      "360° Digital Marketing is a comprehensive approach that covers all aspects of your online presence, from SEO and social media to performance marketing and influencer partnerships. It ensures consistent messaging and maximum impact across all digital channels.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some results can be seen immediately (like social media engagement), comprehensive digital marketing success typically takes 3-6 months to fully materialize. We focus on sustainable, long-term growth.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track various KPIs including website traffic, engagement rates, conversion rates, ROI, and brand awareness metrics. Regular reports keep you informed of progress and areas for improvement.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "Our integrated approach ensures all digital marketing efforts work together seamlessly. We combine data-driven strategies with creative excellence to deliver measurable results.",
  },
];

export default function DigitalMarketing360() {
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
        <title>360° Digital Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Comprehensive digital marketing solutions by SolvitX. Integrated strategies for SEO, social media, performance marketing, and more."
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Complete Digital Marketing Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your online presence with our comprehensive 360° digital
            marketing services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Digital Audit
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
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Digital Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
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
            Why Choose 360° Digital Marketing?
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
            Our Digital Marketing Process
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
      <motion.section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free digital marketing audit and discover how we can help you
            achieve your business goals.
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
