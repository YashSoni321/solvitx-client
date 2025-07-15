"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import heroImg from "../public/images/heroimages/AndroidAD.jpg";
import {
  FaAndroid,
  FaCode,
  FaMobile,
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
  FaTools,
  FaDatabase,
  FaServer,
  FaCloud,
  FaLock,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import HeroSection from "@/components/homepage/Hero";
import DescSection from "@/components/webdevelopment/DescSection";
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

// Technology categories for android development
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

// Android Services
const androidServices = [
  {
    title: "Native Android Development",
    description: "Personalised Android applications using robust frameworks like Kotlin and Java.",
    icon: <FaAndroid className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "UI/UX Design",
    description: "Visually appealing interfaces built on Material Design principles.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Backend Integration",
    description: "Harmonised interactions with cloud APIs and structured data systems. ",
    icon: <FaServer className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Cloud Services",
    description: "Unified cloud functionality with Firebase and beyond.",
    icon: <FaCloud className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Security Implementation",
    description: "Fortified with layers of encryption and secure auth frameworks.",
    icon: <FaLock className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Performance Optimization",
    description: "High-performance code with maximum resource efficiency.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Wide Market Reach",
    description: "Unlock Android’s vast global user base.",
    icon: <FaGlobe className="text-3xl" />,
  },
  {
    title: "Custom Solutions",
    description: "Custom-fit mobile solutions designed to match your vision.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "Cost-Effective",
    description: "Budget-friendly mobile solutions for rapid deployment.",
    icon: <FaChartBar className="text-3xl" />,
  },
  {
    title: "Easy Integration",
    description: "Native compatibility with Google's ecosystem of services.",
    icon: <FaCode className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Veteran Android developers with deep platform knowledge.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Latest Technologies",
    description: "Up to date with the latest Android tech stack.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive validation across multiple devices to ensure universal compatibility.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Sustained improvements and bug monitoring. ",
    icon: <FaHeadset className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description: "Define goals based on market insights and customer behaviour.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Planning",
    description: "Blueprint user flows and architect the visual prototypes.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Development",
    description: "Apply efficient industry-aligned engineering for stable builds.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "4",
    title: "Testing & Launch",
    description: "Validate rigorously before Play Store deployment.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What technologies do you use for Android development?",
    answer:
      "We use Kotlin and Java for native development, along with modern Android development tools like Android Studio, Jetpack components, and Material Design guidelines.",
  },
  {
    question: "How long does it take to develop an Android app?",
    answer:
      "Development time varies based on complexity and features. A simple app might take 2-3 months, while complex apps can take 4-8 months or more.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer comprehensive post-launch support including maintenance, updates, and feature enhancements to keep your app running smoothly.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement industry-standard security practices, conduct regular security audits, and follow Android security guidelines to protect your app and user data.",
  },
];

export default function AndroidAppDevelopment() {
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
        <title>Android App Development Services | SolvitX</title>
        <meta
          name="description"
          content="Expert Android app development services by SolvitX. We build native Android applications using Kotlin and Java."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/digital-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
            Android App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Build powerful, scalable, and user-friendly Android applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </motion.section> */}
      <HeroSection
        backgroundImage={heroImg}
        heading="We Are Engineered For Growth."
        highlight=""
        subheading="With our intuitive designs, efficient code, and easy compatibility, we let your ideas reach a million audience."
        buttonText="Get a Free Consultation"
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom Android App Development Services For Your Business"
        content="We know that one size doesn't fit all. So here at Solvitx, we give your business a new identity with customised android app development solutions crafted to your needs. It is your idea and our expertise that can transform your growth vision into scalable opportunities and will bring real results."
        position="left"
      />

      <TechStackSection
                          techCategories={techCategories}
                          title="Our Technology Stack "
                          description="Our expert team utilises Kotlin, Java, Jetpack libraries and other latest technology stack to develop user friendly apps that are compatible across Android smartphones, tablets and wearables."
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
          Why Should You Build An Android Application?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center my-10">
          With scalable, robust, and interactive Android applications, you can reach a wider audience and stand out among millions in the Play Store.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {androidServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-justify">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Special Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="What Do Our Clients Say?"
        content="The Android application developed by SolvitX helped us scale all our logistic operations with ease. They provided faster delivery, a smooth transitioning, and a clean and robust code. - Sanya Upadhyay, Product Manager"
        position="left"
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
            Ready to Build Your Android App?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how we can help you create a
            powerful Android application.
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
