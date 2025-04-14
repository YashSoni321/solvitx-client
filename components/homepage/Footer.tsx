import React from "react";
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
} from "react-icons/fa";
import Image from "next/image";
import LogoImage from "../../public/images/solvitx.png";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Newsletter and CTA section */}
      <div className="container mx-auto p-8 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  transform
                </span>{" "}
                your digital presence?
              </h2>
              <p className="text-gray-300 mb-6">
                Let's collaborate and build something extraordinary. Fill out
                our brief and get started on your journey with Solvitx.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg group"
              >
                Get in touch
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with the latest in tech, design, and digital
                marketing.
              </p>
              <div className="flex">
                <input
                  className="w-full px-4 py-3 bg-gray-800/80 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-r-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
                  <FaArrowRight />
                </button>
              </div>
              <p className="mt-3 text-gray-500 text-xs">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <Image
                src={LogoImage}
                alt="Solvitx"
                height={100}
                width={100}
                className="invert"
              />
              <p className="text-gray-400">Where vision meets technology</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Hn. 359, Gopal Ji Ka Rasta, Tripolia Bazar,
                  <br />
                  Johari Bazar, Jaipur, Rajasthan 302003
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500 flex-shrink-0" />
                <a
                  href="mailto:contact@solvitx.com"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  contact@solvitx.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-purple-500 flex-shrink-0" />
                <a
                  href="tel:+12345678900"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  +91 9782025577
                </a>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaBehance className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-purple-500 rounded-full mr-3"></span>
              Services
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                Web Development
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Mobile Applications
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                UI/UX Design
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Digital Marketing
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                SEO Optimization
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Cloud Solutions
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-pink-500 rounded-full mr-3"></span>
              Company
            </h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link
                href="/"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Our Team */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-500 rounded-full mr-3"></span>
              Meet Our Team
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-500/30">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/y4k26WHpccbz-jDQha-cJAtS8QV_9_2bFDbmzIW8ips.jpg"
                    alt="Vatsal Mittal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Vatsal Mittal</h4>
                  <p className="text-gray-400 text-sm">Co-Founder & CTO</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-pink-500/30">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/y4k26WHpccbz-jDQha-cJAtS8QV_9_2bFDbmzIW8ips.jpg"
                    alt="Pratham Mittal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Pratham Mittal</h4>
                  <p className="text-gray-400 text-sm">Founder & CEO</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mt-2"
              >
                Meet the entire team
                <FaArrowRight className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Solvitx. All rights reserved. Powered by{" "}
              <a
                href="https://techieyash.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                TechieYash
              </a>
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
