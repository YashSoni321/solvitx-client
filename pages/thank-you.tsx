"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import heroImg from "../public/images/hero_image.jpg";
import Image from "next/image";
import LandingPageFooter from "@/components/homepage/LandingPageFooter";
import LandingPageNavbar from "@/components/common/LandingPageNavbar";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
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

const ThankYouPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Thank You — SolvitX | We'll Be In Touch Soon</title>
        <meta
          name="description"
          content="Thank you for contacting SolvitX! Your message has been received and our team will get back to you within 24 hours."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-center px-4 py-10 md:py-32 overflow-hidden">
          {/* Background Image */}
          <Image
            src={heroImg}
            alt="Success Background"
            fill
            className="object-cover  z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={scaleIn}
              className="mb-8"
            >
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <FaCheckCircle className="text-6xl text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold text-gray-100 mb-6"
            >
              Thank You for Choosing{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
                SolvitX!
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Your message has been successfully received! Our expert team will
              review your requirements and get back to you within 24 hours with
              a customized solution for your business.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Check Your Email
                </h3>
                <p className="text-gray-600 text-sm">
                  We've sent a confirmation email with next steps and our
                  contact details.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Expect Our Call
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team will contact you within 24 hours to discuss your
                  project in detail.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-pink-600 text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Project Kickoff
                </h3>
                <p className="text-gray-600 text-sm">
                  Once approved, we'll begin working on your digital
                  transformation journey.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/landing-page">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2 hover:from-pink-500 hover:to-blue-600 transition-all"
                >
                  Back to Home <FaArrowRight />
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  View Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-4 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Happens Next?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Here's what you can expect from our team in the coming days
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  step: "01",
                  title: "Requirements Review",
                  description:
                    "Our team analyzes your project requirements and goals within 2-4 hours.",
                  timeframe: "Within 4 hours",
                },
                {
                  step: "02",
                  title: "Initial Consultation",
                  description:
                    "We'll schedule a call to discuss your vision and answer any questions.",
                  timeframe: "Within 24 hours",
                },
                {
                  step: "03",
                  title: "Custom Proposal",
                  description:
                    "Receive a detailed proposal with timeline, cost, and project roadmap.",
                  timeframe: "Within 48 hours",
                },
                {
                  step: "04",
                  title: "Project Kickoff",
                  description:
                    "Once approved, we begin development with regular progress updates.",
                  timeframe: "After approval",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
                >
                  <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 absolute -top-5 -right-3 opacity-10">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                      {item.timeframe}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-10 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Immediate Assistance?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Don't wait! Reach out to us directly for urgent queries or quick
                consultations.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gray-800 p-8 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">
                  Get in touch via email for detailed discussions
                </p>
                <a
                  href="mailto:solvitxsolutions@gmail.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
                >
                  solvitxsolutions@gmail.com
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gray-800 p-8 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-400 mb-4">
                  Speak directly with our experts
                </p>
                <a
                  href="tel:+919782025577"
                  className="text-purple-400 hover:text-purple-300 font-semibold text-lg"
                >
                  +91 7232899120
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
};

export default ThankYouPage;
