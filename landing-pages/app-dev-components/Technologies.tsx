"use client";
import React from "react";
import { FaApple, FaAndroid, FaReact, FaNodeJs, FaAws, FaDatabase, FaShieldAlt, FaRocket } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiFirebase, SiMongodb, SiPostgresql, SiRedis, SiDocker } from "react-icons/si";

const Technologies = () => {
  const techCategories = [
    {
      title: "Mobile Platforms",
      description: "Native and cross-platform development",
      technologies: [
        { name: "iOS", icon: FaApple, color: "text-gray-800", bgColor: "bg-gray-100" },
        { name: "Android", icon: FaAndroid, color: "text-green-600", bgColor: "bg-green-100" },
        { name: "React Native", icon: FaReact, color: "text-blue-500", bgColor: "bg-blue-100" },
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400", bgColor: "bg-blue-50" },
      ]
    },
    {
      title: "Programming Languages",
      description: "Modern languages for robust development",
      technologies: [
        { name: "Swift", icon: SiSwift, color: "text-orange-500", bgColor: "bg-orange-100" },
        { name: "Kotlin", icon: SiKotlin, color: "text-purple-600", bgColor: "bg-purple-100" },
        { name: "JavaScript", icon: FaReact, color: "text-yellow-500", bgColor: "bg-yellow-100" },
        { name: "TypeScript", icon: FaReact, color: "text-blue-600", bgColor: "bg-blue-100" },
      ]
    },
    {
      title: "Backend & Cloud",
      description: "Scalable infrastructure and services",
      technologies: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600", bgColor: "bg-green-100" },
        { name: "AWS", icon: FaAws, color: "text-orange-500", bgColor: "bg-orange-100" },
        { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", bgColor: "bg-yellow-100" },
        { name: "Docker", icon: SiDocker, color: "text-blue-500", bgColor: "bg-blue-100" },
      ]
    },
    {
      title: "Databases",
      description: "Reliable data storage solutions",
      technologies: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", bgColor: "bg-green-100" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600", bgColor: "bg-blue-100" },
        { name: "Redis", icon: SiRedis, color: "text-red-500", bgColor: "bg-red-100" },
        { name: "SQLite", icon: FaDatabase, color: "text-gray-600", bgColor: "bg-gray-100" },
      ]
    }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Security First",
      description: "Enterprise-grade security with encryption and secure authentication",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: FaRocket,
      title: "High Performance",
      description: "Optimized code and architecture for lightning-fast app performance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaDatabase,
      title: "Scalable Architecture",
      description: "Built to handle growth from thousands to millions of users",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Technologies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cutting-Edge
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Technology Stack
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof mobile applications that deliver exceptional performance.
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{category.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={techIndex}
                      className="bg-gray-700 rounded-xl p-4 hover:bg-gray-600 transition-colors duration-300 text-center"
                    >
                      <div className={`w-12 h-12 ${tech.bgColor} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <IconComponent className={`text-xl ${tech.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-200">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;2s</div>
              <div className="text-blue-100">Average Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">256-bit</div>
              <div className="text-blue-100">SSL Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Build with the Best?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology expertise can bring your mobile app vision to life.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <FaRocket className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technologies;