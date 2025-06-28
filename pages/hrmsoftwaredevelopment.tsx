"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaUsers,
  FaCalendarAlt,
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
  FaFileAlt,
  FaMoneyBillWave,
  FaUserClock,
  FaTasks,
  FaReact,
  FaPalette,
  FaUserShield,
  FaServer,
  FaCloud,
  FaMoneyCheckAlt,
  FaLock,
  FaBolt,
  FaFire,
  FaDocker,
  FaSync,
  FaShieldAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/HRM.jpg";
import { TechStackSection } from "@/components/common/TechStackSection";
import { ServicesSection } from "@/components/common/ServicesSection";
import { WhySelectSection } from "@/components/common/WhySelectSection";
import WhyChooseUsSection from "@/components/common/WhyChooseUsSection";

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

// HRM Features
const hrmFeatures = [
  {
    title: "Employee Management",
    description: "We centralise our workforce management to boost efficiency.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Attendance Tracking",
    description: "We leverage advanced technology for real-time attendance records.",
    icon: <FaUserClock className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Leave Management",
    description: "We streamline the leave request and approval process.",
    icon: <FaCalendarAlt className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Performance Management",
    description: "We automate goal-setting, KPI tracking, and advanced indicators for maximum productivity.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Payroll Processing",
    description: "We provide error-free payroll processing to ensure employee satisfaction.",
    icon: <FaMoneyBillWave className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Task Management",
    description: "Optimise the workflows and manage tasks efficiently through automated systems.",
    icon: <FaTasks className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Operational Efficiency",
    description: "We streamline all our operations and task assignments for a productive workplace.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Data Accuracy",
    description: "We avoid human errors with automated audit trails and error analysis.",
    icon: <FaDatabase className="text-3xl" />,
  },
  {
    title: "Cost Reduction",
    description: "We minimise manual tasks and reduce redundant tech to effectively manage our cost budgets.",
    icon: <FaMoneyBillWave className="text-3xl" />,
  },
  {
    title: "Employee Satisfaction",
    description: "We foster a positive and healthy workplace culture through transparent feedback and employee portals.",
    icon: <FaUsers className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Industry Experts",
    description: "Our teams comprise experts who have served in the HRM industry for years.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "We provide you with tailored solutions that are unique to your business.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "We are always there to provide you with help in case of bugs or troubleshooting.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Track Record",
    description: "We rely on your 10+ years of successful implementations and satisfied clients.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "You get on a call with us to discuss all your tech requirements.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "System Design",
    description: "We build a system that will solve your unique business needs.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "We develop the software and train it rigorously so that it performs efficiently.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Training",
    description: "Our software is trained and deployed under the latest technology guidelines.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is HRM Software?",
    answer:
      "HRM Software is a comprehensive solution that helps organizations manage employee data, attendance, leave, performance, payroll, and other HR functions efficiently.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on organization size and requirements, typically ranging from 4-8 weeks for standard implementations.",
  },
  {
    question: "Is the software customizable?",
    answer:
      "Yes, our software can be customized to meet your specific requirements, including custom modules, reports, and workflows.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we offer comprehensive training for HR teams and ongoing technical support to ensure smooth operations.",
  },
];

const hrmTechCategories = [
  {
    name: "Front End",
    technologies: [
      {
        name: "React (or Angular)",
        icon: <FaReact className="text-3xl" />,
        color: "text-cyan-500",
      },
      {
        name: "Next.js (for dashboards & SSR)",
        icon: <FaCode className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "Tailwind CSS / Material UI",
        icon: <FaPalette className="text-3xl" />,
        color: "text-pink-400",
      },
      {
        name: "Role-based Access UI",
        icon: <FaUserShield className="text-3xl" />,
        color: "text-yellow-600",
      },
    ],
  },
  {
    name: "Back End",
    technologies: [
      {
        name: "Node.js / Java Spring Boot",
        icon: <FaServer className="text-3xl" />,
        color: "text-green-600",
      },
      {
        name: "REST / GraphQL API",
        icon: <FaCloud className="text-3xl" />,
        color: "text-orange-400",
      },
      {
        name: "Payroll Processing Engine",
        icon: <FaMoneyCheckAlt className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Authentication & Role Management",
        icon: <FaLock className="text-3xl" />,
        color: "text-red-500",
      },
    ],
  },
  {
    name: "Database",
    technologies: [
      {
        name: "PostgreSQL / MySQL",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "Redis (caching sessions)",
        icon: <FaBolt className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "MongoDB (NoSQL HR docs)",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-green-700",
      },
      {
        name: "Firebase (notifications/user auth)",
        icon: <FaFire className="text-3xl" />,
        color: "text-red-400",
      },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      {
        name: "Docker + Kubernetes (modular HR modules)",
        icon: <FaDocker className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "CI/CD (GitHub Actions, Jenkins)",
        icon: <FaSync className="text-3xl" />,
        color: "text-gray-600",
      },
      {
        name: "Cloud Hosting (AWS / Azure / GCP)",
        icon: <FaCloud className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "Security Compliance (GDPR / ISO 27001)",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-blue-600",
      },
    ],
  },
];


export default function HRMSoftwareDevelopment() {
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
        <title>HRM Software Development | SolvitX</title>
        <meta
          name="description"
          content="Comprehensive HRM software development by SolvitX. Streamline HR processes, enhance employee management, and optimize HR operations."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/hrm-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            HRM Software Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your HR operations with our comprehensive management
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
        heading="Fast And Efficient HR Solutions For Your Business"
        highlight=""
        subheading="Empower your workforce with smarter, AI-driven human resource management software solutions."
        buttonText="Get on a consultation call with us today."
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom HRM Software Development"
        content="SolvITx crafts bespoke online recruitment solutions to streamline hiring processes. From candidate sourcing, automated screening, and interview scheduling to advanced analytics and seamless integrations with job boards and social platforms, we customize systems to meet your unique recruitment needs. Our scalable platforms support high-volume hiring, remote recruitment, and enhanced candidate experiences, ensuring a smooth and efficient talent acquisition process tailored to your business."
        position="left"
      />

      <TechStackSection
        techCategories={hrmTechCategories}
        title="Our Technology Stack "
        description="SolvITx offers flexible, secure, and user-friendly platforms that simplify recruitment workflows and optimize talent management. Choose us for reliable, innovative, and tailored recruitment technology. "
      />

      {/* <DescSection
        heading="Custom Solutions for Your Business"
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      /> */}

      {/* Features Section */}
      {/* <motion.section
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
            {hrmFeatures.map((feature, index) => (
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
      </motion.section> */}

      <ServicesSection
        title="Why Do You Need A HRM Software?"
        whyServicesData={hrmFeatures}
      />

      {/* Benefits Section */}
      {/* <motion.section className="py-10 bg-gray-800">
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
      </motion.section> */}

      <WhySelectSection
        title="Why Choose SolveitX For HRM Software Development Services?"
        description="Our expertise in recruitment software ensures reduced time-to-hire, improved candidate quality, and enhanced collaboration. With advanced features like AI-driven matching, real-time reporting, and customizable dashboards, we empower HR teams to make data-driven decisions and attract top talent effortlessly."
        whySelectUs={benefits}
      />

      {/* Why Choose Us Section */}
      {/* <motion.section className="py-10 bg-gray-900">
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
      </motion.section> */}

      <WhyChooseUsSection
        title="Why Should You Collaborate With SolvitX?"
        whyChooseUs={whyChooseUs}
      />

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
            Ready to Transform Your HR Operations?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free demo and discover how our HRM software can streamline
            your HR processes and enhance employee management.
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
