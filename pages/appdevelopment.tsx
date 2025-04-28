"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaCogs,
  FaCube,
  FaLayerGroup,
  FaTabletAlt,
  FaMobileAlt,
  FaTools,
  FaQuestion,
  FaChartLine,
  FaChevronUp,
  FaChevronDown,
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

// Value propositions data
const valuePropositions = [
  {
    title: "End-to-end Product Development",
    description:
      "From conceptualization to deployment and maintenance of your app.",
    icon: <FaLayerGroup className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Native & Cross-platform Expertise",
    description:
      "Specialized in iOS, Android, Flutter, and React Native development.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Agile & Iterative Approach",
    description:
      "Flexible development process with regular updates and feedback integration.",
    icon: <FaCogs className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "UX/UI Focused Design",
    description:
      "Creating intuitive, engaging, and visually appealing user experiences.",
    icon: <FaTabletAlt className="text-4xl" />,
    color: "text-pink-500",
  },
  {
    title: "API & Backend Integration",
    description:
      "Seamless connectivity with existing systems and third-party services.",
    icon: <FaServer className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Post-launch Support & Scaling",
    description:
      "Ongoing maintenance, updates, and scalability solutions as your app grows.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-red-500",
  },
];

// App Portfolio projects
const portfolio = [
  {
    title: "HealthTrack Pro",
    description: "Comprehensive health monitoring and fitness tracking app",
    image: "/images/portfolio/app1.jpg",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    title: "ShopEase",
    description: "E-commerce mobile app with AR product visualization",
    image: "/images/portfolio/app2.jpg",
    tags: ["Flutter", "Firebase", "AR Kit"],
  },
  {
    title: "TaskMaster",
    description: "Team collaboration and project management solution",
    image: "/images/portfolio/app3.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "FoodDash",
    description: "Food delivery app with real-time order tracking",
    image: "/images/portfolio/app4.jpg",
    tags: ["iOS (Swift)", "Android (Kotlin)", "Firebase"],
  },
];

// FAQs for app development
const faqs = [
  {
    question: "How long does it take to build an app?",
    answer:
      "Development timelines vary based on complexity and features. A simple app might take 2-3 months, while complex applications can take 4-8 months or more. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "We develop native apps for iOS (using Swift/Objective-C) and Android (using Kotlin/Java), as well as cross-platform solutions using frameworks like React Native and Flutter. The choice depends on your target audience, budget, and specific requirements.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide comprehensive post-launch support and maintenance packages to ensure your app remains up-to-date, secure, and functioning optimally. This includes bug fixes, performance optimizations, OS updates compatibility, and feature enhancements.",
  },
  {
    question: "Will my app be scalable as we grow?",
    answer:
      "Absolutely. We design and develop all our apps with scalability in mind. Our architecture allows for easy expansion, handling increased user loads, and adding new features as your business grows. We also use cloud services that can scale resources on demand.",
  },
  {
    question: "How do you handle app store submissions?",
    answer:
      "We manage the entire app store submission process for both Apple App Store and Google Play Store. This includes preparing all necessary assets, documentation, complying with guidelines, and addressing any feedback from the review process.",
  },
];

// Technology categories for app development
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

export default function AppDevelopmentService() {
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
        <title>App Development Services | Solvitx</title>
        <meta
          name="description"
          content="Expert mobile app development services by Solvitx. Building innovative, user-friendly mobile applications for iOS and Android."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-indigo-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/app-development-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Build Future-Ready Apps with Cutting-Edge Development Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            We turn your ideas into scalable, intuitive mobile and web
            applications.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your App Project
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

      {/* Why Choose Solvitx Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Solvitx for App Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${prop.color} mb-4`}>{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {prop.title}
                </h3>
                <p className="text-gray-300">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden bg-gray-900 shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-900 text-indigo-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore More Projects
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
      <motion.section variants={staggerContainer} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <div className={`${tech.color} mb-2`}>{tech.icon}</div>
                      <span className="text-gray-300 text-sm font-bold text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
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
                  <span className="text-indigo-400 transition-transform duration-300 transform">
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

      {/* Footer */}
      <Footer />
    </>
  );
}
