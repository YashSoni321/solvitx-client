"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaTools,
  FaDatabase,
  FaRocket,
  FaFileAlt,
  FaUsers,
  FaStar,
  FaHashtag,
  FaImage,
  FaGlobe,
  FaLock,
  FaBolt,
  FaExchangeAlt,
  FaBell,
  FaProjectDiagram,
  FaChartBar,
  FaKey,
  FaCogs,
  FaCodeBranch,
  FaTachometerAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/Api_Development.jpg";
import heroImgMobile from "../public/images/hero-mobile/API.jpg";
import useIsMobile from "@/hooks/useIsMobile";
import { TechStackSection } from "@/components/common/TechStackSection";

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

const apiTechCategories = [
  {
    name: "API Types & Protocols",
    technologies: [
      {
        name: "RESTful APIs",
        icon: <FaExchangeAlt className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "GraphQL",
        icon: <FaProjectDiagram className="text-3xl" />,
        color: "text-pink-500",
      },
      {
        name: "gRPC",
        icon: <FaCogs className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "WebSockets",
        icon: <FaCodeBranch className="text-3xl" />,
        color: "text-green-600",
      },
    ],
  },
  {
    name: "Backend Frameworks",
    technologies: [
      {
        name: "Node.js",
        icon: <FaCogs className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: <FaCogs className="text-3xl" />,
        color: "text-gray-500",
      },
      {
        name: "Django (Python)",
        icon: <FaCogs className="text-3xl" />,
        color: "text-blue-700",
      },
      {
        name: "Laravel (PHP)",
        icon: <FaCogs className="text-3xl" />,
        color: "text-red-600",
      },
    ],
  },
  {
    name: "Authentication & Security",
    technologies: [
      {
        name: "OAuth 2.0",
        icon: <FaLock className="text-3xl" />,
        color: "text-purple-600",
      },
      {
        name: "JWT",
        icon: <FaKey className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "API Rate Limiting",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-red-500",
      },
      {
        name: "CORS Management",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-indigo-500",
      },
    ],
  },
  {
    name: "Monitoring & Tools",
    technologies: [
      {
        name: "Postman",
        icon: <FaTools className="text-3xl" />,
        color: "text-orange-500",
      },
      {
        name: "Swagger / OpenAPI",
        icon: <FaTools className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "Logging & Monitoring",
        icon: <FaChartBar className="text-3xl" />,
        color: "text-green-400",
      },
      {
        name: "API Gateway",
        icon: <FaProjectDiagram className="text-3xl" />,
        color: "text-gray-600",
      },
    ],
  },
];

// API Services
const apiServices = [
  {
    title: "RESTful APIs",
    description:
      "Develop resilient, scalable interfaces designed for your application needs.",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "GraphQL APIs",
    description:
      "Construct dynamic GraphQL solutions to streamline data delivery.",
    icon: <FaServer className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "API Security",
    description:
      "Enforce strong encryption and access control for secure APIs.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "API Integration",
    description:
      "Stable integration with custom or third party APIs, CRMs and databases. ",
    icon: <FaExchangeAlt className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Performance",
    description:
      "Establish smooth communication with third-party infrastructures.",
    icon: <FaBolt className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Optimisation",
    description:
      "Achieve reliable, low-latency data exchanges through optimisation.",
    icon: <FaTachometerAlt className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "API Documentation",
    description: "Enable quick onboarding with usage guides and schemas.",
    icon: <FaFileAlt className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Scalability",
    description:
      "Future-proof interfaces that handle growing traffic with ease.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Security",
    description: "Protect sensitive data to defend against data breaches.",
    icon: <FaLock className="text-3xl" />,
  },
  {
    title: "Performance",
    description:
      "Lean architecture delivering performance at scale with minimal data lag.",
    icon: <FaBolt className="text-3xl" />,
  },
  {
    title: "Global Reach",
    description: "Borderless connectivity with scalable cloud networks.",
    icon: <FaGlobe className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "API Experts",
    description: "Proven API strategists across diverse API ecosystems.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Best Practices",
    description:
      "Adhere to structured coding, error handling, and logging norms.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock tech help for troubleshooting and updates. ",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Success",
    description:
      "Trusted by brands in building reliable API rollouts across verticals.",
    icon: <FaStar className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description:
      "Translate technical needs and specifications into structured APIs.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "API Design",
    description: "Blueprints API schemas with complete route mapping.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "Build backend logic and validate load testing.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Monitoring",
    description:
      "Deploy endpoints to production with proactive troubleshooting.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// Additional Features
const additionalFeatures = [
  {
    title: "Rate Limiting",
    description: "Manage traffic with usage thresholds and quotas.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Caching",
    description: "Enhance API efficiency by implementing cache strategies.",
    icon: <FaDatabase className="text-3xl" />,
  },
  {
    title: "Versioning",
    description: "Facilitate user transitions with structured API releases.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Analytics",
    description: "Audit API interactions to optimise performance and load.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Webhooks",
    description: "Notify clients of event-driven updates with webhook support.",
    icon: <FaBell className="text-3xl" />,
  },
  {
    title: "SDK Generation",
    description:
      "Equip developers with SDKs to speed up cross-platform integration.",
    icon: <FaCode className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is API development?",
    answer:
      "API development involves creating interfaces that allow different software applications to communicate with each other, enabling data exchange and functionality sharing.",
  },
  {
    question: "How long does API development take?",
    answer:
      "Development time varies based on complexity, typically ranging from 2-6 weeks for a standard API implementation.",
  },
  {
    question: "Do you provide API documentation?",
    answer:
      "Yes, we provide comprehensive API documentation including endpoints, parameters, authentication methods, and example requests.",
  },
  {
    question: "What security measures do you implement?",
    answer:
      "We implement industry-standard security measures including authentication, authorization, encryption, and rate limiting.",
  },
];

export default function APIDevelopment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>API Development Services | SolvitX</title>
        <meta
          name="description"
          content="Professional API development services by SolvitX. Build scalable, secure, and high-performance APIs for your applications."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/api-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Power Your Applications
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Build robust, scalable, and secure APIs that drive your digital
            transformation.
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
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="A Sturdy Backbone For Your Modern Software."
        highlight=""
        subheading="We build clean and layered architecture that emphasises testability, versioning, and CI/CD pipelines that accelerate your entire DevOps workflow."
        buttonText="Get a Free Consultation"
      />
      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom API Development Solutions"
        content="This is your opportunity to make your software, devices, and applications future-ready with our customised APIs. Our experts help you to integrate your business's existing infrastructure with our tailored API development solutions. Establish secure transactions, efficient connections, data exchange, and seamless integration with our high-performance APIs. "
        position="left"
      />

      <TechStackSection
        techCategories={apiTechCategories}
        title="Our Technology Stack "
        description="At SolvitX, with our expertise, we let you build responsive apps and user-friendly software that enables efficient and integrated workflows, especially in the fields of healthcare, education, communications, and hospitality."
      />

      {/* Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Build APIs?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center my-10">
            Modern applications and software are not just about appealing
            designs —it is about extended functionality, interoperability,
            cross-platform communications, scalability, and security
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiServices.map((service, index) => (
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
            Our Special API Development Features
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
      <motion.section className="py-10 bg-gray-900">
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
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose SolvitX For API Development Services?
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
        title="What Do Our Clients Say?"
        content="SolvitX team has deep technical knowledge and built us a set of scalable APIs for our internal operations, making communication between our app, CRM and inventory systems seamless. - Aditya Sharma, Operations Lead."
        position="left"
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
            Ready to Build Your API?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our API development
            services can power your applications.
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
