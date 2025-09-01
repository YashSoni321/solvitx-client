"use client";
import React from "react";
import { FaApple, FaAndroid, FaRocket, FaPlay, FaStar } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <span className="text-sm opacity-90">
                Rated 4.9/5 by 200+ clients
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Build Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Mobile Apps
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto lg:mx-0">
              Transform your ideas into powerful mobile experiences. We create
              stunning iOS and Android apps that users love and businesses
              trust.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaApple className="text-xl" />
                <span className="font-medium">iOS Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaAndroid className="text-xl" />
                <span className="font-medium">Android Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <FaRocket className="text-xl" />
                <span className="font-medium">Cross-Platform</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                Start Your Project
              </a>
              {/* <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-full hover:bg-white/20 transition duration-300">
                <FaPlay className="text-sm" />
                Watch Demo
              </button> */}
            </div>
          </div>

          {/* Right Content - App Mockups */}
          <div className="relative">
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <FaRocket className="text-2xl text-white" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Your App
                    </h3>
                    <p className="text-white/80 text-sm">
                      Beautiful, Fast & Secure
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <FaStar className="text-gray-900 text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <FaApple className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-white transform skew-y-[-1deg]"></div>
    </section>
  );
};

export default Hero;
