"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFileAlt,
  FaPenAlt,
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
  FaVideo,
  FaImage,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import heroImg from "../public/images/heroimages/Content_Marketing.jpg";
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

// Content Marketing services
const contentServices = [
  {
    title: "Blog Writing",
    description:
      "Engaging, SEO-optimized blog posts that drive traffic and establish authority.",
    icon: <FaBlog className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Video Content",
    description:
      "Professional video production for tutorials, testimonials, and brand stories.",
    icon: <FaVideo className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Infographics",
    description:
      "Visually appealing infographics that simplify complex information.",
    icon: <FaImage className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Social Media Content",
    description:
      "Platform-specific content that engages and converts your audience.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-pink-500",
  },
  {
    title: "Email Marketing",
    description:
      "Compelling email campaigns that nurture leads and drive sales.",
    icon: <FaEnvelope className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Content Strategy",
    description:
      "Comprehensive content planning and execution for maximum impact.",
    icon: <FaClipboardList className="text-4xl" />,
    color: "text-yellow-500",
  },
];

// Content Marketing benefits
const contentBenefits = [
  {
    title: "Brand Authority",
    description:
      "Establish your brand as an industry leader through valuable content.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Lead Generation",
    description:
      "Attract and convert high-quality leads with targeted content.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Customer Engagement",
    description:
      "Build lasting relationships with your audience through valuable content.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "SEO Performance",
    description:
      "Improve search rankings with optimized, high-quality content.",
    icon: <FaSearch className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Writers",
    description:
      "Our team of professional writers creates compelling, industry-specific content.",
    icon: <FaPenAlt className="text-3xl" />,
  },
  {
    title: "SEO Integration",
    description:
      "All content is optimized for search engines and user experience.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Content strategies based on analytics and performance metrics.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Consistent Quality",
    description:
      "Maintain high standards across all content types and platforms.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Content Audit",
    description:
      "Analyze existing content and identify gaps and opportunities.",
    icon: <FaFileAlt className="text-3xl" />,
  },
  {
    step: "2",
    title: "Strategy Development",
    description:
      "Create a comprehensive content strategy aligned with your goals.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Content Creation",
    description:
      "Produce high-quality, engaging content across multiple formats.",
    icon: <FaPenAlt className="text-3xl" />,
  },
  {
    step: "4",
    title: "Distribution & Promotion",
    description:
      "Share content across relevant channels and optimize for reach.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What types of content do you create?",
    answer:
      "We create various content types including blog posts, articles, videos, infographics, social media posts, email campaigns, and more. Our content is tailored to your industry and target audience.",
  },
  {
    question: "How do you ensure content quality?",
    answer:
      "We have a rigorous quality control process that includes research, writing, editing, and proofreading. All content is reviewed by subject matter experts and SEO specialists.",
  },
  {
    question: "How often will you create new content?",
    answer:
      "Content frequency depends on your goals and resources. We typically recommend 2-4 blog posts per month, along with regular social media content and email campaigns.",
  },
  {
    question: "How do you measure content success?",
    answer:
      "We track metrics like traffic, engagement, conversions, and SEO performance. Regular reports help us optimize content strategy for better results.",
  },
];

export default function ContentMarketingService() {
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
        <title>Content Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Expert content marketing services by SolvitX. Create engaging, SEO-optimized content that drives traffic and converts visitors into customers."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/content-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
            Create Content That Converts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Drive engagement and growth with our expert content marketing
            services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Content Audit
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={heroImg}
        heading="Content Marketing"
        highlight=""
        subheading="Drive engagement and growth with our expert content marketing services."
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
            Our Content Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
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
            Why Invest in Content Marketing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{benefit.icon}</div>
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
            Why Choose Our Content Marketing Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{item.icon}</div>
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
            Our Content Marketing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-green-400 mb-4">{step.icon}</div>
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
                  <span className="text-green-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-green-900 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Content Strategy?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free content audit and discover how we can help you create
            content that drives results.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
