"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHotel,
  FaCalendarAlt,
  FaUsers,
  FaChartBar,
  FaBell,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaCode,
  FaTools,
  FaDatabase,
  FaRocket,
  FaUtensils,
  FaMoneyBillWave,
  FaReact,
  FaServer,
  FaBolt,
  FaDocker,
  FaCloud,
  FaMobileAlt,
  FaExchangeAlt,
  FaChartLine,
  FaComments,
  FaKey,
  FaRobot,
  FaStar,
  FaSync,
  FaLock,
  FaShieldAlt,
  FaCreditCard,
  FaGlobe,
  FaWifi,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/hotelMS.jpg";
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

// Hotel Management Features
const hotelFeatures = [
  {
    title: "Reservation Management",
    description: "Efficient booking and room allocation system.",
    icon: <FaCalendarAlt className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Front Desk Operations",
    description: "Streamlined check-in/check-out and guest management.",
    icon: <FaHotel className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Housekeeping",
    description: "Automated room status and cleaning schedules.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Restaurant Management",
    description: "Integrated food and beverage management system.",
    icon: <FaUtensils className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Financial Management",
    description: "Comprehensive accounting and reporting tools.",
    icon: <FaMoneyBillWave className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed performance metrics and insights.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Operational Efficiency",
    description: "Streamline hotel operations and reduce manual work.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Enhanced Guest Experience",
    description: "Improve guest satisfaction with better service management.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Revenue Optimization",
    description:
      "Maximize revenue through better pricing and inventory management.",
    icon: <FaMoneyBillWave className="text-3xl" />,
  },
  {
    title: "Data Security",
    description: "Secure storage and management of sensitive information.",
    icon: <FaDatabase className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Industry Experts",
    description: "Experienced team in hospitality technology.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your hotel's specific needs.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Success",
    description: "Successful implementations in hotels worldwide.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your hotel's operations and needs.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "System Design",
    description: "Creating a detailed implementation plan.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "Building and testing the software solution.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Training",
    description: "Launching the system and training staff.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Hotel Management Software?",
    answer:
      "Hotel Management Software is a comprehensive solution that helps hotels manage reservations, front desk operations, housekeeping, restaurant management, and financial operations efficiently.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on hotel size and requirements, typically ranging from 4-8 weeks for standard implementations.",
  },
  {
    question: "Is the software customizable?",
    answer:
      "Yes, our software can be customized to meet your specific requirements, including custom modules, reports, and workflows.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we offer comprehensive training for staff and ongoing technical support to ensure smooth operations.",
  },
];

const hotelTechCategories = [
  {
    name: "Backend & Core Systems",
    technologies: [
      {
        name: "Node.js (or Java‑Spring)",
        icon: <FaServer className="text-3xl" />,
        color: "text-green-600",
      },
      {
        name: "MongoDB / PostgreSQL",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "Redis (caching)",
        icon: <FaBolt className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "Microservices (Docker + Kubernetes)",
        icon: <FaDocker className="text-3xl" />,
        color: "text-blue-400",
      },
    ],
  },
  {
    name: "Web Frontend",
    technologies: [
      {
        name: "React (or Angular/Vue)",
        icon: <FaReact className="text-3xl" />,
        color: "text-cyan-500",
      },
      {
        name: "Next.js (SSR)",
        icon: <FaCode className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "REST / GraphQL API",
        icon: <FaCloud className="text-3xl" />,
        color: "text-orange-400",
      },
    ],
  },
  {
    name: "Mobile App",
    technologies: [
      {
        name: "React Native (or Flutter)",
        icon: <FaMobileAlt className="text-3xl" />,
        color: "text-pink-500",
      },
      {
        name: "Firebase / Realm (local DB)",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-red-400",
      },
      {
        name: "Push Notifications",
        icon: <FaBell className="text-3xl" />,
        color: "text-yellow-600",
      },
    ],
  },
  {
    name: "Booking & PMS",
    technologies: [
      {
        name: "Property Management System (PMS)",
        icon: <FaHotel className="text-3xl" />,
        color: "text-indigo-500",
      },
      {
        name: "Channel Manager / CRS",
        icon: <FaExchangeAlt className="text-3xl" />,
        color: "text-teal-400",
      },
      {
        name: "Revenue Management System (RMS)",
        icon: <FaChartLine className="text-3xl" />,
        color: "text-blue-600",
      },
    ],
  },
  {
    name: "Guest Engagement",
    technologies: [
      {
        name: "Guest App Messaging",
        icon: <FaComments className="text-3xl" />,
        color: "text-green-400",
      },
      {
        name: "Mobile Check‑in / Mobile Key",
        icon: <FaKey className="text-3xl" />,
        color: "text-gray-500",
      },
      {
        name: "Chatbot / Voice Assistant",
        icon: <FaRobot className="text-3xl" />,
        color: "text-purple-400",
      },
    ],
  },
  {
    name: "Analytics & BI",
    technologies: [
      {
        name: "Business Intelligence Tools",
        icon: <FaChartBar className="text-3xl" />,
        color: "text-blue-700",
      },
      {
        name: "Sentiment & Review Analysis",
        icon: <FaStar className="text-3xl" />,
        color: "text-yellow-400",
      },
      {
        name: "Logging & Monitoring",
        icon: <FaTools className="text-3xl" />,
        color: "text-red-600",
      },
    ],
  },
  {
    name: "Infrastructure & Security",
    technologies: [
      {
        name: "AWS / GCP / Azure",
        icon: <FaCloud className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "CI/CD (Jenkins, GitHub Actions)",
        icon: <FaSync className="text-3xl" />,
        color: "text-gray-600",
      },
      {
        name: "OAuth2 / JWT Auth",
        icon: <FaLock className="text-3xl" />,
        color: "text-red-500",
      },
      {
        name: "PCI DSS / GDPR Compliance",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-blue-600",
      },
    ],
  },
  {
    name: "Integrations",
    technologies: [
      {
        name: "Payment Gateway (Stripe/Adyen)",
        icon: <FaCreditCard className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "OTA/GDS Channels",
        icon: <FaGlobe className="text-3xl" />,
        color: "text-teal-500",
      },
      {
        name: "IoT (room control)",
        icon: <FaWifi className="text-3xl" />,
        color: "text-indigo-400",
      },
    ],
  },
];
export default function HotelManagementSoftware() {
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
        <title>Hotel Management Software | SolvitX</title>
        <meta
          name="description"
          content="Comprehensive hotel management software by SolvitX. Streamline operations, enhance guest experience, and optimize revenue."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/hotel-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Hotel Management Software
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your hotel operations with our comprehensive management
            solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Demo
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={heroImg}
        heading="Build innovative hospitality solutions for exceptional guest experiences."
        highlight=""
        subheading="Rule the hospitality industry with our tailored hotel management software services that will streamline your operations and build memorable experiences for your guests. "
        buttonText="Get on a free consultation call with us before the next holiday season."
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom Hotel Management Software Development Services"
        content="Do you want your guests to choose their stay with you again and again? Yes, it is possible. From boutique resorts to large chains, we provide tailored, interactive, and scalable platforms that will optimise workflows, boost productivity, improve services, and thus provide a memorable experience for all your guests. We let you stay ahead of the competition by providing custom hotel management software solutions that will cover all your industry complexities.
"
        position="left"
      />

      <DescSection
        heading="Custom Solutions for Your Business"
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      />
      <TechStackSection
        techCategories={hotelTechCategories}
        title="Our Technology Stack "
        description="We help to streamline your entire operations into a smart, hassle-free, secure, and reliable system. "
      />

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
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelFeatures.map((feature, index) => (
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
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Benefits
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
            Why Choose Our Software?
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
            Implementation Process
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
            Ready to Transform Your Hotel?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free demo and discover how our hotel management software can
            streamline your operations and enhance guest experience.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Your Free Demo
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
