"use client";
import React from "react";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaUsers,
  FaAward,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";

const About = () => {
  const stats = [
    { icon: FaUsers, number: "200+", label: "Happy Clients" },
    { icon: FaAward, number: "500+", label: "Apps Delivered" },
    { icon: FaClock, number: "5+", label: "Years Experience" },
    { icon: FaGlobe, number: "50+", label: "Countries Served" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="text-2xl text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About SolvitX
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Partner in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Mobile Innovation
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a passionate team of developers, designers, and strategists
              dedicated to building exceptional mobile experiences that drive
              business growth and user engagement.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From startups to enterprise companies, we've helped businesses
              across industries transform their ideas into successful mobile
              applications that users love and businesses trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <FaUsers className="text-4xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Passionate developers & designers
                </p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <FaAward className="text-gray-900 text-xl" />
            </div>
          </div>
        </div>

        {/* Process Steps */}
      </div>
    </section>
  );
};

export default About;
