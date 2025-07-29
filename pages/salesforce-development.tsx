"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCogs,
  FaChartLine,
  FaUsers,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaCode,
  FaTools,
  FaDatabase,
  FaRocket,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaBook,
  FaChartBar,
  FaComments,
} from "react-icons/fa";
import { SiSalesforce, SiHeroku } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import heroImg from "../public/images/heroimages/Saleforce_Developement.jpg";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import { TechStackSection } from "@/components/common/TechStackSection";
import { ServicesSection } from "@/components/common/ServicesSection";
import { WhySelectSection } from "@/components/common/WhySelectSection";
import { DevelopmentProcess } from "@/components/common/DevelopmentProcess";

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

const salesforceTechCategories = [
  {
    name: "Core Salesforce",
    technologies: [
      {
        name: "Sales Cloud",
        icon: <FaCloud className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "Service Cloud",
        icon: <FaCloud className="text-3xl" />,
        color: "text-teal-400",
      },
      {
        name: "Marketing Cloud",
        icon: <FaCloud className="text-3xl" />,
        color: "text-pink-500",
      },
      {
        name: "Experience Cloud",
        icon: <FaCloud className="text-3xl" />,
        color: "text-indigo-400",
      },
    ],
  },
  {
    name: "Development Tools",
    technologies: [
      {
        name: "Apex",
        icon: <FaCode className="text-3xl" />,
        color: "text-purple-600",
      },
      {
        name: "Lightning Web Components",
        icon: <FaCode className="text-3xl" />,
        color: "text-yellow-400",
      },
      {
        name: "Visualforce",
        icon: <FaCloud className="text-3xl" />,
        color: "text-blue-400",
      },
      {
        name: "Salesforce DX",
        icon: <FaCogs className="text-3xl" />,
        color: "text-gray-300",
      },
    ],
  },
  {
    name: "Integration & Platform",
    technologies: [
      {
        name: "MuleSoft",
        icon: <FaCogs className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Heroku",
        icon: <SiHeroku className="text-3xl" />,
        color: "text-purple-500",
      },
      {
        name: "REST & SOAP APIs",
        icon: <FaCode className="text-3xl" />,
        color: "text-orange-400",
      },
      {
        name: "AppExchange",
        icon: <SiSalesforce className="text-3xl" />,
        color: "text-blue-300",
      },
    ],
  },
  {
    name: "Security & Analytics",
    technologies: [
      {
        name: "Shield Platform Encryption",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-red-500",
      },
      {
        name: "Field Audit Trail",
        icon: <FaShieldAlt className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "Reports & Dashboards",
        icon: <FaChartLine className="text-3xl" />,
        color: "text-blue-600",
      },
      {
        name: "Einstein Analytics",
        icon: <FaChartLine className="text-3xl" />,
        color: "text-pink-400",
      },
    ],
  },
];

// Salesforce Services
const salesforceServices = [
  {
    title: "Custom Development",
    description:
      "We build tailored Salesforce software, crafted to solve your unique business needs.",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Integration Services",
    description:
      "We connect seamlessly with our robust API for smooth-running operations.",
    icon: <FaCogs className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Mobile Solutions",
    description:
      "We empower your operations with flexible and secure cross-device solutions.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Cloud Migration",
    description:
      "We leverage secure cloud services infrastructure to build future-proof software.",
    icon: <FaCloud className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Security Implementation",
    description:
      "We protect your software against threats with the best encryption and authentication practices.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Analytics & Reporting",
    description:
      "We make way for actionable insights and interactive dashboards.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Enhanced Productivity",
    description:
      "Our streamlined operations boost the productivity of the entire team.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Improved Customer Experience",
    description:
      "We deliver personalised and interactive customer experiences.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Data Security",
    description:
      "We protect the sensitive data of our customers with our robust security system.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Real results are seen through our growth-focused business solutions.",
    icon: <FaChartLine className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Certified Experts",
    description: "We work closely with skilled experts in the industry.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Our software is customised to cater to your business needs.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description:
      "We offer round-the-clock tech help for troubleshooting and updates.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Proven Track Record",
    description:
      "We rely on our 5+ years of successful implementations and satisfied clients.",
    icon: <FaClipboardList className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description:
      "Our team collaborates with you directly to understand the problems.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Solution Design",
    description:
      "We build custom solutions to maximise efficiency and usability.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development & Testing",
    description: "We build and test rigorously before you can use it.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Deployment & Support",
    description:
      "We focus on long-term support even after the software deployment.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is Salesforce Development?",
    answer:
      "Salesforce Development involves creating custom applications and solutions on the Salesforce platform to meet specific business needs, including custom objects, workflows, and integrations.",
  },
  {
    question: "How long does Salesforce implementation take?",
    answer:
      "Implementation time varies based on complexity, but typically ranges from 4-12 weeks for standard implementations, and longer for complex custom solutions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve various industries including healthcare, finance, retail, manufacturing, and technology, providing tailored Salesforce solutions for each sector.",
  },
  {
    question: "Do you provide post-implementation support?",
    answer:
      "Yes, we offer comprehensive post-implementation support including maintenance, updates, and 24/7 technical assistance to ensure smooth operations.",
  },
];

export default function SalesforceDevelopment() {
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
        <title>Salesforce Development Company in USA & India | SolvitX</title>
        <meta
          name="description"
          content="SolvitX is a leading Salesforce development company offering custom Salesforce CRM, app development, and cloud solutions in the USA, India, and globally."
        />
        <meta
          name="keywords"
          content="salesforce development company, salesforce development company in usa, custom salesforce development services, salesforce crm development company, salesforce application development services, salesforce app development company, best company for salesforce developer, salesforce experts usa, salesforce customization services, salesforce developers india"
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
        <link rel="canonical" href="https://www.solvitx.com/salesforce-development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/salesforce-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Salesforce Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your business with custom Salesforce solutions.
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
        backgroundImage={heroImg}
        heading="Transform and automate your business with our custom solution"
        highlight=""
        subheading="Take the lead in the business world by boosting productivity and driving growth to create real results."
        buttonText="Accelerate your business growth with a free consultation call"
      />

      <DescSection
        heading=""
        image="/images/services-new/salesforce-development/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg"
        title="Custom Salesforce Software Development Services"
        content="Every business is built on its pillars. We craft tailored Salesforce software services that can supercharge all your business operations. From custom app development, Salesforce Customer Relationship Management (CRM) customisation, Service Cloud, Marketing Cloud, to business and workflow automation, we provide end-to-end customised services that can integrate uniquely to your business, and thus enhance the customer experience."
        position="left"
      />

      <TechStackSection
        title="Our Technology Stack"
        techCategories={salesforceTechCategories}
        description="We leverage the latest Salesforce technologies to build robust and scalable solutions. Our expertise includes:"
      />

      {/* Services Section */}
      <ServicesSection
        title="Why Build A Salesforce Software?"
        whyServicesData={salesforceServices}
      />

      {/* Benefits Section */}
      <WhySelectSection
        title="Why Select Solvitx For Salesforce Development Services?"
        description="Our experts provide the perfect amalgamation of deep business knowledge and Salesforce capabilities to provide a smooth and accelerated digital transformation."
        whySelectUs={benefits}
      />

      {/* Why Choose Us Section */}
      <motion.section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Should You Collaborate With SolvitX?
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

      <DescSection
        heading=""
        image="/images/services-new/salesforce-development/analyst-team-use-bi-dashboard-data-analysis-concord_31965-351878.jpg"
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

      <DevelopmentProcess
        title=" Our Development Process"
        workingProcess={workingProcess}
      />

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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our Salesforce development
            services can help your business grow.
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
