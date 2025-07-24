"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaBook,
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
  FaChartLine,
  FaMobileAlt,
  FaServer,
  FaCalendarCheck,
  FaComments,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/School.jpg";
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

// School Management Features
const schoolFeatures = [
  {
    title: "Student Management",
    description:
      "Comprehensive student information and academic tracking system.",
    icon: <FaUserGraduate className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Teacher Management",
    description: "Efficient teacher scheduling and performance monitoring.",
    icon: <FaChalkboardTeacher className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Attendance System",
    description: "Automated attendance tracking and reporting.",
    icon: <FaCalendarAlt className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Academic Management",
    description: "Curriculum planning and grade management system.",
    icon: <FaBook className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Performance Analytics",
    description: "Detailed analytics and reporting tools.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Communication Tools",
    description: "Integrated messaging and notification system.",
    icon: <FaBell className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Streamlined Operations",
    description: "We automate administrative tasks and reduce paperwork.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Enhanced Communication",
    description: "We improve interaction between staff, students, and parents.",
    icon: <FaBell className="text-3xl" />,
  },
  {
    title: "Data Security",
    description:
      "We ensure secure storage and management of sensitive information.",
    icon: <FaDatabase className="text-3xl" />,
  },
  {
    title: "Scalable Solution",
    description: "We grow with your institution’s evolving needs.",
    icon: <FaChartBar className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description:
      "We work closely with skilled experts in the educational industry.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description:
      "Our tech solutions are customised to solve your unique business problems.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our team is available around the clock to solve all your tech problems.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Track Record ",
    description:
      "We rely on our 5+ years of satisfied clients in the education sector.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Understanding your institution's needs and processes.",
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
    question: "What is School Management Software?",
    answer:
      "School Management Software is a comprehensive solution that helps educational institutions manage administrative tasks, student information, academic records, and communication between stakeholders.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on institution size and requirements, typically ranging from 4-8 weeks for standard implementations.",
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

const techCategories = [
  {
    name: "Native Mobile",
    technologies: [
      {
        name: "iOS (Swift)",
        icon: <FaCode className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "Android (Kotlin)",
        icon: <FaCode className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Objective-C",
        icon: <FaCode className="text-3xl" />,
        color: "text-orange-500",
      },
      {
        name: "Java",
        icon: <FaCode className="text-3xl" />,
        color: "text-red-500",
      },
    ],
  },
  {
    name: "Cross-Platform",
    technologies: [
      {
        name: "Flutter",
        icon: <FaMobileAlt className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "React Native",
        icon: <FaMobileAlt className="text-3xl" />,
        color: "text-blue-600",
      },
      {
        name: "Xamarin",
        icon: <FaMobileAlt className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "Ionic",
        icon: <FaMobileAlt className="text-3xl" />,
        color: "text-blue-300",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "Firebase",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "Node.js",
        icon: <FaServer className="text-3xl" />,
        color: "text-green-600",
      },
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "GraphQL",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-pink-500",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    technologies: [
      {
        name: "CI/CD",
        icon: <FaTools className="text-3xl" />,
        color: "text-purple-600",
      },
      {
        name: "TestFlight",
        icon: <FaTools className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "App Center",
        icon: <FaTools className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "Analytics",
        icon: <FaChartLine className="text-3xl" />,
        color: "text-red-400",
      },
    ],
  },
];

// School Management Services
const schoolManagementServices = [
  {
    title: "Student Management",
    description:
      "Our comprehensive student information and academic tracking system keeps everything organized in one place.",
    icon: <FaUserGraduate className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Teacher Management",
    description:
      "With our teacher scheduling and performance monitoring features, managing faculty becomes effortless.",
    icon: <FaChalkboardTeacher className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Attendance System",
    description:
      "We automate attendance tracking and generate reports through our efficient tools.",
    icon: <FaCalendarCheck className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Academic Management",
    description:
      "We simplify curriculum planning and grade management with our robust system.",
    icon: <FaBook className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Performance Analytics",
    description:
      "Thanks to our detailed analytics and reporting features, we gain deeper insights that drive smarter decisions.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Communication Tools",
    description:
      "We keep everyone connected and informed through our integrated messaging and notification system.",
    icon: <FaComments className="text-4xl" />,
    color: "text-pink-500",
  },
];

export default function SchoolManagementSoftware() {
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
        <title>School Management Software in India | Custom LMS for Schools - SolvitX</title>
        <meta
          name="description"
          content="SolvitX develops custom school management systems in India with attendance tracking, fee management, analytics, and learning management tools for schools."
        />
        <meta
          name="keywords"
          content="school management software, school management system software in india, learning management software for schools, custom school ERP development, education software development, school attendance system, school communication tools, school fee management software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="About Us — SolvitX | Where Vision Meets Technology"
        />
        <meta
          property="og:description"
          content="Meet the team behind SolvitX and learn about our journey to create digital experiences that drive real business results."
        />
        <meta property="og:image" content="/images/solvitx.png" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.solvitx.com/school-management-software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/school-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            School Management Software
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your educational institution with our comprehensive
            management solution.
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
        heading="Empowering the education system starts with the integration of reliable tech"
        highlight=""
        subheading="We help to empower societies by building smarter schools with tailored School Management systems."
        buttonText="Get on a free consultation call with our experts"
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom School Management Software Development Services"
        content="We develop bespoke school management systems that enhance the communications, streamline all the operations, and provide user-friendly solutions for all your complex problems. Whether it is attendance tracking, grade management, fee collection, timetable management, or student reports, we help you to build a customised solution that elevates the educational experiences for the management, teachers, students, and their parents."
        position="left"
      />

      <TechStackSection
        title="Our Technology Stack"
        techCategories={techCategories}
        description="At Solvitx, we dream of building schools that align with the interests and talents of each and every student. And for that to happen, we need a better school management system that can streamline all its operations under one single, intuitive, responsive, and secure dashboard."
      />

      {/* Services Section */}
      <ServicesSection
        title="Why Build A School Management Software?"
        whyServicesData={schoolManagementServices}
      />

      {/* Why Select Us Section */}
      <WhySelectSection
        title="Why Choose Solvitx For School Management Software Development Services?"
        description="Our education-focused solutions help you to simplify the redundant management tasks, reduce the administration burden, and thus improve the quality of education."
        whySelectUs={benefits}
      />

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
            {schoolFeatures.map((feature, index) => (
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
            Ready to Transform Your Institution?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free demo and discover how our school management software can
            streamline your operations and enhance learning outcomes.
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
