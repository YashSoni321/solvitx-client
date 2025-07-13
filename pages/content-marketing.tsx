"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFileAlt,
  FaPenAlt,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaPalette,
  FaHeadset,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaChartBar,
  FaShieldAlt,
  FaChartPie,
  FaVideo,
  FaImage,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import heroImg from "../public/images/heroimages/Content_Marketing.jpg";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import useIsMobile from "@/hooks/useIsMobile";
import heroImgMobile from "../public/images/hero-mobile/Content.jpg";

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

// Content Marketing services
const contentServices = [
  {
    title: "Blog Writing",
    description:
      "We help you generate informative and engaging blogs that reflect the expertise in your niche.",
    icon: <FaBlog className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Video Content",
    description:
      "We help you generate visually attractive videos that speak for itself.",
    icon: <FaVideo className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Infographics",
    description:
      "We help you engage your audience with visually attractive graphics.",
    icon: <FaImage className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Social Media Content",
    description:
      "We post consistently over social media to boost visibility and engagement.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-pink-500",
  },
  {
    title: "Email Marketing",
    description:
      "We help you generate leads and retain customers with impactful emails.",
    icon: <FaEnvelope className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Content Strategy",
    description:
      "We build you a tailored content strategy according to your brand's voice.",
    icon: <FaClipboardList className="text-4xl" />,
    color: "text-yellow-500",
  },
];

// Content Marketing benefits
const contentBenefits = [
  {
    title: "Brand Authority",
    description:
      "Establish your business as a trusted expert in your chosen niche.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Lead Generation",
    description:
      "Make your content valuable to attract leads and conversions.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Customer Engagement",
    description:
      "Create content for your audience the care about.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "SEO Performance",
    description:
      "You can boost the brand visibility and organic rankings with keyword rich content.",
    icon: <FaSearch className="text-3xl" />,
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Expert Writers",
    description:
      "We have a team of writers with 7+ years of industry experience.",
    icon: <FaPenAlt className="text-3xl" />,
  },
  {
    title: "SEO Integration",
    description:
      "We generate SEO optimised content so that you rank in the Google results.",
    icon: <FaSearch className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Our content is backed by heavy research and customer data, not just assumptions.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Consistent Quality",
    description:
      "We deliver consistency that reflects professionalism and creates an impact.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// Working Process
const workingProcess = [
  {
    step: "1",
    title: "Content Audit",
    description:
      "We assess your current assets to identify the gaps in consumer engagement.",
    icon: <FaFileAlt className="text-3xl" />,
  },
  {
    step: "2",
    title: "Strategy Development",
    description:
      "We develop a strategy that is built to reflect your brand's goals and audience needs.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "3",
    title: "Content Creation",
    description:
      "We generate high quality, SEO optimised content for maximum engagement.",
    icon: <FaPenAlt className="text-3xl" />,
  },
  {
    step: "4",
    title: "Distribution & Promotion",
    description:
      "We publish, share and promote content across the right platforms.",
    icon: <FaRocket className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "What types of content do you create?",
    answer:
      "We create various content types including blog posts, articles, videos, infographics, social media posts, email campaigns, and more. Our content is tailored to your industry and target audience.",
  },
  {
    question: "How do you ensure content quality?",
    answer:
      "We have a rigorous quality control process that includes research, writing, editing, and proofreading. All content is reviewed by subject matter experts and SEO specialists.",
  },
  {
    question: "How often will you create new content?",
    answer:
      "Content frequency depends on your goals and resources. We typically recommend 2-4 blog posts per month, along with regular social media content and email campaigns.",
  },
  {
    question: "How do you measure content success?",
    answer:
      "We track metrics like traffic, engagement, conversions, and SEO performance. Regular reports help us optimize content strategy for better results.",
  },
];

export default function ContentMarketingService() {
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
        <title>Content Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Expert content marketing services by SolvitX. Create engaging, SEO-optimized content that drives traffic and converts visitors into customers."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/content-marketing-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-400 to-blue-400">
            Create Content That Converts
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Drive engagement and growth with our expert content marketing
            services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Content Audit
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="Turn Readers Into Loyal Customers"
        highlight=""
        subheading="We don’t just write content — we create strategic stories that educate, engage, and convert across every stage of your customer journey."
        buttonText="Get a tailored content calendar today."
      />
      {/* <DescSection
        heading="Our Web Development Services"
        image="/images/services/WebDevelopment.jpg"
        title="Modern Web Development Solutions"
        content="We specialize in creating cutting-edge web applications using the latest technologies. Our team of expert developers delivers scalable, secure, and high-performance solutions tailored to your business needs. From responsive design to complex web applications, we ensure your digital presence stands out in today's competitive market."
        position="left"
      /> */}

      <DescSection
        heading=""
        image="/images/dashboard.jpg"
        title="Custom Content Marketing Services For Your Business"
        content="At SolvitX, we combine creativity with SEO-driven strategies to position your brand as an industry leader. From blog articles and whitepapers to email newsletters and LinkedIn thought leadership — our content speaks your brand's truth while serving real business goals.

Whether you're B2B or B2C, startup or enterprise — we tailor content that builds trust, drives action, and boosts ROI.
"
        position="right"
      />

      {/* Benefits Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Do You Need Content Marketing For Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentBenefits.map((benefit, index) => (
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

      {/* Our Services Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-10 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Content Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
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
            Ready to Transform Your Content Strategy?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free content audit and discover how we can help you create
            content that drives results.
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
