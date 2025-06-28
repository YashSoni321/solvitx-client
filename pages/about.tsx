"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/homepage/Footer";
import {
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/heroimages/contactUs.jpeg";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Founder data
const founders = [
  {
    name: "Pratham Mittal",
    role: "Founder & CEO",
    image: "/images/user.jpg",
    bio: "A visionary entrepreneur with a passion for creating digital experiences that transform businesses. With over 8 years in tech leadership, Yash founded SolvitX to bridge the gap between technical excellence and business success.",
    quote:
      "Technology should solve real problems, not create new ones. Our mission is to deliver solutions that make a tangible difference.",
  },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and challenges through collaborative workshops and research.",
    icon: <FaLightbulb className="text-3xl text-purple-400" />,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on insights gained, we craft a tailored digital strategy that aligns with your objectives and market position.",
    icon: <FaHandshake className="text-3xl text-blue-400" />,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our expert team brings the vision to life with cutting-edge technology, regular updates, and transparent communication.",
    icon: <FaRocket className="text-3xl text-pink-400" />,
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Launch is just the beginning. We provide ongoing support, optimization, and strategic guidance for sustainable growth.",
    icon: <FaChevronRight className="text-3xl text-green-400" />,
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us — SolvitX | Where Vision Meets Technology</title>
        <meta
          name="description"
          content="Discover SolvitX's story, our passionate team, and our mission to transform businesses through innovative digital solutions and exceptional service."
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
        <meta property="og:image" content="/images/heroImg.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      {/* <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay 
        <div className="absolute inset-0">
          <Image
            src="/images/heroImg.jpg"
            alt="SolvitX Team"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

     
        <div className="relative z-10 container mx-auto px-4 py-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              We Do not Just Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Solutions
              </span>
              <br />
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Relationships
              </span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Since 2018, we have been transforming businesses through
              technology that matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <a
              href="#our-story"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Discover Our Story
            </a>
          </motion.div>
        </div>
      </div> */}

      <HeroSection
        backgroundImage={heroImg}
        heading="About Us"
        highlight=""
        subheading="Discover SolvitX's story, our passionate team, and our mission to transform businesses through innovative digital solutions and exceptional service."
        buttonText="Get a Free Consultation"
      />

      {/* Our Story Section */}
      <section id="our-story" className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-8"></div>

              <div className="text-gray-300 space-y-6 text-lg">
                <p>
                  <span className="text-pink-500 font-bold">SolvitX</span>{" "}
                  Founded on the idea that IT should be simple, strategic, and
                  solution-oriented, SolvitX is built different — at the
                  intersection of backend brilliance and brand strategy.
                </p>
                <p>
                  We’re not your average IT service provider. While others focus
                  on isolated solutions, we bring the whole picture together.
                  And over the last 10 years, that’s exactly what we’ve been
                  doing — one breakthrough at a time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative w-full max-w-4xl mx-auto p-4"
            >
              {/* White Background Layer */}
              <div className="absolute inset-0 bg-white rounded-2xl z-[-10]"></div>

              {/* Glow Background Effect */}
              {/* <div className="absolute -inset-4 bg-gradient-to-br from-white/50 via-blue-200/30 to-blue-100/10 rounded-2xl blur-2xl z-0"></div> */}

              {/* Logo Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 shadow-2xl ring-white/20 z-10 backdrop-blur-md bg-white">
                <Image
                  src="/images/solvitx.png"
                  alt="SolvitX Logo"
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Text Below */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-10 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Vision & Mission
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto"></div>
            <p className="text-xl text-gray-300">
              SolvitX was born out of a need to bridge the gap between technical
              development and digital impact. With a vision of a world, where
              technology and marketing aren’t separate silos — but a single
              engine driving innovation, connection, and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  01
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Excellence in Execution
              </h3>
              <p className="text-gray-300">
                We believe that exceptional results come from uncompromising
                standards. Every line of code, every pixel, every user
                interaction is crafted with precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg md:transform md:-translate-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  02
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                People-First Technology
              </h3>
              <p className="text-gray-300">
                Technology exists to serve people, not the other way around. We
                create solutions that adapt to human needs, behaviors, and
                expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 mx-auto bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
                  03
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Continuous Innovation
              </h3>
              <p className="text-gray-300">
                The digital landscape never stands still, and neither do we. We
                constantly explore new technologies and methodologies to keep
                our clients ahead.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Meet Our Founders
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionaries who turned a passion for technology into a mission to
              transform businesses.
            </p>
          </motion.div>

          <div className="">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 relative h-full min-h-[300px]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      layout="fill"
                      objectFit="cover"
                      className="lg:rounded-l-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                      <h3 className="text-2xl font-bold text-white">
                        {founder.name}
                      </h3>
                      <p className="text-purple-300">{founder.role}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8">
                    <div className="hidden lg:block mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {founder.name}
                      </h3>
                      <p className="text-purple-300">{founder.role}</p>
                    </div>

                    <p className="text-gray-300 mb-6">{founder.bio}</p>

                    <div className="flex items-start space-x-3">
                      <FaQuoteLeft className="text-purple-400 text-xl flex-shrink-0 mt-1" />
                      <p className="italic text-gray-300">{founder.quote}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Stepper */}
      <section className="py-10 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Transform Your Vision Into Reality
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-8 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures that every project delivers exceptional
              results.
            </p>
          </motion.div>

          {/* Desktop Stepper */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Line connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                )}

                {/* Step content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
                  <p className="text-gray-300 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Stepper */}
          <div className="lg:hidden space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                      {step.icon}
                    </div>
                    {/* Vertical line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                    )}
                  </div>

                  <div className="ml-6">
                    <div className="flex items-center mb-2">
                      <span className="text-lg font-bold text-purple-400 mr-2">
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Let s build something amazing together. Reach out to discuss how
              we can help you achieve your digital goals.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
