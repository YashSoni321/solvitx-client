"use client";
import React from "react";
import { FaUsers, FaLightbulb, FaTrophy, FaHandshake, FaClock, FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Our team of 50+ experienced developers, designers, and strategists are dedicated to your success with proven expertise across industries.",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      stats: "50+ Experts"
    },
    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies and creative problem-solving to build mobile applications that stand out in the market.",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      stats: "Latest Tech"
    },
    {
      icon: FaTrophy,
      title: "Proven Track Record",
      description: "With 500+ successful app launches and 98% client satisfaction rate, we have a history of delivering exceptional results.",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      stats: "500+ Apps"
    },
    {
      icon: FaHandshake,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team, maintaining transparent communication and involving you in every decision.",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      stats: "100% Transparency"
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines with 95% of our projects delivered on or ahead of schedule without compromising quality.",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      stats: "95% On-Time"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Quality",
      description: "Enterprise-grade security measures and rigorous quality assurance ensure your app is secure, reliable, and bug-free.",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      stats: "Zero Breaches"
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance services ensure your app runs smoothly and any issues are resolved quickly.",
      gradient: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      stats: "24/7 Available"
    },
    {
      icon: FaChartLine,
      title: "Growth-Focused",
      description: "We build scalable solutions designed to grow with your business, from startup to enterprise-level applications.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      stats: "Scalable Solutions"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose SolvitX
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Success is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Our Priority
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a development agency. We're your strategic partner in building successful mobile products that drive business growth and user engagement.
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
                <div className={`p-6 ${reason.bgColor} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8"></div>
                  <div className={`bg-gradient-to-br ${reason.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-xl text-white" />
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    {reason.stats}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{reason.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join hundreds of successful companies who have chosen us to bring their mobile app visions to life.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Apps Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
