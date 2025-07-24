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
  FaClipboardList,
  FaHeadset,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/AppDevelopment.jpg";
import heroImgMobile from "../public/images/hero-mobile/App.jpg";
import useIsMobile from "@/hooks/useIsMobile";
import { TechStackSection } from "../components/common/TechStackSection";

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
    description: "From concept to execution and sustained maintenance.",
    icon: <FaLayerGroup className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Native & Cross-platform Expertise",
    description: "Experienced team in numerous modern app ecosystems.",
    icon: <FaMobile className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Agile & Iterative Approach",
    description:
      "Dynamic workflows with routine developments shaped by client feedback loops.",
    icon: <FaCogs className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "UX/UI Focused Design",
    description:
      "Blending aesthetics with functionality for immersive user experiences.",
    icon: <FaTabletAlt className="text-4xl" />,
    color: "text-pink-500",
  },
  {
    title: "API & Backend Integration",
    description:
      "Flawless syncing with existing legacy systems and modern APIs.",
    icon: <FaServer className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Post-launch Support & Scaling",
    description:
      "Regular upgrades, patches, and scaling support with technical upkeep for sustainability.",
    icon: <FaRocket className="text-4xl" />,
    color: "text-red-500",
  },
];
const workingProcess = [
  {
    step: "1",
    title: "Requirement Analysis",
    description:
      "Align business vision with user expectations with functionality.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Design & Development",
    description:
      "Lay the foundation with interactive prototypes and architect the solution.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    step: "3",
    title: "Testing & Optimization",
    description:
      "Develop using clean code principles with modularity and precision.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "Conduct comprehensive tests before deploying with assurance.",
    icon: <FaRocket className="text-3xl" />,
  },
];
// App Portfolio projects
const portfolio = [
  {
    title: "HealthTrack Pro",
    description:
      "All-in-one health and fitness companion for a smarter living.",
    image: "/images/portfolio/app1.jpg",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    title: "ShopEase",
    description:
      "An innovative retail app experience with AR-powered product previews.",
    image: "/images/portfolio/app2.jpg",
    tags: ["Flutter", "Firebase", "AR Kit"],
  },
  {
    title: "TaskMaster",
    description:
      "Collaborative workspace for seamless task flow and communication.",
    image: "/images/portfolio/app3.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "FoodDash",
    description:
      "Effortless meal delivery with real time delivery insights every step.",
    image: "/images/portfolio/app4.jpg",
    tags: ["iOS (Swift)", "Android (Kotlin)", "Firebase"],
  },
];

// FAQs for app development
const faqs = [
  {
    question:
      "Can you integrate third party API’s like payment maps or chat into the application? ",
    answer:
      "Development timelines vary based on complexity and features. A simple app might take 2-3 months, while complex applications can take 4-8 months or more. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "Do you offer app maintenance and timely updates?",
    answer:
      "We develop native apps for iOS (using Swift/Objective-C) and Android (using Kotlin/Java), as well as cross-platform solutions using frameworks like React Native and Flutter. The choice depends on your target audience, budget, and specific requirements.",
  },
  {
    question: "In which industry do you provide your services?",
    answer:
      "Yes, we provide comprehensive post-launch support and maintenance packages to ensure your app remains up-to-date, secure, and functioning optimally. This includes bug fixes, performance optimizations, OS updates compatibility, and feature enhancements.",
  },
  {
    question: "Do you build native or cross platform apps?",
    answer:
      "Absolutely. We design and develop all our apps with scalability in mind. Our architecture allows for easy expansion, handling increased user loads, and adding new features as your business grows. We also use cloud services that can scale resources on demand.",
  },
  {
    question: "How do you handle app store submissions?",
    answer:
      "We manage the entire app store submission process for both Apple App Store and Google Play Store. This includes preparing all necessary assets, documentation, complying with guidelines, and addressing any feedback from the review process.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Accredited specialists backed by extensive hands-on expertise.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
  {
    title: "Latest Technologies",
    description: "Equipped with current-gen tech for optimal execution.",
    icon: <FaCode className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Thorough multi-device testing to ensure flawless performance.",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Proactive upkeep with ongoing app updates to ensure long-term app health.",
    icon: <FaHeadset className="text-3xl" />,
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
  const isMobile = useIsMobile();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Mobile App Development Services | Expert App Developers – SolvitX</title>
        <meta
          name="description"
          content="SolvitX offers custom mobile application development services for Android, iOS & hybrid apps. Hire expert app developers for scalable and secure mobile apps."
        />
        <meta
          name="keywords"
          content="mobile application development, mobile app development services, app developers, android app development, ios app developers, hybrid mobile apps, mobile application developers usa, mobile app development india, mobile development company, cross-platform mobile apps, best mobile app developers in usa"
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
        <link rel="canonical" href="https://www.solvitx.com/app-development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
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
      </motion.section>  */}
      <HeroSection
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="Build Apps That Provide Lag-Free Experiences."
        highlight=""
        subheading="We help you build apps that bring your vision to life. This is your opportunity for smarter, tech-savvy access to your brand."
        buttonText="Get a Free Consultation"
      />

      <DescSection
        heading=""
        image="/images/services/WebDevelopment.jpg"
        title="Custom App Development For Your Businesses"
        content="In this fast-transforming digital ecospace, we develop modern applications that are tailored for your business. All you need is an idea and a couch to relax. Our expert team will build you high performance Android and iOS apps that are crafted for your audience and help to grow your business."
        position="left"
      />

      <TechStackSection
              techCategories={techCategories}
              title="Our Technology Stack "
              description="At SolvitX, we leverage the latest technological innovations, frameworks, design principles, and customer-centric approach to build scalable applications that improve engagement and solve real-world problems for you."
            />

      {/* <DescSection
        heading="Custom Solutions for Your Business"
        image="/images/dashboard.jpg"
        title="Custom Web Applications"
        content="Our custom web applications are built with precision and attention to detail. We focus on creating intuitive user interfaces, seamless user experiences, and robust backend systems. Whether you need an e-commerce platform, a content management system, or a complex web application, we've got you covered."
        position="right"
      /> */}

      {/* Why Choose SolvitX Section */}
      <div className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose SolvitX for App Development?
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
        className="py-10 bg-gray-800"
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
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore More Projects
            </motion.button> */}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
      {/* <motion.section variants={staggerContainer} className="py-10 bg-gray-900">
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
      </motion.section> */}

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
        content="SolvitX helped us build a telemedicine app that can help us have real time chat and calls with our customers. From the App’s performance, design quality and API integration, all of them have been provided with focus on the user experience. Our team highly recommends their services.   - Dr. Nidhi Bhatia, Founder"
        position="left"
      />

      {/* FAQs Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-800"
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
