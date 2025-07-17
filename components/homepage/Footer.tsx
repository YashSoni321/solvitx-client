import React, { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaWhatsapp,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import LogoImage from "../../public/images/solvitx.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  const footerLinks = [
    {
      title: "Services",
      links: [
        { href: "/services", label: "Services" },
        { href: "/web-development", label: "Web Development" },
        { href: "/mobile-app-development", label: "Mobile Applications" },
        { href: "/ui-ux-design", label: "UI/UX Design" },
        { href: "/digital-marketing", label: "Digital Marketing" },
        { href: "/seo-services", label: "SEO Optimization" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
        // { href: "/faq", label: "FAQ" },
      ],
    },
    // {
    //   title: "Legal",
    //   links: [
    //     { href: "/privacypolicy", label: "Privacy Policy" },
    //     { href: "/termsofservice", label: "Terms of Service" },
    //   ],
    // },
  ];

  const socialMediaLinks = [
    {
      href: "https://linkedin.com/company/SolvitX",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "https://instagram.com/SolvitX",
      icon: FaInstagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      href: "https://github.com/SolvitX",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-100",
    },
    {
      href: "https://behance.net/SolvitX",
      icon: FaBehance,
      label: "Behance",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-[100] flex flex-col gap-3">
        <motion.a
          href="https://wa.me/+917232899120"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-3 md:p-4 rounded-full shadow-xl hover:bg-green-600 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </motion.a>
        <motion.a
          href="tel:+917232899120"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-3 md:p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all"
          aria-label="Call Us"
        >
          <FaPhone size={20} />
        </motion.a>
      </div>
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section: Logo, brief description, and main CTA */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 md:mb-12 pb-10 border-b border-gray-700/50">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-3">
              <Image
                src={LogoImage}
                alt="SolvitX"
                height={40}
                width={130}
                className="invert brightness-0 filter"
                priority
              />
            </Link>
            <p className="text-xs text-gray-400 max-w-xs text-center md:text-left">
              Crafting digital excellence and innovative solutions for
              sustainable business growth.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4 sm:gap-6">
            <p className="text-lg font-semibold text-white text-center sm:text-left">
              Ready to elevate your digital presence?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg group text-base whitespace-nowrap"
            >
              Let's Talk
              <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-10 md:mb-12 pb-10 border-b border-gray-700/50">
          {/* Logo + tagline */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block mb-3">
              <Image
                src={LogoImage}
                alt="SolvitX"
                height={40}
                width={130}
                className="invert brightness-0 filter"
                priority
              />
            </Link>
            <p className="text-xs text-gray-400 max-w-xs text-center md:text-left">
              Crafting digital excellence and innovative solutions for
              sustainable business growth.
            </p>
          </div>

          {/* Let's Talk */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4 sm:gap-6">
            <p className="text-lg font-semibold text-white text-center sm:text-left">
              Ready to elevate your digital presence?
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg group text-base whitespace-nowrap"
            >
              Let's Talk
              <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-60 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowModal(false)}
              />

              {/* Modal content */}
              <motion.div
  className="fixed z-[9999] inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  <motion.div
    className="relative w-full max-w-xl bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-purple-100"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {/* Header */}
    <div className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 p-6 text-white">
      <h2 className="text-3xl font-bold flex items-center gap-3">
        ✨ Let’s Talk!
      </h2>
      <p className="text-sm mt-2 opacity-90">
        Turning bold ideas into beautiful realities.
      </p>
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition"
      >
        <FaTimes className="h-5 w-5" />
      </button>
    </div>

    {/* Body */}
    <div className="p-6">
      <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
        We’re more than developers — we’re digital partners helping you unlock
        the next level of your business. Let’s create something extraordinary.
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-purple-600 text-lg">📧</span>
          <a
            href="mailto:solvitxsolutions@gmail.com"
            className="text-purple-700 font-semibold hover:underline"
          >
         solvitxsolutions@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-600 text-lg">📞</span>
          <a
            href="tel:+917232899120"
            className="text-purple-700 font-semibold hover:underline"
          >
          +91 7232899120
          </a>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full shadow-md transition duration-300"
        >
          Let’s Build Together <FaArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Optional Social Icons */}
    {/* <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex justify-center gap-4 text-gray-500 text-lg">
      <a href="https://linkedin.com" target="_blank" className="hover:text-purple-600 transition">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank" className="hover:text-purple-600 transition">
        <FaTwitter />
      </a>
      <a href="mailto:hello@solvitx.com" className="hover:text-purple-600 transition">
        <FaEnvelope />
      </a>
    </div> */}
  </motion.div>
</motion.div>

            </>
          )}
        </AnimatePresence>

        {/* Main footer content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 text-sm mb-10 md:mb-12">
          {/* Column 1: Contact Info - Spans full width on mobile, 1/3 on lg */}
          <div className="space-y-3 lg:col-span-1">
            <h3 className="text-base font-semibold text-white mb-3">
              Get in Touch
            </h3>
            <div className="flex items-start space-x-2.5">
              <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0 h-4 w-4" />
              <span className="text-gray-400 leading-relaxed">
                Jaipur, Rajasthan 302003
              </span>
            </div>
            <div className="flex items-center space-x-2.5">
              <FaEnvelope className="text-purple-400 flex-shrink-0 h-4 w-4" />
              <a
                href="mailto:solvitxsolutions@gmail.com"
                className="hover:text-purple-300 transition-colors"
              >
                solvitxsolutions@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2.5">
              <FaPhone className="text-purple-400 flex-shrink-0 h-4 w-4" />
              <a
                href="tel:+917232899120"
                className="hover:text-purple-300 transition-colors"
              >
                +91 7232899120
              </a>
            </div>
            {/* <div className="pt-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialMediaLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`text-gray-400 ${social.color} transition-colors`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Link Sections Wrapper - Spans full width on mobile, 2/3 on lg. Internally uses columns. */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-1">
                <h3 className="text-base font-semibold text-white mb-3">
                  {section.title}
                </h3>
                <nav className="flex flex-col space-y-1.5">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="hover:text-purple-300 transition-colors flex items-center group text-gray-400 hover:text-purple-300"
                    >
                      <FaArrowRight className="h-2.5 w-2.5 mr-2 text-purple-500/70 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Powered By */}
        {/* <div className="pt-8 border-t border-gray-700/50 text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} SolvitX. All Rights Reserved.
            <span className="mx-1">|</span>
            Website by{" "}
            <a
              href="https://techieyash.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 font-medium"
            >
              TechieYash
            </a>
            .
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
