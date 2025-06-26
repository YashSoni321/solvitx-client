"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaUserFriends,
  FaChartLine,
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
  FaSearch,
  FaCamera,
  FaVideo,
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

// Influencer Marketing services
const influencerServices = [
  {
    title: "Influencer Identification",
    description:
      "Find the perfect influencers for your brand and target audience.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Campaign Strategy",
    description: "Develop engaging influencer marketing campaigns.",
    icon: <FaClipboardList className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Content Creation",
    description: "Collaborate with influencers to create authentic content.",
    icon: <FaCamera className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Video Marketing",
    description: "Leverage influencer video content across platforms.",
    icon: <FaVideo className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Performance Tracking",
    description: "Monitor and measure campaign effectiveness.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Relationship Management",
    description: "Build and maintain strong influencer partnerships.",
    icon: <FaUserFriends className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Authentic Engagement",
    description: "Connect with audiences through trusted influencer voices.",
    icon: <FaUserFriends className="text-3xl" />,
  },
  {
    title: "Targeted Reach",
    description: "Access specific audience segments through niche influencers.",
    icon: <FaBullseye className="text-3xl" />,
  },
  {
    title: "Brand Awareness",
    description: "Increase visibility through influencer networks.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Content Amplification",
    description: "Extend your content reach through influencer sharing.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Experienced professionals in influencer marketing.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Vast Network",
    description:
      "Access to a diverse network of influencers across industries.",
    icon: <FaUserFriends className="text-3xl" />,
  },
  {
    title: "Strategic Approach",
    description: "Data-driven strategies for maximum impact.",
    icon: <FaChartPie className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Continuous campaign monitoring and optimization.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Audience Analysis",
    description: "Understand your target audience and their preferences.",
    icon: <FaUserFriends className="text-3xl" />,
  },
  {
    step: "2",
    title: "Influencer Selection",
    description: "Identify and vet the right influencers for your brand.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "3",
    title: "Campaign Execution",
    description: "Launch and manage influencer campaigns.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    step: "4",
    title: "Performance Analysis",
    description: "Track results and optimize future campaigns.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Influencer Marketing?",
    answer:
      "Influencer Marketing is a strategy that leverages the reach and credibility of social media influencers to promote your brand, products, or services to their engaged audience.",
  },
  {
    question: "How do you select the right influencers?",
    answer:
      "We analyze multiple factors including audience demographics, engagement rates, content quality, brand alignment, and past performance to find the perfect influencers for your brand.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We manage influencer campaigns across Instagram, YouTube, TikTok, LinkedIn, and other relevant platforms based on your target audience and campaign goals.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track various metrics including reach, engagement, conversions, brand sentiment, and ROI to measure the effectiveness of influencer campaigns.",
  },
];

export default function InfluencerMarketing() {
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
        <title>Influencer Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Strategic influencer marketing solutions by SolvitX. Connect with your audience through authentic influencer partnerships."
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
            Influencer Marketing Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Connect with your audience through authentic influencer
            partnerships.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Marketing Audit
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
            Our Influencer Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencerServices.map((service, index) => (
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
            Why Choose Influencer Marketing?
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
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Influencer Marketing Process
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
            Ready to Amplify Your Brand?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free influencer marketing audit and discover how we can help
            you connect with your audience.
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

      {/* Footer */}
      <Footer />
    </>
  );
}
