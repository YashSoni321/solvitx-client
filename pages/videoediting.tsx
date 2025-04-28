"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaVideo,
  FaFilm,
  FaMusic,
  FaCamera,
  FaMagic,
  FaPlay,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaHeadset,
  FaClipboardList,
  FaTools,
  FaRocket,
  FaFileAlt,
  FaUsers,
  FaStar,
  FaHashtag,
  FaImage,
  FaGlobe,
  FaLock,
  FaBolt,
  FaExchangeAlt,
  FaBell,
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

// Video Editing Services
const services = [
  {
    title: "Professional Video Editing",
    description: "High-quality video editing for all your content needs.",
    icon: <FaVideo className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Motion Graphics",
    description: "Dynamic animations and visual effects for your videos.",
    icon: <FaFilm className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Audio Enhancement",
    description: "Professional audio mixing and sound design.",
    icon: <FaMusic className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Color Grading",
    description: "Expert color correction and grading services.",
    icon: <FaMagic className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Video Production",
    description: "Complete video production from concept to final cut.",
    icon: <FaCamera className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Social Media Content",
    description: "Optimized video content for all social platforms.",
    icon: <FaPlay className="text-4xl" />,
    color: "text-indigo-500",
  },
];

// Benefits
const benefits = [
  {
    title: "Professional Quality",
    description: "Broadcast-quality video production and editing.",
    icon: <FaStar className="text-3xl" />,
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality.",
    icon: <FaBolt className="text-3xl" />,
  },
  {
    title: "Creative Excellence",
    description: "Innovative and engaging video content.",
    icon: <FaMagic className="text-3xl" />,
  },
  {
    title: "Multi-Platform Ready",
    description: "Optimized for all devices and platforms.",
    icon: <FaGlobe className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Editors",
    description: "Experienced professionals with industry expertise.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Advanced Tools",
    description: "State-of-the-art editing software and equipment.",
    icon: <FaTools className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance and revisions.",
    icon: <FaHeadset className="text-3xl" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Consultation",
    description: "Understanding your vision and requirements.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Pre-production",
    description: "Planning and storyboarding your video.",
    icon: <FaFileAlt className="text-3xl" />,
  },
  {
    step: "3",
    title: "Production",
    description: "Shooting and capturing your content.",
    icon: <FaCamera className="text-3xl" />,
  },
  {
    step: "4",
    title: "Post-production",
    description: "Editing, effects, and final touches.",
    icon: <FaVideo className="text-3xl" />,
  },
];

// Additional Features
const additionalFeatures = [
  {
    title: "4K Resolution",
    description: "High-resolution video production and editing.",
    icon: <FaFilm className="text-3xl" />,
  },
  {
    title: "Audio Mixing",
    description: "Professional audio enhancement and mixing.",
    icon: <FaMusic className="text-3xl" />,
  },
  {
    title: "Color Grading",
    description: "Expert color correction and enhancement.",
    icon: <FaMagic className="text-3xl" />,
  },
  {
    title: "Special Effects",
    description: "Custom visual effects and animations.",
    icon: <FaStar className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What is the typical turnaround time for video editing?",
    answer:
      "Turnaround time varies based on project complexity, typically ranging from 24-72 hours for standard edits.",
  },
  {
    question: "Do you provide raw footage editing?",
    answer:
      "Yes, we can work with your raw footage or provide complete production services.",
  },
  {
    question: "What video formats do you support?",
    answer:
      "We support all major video formats including MP4, MOV, AVI, and more.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, we provide multiple revision rounds to ensure your complete satisfaction.",
  },
];

export default function VideoEditing() {
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
        <title>Video Editing | Solvitx</title>
        <meta
          name="description"
          content="Professional video editing services by Solvitx. Transform your raw footage into engaging content."
        />
      </Head>

      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-orange-900/80 to-yellow-900/80" />
          <div className="absolute inset-0 bg-[url('/images/video-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
            Bring Your Vision to Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional video editing services that transform your content into
            engaging stories.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Consultation
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

      {/* Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Video Editing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose Video Editing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{benefit.icon}</div>
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
      <motion.section className="py-20 bg-gray-900">
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
                <div className="text-red-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Working Process Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Production Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-red-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Features Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-red-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section className="py-20 bg-gray-800">
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
                  <span className="text-red-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-red-900 to-orange-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Videos?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free consultation and discover how our video editing services
            can elevate your content.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </>
  );
}
