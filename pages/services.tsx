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
import { useRouter } from "next/router";
import { link } from "fs";
import DescSection from "@/components/webdevelopment/DescSection";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/service_page.jpeg";
import SectionHeading from "@/components/common/SectionHeading";
import Slider from "react-slick";
import { sliderSettings } from "@/components/homepage/StageOfWork";

// Service Data
const services = [
  {
    icon: <FaLightbulb className="text-5xl text-yellow-400" />,
    title: "Digital Strategy",
    link: "digitalmarketing",
    description: `The world is pacing fast towards digitalization- this is your moment to lead the digital space. We merge cutting-edge digital strategies with time-tested business school marketing principles to build and run campaigns that not only reach out to the right audiences but resonate with them. 
From SEO to social media and ad campaigns, we build digital stratagems that don’t just show up — they cut through the noisy crowd and stand out among them.
`,
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaCode className="text-5xl text-blue-400" />,
    title: "Web Development",
    link: "/webdevelopment",
    description: `Your website is your digital image, your portfolio, and your first impression—so we make sure it feels bold, fast, and impactful. 
Our expertise will help you manage full-scale eCommerce systems with high performance code and user friendly designs. 
This is time to turn your ideas into a powerful online presence with precision and purpose. 
`,
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: <FaMobile className="text-5xl text-green-400" />,
    title: "Mobile Development",
    link: "/appdevelopment",
    description: ` Whether you're launching the next big social app or need a sleek enterprise tool — we bring your idea to life across various iOS, Android, and cross-platform frameworks. 
Our apps are built on strategy, functionality and a flawless user experience, to develop custom mobile and web apps.

      `,
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: <FaDatabase className="text-5xl text-purple-400" />,
    title: "API Development",
    link: "/apidevelopment",
    description: `Are you a startup, SaaS provider or an enterprise looking to build a smooth communication between your platform and the users?
We can help you build strong backend APIs and smooth integrations tailored to your exact business needs.

`,
    color: "from-purple-400 to-violet-600",
  },
  {
    icon: <FaSearch className="text-5xl text-red-400" />,
    title: "SEO & Marketing",
    link: "/seoservices",
    description: `The world is pacing fast towards digitalization- this is your moment to lead the digital space. We merge cutting-edge digital strategies with time-tested business school marketing principles to build and run campaigns that not only reach out to the right audiences but resonate with them. 
From SEO to social media and ad campaigns, we build digital stratagems that don’t just show up — they cut through the noisy crowd and stand out among them.
`,
    color: "from-red-400 to-rose-600",
  },
  {
    icon: <FaDesktop className="text-5xl text-teal-400" />,
    title: "UI/UX Design",
    link: "/uiuxdesign",
    description: `A brand's identity is hidden in its sleek and conversion driven designs.
It is not all about the pretty appearance, the secret lies in the seamless usability that brings real results. 
Whether it is for your websites or apps or even SaaS platforms, we focus on strategy and user-first designs.

`,
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
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Our Services — SolvitX | Innovative IT Solutions</title>
        <meta
          name="description"
          content="Explore SolvitX's comprehensive range of IT services including web development, mobile apps, cloud solutions, and digital marketing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Our Services — SolvitX | Innovative IT Solutions"
        />
        <meta
          property="og:description"
          content="Discover how SolvitX's technology services can transform your business with custom solutions designed for your unique needs."
        />
        <meta property="og:image" content="/images/services-hero.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}

      {/* Floating Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 80 + 40,
                height: Math.random() * 80 + 40,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 30 - 15],
                y: [0, Math.random() * 30 - 15],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
              }}
            />
          ))}
        </div> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <div className="w-full">
          <HeroSection
            backgroundImage={heroImg}
            heading="This Is Your Opportunity To Lead The Digital Space"
            // highlight="into Digital Reality We don’t offer ‘services’ - we deliver impact — across tech, marketing, and your brand."
            // subheading="SolvitX delivers reliable web, app, and marketing solutions trusted by businesses worldwide. Let us help you build your digital future with confidence."
            buttonText="Request for a free consultation →"
            subheading=""
            // heading=""
            highlight=""
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            width="30"
            height="30"
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
      <div className="bg-gradient-to-b from-gray-900 to-black py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-12 "
          >
            <h2 className="text-5xl lg:text-4xl font-extrabold text-white leading-tight">
              Service Overview
            </h2>
            <div className="text-justify">
              <p className="text-xl lg:text-2xl text-gray-200 mb-6">
                We’re not here to just check boxes and wait for results to pop
                up magically. We’re here to <b>solve real world problems</b>, to
                amplify your brand, and make your <b>digital presence </b>{" "}
                undeniably memorable. Whether you’re a startup looking towards
                building a presence or an enterprise expanding your reach to the
                globe stage — SolvitX is here to support every such bold move.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}

      <div className="bg-black py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
          Types Of Services
        </h2>

        {/* Carousel for mobile */}
        <div className="block md:hidden max-w-2xl mx-auto">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="px-2">
                <motion.div
                  variants={fadeInUp}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}
                  />
                  <div className="relative mb-6">{service.icon}</div>
                  <h3 className="relative text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="relative text-justify text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push(service.link)}
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
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid for tablet & desktop */}
        <motion.div
          variants={staggerContainer}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}
              />
              <div className="relative mb-6">{service.icon}</div>
              <h3 className="relative text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="relative text-justify text-gray-300 mb-6">
                {service.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push(service.link)}
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

      <DescSection
        heading="Why Our Services Work"
        image="/images/services/WebDevelopment.jpg"
        title={`"People don't buy what you do; they buy why you do it. And what you do simply proves what you believe.” — Simon Sinek`}
        content={[
          "At SolvitX, we focus on your WHY, collaborate with you on your HOW, and help you successfully achieve your WHAT.",
          "We start with your goals — not our process.",
          "Our customized services bring out your own brand voice.",
          "We focus on fast, agile, and fully collaborative projects.",
          "You're not a 'client' — you're a co-creator in the journey.",
        ]}
        position="left"
      />

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-gray-900 to-black py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            You Know What You Want. <br />
            We Know How to Build It.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Let’s start your project with a conversation.
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
              onClick={() => router.push("/contact")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Free Discovery Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/about")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Or Explore Our Portfolio
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
}
