"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaShoppingCart,
  FaChartLine,
  FaGlobe,
  FaClock,
  FaUsers,
  FaLightbulb,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/Web_Development.jpg";
import heroImgMobile from "../public/images/hero-mobile/WebDev.jpg";
import useIsMobile from "@/hooks/useIsMobile";

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

// Technology stack with enhanced data
const techStack = [
  {
    name: "React.js",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-500",
    description:
      "Building interactive user interfaces with modern React features",
    features: ["Hooks", "Context API", "Server Components"],
  },
  {
    name: "Next.js",
    icon: <FaServer className="text-4xl" />,
    color: "text-black",
    description: "Full-stack framework for production-ready applications",
    features: ["SSR", "API Routes", "Image Optimization"],
  },
  {
    name: "Node.js",
    icon: <FaDatabase className="text-4xl" />,
    color: "text-green-500",
    description: "Scalable backend solutions with Node.js",
    features: ["Express", "MongoDB", "REST APIs"],
  },
  {
    name: "TypeScript",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-600",
    description: "Type-safe development for better code quality",
    features: ["Static Typing", "Interfaces", "Generics"],
  },
  {
    name: "Tailwind CSS",
    icon: <FaCode className="text-4xl" />,
    color: "text-blue-400",
    description: "Utility-first CSS framework for rapid development",
    features: ["Responsive Design", "Custom Components", "Dark Mode"],
  },
  {
    name: "GraphQL",
    icon: <FaDatabase className="text-4xl" />,
    color: "text-pink-500",
    description: "Efficient data fetching with GraphQL",
    features: ["Queries", "Mutations", "Subscriptions"],
  },
];

// Service features
const serviceFeatures = [
  {
    title: "Responsive Design",
    description: "Mobile-first approach for seamless user experience",
    icon: <FaMobile className="text-4xl" />,
    color: "text-blue-400",
  },
  {
    title: "CMS Integration",
    description: "WordPress, Drupal, and custom CMS solutions",
    icon: <FaCode className="text-4xl" />,
    color: "text-purple-400",
  },
  {
    title: "E-commerce Solutions",
    description: "Secure and scalable online stores",
    icon: <FaShoppingCart className="text-4xl" />,
    color: "text-green-400",
  },
  {
    title: "SEO Optimization",
    description: "Search engine friendly development",
    icon: <FaSearch className="text-4xl" />,
    color: "text-yellow-400",
  },
  {
    title: "Performance Tuning",
    description: "Lightning-fast loading times",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-red-400",
  },
  {
    title: "Global Reach",
    description: "Multi-language and region support",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-indigo-400",
  },
];

// Benefits data
const benefits = [
  {
    title: "Increased Sales",
    description: "Higher conversion rates and revenue growth",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Better Engagement",
    description: "Improved user interaction and retention",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Brand Trust",
    description: "Professional image and credibility",
    icon: <FaShieldAlt className="text-3xl" />,
  },
  {
    title: "Time Savings",
    description: "Efficient processes and automation",
    icon: <FaClock className="text-3xl" />,
  },
];

// Value propositions data
const valuePropositions = [
  {
    title: "User-First Design Approach",
    description:
      "We create interfaces that prioritize user experience and engagement.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Scalable & Secure Code",
    description:
      "Our solutions grow with your business while maintaining top-level security.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Transparent Process",
    description:
      "Full visibility and collaboration throughout the development lifecycle.",
    icon: <FaCheckCircle className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Experienced Full-Stack Team",
    description:
      "Skilled developers with expertise across the technology spectrum.",
    icon: <FaCode className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Proven Track Record",
    description:
      "Successful projects delivered for startups and enterprises alike.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-yellow-500",
  },
];

// Updated portfolio projects
const portfolio = [
  {
    title: "E-commerce Platform",
    description: "Custom online store with advanced features",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate Website",
    description: "Modern corporate website with CMS",
    image: "/images/portfolio/corporate.jpg",
    tags: ["Next.js", "WordPress", "Tailwind"],
  },
  {
    title: "Web Application",
    description: "Enterprise-level web application",
    image: "/images/portfolio/webapp.jpg",
    tags: ["Angular", "Firebase", "Material UI"],
  },
];

// Testimonials
const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    content:
      "SolvitX delivered an exceptional web solution that transformed our online presence.",
    image: "/images/testimonials/john.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, InnovateCo",
    content:
      "The team's expertise in web development helped us achieve our business goals.",
    image: "/images/testimonials/sarah.jpg",
  },
];

// Updated FAQs
const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, typically ranging from 4-12 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across various sectors including healthcare, finance, education, e-commerce, and technology startups.",
  },
  {
    question: "What's your design and development process like?",
    answer:
      "Our process includes discovery, planning, design, development, testing, and launch phases with client collaboration throughout.",
  },
  {
    question: "Can you help with an existing website?",
    answer:
      "Absolutely. We offer services for redesigns, migrations, performance optimization, and feature additions to existing websites.",
  },
];

// Pricing models
const pricingModels = [
  {
    title: "Hourly Rate",
    description: "Flexible engagement for ongoing projects",
    features: ["Pay as you go", "Flexible scope", "Regular updates"],
    price: "Starting at $50/hr",
  },
  {
    title: "Fixed Price",
    description: "Clear scope and budget for defined projects",
    features: ["Defined deliverables", "Fixed timeline", "No surprises"],
    price: "Project-based",
  },
  {
    title: "Custom Package",
    description: "Tailored solutions for unique requirements",
    features: ["Custom scope", "Dedicated team", "Priority support"],
    price: "Contact for quote",
  },
];

// Process steps with enhanced data
const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your requirements and goals",
    icon: <FaRocket className="text-4xl" />,
    details: ["Requirement analysis", "User research", "Competitor analysis"],
  },
  {
    title: "Planning",
    description: "Creating detailed project roadmap",
    icon: <FaRocket className="text-4xl" />,
    details: [
      "Technical architecture",
      "Timeline planning",
      "Resource allocation",
    ],
  },
  {
    title: "Development",
    description: "Building with modern technologies",
    icon: <FaRocket className="text-4xl" />,
    details: ["Agile development", "Code reviews", "Continuous integration"],
  },
  {
    title: "Testing",
    description: "Ensuring quality and performance",
    icon: <FaRocket className="text-4xl" />,
    details: ["Unit testing", "Integration testing", "Performance testing"],
  },
  {
    title: "Launch",
    description: "Deployment and support",
    icon: <FaRocket className="text-4xl" />,
    details: [
      "Production deployment",
      "Monitoring setup",
      "Support & maintenance",
    ],
  },
];

// Technology categories
const techCategories = [
  {
    name: "Frontend",
    technologies: [
      {
        name: "React.js",
        icon: <FaCode className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "Next.js",
        icon: <FaServer className="text-3xl" />,
        color: "text-black",
      },
      {
        name: "TypeScript",
        icon: <FaCode className="text-3xl" />,
        color: "text-blue-600",
      },
      {
        name: "Tailwind CSS",
        icon: <FaCode className="text-3xl" />,
        color: "text-blue-400",
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: <FaServer className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Python",
        icon: <FaCode className="text-3xl" />,
        color: "text-yellow-500",
      },
      {
        name: "GraphQL",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-pink-500",
      },
      {
        name: "REST APIs",
        icon: <FaServer className="text-3xl" />,
        color: "text-purple-500",
      },
    ],
  },
  {
    name: "Database",
    technologies: [
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-green-600",
      },
      {
        name: "PostgreSQL",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-blue-700",
      },
      {
        name: "Firebase",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-orange-500",
      },
      {
        name: "Redis",
        icon: <FaDatabase className="text-3xl" />,
        color: "text-red-600",
      },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      {
        name: "AWS",
        icon: <FaServer className="text-3xl" />,
        color: "text-orange-400",
      },
      {
        name: "Docker",
        icon: <FaServer className="text-3xl" />,
        color: "text-blue-500",
      },
      {
        name: "CI/CD",
        icon: <FaRocket className="text-3xl" />,
        color: "text-green-500",
      },
      {
        name: "Kubernetes",
        icon: <FaServer className="text-3xl" />,
        color: "text-blue-600",
      },
    ],
  },
];

export default function WebDevelopmentService() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Web Development Services | SolvitX</title>
        <meta
          name="description"
          content="Expert web development services by SolvitX. Building modern, scalable web applications with cutting-edge technologies."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            Achieve your business goals with web development solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Become a digital stand-out with a best-in-class web development
            company
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </motion.section> */}
      <HeroSection
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="Web Development"
        highlight=""
        subheading="We specialize in creating cutting-edge web applications using the latest technologies."
        buttonText="Get a Free Consultation"
      />

      {/* Web Development Section */}
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

      {/* Why Select SolvitX Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Select SolvitX for Web Development?
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
      {/* <motion.section
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/150x150.png?text=" +
                        project.title;
                    }}
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
                        className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm"
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
              className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              View Full Portfolio
            </motion.button>
          </div>
        </div>
      </motion.section> */}

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
                  <span className="text-purple-400 transition-transform duration-300 transform">
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
