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
        "Native iPhone and iPad apps built with Swift and SwiftUI for optimal performance and user experience.",
      features: [
        "Swift & SwiftUI",
        "App Store Optimization",
        "iOS 15+ Support",
        "Apple Guidelines Compliance",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: FaAndroid,
      title: "Android App Development",
      description:
        "High-performance Android applications using Kotlin and modern Android development practices.",
      features: [
        "Kotlin & Java",
        "Material Design",
        "Google Play Store",
        "Android 8+ Support",
      ],
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: FaMobile,
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere. Cost-effective solutions using React Native and Flutter frameworks.",
      features: [
        "React Native",
        "Flutter",
        "Code Reusability",
        "Faster Time-to-Market",
      ],
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: FaCloud,
      title: "Backend & API Development",
      description:
        "Robust, scalable backend infrastructure with secure APIs to power your mobile applications.",
      features: [
        "RESTful APIs",
        "Cloud Integration",
        "Database Design",
        "Real-time Features",
      ],
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      icon: FaShieldAlt,
      title: "QA & Testing",
      description:
        "Comprehensive testing strategies to ensure your app is bug-free and performs flawlessly across devices.",
      features: [
        "Automated Testing",
        "Device Testing",
        "Performance Testing",
        "Security Audits",
      ],
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      icon: FaTools,
      title: "Maintenance & Support",
      description:
        "Ongoing support and maintenance to keep your app updated, secure, and running smoothly.",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Bug Fixes",
        "Performance Optimization",
      ],
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
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
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Complete Mobile App
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Development Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch and beyond, we offer a comprehensive suite of
            services to bring your mobile app vision to life with cutting-edge
            technology and industry best practices.
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

                <div className="p-6 bg-white">
                  <button
                    className={`flex items-center gap-2 ${service.textColor} font-semibold hover:gap-3 transition-all duration-300`}
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
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
