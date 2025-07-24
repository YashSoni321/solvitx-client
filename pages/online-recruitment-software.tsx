"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaUserTie,
  FaSearch,
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
  FaUsers,
  FaMoneyBillWave,
  FaReact,
  FaPalette,
  FaComments,
  FaServer,
  FaCloud,
  FaLock,
  FaTasks,
  FaBolt,
  FaFire,
  FaDocker,
  FaSync,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/ORS.jpg";
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

// Recruitment Features
const recruitmentFeatures = [
  {
    title: "Job Posting",
    description: "Explore our AI-driven job posting search to help you communicate more effectively.",
    icon: <FaFileAlt className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Candidate Search",
    description:
      "We enable you with AI-driven candidate matching for your job requirements.",
    icon: <FaSearch className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Interview Scheduling",
    description: "We automate your interviews and calls to a more efficient recruitment process.",
    icon: <FaCalendarAlt className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Resume Management",
    description: "We channelise your resume management process to avoid confusion.",
    icon: <FaUserTie className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Analytics & Reporting",
    description: "We make use of the advanced analytics tool for a sound decision.",
    icon: <FaChartBar className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Team Collaboration",
    description: "We let you collaborate with your entire hiring team online.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Time Efficiency",
    description: "Manage your workflows efficiently to boost productivity and growth.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Better Hiring Decisions",
    description:
      "We provide you with a complete candidate certificate so that you can make the best choice.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Cost Reduction",
    description: "You can cut out on the redundant cost as everything comes under one whole system.",
    icon: <FaMoneyBillWave className="text-3xl" />,
  },
  {
    title: "Enhanced Candidate Experience",
    description: "Provide a seamless experience for your candidates so that they choose you.",
    icon: <FaUserTie className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "HR Technology Experts",
    description: "We work closely with industry experts who have helped countless recruiters..",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "We provide you with tailored solutions that can solve your unique problems.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "We are there around the clock to help your business.",
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
    description: "Our team reaches out to you directly to understand your tech problems.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "System Design",
    description: "We customise a system that will solve your unique business problems.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "We develop the software and train it rigorously so that you don’t have to panic.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Training",
    description: "Our softwares are trained and deployed under the latest technology guidelines.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Online Recruitment Software?",
    answer:
      "Online Recruitment Software is a comprehensive solution that helps organizations manage the entire hiring process, from job posting to candidate selection, streamlining recruitment operations.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time varies based on organization size and requirements, typically ranging from 4-8 weeks for standard implementations.",
  },
  {
    question: "Is the software customizable?",
    answer:
      "Yes, our software can be customized to meet your specific requirements, including custom workflows, reports, and integration with existing systems.",
  },
  {
    question: "Do you provide training and support?",
    answer:
      "Yes, we offer comprehensive training for HR teams and ongoing technical support to ensure smooth operations.",
  },
];

const recruitmentTechCategories = [
  {
    name: "Front End",
    technologies: [
      {
        name: "React (or Angular/Vue)",
        icon: <FaReact className="text-3xl" />,
        color: "text-cyan-500",
      },
      {
        name: "Next.js (SEO-friendly pages)",
        icon: <FaCode className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "Tailwind CSS (UI Styling)",
        icon: <FaPalette className="text-3xl" />,
        color: "text-pink-400",
      },
      {
        name: "Chatbot / Live Chat Integration",
        icon: <FaComments className="text-3xl" />,
        color: "text-green-400",
      },
    ],
  },
  {
    name: "Back End",
    technologies: [
      {
        name: "Node.js (or Django/.NET)",
        icon: <FaServer className="text-3xl" />,
        color: "text-green-600",
      },
      {
        name: "REST / GraphQL API",
        icon: <FaCloud className="text-3xl" />,
        color: "text-orange-400",
      },
      {
        name: "OAuth2 / SSO Integration",
        icon: <FaLock className="text-3xl" />,
        color: "text-red-500",
      },
      {
        name: "ATS Logic (Application Tracking)",
        icon: <FaTasks className="text-3xl" />,
        color: "text-blue-500",
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
        name: "Elasticsearch (resume search)",
        icon: <FaSearch className="text-3xl" />,
        color: "text-yellow-600",
      },
      {
        name: "Redis (caching sessions)",
        icon: <FaBolt className="text-3xl" />,
        color: "text-yellow-500",
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
        name: "Docker + Kubernetes",
        icon: <FaDocker className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "CI/CD (GitHub Actions, Jenkins)",
        icon: <FaSync className="text-3xl" />,
        color: "text-gray-600",
      },
      {
        name: "AWS / GCP (scalable infra)",
        icon: <FaCloud className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "Monitoring (Prometheus / Grafana)",
        icon: <FaTools className="text-3xl" />,
        color: "text-red-600",
      },
    ],
  },
];


export default function OnlineRecruitmentSoftware() {
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
        <title>Job Portal Development Company | Custom Recruitment Software - SolvitX</title>
        <meta
          name="description"
          content="SolvitX is a top job portal development company building custom online recruitment software with AI-based hiring, resume search, and interview scheduling tools."
        />
        <meta
          name="keywords"
          content="job portal development, job portal development company, online recruitment software, ATS development, AI hiring platform, resume management software, recruitment CRM, custom hiring software, interview scheduling tool, recruitment analytics dashboard"
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
        <link rel="canonical" href="https://www.solvitx.com/online-recruitment-software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/recruitment-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Online Recruitment Software
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your hiring process with our comprehensive recruitment
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
        heading="Drive Growth With AI-Powered Smart Hiring Process"
        highlight=""
        subheading="Streamline your hiring process with our expert team to choose the best candidate for your job."
        buttonText="Get on a free consultation call with us."
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom Online Recruitment Software Development"
        content="No need to haggle over the hundreds of resumes and job postings. From AI-driven candidate sourcing to job posting, interview scheduling, resume management, and advanced analytics, we help you do it under one custom-built software. Our software solutions allow you to integrate with the popular job boards through robust APIs and thus enable efficient communications for a wider reach."
        position="left"
      />

      <TechStackSection
        techCategories={recruitmentTechCategories}
        title="Our Technology Stack "
        description="Our softwares are designed with scalable architecture that provides intuitive interfaces, secure data encryption, and maximum functionality. "
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
            {recruitmentFeatures.map((feature, index) => (
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
        title="Why Build An Online Recruitment Software?"
        whyServicesData={recruitmentFeatures}
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
        title="Why Choose SolvitX For Online Recruitment Software Development Services?"
        description="We help you build an online recruitment service software that helps you to streamline the hiring process with maximum efficiency. We leverage the advanced AI models to provide you with candidate rankings so that you can make a better and sound decision while hiring."
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
            Ready to Transform Your Hiring Process?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free demo and discover how our recruitment software can
            streamline your hiring process and help you find the best talent.
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
