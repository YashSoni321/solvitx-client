"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaSearch,
  FaChartLine,
  FaMobile,
  FaGlobe,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaTrophy,
  FaCogs,
  FaChartPie,
  FaShieldAlt,
  FaClipboardList,
  FaTools,
  FaCode,
  FaEdit,
  FaLink,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import { useState } from "react";
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

// SEO services
const seoServices = [
  {
    title: "Technical SEO",
    description:
      "Optimize your website's technical foundation for better search engine visibility.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "On-Page SEO",
    description:
      "Enhance your content and meta elements for improved rankings.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Mobile SEO",
    description: "Ensure your site performs flawlessly on mobile devices.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Content Strategy",
    description:
      "Create engaging, SEO-optimized content that ranks and converts.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Link Building",
    description: "Build high-quality backlinks to boost your domain authority.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-yellow-500",
  },
];

// SEO benefits
const seoBenefits = [
  {
    title: "Increased Visibility",
    description:
      "Rank higher in search results and reach more potential customers.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Targeted Traffic",
    description:
      "Attract visitors who are actively searching for your products or services.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Cost-Effective",
    description: "Get long-term results without ongoing advertising costs.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Brand Authority",
    description: "Build trust and credibility with higher search rankings.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. While some improvements can be seen in weeks, significant results typically take 3-6 months. We focus on sustainable growth rather than quick fixes.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "Our comprehensive SEO services include technical optimization, on-page SEO, content strategy, link building, local SEO, and regular performance reporting. We tailor our approach to your specific business goals.",
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer:
      "While we can't guarantee specific rankings (as search algorithms constantly change), we guarantee our best efforts and proven strategies to improve your search visibility and organic traffic.",
  },
  {
    question: "How do you measure SEO success?",
    answer:
      "We track multiple KPIs including keyword rankings, organic traffic, conversion rates, bounce rates, and domain authority. You'll receive regular reports showing your progress.",
  },
];

// Add these new arrays after the existing arrays
const whyChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "We've helped hundreds of businesses achieve top rankings and significant traffic growth.",
    icon: <FaTrophy className="text-3xl" />,
  },
  {
    title: "Customized Strategies",
    description:
      "Every business is unique. We create tailored SEO strategies that match your specific goals.",
    icon: <FaCogs className="text-3xl" />,
  },
  {
    title: "Transparent Reporting",
    description:
      "Get detailed monthly reports with clear metrics and actionable insights.",
    icon: <FaChartPie className="text-3xl" />,
  },
  {
    title: "White-Hat Techniques",
    description:
      "We use only ethical, Google-approved SEO practices for sustainable results.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Initial Audit",
    description:
      "We conduct a comprehensive analysis of your website's current SEO performance.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Strategy Development",
    description:
      "Create a customized SEO plan based on your business goals and target audience.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Implementation",
    description:
      "Execute technical optimizations, content improvements, and link-building strategies.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Monitoring & Reporting",
    description:
      "Track progress, analyze results, and make data-driven adjustments.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

const keyFeatures = [
  {
    title: "Technical SEO Audit",
    description:
      "Comprehensive analysis of your website's technical health and performance.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Keyword Research",
    description:
      "In-depth research to identify high-value keywords for your business.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    title: "Content Optimization",
    description:
      "Strategic optimization of existing content and creation of new, engaging content.",
    icon: <FaEdit className="text-3xl" />,
  },
  {
    title: "Link Building",
    description: "Building high-quality backlinks from authoritative websites.",
    icon: <FaLink className="text-3xl" />,
  },
  {
    title: "Local SEO",
    description:
      "Optimization for local search results and Google My Business.",
    icon: <FaMapMarkerAlt className="text-3xl" />,
  },
  {
    title: "Mobile Optimization",
    description:
      "Ensuring your website performs flawlessly on all mobile devices.",
    icon: <FaMobile className="text-3xl" />,
  },
];

export default function SEOService() {
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
        <title>SEO Services | Solvitx</title>
        <meta
          name="description"
          content="Expert SEO services by Solvitx. Improve your search rankings, drive organic traffic, and grow your business with our proven SEO strategies."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/seo-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Dominate Search Rankings with Expert SEO Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Drive organic traffic and grow your business with our proven SEO
            strategies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free SEO Audit
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
            Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
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
            Why Invest in SEO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoBenefits.map((benefit, index) => (
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
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Our SEO Services?
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
            Our Step-by-Step Working Process
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

      {/* Key Features Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Key Features of Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
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
            Ready to Improve Your Search Rankings?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free SEO audit and discover how we can help you dominate
            search results.
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
