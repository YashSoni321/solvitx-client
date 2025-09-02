"use client";
import React from "react";
import {
  FaApple,
  FaAndroid,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaApple,
      title: "iOS App Development",
      description:
        "Premium iOS apps that rank #1 in App Store. Average client sees 300% ROI within 6 months.",
      features: [
        "30-day delivery guarantee",
        "App Store approval guaranteed",
        "$0 upfront payment",
        "Lifetime support included",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      price: "Starting $15,000",
    },
    {
      icon: FaAndroid,
      title: "Android App Development",
      description:
        "High-converting Android apps with 50K+ downloads guaranteed. Built for maximum user engagement.",
      features: [
        "Google Play optimization",
        "Material Design 3.0",
        "Performance monitoring",
        "Revenue analytics included",
      ],
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      price: "Starting $12,000",
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Apps",
      description:
        "Save 60% on development costs. One app, two platforms, maximum reach and revenue potential.",
      features: [
        "60% cost savings",
        "Faster time-to-market",
        "Single codebase",
        "Native performance",
      ],
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      price: "Starting $20,000",
    },
    {
      icon: FaCloud,
      title: "Backend & API Development",
      description:
        "Enterprise-grade backend that scales to millions of users. 99.9% uptime guaranteed.",
      features: [
        "Auto-scaling infrastructure",
        "99.9% uptime SLA",
        "Advanced security",
        "Real-time analytics",
      ],
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      price: "Starting $8,000",
    },
    {
      icon: FaShieldAlt,
      title: "QA & Testing",
      description:
        "Zero-bug guarantee. Comprehensive testing across 50+ devices ensures flawless user experience.",
      features: [
        "Zero-bug guarantee",
        "50+ device testing",
        "Performance optimization",
        "Security penetration testing",
      ],
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      price: "Starting $3,000",
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description:
        "24/7 priority support with 2-hour response time. Keep your app running perfectly, always.",
      features: [
        "2-hour response time",
        "Priority bug fixes",
        "Monthly performance reports",
        "Free minor updates",
      ],
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      price: "$500/month",
    },
  ];

  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Revenue-Generating Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Apps That Generate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Real Revenue
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-800">Fixed pricing, guaranteed delivery, proven results.</span> 
            Choose from our revenue-focused services designed to maximize your ROI and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`p-8 ${service.bgColor} relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
                  <div
                    className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <FaCheckCircle
                          className={`text-sm ${service.textColor}`}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-800">{service.price}</span>
                    <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                      Most Popular
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r ${service.gradient} text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300 w-full`}
                  >
                    Get Free Quote
                    <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
