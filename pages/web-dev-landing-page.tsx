"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import heroImg from "../public/images/hero_image.jpg";

// Import icons
import {
  FaLaptopCode,
  FaChartLine,
  FaMobileAlt,
  FaSearch,
  FaShoppingCart,
  FaServer,
  FaQuoteLeft,
  FaRegLightbulb,
  FaSyncAlt,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaChevronRight,
  FaPhone,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFlutter,
  SiFirebase,
  SiAngular,
  SiVuedotjs,
  SiPython,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import Footer from "@/components/homepage/Footer";
import { workStages } from "./contact";
import { budgetOptions } from "@/components/common/ContactUsForm";
import { clients } from "@/components/homepage/Teams";
import HeroSection from "@/components/homepage/Hero";
import SectionHeading from "@/components/common/SectionHeading";
import LandingPageNavbar from "@/components/common/LandingPageNavbar";
// import LandingPageFooter from "@/components/homepage/landingPageFooter";
import LandingPageFooter from "../components/homepage/LandingPageFooter";
import DescSection from "@/components/webdevelopment/DescSection";
import { valuePropositions } from "./web-development";

// Function to animate numbers
export const CountUpAnimation = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const duration = 1500; // 1.5 seconds
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(target * progress);

      if (isMounted) {
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
        if (isMounted) {
          setCount(target); // Ensure it ends on target
        }
      }
    }, frameRate);

    return () => {
      isMounted = false;
      clearInterval(counter);
    };
  }, [target]);

  return <span>{count}</span>;
};

const LandingPage = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    mobile: "",
    email: "",
    service: "",
    details: "",
  });
  const [activeTab, setActiveTab] = useState("web");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prevStage) => (prevStage + 1) % workStages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Form state
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   budget: "",
  //   message: "",
  // });

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Budget options

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
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
      from_name: `${formData.firstName} ${formData.lastName} ${formData?.name}`,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: "Solvitx Team",
    };
    console.log("templateParams", templateParams);

    // Use the email config values
    console.log("emailConfig", emailConfig);

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

        // Redirect to thank you page after successful submission
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        setSubmitError("Failed to send your message. Please try again later.");
      });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Basic form validation
  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.mobile ||
  //     !formData.service ||
  //     !formData.details
  //   ) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }
  //   console.log("Form Data:", formData); // Log form data
  //   window.location.href = "/thank-you";
  // };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Log input changes

    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What are the different type of digital services does SolvitX Provide?",
      answer:
        "SolvitX offers a comprehensive suite of digital solutions, including web development, dynamic mobile app creation, Content Marketing, strategic digital marketing campaigns, advanced SEO optimization, intuitive UI/UX design, and scalable custom software development to give your business new heights. ",
    },
    {
      question: "What is the typical project Timeline For a New Website?",
      answer:
        "Project timeline depends upon the complexity. The standard website timeline is around 2-4 weeks but the e-commerce platforms or custom web applications range from 2-3 months.",
    },
    {
      question: "Does SolvitX offers post launch maintenance & Support? ",
      answer:
        "SoftviX provides exclusive ongoing maintenance and support packages designed to keep your digital assets secure, up-to-date, and performing at their peak.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <LandingPageNavbar />
      <div id="home">
        <HeroSection
          backgroundImage={heroImg}
          heading="Power up your brand with all in one "
          highlight="Digital marketing & IT solutions"
          subheading="SolvitX is a top-tier IT & marketing company aligned with your business goals. We offer various services including digital marketing, web development, software development and app development that will make your audience addicted to your brand."
          buttonText="See it for yourself!"
        />
      </div>
      <section id="about" className="py-4 md:py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <SectionHeading
                title="SolvitX: Turn Ideas into Smart Digital Solutions"
                subtitle="Who We Are"
                description="SolvitX gain proficiency in creating high performance websites, indulge in expert digital marketing strategies, Software & app development to boost engagement & brand visibility."
                theme="light"
                subtitlePosition="above"
                alignment="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {[
                  {
                    icon: <FaLaptopCode className="text-blue-400" />,
                    label:
                      "Our Web Developers build you the first digital image for your brand.",
                  },
                  {
                    icon: <FaChartLine className="text-blue-400" />,
                    label:
                      "Our Marketing Experts help your business reach the right audience for better conversions.",
                  },
                  {
                    icon: <FaMobileAlt className="text-blue-400" />,
                    label:
                      "Our Application Developers let you connect with your audiences in the most interactive way.",
                  },
                  {
                    icon: <FaSearch className="text-blue-400" />,
                    label: "Advanced SEO Optimization",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-gray-200">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br border-amber-50 border-4 p-4 md:p-8 lg:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
                Ready to Start? Get a Free Quote!
              </h3>
              {submitSuccess && (
                <div className="bg-green-200/20 border border-green-600 text-green-100 px-4 py-3 rounded-lg mb-6 flex items-center">
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
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
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
          </div>
        </div>
      </section>
      <DescSection
        heading=""
        image="/images/services-new/website development /Custom Web Applications For Your Business.jpg"
        title="Custom Web Applications For Your Business"
        content="Explore our fully tailored responsive websites built from scratch. With neat codes, scalable tech stacks and user-friendly UI/UX designs — you can bring your digital vision to life with precision and quality. Whether you are looking for a sleek online presence or want to scale-up your website functionality, our experts will guide you with our fully customisable web development solutions."
        position="left"
      />

      {/* About Us Section - Black theme, but with better contrast and form */}

      <div className="py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Why Select SolvitX for Web Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropositions.map((prop, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${prop.color} mb-4`}>{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {prop.title}
                </h3>
                <p className="text-gray-300 text-justify">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats Section - Black - Animated numbers and more dynamic background */}
      <section className="py-4 md:py-4 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Are you still unsure on why should you choose us?"
            subtitle="Our Achievements"
            description="Then let the numbers do the work."
            theme="light"
            subtitlePosition="above"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: 10, label: "Years of experience", suffix: "+" },
              { value: 200, label: "Happy Clients", suffix: "%" },
              { value: 100, label: "Websites built", suffix: "+" },
              { value: 25, label: "Team of Professionals", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/5 p-4 md:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-xs md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section
        id="services"
        className="py-4 md:py-4 bg-white relative overflow-hidden"
      >
        {/* <DescSection
          heading=""
          image="/images/services-new/android-app-development/What Do Our Clients Say_.jpg"
          title="What Do Our Clients Say?"
          content="The Android application developed by SolvitX helped us scale all our logistic operations with ease. They provided faster delivery, a smooth transitioning, and a clean and robust code. - Sanya Upadhyay, Product Manager"
          position="left"
        /> */}
        <div className="absolute inset-0 opacity-[0.02]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="SolvitX provides top notch digital solutions from stunning websites to powerful mobile apps to drive greater business growth & credibility."
            subtitle="Our Expertise"
            theme="dark"
            subtitlePosition="above"
          />

          <div className="mb-12 flex justify-center">
            <div className="inline-flex p-1 bg-gray-100 rounded-full shadow-md">
              {["web"].map((tabName) => (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeTab === tabName
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tabName === "web"
                    ? "Web Development"
                    : tabName === "digital"
                    ? "Digital Marketing"
                    : "App Development"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "web" &&
              [
                {
                  icon: (
                    <FaLaptopCode className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  title: "Responsive Web Design",
                  description:
                    "Create responsive and user friendly websites to build greater digital experience .",
                },
                {
                  icon: (
                    <FaServer className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  title: "E-commerce Powerhouses",
                  description:
                    "We help to turn your ideas into future proof eCommerce platforms that are designed to your goals.",
                },
                {
                  icon: (
                    <FaShoppingCart className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  title: "Dynamic CMS Development",
                  description:
                    "We let you enjoy a dynamic Content Management Systems where you can functionable website with no programming knowledge.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-blue-600 text-2xl md:text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}

            {activeTab === "digital" &&
              [
                {
                  icon: (
                    <FaSearch className="text-purple-600 text-2xl md:text-3xl" />
                  ),
                  title: "Targeted SEO Strategies",
                  description:
                    "Make your website visible with proven organic SEO strategies that not only boosts visibility but bring real conversions.",
                },
                {
                  icon: (
                    <FaChartLine className="text-purple-600 text-2xl md:text-3xl" />
                  ),
                  title: "Engaging Social Media Marketing",
                  description:
                    "Build a future proof digital brand & impactful campaigns through customer trust in this evolving digital world and impactful campaigns. ",
                },
                {
                  icon: (
                    <FaRegLightbulb className="text-purple-600 text-2xl md:text-3xl" />
                  ),
                  title: "PPC & Ad Campaigns",
                  description:
                    "We help you maximize your revenue by targeted Pay-Per-Click advertising and interactive marketing campaigns that bring real results.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-purple-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-purple-600 text-2xl md:text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}

            {activeTab === "app" &&
              [
                {
                  icon: (
                    <FaMobileAlt className="text-pink-600 text-2xl md:text-3xl" />
                  ),
                  title: "Native iOS Development",
                  description:
                    "Explore tailored iOS solutions leveraging Swift and Objective-C frameworks that aligns well with your goals.",
                },
                {
                  icon: (
                    <FaMobileAlt className="text-pink-600 text-2xl md:text-3xl" />
                  ),
                  title: "Robust Android Development",
                  description:
                    "Explore visually appealing custom Android solutions built on robust frameworks like Kotlin and Java.",
                },
                {
                  icon: (
                    <FaSyncAlt className="text-pink-600 text-2xl md:text-3xl" />
                  ),
                  title: "Cross-Platform Solutions",
                  description:
                    "We provide dynamic future proof interfaces, strong encryption and cross platform solutions that provide seamless & reliable experiences.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-pink-600 transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "text-pink-600 text-2xl md:text-3xl group-hover:text-white transition-all duration-300",
                    })}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - White */}
      <section className="py-4 md:py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Akash Chauhan",
                company: "CEO",
                testimonial: `SolvitX has helped me grow my business from scratch. With their
              pro marketing solutions I have successfully managed to double my
              conversation rates.`,
                avatarInitial: "A",
                color: "bg-blue-500",
              },
              {
                name: "Elina Sinha",
                company: "Founder",
                testimonial:
                  "Our fashion brand struggled to stand in the digital space for 2 years. We tried many strategies and tactics, but nothing worked for us. It is all thanks to SolvitX that we have managed to improve our Social Media campaigns that have increased our organic traffic by more than 150%.",
                // "We run a non profit organisation. Our dynamic Android Application developed by SolvitX has helped us create a positive impact towards our vision. It is all because of their commitment and all time expert support that our application is well appreciated and used by thousands of users.",
                avatarInitial: "M",
                color: "bg-purple-500",
              },
              {
                name: "Melanie Diers",
                company: "Director,",
                testimonial:
                  "We run a non profit organisation. Our dynamic Android Application developed by SolvitX has helped us create a positive impact towards our vision. It is all because of their commitment and all time expert support that our application is well appreciated and used by thousands of users.",
                avatarInitial: "S",
                color: "bg-pink-500",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                <FaQuoteLeft className="text-3xl text-blue-300 absolute top-6 left-6 opacity-50" />
                <p className="text-gray-600 mb-6 italic text-sm md:text-base lg:text-lg leading-relaxed pt-8">
                  "{client.testimonial}"
                </p>
                <div className="flex items-center">
                  <div
                    className={`w-14 h-14 ${client.color} rounded-full mr-4 flex items-center justify-center text-white text-xl font-bold shadow-md`}
                  >
                    {client.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base md:text-lg">
                      {client.name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {client.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Black */}
      <section className="py-4 md:py-4 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Our Commitment
            </span>
            <h4 className="text-2xl md:text-3xl font-bold mb-6">
              People don't buy what you do; they buy why you do it. And what you
              do simply proves what you believe.” — <u>Simon Sinek</u>
            </h4>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              And at SolvitX, we focus on your WHY, collaborate with you on your
              HOW, and help you successfully achieve your WHAT.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "Seasoned Experts",
                description:
                  "Our team comprises industry veterans skilled in delivering impactful digital solutions.",
                icon: <FaUsers className="text-blue-400" />,
              },
              {
                title: "Proven Results",
                description:
                  "A strong portfolio showcasing successful projects and tangible ROI for our clients.",
                icon: <FaAward className="text-blue-400" />,
              },
              {
                title: "Agile & Adaptive",
                description:
                  "Flexible methodologies to adapt to your evolving needs and market dynamics.",
                icon: <FaSyncAlt className="text-blue-400" />,
              },
              {
                title: "Client-Centric Approach",
                description:
                  "Your goals are our priority. We collaborate closely to ensure solutions align perfectly.",
                icon: <FaRegLightbulb className="text-blue-400" />,
              },
              {
                title: "Future-Ready Tech",
                description:
                  "Leveraging the latest tools and frameworks for scalable and sustainable solutions.",
                icon: <FaRocket className="text-blue-400" />,
              },
              {
                title: "Dedicated Support",
                description:
                  "Ongoing assistance and maintenance to ensure your digital assets perform optimally.",
                icon: <FaShieldAlt className="text-blue-400" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 md:p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced visual hierarchy */}
      <section className="py-4 md:py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
              Got Questions?
            </span>
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Find quick answers to common queries about our services,
              processes, and how we can help your business.
            </p> */}
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle=""
              description="Find quick answers to common queries about our services, processes, and how we can help your business."
              theme="dark"
              subtitlePosition="above"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-5 md:p-6 text-left hover:bg-gray-100 transition-all"
                >
                  <span className="font-semibold text-base md:text-lg text-gray-800">
                    {faq.question}
                  </span>
                  <div>
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-5 md:px-6 pb-5">
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Slider Section - White */}
      <section id="clients" className="py-4 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-700">
            Trusted By Visionary Brands & Ambitious Startups
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="client-logos"
          >
            {clients.map((client, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <div className="h-24 w-40 flex items-center justify-center p-2">
                  <img
                    width={150}
                    height={60}
                    className="max-h-22 w-auto object-contain hover:opacity-100 transition-opacity duration-300 "
                    src={client.logo}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process Section - Black */}
      <section id="process" className="py-4 md:py-4 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2 block">
              Our Methodology
            </span>
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Blueprint for Your Success
            </h2>
            <p className="text-gray-300 text-lg">
              We follow a refined, systematic approach to ensure every project
              is a masterpiece of strategy and execution.
            </p> */}
            <SectionHeading
              title="Our Blueprint for Your Success"
              subtitle=""
              description="We follow a refined, systematic approach to ensure every project is a masterpiece of strategy and execution."
              theme="light"
              subtitlePosition="above"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your goals, audience, and market to craft a winning strategy.",
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description:
                  "Visualizing solutions with intuitive UI/UX design and interactive prototypes.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Agile development with rigorous testing for robust, high-quality deliverables.",
              },
              {
                step: "04",
                title: "Launch & Growth",
                description:
                  "Seamless deployment followed by ongoing support and optimization for sustained growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-gray-900 rounded-2xl hover:shadow-blue-500/30 shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 absolute -top-5 -left-3 opacity-30 group-hover:opacity-70 transition-opacity">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-white relative z-10">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 relative z-10 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact-form" className="bg-black py-4 px-4">
        <div className="container mx-auto">
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
                      required
                      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                    />
                  </div>
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
            {/* About SolvitX */}

            {/* Contact Info */}
            <div className="mb-6 md:mb-10">
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Location */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 md:p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
                        Our Office
                      </h4>
                      <p className="text-base md:text-xl text-white font-bold mb-1 break-words">
                        Jaipur, Rajasthan 302003
                      </p>
                      <p className="text-gray-300 text-xs md:text-sm">
                        Visit us at our creative workspace where innovation
                        meets execution
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 md:p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                      <FaEnvelope className="text-white text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
                        Email Us
                      </h4>
                      <a
                        href="mailto:solvitxsolutions@gmail.com"
                        className="text-base md:text-xl text-white font-bold hover:text-purple-400 transition-colors duration-300 block mb-1 break-all"
                      >
                        solvitxsolutions@gmail.com
                      </a>
                      <p className="text-gray-300 text-xs md:text-sm">
                        We typically respond within 2-4 hours during business
                        days
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4 md:p-6 rounded-xl border border-gray-600 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                      <FaPhone className="text-white text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-base md:text-lg mb-1 md:mb-2">
                        Call Us
                      </h4>
                      <a
                        href="tel:+917232899120"
                        className="text-base md:text-xl text-white font-bold hover:text-purple-400 transition-colors duration-300 block mb-1 break-words"
                      >
                        +91 7232899120
                      </a>
                      <p className="text-gray-300 text-xs md:text-sm">
                        Available Mon-Fri, 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time Info */}
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 md:p-6 rounded-xl border border-blue-500/30">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                    <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                      <FaRegLightbulb className="text-white text-base md:text-lg" />
                    </div>
                    <h4 className="text-white font-semibold text-base md:text-lg">
                      Quick Response Guarantee
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">
                        Email replies within 2-4 hours
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">
                        Free consultation calls
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">
                        Project quotes within 24 hours
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">
                        24/7 support for live projects
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                {/* <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
                  <h4 className="text-white font-semibold text-lg mb-4">
                    Follow Our Journey
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaLinkedin className="text-white text-xl" />
                    </a>
                    <a
                      href="mailto:solvitxsolutions@gmail.com"
                      className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaEnvelope className="text-white text-xl" />
                    </a>
                    <a
                      href="tel:+917232899120"
                      className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-300 transform hover:scale-110"
                    >
                      <FaPhone className="text-white text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    Stay updated with our latest projects and industry insights
                  </p>
                </div> */}
              </div>
            </div>

            {/* Social Media Links */}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <LandingPageFooter />
    </div>
  );
};

export default LandingPage;
