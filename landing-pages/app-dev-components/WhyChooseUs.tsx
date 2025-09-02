"use client";
import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaTrophy,
  FaHandshake,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaTrophy,
      title: "Guaranteed Results",
      description:
        "500+ successful apps with average 300% ROI. Transparent Process if we don't deliver on our promises.",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      stats: "300% Avg ROI",
      guarantee: "Transparent Process",
    },
    {
      icon: FaClock,
      title: "30-Day Delivery",
      description:
        "Apps delivered in 60 days or less, guaranteed. No delays, no excuses. Fast-track your success.",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      stats: "60 days Max",
      guarantee: "On-time guarantee",
    },
    {
      icon: FaShieldAlt,
      title: "Zero-Bug Promise",
      description:
        "Comprehensive testing ensures bug-free apps. If you find bugs, we fix them free for 6 months.",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      stats: "0 Bugs",
      guarantee: "6-month bug-free warranty",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description:
        "50+ certified developers with 5+ years experience. Your app is built by industry experts, not juniors.",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      stats: "50+ Experts",
      guarantee: "Senior developers only",
    },
    {
      icon: FaHeadset,
      title: "24/7 Priority Support",
      description:
        "2-hour response time guaranteed. Your success is our priority with round-the-clock dedicated support.",
      gradient: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      stats: "2hr Response",
      guarantee: "Priority support included",
    },
    {
      icon: FaChartLine,
      title: "Revenue-Focused",
      description:
        "Apps designed to generate revenue from day one. We focus on user engagement and conversion optimization.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      stats: "Day 1 Revenue",
      guarantee: "Revenue optimization included",
    },
    {
      icon: FaLightbulb,
      title: "Latest Technology",
      description:
        "Cutting-edge tech stack ensures your app is future-proof and performs better than competitors.",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      stats: "Future-Proof",
      guarantee: "Modern tech guaranteed",
    },
    {
      icon: FaHandshake,
      title: "Security First",
      description:
        "Start your project with zero upfront cost. Pay only when you're 100% satisfied with the results.",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      stats: "$0 Upfront",
      guarantee: "Pay after satisfaction",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🛡️ 8 Unbeatable Guarantees
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why 500+ Businesses
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Choose Us Over Others
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-800">
              Risk-free development with guaranteed results.
            </span>{" "}
            We're the only agency that offers Transparent Process, zero upfront
            payment, and 30-day delivery promise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`p-6 ${reason.bgColor} relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8"></div>
                  <div
                    className={`bg-gradient-to-br ${reason.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-xl text-white" />
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    {reason.stats}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm mb-3">
                    {reason.description}
                  </p>
                  <div className="bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-semibold">
                    ✓ {reason.guarantee}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join hundreds of successful companies who have chosen us to
                bring their mobile app visions to life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  $50M+
                </div>
                <div className="text-gray-300 text-sm">
                  Client Revenue Generated
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300 text-sm">Successful Apps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  300%
                </div>
                <div className="text-gray-300 text-sm">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  24h
                </div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Start Risk-Free Project
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
