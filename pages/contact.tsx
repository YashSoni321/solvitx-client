"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/homepage/Footer";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";

// Define work stages for the animation showcase
export const workStages = [
  {
    title: "Strategy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400",
    description:
      "We analyze your business, market and goals to craft a custom digital strategy.",
  },
  {
    title: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    color: "from-purple-500 to-pink-400",
    description:
      "Visually appealing and user-centric designs that turn visitors into customers.",
  },
  {
    title: "Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "from-orange-500 to-amber-400",
    description:
      "Robust and scalable code to bring your ideas to life across all platforms.",
  },
  {
    title: "Launch",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    color: "from-green-500 to-emerald-400",
    description:
      "Deploy, test, and launch your project with precision and confidence.",
  },
];

export default function Contact() {
  // Auto-rotating work stages
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prevStage) => (prevStage + 1) % workStages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Budget options
  const budgetOptions = [
    "Select a budget range",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ];

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: "Solvitx Team",
    };

    // Use the email config values
    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });

        // Reset success message after a delay
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        setSubmitError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <>
      <Head>
        <title>Contact Us — Solvitx | Let&apos;s Build Something Amazing</title>
        <meta
          name="description"
          content="Get in touch with Solvitx for your next digital project. We're ready to transform your ideas into reality with our expertise in technology and design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Contact Us — Solvitx | Let's Build Something Amazing"
        />
        <meta
          property="og:description"
          content="Reach out to Solvitx and let's discuss how we can help bring your vision to life with cutting-edge technology solutions."
        />
        <meta property="og:image" content="/images/heroImg.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center px-4">
          <div className="inline-block mb-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center p-1 mx-auto relative overflow-hidden">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-4xl font-extrabold">
                  S
                </span>
              </div>

              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(236, 72, 153, 0.3)",
                    "0 0 0 10px rgba(236, 72, 153, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-5xl mx-auto">
            Let&apos;s Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Ideas
            </span>{" "}
            Into Reality
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Reach out to us and discover how our expertise can help bring your
            vision to life
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section id="contact-form" className="bg-black py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Fill out the form below and let&apos;s
              start a conversation about your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              {submitSuccess && (
                <div className="bg-green-600/20 border border-green-600 text-green-100 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}

              {submitError && (
                <div className="bg-red-600/20 border border-red-600 text-red-100 px-4 py-3 rounded-lg mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{submitError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-gray-300 mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-300 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2" htmlFor="budget">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option} disabled={index === 0}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* About Solvitx & Social Links */}
            <div>
              {/* About Solvitx */}
              <div className="mb-16 relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  About Solvitx
                </h3>

                <div className="text-gray-300 space-y-6">
                  <p>
                    We&apos;re not just another tech company. At Solvitx, we
                    combine creativity, technical expertise, and business acumen
                    to create digital solutions that make a real difference.
                  </p>

                  {/* Animated Stages of Work showcase */}
                  <div className="relative h-60 w-full overflow-hidden rounded-xl shadow-xl">
                    {/* Animated background */}
                    <motion.div
                      key={activeStage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute inset-0 bg-gradient-to-br ${workStages[activeStage].color}`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <motion.div
                        key={`icon-${activeStage}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4"
                      >
                        {workStages[activeStage].icon}
                      </motion.div>

                      <motion.h4
                        key={`title-${activeStage}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl font-bold text-white mb-2"
                      >
                        {workStages[activeStage].title}
                      </motion.h4>

                      <motion.p
                        key={`desc-${activeStage}`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white/90 max-w-md"
                      >
                        {workStages[activeStage].description}
                      </motion.p>
                    </div>

                    {/* Stage indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {workStages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeStage === index
                              ? "bg-white w-6"
                              : "bg-white/50"
                          }`}
                          aria-label={`Go to stage ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <p>
                    Since our founding, we have helped businesses of all sizes
                    transform their digital presence and build products that
                    their users love.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Connect With Us
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-gray-800 p-3 rounded-full">
                      <FaMapMarkerAlt className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-400">Jaipur, Rajasthan 302003</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="mt-1 bg-gray-800 p-3 rounded-full">
                      <FaEnvelope className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-400">
                        {/* solvitxsolutions@gmail.com{" "} */}
                        <a href="mailto:solvitxsolutions@gmail.com">
                          solvitxsolutions@gmail.com
                        </a>
                        <br />
                        {/* support@solvitx.com */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/company/solvitx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-5 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                >
                  <FaLinkedin className="text-3xl" />
                  <span className="font-medium">LinkedIn</span>
                  <FaChevronRight className="text-sm opacity-70" />
                </a>

                {/* <a
                  href="https://instagram.com/solvitx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-5 py-4 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white transition-all duration-300"
                >
                  <FaInstagram className="text-3xl" />
                  <span className="font-medium">Instagram</span>
                  <FaChevronRight className="text-sm opacity-70" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
