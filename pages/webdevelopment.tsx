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
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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

// Portfolio projects
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
      "Solvitx delivered an exceptional web solution that transformed our online presence.",
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

// FAQs
const faqs = [
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with clear milestones and regular client updates.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, typically ranging from 4-12 weeks.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive maintenance and support packages.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We use modern frameworks like React, Next.js, Node.js, and more.",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Web Development Services | Solvitx</title>
        <meta
          name="description"
          content="Expert web development services by Solvitx. Building modern, scalable web applications with cutting-edge technologies."
        />
      </Head>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
      >
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
            Web Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your digital presence with cutting-edge web solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Service Overview */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              What is Web Development?
            </h2>
            <p className="text-xl text-gray-300">
              Web development is the process of creating and maintaining
              websites and web applications. It's crucial for businesses to
              establish a strong online presence, engage with customers, and
              drive growth in today's digital landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Web Development Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Benefits for Your Business
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800"
              >
                <div className="text-purple-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Development Process
          </motion.h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2" />
            <div className="flex justify-between relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-900 border-4 border-purple-500 flex items-center justify-center mb-4">
                    <div className="text-purple-500">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center max-w-xs mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Recent Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="rounded-xl overflow-hidden bg-gray-800 shadow-lg"
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
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Client Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
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
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-6 p-6 rounded-xl bg-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Pricing Models
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900"
              >
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {model.title}
                </h3>
                <p className="text-xl font-semibold mb-4 text-purple-400">
                  {model.price}
                </p>
                <p className="text-gray-300 mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Start Your Project Today
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}
