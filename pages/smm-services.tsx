"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaHashtag,
  FaUsers,
  FaChartLine,
  FaVideo,
  FaCamera,
  FaComment,
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
  FaAd,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/SMS.jpg";
import { SiCoinmarketcap } from "react-icons/si";

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

// Social Media services
const socialMediaServices = [
  {
    title: "Content Creation",
    description:
      "We help you create memorable and share worthy content.",
    icon: <FaCamera className="text-4xl" />,
    color: "text-pink-500",
  },
  {
    title: "Community Management",
    description: "We help you build engaging communities and build trust through active engagement.",
    icon: <FaUsers className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Paid Advertising",
    description: "Run targeted cross platform ads to boost engagement.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Video Marketing",
    description: "We create videos for you that can entertain and inform the audience.",
    icon: <FaVideo className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Influencer Marketing",
    description: "We help you collaborate with trusted influencers who can amplify your reach.",
    icon: <FaHashtag className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "PR Marketing",
    description: "With our swift and strategic PR solutions, we help to protect your brand and amplify it's credibility.",
    icon: <FaComment className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Analytics And Reporting",
    description: "Track and analyse every step to optimise it for better performance.",
    icon: <SiCoinmarketcap className="text-4xl" />,
    color: "text-blue-500",
  },
];

// Social Media benefits
const socialMediaBenefits = [
  {
    title: "Brand Awareness",
    description: "Make a bold digital presence for your brand with memorable content.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Customer Engagement",
    description: "Engage in real conversations with your customers to build strong relationships.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Lead Generation",
    description: "Convert likes and shares into leads and valuable customers.",
    icon: <FaRocket className="text-3xl" />,
  },
  {
    title: "Customer Support",
    description: "You can be present and responsive to all the problems of your customers.",
    icon: <FaCheckCircle className="text-3xl" />,
  },
];

// FAQs
const faqs = [
  {
    question: "Which social media platforms do you manage?",
    answer:
      "We manage all major platforms including Facebook, Instagram, LinkedIn, Twitter, and TikTok. We'll help you identify which platforms are best for your business goals.",
  },
  {
    question: "How often will you post on our social media?",
    answer:
      "Posting frequency depends on your industry, audience, and goals. We typically recommend 3-5 posts per week on each platform, with adjustments based on engagement and performance.",
  },
  {
    question: "Do you create all content in-house?",
    answer:
      "Yes, we have a team of content creators, designers, and videographers who create high-quality, platform-specific content for your brand.",
  },
  {
    question: "How do you measure social media success?",
    answer:
      "We track metrics like engagement rate, reach, follower growth, website traffic, and conversions. We provide detailed monthly reports and adjust strategies based on performance.",
  },
];

// Add these new arrays after the existing arrays
const whyChooseUs = [
  {
    title: "Expert Team",
    description:
      "Our team comprises digital marketers with 10+ years of experience.",
    icon: <FaUsers className="text-3xl" />,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Every strategy we put forward is backed by proper data and analysis- not guesswork.",
    icon: <FaChartLine className="text-3xl" />,
  },
  {
    title: "Creative Content",
    description:
      "Our creative team helps you generate interactive content with precision and purpose.",
    icon: <FaPalette className="text-3xl" />,
  },
  {
    title: "24/7 Support",
    description:
      "We are always there when you need it.",
    icon: <FaHeadset className="text-3xl" />,
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Strategy Development",
    description:
      "Get on a call with us to discuss your goals.",
    icon: <FaClipboardList className="text-3xl" />,
  },
  {
    step: "2",
    title: "Content Planning",
    description:
      "We design the content from scratch, and tailored to your requirements.",
    icon: <FaCalendarAlt className="text-3xl" />,
  },
  {
    step: "3",
    title: "Community Management",
    description:
      "We engage productivity and respond with sincerity to help you grow the community.",
    icon: <FaComments className="text-3xl" />,
  },
  {
    step: "4",
    title: "Performance Analysis",
    description:
      "Review the social media metrics to run targeted campaigns.",
    icon: <FaChartBar className="text-3xl" />,
  },
];

// const keyFeatures = [
//   {
//     title: "Content Creation",
//     description:
//       "High-quality, platform-specific content including images, videos, and copy.",
//     icon: <FaCamera className="text-3xl" />,
//   },
//   {
//     title: "Paid Advertising",
//     description:
//       "Strategic ad campaigns to reach your target audience effectively.",
//     icon: <FaAd className="text-3xl" />,
//   },
//   {
//     title: "Influencer Marketing",
//     description: "Partner with relevant influencers to expand your reach.",
//     icon: <FaUserFriends className="text-3xl" />,
//   },
//   {
//     title: "Social Listening",
//     description: "Monitor brand mentions and industry conversations.",
//     icon: <FaSearch className="text-3xl" />,
//   },
//   {
//     title: "Crisis Management",
//     description: "Proactive handling of negative feedback and PR issues.",
//     icon: <FaShieldAlt className="text-3xl" />,
//   },
//   {
//     title: "Analytics & Reporting",
//     description: "Detailed performance reports with actionable insights.",
//     icon: <FaChartPie className="text-3xl" />,
//   },
// ];

export default function SocialMediaMarketingService() {
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
        <title>Social Media Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Expert social media marketing services by SolvitX. Grow your brand, engage your audience, and drive results with our proven social media strategies."
        />
      </Head>

      {/* Hero Section */}
      {/* <motion.section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-pink-900/80 to-gray-900/80" />
          <div className="absolute inset-0 bg-[url('/images/social-media-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Grow Your Brand with Social Media Marketing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Connect with your audience and build lasting relationships through
            social media.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get a Free Social Media Audit
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={heroImg}
        heading="Build A Bold Social Presence"
        highlight=""
        subheading="We help businesses spark engagement, build a loyal community, and convert followers into customers through powerful storytelling and platform-native strategies."
        buttonText="Get a free social media consultation"
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
        title="Custom Social Media Marketing For Your Brand"
        content="From Instagram reels to LinkedIn thought leadership — we craft platform-specific content and campaign strategies designed to resonate with your audience and elevate your digital voice. Whether you’re a startup or a legacy brand, we ensure every post aligns with your mission and drives tangible business results."
        position="right"
      />

      {/* Benefits Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Do You Need SMM For Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-pink-400 mb-4">{benefit.icon}</div>
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
            Our SMM Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-justify">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Should You Collaborate With SolvitX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-pink-400 mb-4">{item.icon}</div>
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
                <div className="absolute -top-4 -left-4 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="text-pink-400 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-justify">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
      {/* <motion.section className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Comprehensive Social Media Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-pink-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

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
                  <span className="text-pink-400 transition-transform duration-300 transform">
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
      <motion.section className="py-16 bg-gradient-to-r from-pink-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Grow Your Social Media Presence?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a free social media audit and discover how we can help you
            connect with your audience.
          </motion.p>
          <motion.button
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-pink-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
