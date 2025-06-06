"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaChartLine,
  FaSearchDollar,
  FaHashtag,
  FaFileAlt,
  FaAdversal,
  FaEnvelope,
  FaChartBar,
  FaUsers,
  FaTrophy,
  FaClipboardCheck,
  FaChartPie,
  FaCertificate,
  FaRocket,
  FaTools,
  FaRegLightbulb,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCheckCircle,
  FaChevronUp,
  FaChevronDown,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Footer from "@/components/homepage/Footer";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/Digital_Marketing.jpg";
import heroImgMobile from "../public/images/hero-mobile/DigitalMM.jpg";
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

// Value propositions data
const valuePropositions = [
  {
    title: "ROI-Focused Strategies",
    description:
      "Marketing campaigns designed to maximize your return on investment and drive real business growth.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Comprehensive Digital Expertise",
    description:
      "From SEO and social media to PPC and content marketing, we provide end-to-end digital solutions.",
    icon: <FaTools className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "We leverage analytics and insights to optimize campaigns and achieve measurable results.",
    icon: <FaChartPie className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear, comprehensive dashboards and regular updates on your campaign performance.",
    icon: <FaClipboardCheck className="text-4xl" />,
    color: "text-red-500",
  },
  {
    title: "Certified Marketing Professionals",
    description:
      "Our team consists of Google, Facebook, and HubSpot certified marketing experts.",
    icon: <FaCertificate className="text-4xl" />,
    color: "text-yellow-500",
  },
  {
    title: "Customized Marketing Plans",
    description:
      "Tailored strategies designed specifically for startups, SMEs, and enterprise businesses.",
    icon: <FaRegLightbulb className="text-4xl" />,
    color: "text-orange-500",
  },
];

// Marketing services
const marketingServices = [
  {
    title: "Search Engine Optimization",
    link: "/seo",
    description:
      "Boost your organic visibility and drive targeted traffic with our data-driven SEO strategies.",
    icon: <FaSearchDollar className="text-4xl" />,
    color: "text-orange-500",
  },
  {
    title: "Social Media Marketing",
    link: "/social-media-marketing",
    description:
      "Engage your audience and build brand presence across all relevant social platforms.",
    icon: <FaHashtag className="text-4xl" />,
    color: "text-blue-500",
  },
  {
    title: "Performance Marketing",
    link: "/performance-marketing",
    description:
      "Drive measurable results with our data-driven performance marketing strategies.",
    icon: <FaChartLine className="text-4xl" />,
    color: "text-green-500",
  },
  {
    title: "Influencer Marketing",
    link: "/influencer-marketing",
    description:
      "Leverage the power of influencers to amplify your brand's reach and credibility.",
    icon: <FaUserFriends className="text-4xl" />,
    color: "text-purple-500",
  },
  {
    title: "360° Digital Marketing",
    link: "/360-digital-marketing",
    description:
      "Comprehensive digital marketing solutions that cover all aspects of your online presence.",
    icon: <FaGlobe className="text-4xl" />,
    color: "text-red-500",
  },
];

// Case studies
const caseStudies = [
  {
    client: "TechVision Inc.",
    image: "/images/portfolio/casestudy1.jpg",
    title: "B2B Lead Generation Campaign",
    result: "320% increase in qualified leads within 3 months",
    tags: ["SEO", "Content Marketing", "LinkedIn Ads"],
  },
  {
    client: "FreshBites Restaurant",
    image: "/images/portfolio/casestudy2.jpg",
    title: "Local SEO & Social Media Campaign",
    result: "185% increase in website traffic and 45% growth in reservations",
    tags: ["Local SEO", "Instagram", "Google Ads"],
  },
  {
    client: "EcoStyle Fashion",
    image: "/images/portfolio/casestudy3.jpg",
    title: "E-commerce Growth Strategy",
    result: "210% ROI on ad spend with 150% increase in online sales",
    tags: ["PPC", "Facebook Ads", "Email Marketing"],
  },
  {
    client: "HealthPlus Clinics",
    image: "/images/portfolio/casestudy4.jpg",
    title: "Healthcare Digital Presence",
    result: "78% increase in appointment bookings through website",
    tags: ["SEO", "Content Strategy", "Google My Business"],
  },
];

// Marketing tools by category
const marketingTools = [
  {
    category: "SEO Tools",
    tools: [
      { name: "SEMrush", image: "/images/tools/semrush.png" },
      { name: "Ahrefs", image: "/images/tools/ahrefs.png" },
      { name: "Moz", image: "/images/tools/moz.png" },
      {
        name: "Google Search Console",
        image: "/images/tools/searchconsole.png",
      },
    ],
  },
  {
    category: "Advertising",
    tools: [
      { name: "Google Ads", image: "/images/tools/googleads.png" },
      { name: "Facebook Ads", image: "/images/tools/facebookads.png" },
      { name: "LinkedIn Ads", image: "/images/tools/linkedinads.png" },
      { name: "Twitter Ads", image: "/images/tools/twitterads.png" },
    ],
  },
  {
    category: "Social Media",
    tools: [
      { name: "Hootsuite", image: "/images/tools/hootsuite.png" },
      { name: "Buffer", image: "/images/tools/buffer.png" },
      { name: "Sprout Social", image: "/images/tools/sproutsocial.png" },
      { name: "Canva", image: "/images/tools/canva.png" },
    ],
  },
  {
    category: "Analytics",
    tools: [
      { name: "Google Analytics", image: "/images/tools/googleanalytics.png" },
      { name: "Hotjar", image: "/images/tools/hotjar.png" },
      { name: "Databox", image: "/images/tools/databox.png" },
      { name: "Tableau", image: "/images/tools/tableau.png" },
    ],
  },
];

// FAQs for digital marketing
const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Results vary based on the strategies employed. SEO typically takes 3-6 months to show significant results, while paid advertising can drive immediate traffic. Social media marketing generally takes 1-3 months to build momentum. We'll provide realistic timelines based on your specific goals and industry.",
  },
  {
    question: "Do you offer one-time audits or monthly retainers?",
    answer:
      "We offer both one-time comprehensive audits and monthly retainer packages. One-time audits provide a detailed analysis of your current digital presence with recommendations. Monthly retainers include ongoing campaign management, optimization, and reporting. We'll help you determine which option best suits your needs.",
  },
  {
    question: "Can you handle ad campaigns across multiple platforms?",
    answer:
      "Yes, we specialize in multi-platform advertising strategies. Our team is certified in Google Ads, Facebook/Instagram Ads, LinkedIn Advertising, and other major platforms. We strategically allocate your budget across the platforms that will deliver the best results for your specific audience and goals.",
  },
  {
    question: "Will I receive regular performance reports?",
    answer:
      "Absolutely. Transparency is one of our core values. You'll receive detailed monthly reports with key performance metrics, insights, and recommendations. We also provide access to real-time dashboards so you can check campaign performance anytime. Additionally, we schedule regular review meetings to discuss results and strategy adjustments.",
  },
  {
    question: "How do you measure the success of marketing campaigns?",
    answer:
      "We establish clear KPIs at the beginning of each campaign aligned with your business objectives. Depending on your goals, we might track metrics like organic traffic, conversion rates, cost per acquisition, engagement rates, lead quality, or ROI. We use advanced analytics tools to provide accurate attribution and performance measurement.",
  },
  {
    question: "Do you work with businesses in specific industries?",
    answer:
      "While we have experience across many industries, we've developed particular expertise in B2B, SaaS, e-commerce, healthcare, finance, and professional services. Our team researches each client's industry to understand specific challenges and opportunities, ensuring our strategies are relevant and effective.",
  },
];

export default function DigitalMarketingService() {
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
        <title>Digital Marketing Services | SolvitX</title>
        <meta
          name="description"
          content="Expert digital marketing services by SolvitX. Results-driven SEO, social media, PPC, and content marketing strategies to grow your business."
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-teal-400">
            Accelerate Your Growth with Performance-Driven Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            SolvitX helps businesses scale with proven SEO, SMM, and digital
            strategies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Free Marketing Audit
          </motion.button>
        </motion.div>
      </motion.section> */}

      <HeroSection
        backgroundImage={isMobile ? heroImgMobile : heroImg}
        heading="Digital Marketing"
        highlight=""
        subheading="Accelerate your growth with performance-driven digital marketing."
        buttonText="Get a Free Consultation"
      />

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

      {/* Why Choose SolvitX Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Choose SolvitX for Digital Marketing?
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

      {/* Our Services Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Case Studies Section */}
      <motion.section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-xl overflow-hidden bg-gray-800 shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <span className="p-4 font-semibold text-white">
                      {study.client}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {study.title}
                  </h3>
                  <div className="flex items-center mb-4 text-green-400">
                    <FaTrophy className="mr-2" />
                    <p className="text-sm font-medium">{study.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm"
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
              className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              View All Case Studies
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Tools & Platforms Section */}
      <motion.section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Tools & Platforms We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingTools.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="p-6 rounded-xl bg-gray-900"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 h-24"
                    >
                      <div className="relative w-12 h-12 mb-2">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-gray-300 text-sm font-medium text-center">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
            <p>
              Note: We adapt our tool selection based on your specific needs and
              industry requirements. Our specialists are certified in all major
              marketing platforms.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section className="py-20 bg-gray-900">
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

      {/* Marketing Results CTA Section */}
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-16 bg-gradient-to-r from-green-900 to-teal-900"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Boost Your Digital Performance?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Get a complimentary analysis of your digital presence and discover
            untapped growth opportunities.
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
