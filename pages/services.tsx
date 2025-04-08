"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/homepage/Footer";
import {
  FaLightbulb,
  FaCode,
  FaMobile,
  FaDatabase,
  FaSearch,
  FaDesktop,
} from "react-icons/fa";

// Service Data
const services = [
  {
    icon: <FaLightbulb className="text-5xl text-yellow-400" />,
    title: "Digital Strategy",
    description:
      "We develop comprehensive digital strategies that align with your business goals and help you achieve sustainable growth.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaCode className="text-5xl text-blue-400" />,
    title: "Web Development",
    description:
      "Custom, responsive, and scalable web applications built with modern technologies that deliver exceptional user experiences.",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: <FaMobile className="text-5xl text-green-400" />,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that engage users and provide seamless experiences across all devices.",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: <FaDatabase className="text-5xl text-purple-400" />,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud infrastructure and migration services to optimize your operations and reduce costs.",
    color: "from-purple-400 to-violet-600",
  },
  {
    icon: <FaSearch className="text-5xl text-red-400" />,
    title: "SEO & Marketing",
    description:
      "Data-driven digital marketing strategies that increase your visibility, drive traffic, and convert visitors into customers.",
    color: "from-red-400 to-rose-600",
  },
  {
    icon: <FaDesktop className="text-5xl text-teal-400" />,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
    color: "from-teal-400 to-cyan-600",
  },
];

// Variants for animations
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Our Services — Solvitx | Innovative IT Solutions</title>
        <meta
          name="description"
          content="Explore Solvitx's comprehensive range of IT services including web development, mobile apps, cloud solutions, and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Our Services — Solvitx | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Solvitx's technology services can transform your business with custom solutions designed for your unique needs."
        />
        <meta property="og:image" content="/images/services-hero.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
          <div className="absolute inset-0 opacity-20">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {[...Array(10)].map((_, i) => (
                <path
                  key={i}
                  d={`M${Math.random() * 100} ${Math.random() * 100} Q${
                    Math.random() * 100
                  } ${Math.random() * 100} ${Math.random() * 100} ${
                    Math.random() * 100
                  }`}
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 40 - 20],
                y: [0, Math.random() * 40 - 20],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Transforming Ideas
            </span>
            <br /> into Digital Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-2xl text-xl md:text-2xl text-gray-200"
          >
            Comprehensive technology solutions crafted with expertise and
            innovation to drive your business forward
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Services Header */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20"
          >
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Services
              </span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-xl lg:text-2xl text-gray-200 mb-6">
                We provide end-to-end technology solutions tailored to your
                specific needs, helping you navigate the digital landscape with
                confidence.
              </p>
              <p className="text-gray-400">
                Each service is delivered with a commitment to quality,
                innovation, and measurable results that propel your business
                forward.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-black py-16 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              {/* Background gradient that changes on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}
              />

              {/* Service icon */}
              <div className="relative mb-6">{service.icon}</div>

              {/* Service content */}
              <h3 className="relative text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="relative text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Learn more button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative mt-4 inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-5 py-2 rounded-full`}
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-gray-900 to-black py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Let's discuss how our services can be tailored to meet your specific
            business needs and objectives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
