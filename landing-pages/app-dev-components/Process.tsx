import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, ShoppingCart, Palette, Search } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Discovery & Strategy",
      description: [
        "Revenue-focused app strategy in 24 hours",
        "Competitor analysis and market positioning",
        "Fixed-price quote with guaranteed timeline",
      ],
      gradient: "from-blue-500 to-cyan-500",
      duration: "Days 1-3",
      deliverable: "Strategy Document + Quote",
    },
    {
      icon: Smartphone,
      title: "Design & Prototyping",
      description: [
        "User-focused wireframes and prototypes",
        "Conversion-optimized UI/UX design",
        "Interactive prototype for user testing",
      ],
      gradient: "from-purple-500 to-pink-500",
      duration: "Days 4-10",
      deliverable: "Interactive Prototype",
    },
    {
      icon: ShoppingCart,
      title: "Development Sprint",
      description: [
        "Agile development with weekly updates",
        "Clean, scalable code with documentation",
        "Real-time progress tracking dashboard",
      ],
      gradient: "from-green-500 to-emerald-500",
      duration: "Days 11-25",
      deliverable: "Functional App Beta",
    },
    {
      icon: Palette,
      title: "Testing & QA",
      description: [
        "Automated testing across 50+ devices",
        "Performance optimization for speed",
        "Security audit and penetration testing",
      ],
      gradient: "from-orange-500 to-red-500",
      duration: "Days 26-28",
      deliverable: "Bug-Free App",
    },
    {
      icon: Search,
      title: "Launch & Support",
      description: [
        "App Store submission and approval",
        "Launch marketing strategy included",
        "6 months free support and updates",
      ],
      gradient: "from-indigo-500 to-purple-500",
      duration: "Days 29-30",
      deliverable: "Live App + Support",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⏱️ 30-Day Guaranteed Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Idea to{" "}
            <span className="text-green-600">Revenue-Generating App</span> in 60
            days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="font-semibold text-gray-800">
              Proven 5-step process
            </span>{" "}
            that has delivered 500+ successful apps. Track progress daily, get
            weekly updates, launch on time - guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Step Number */}
                <span className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold shadow-lg">
                  {index + 1}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                    {service.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">
                    {service.duration}
                  </span>
                </div>

                <ul className="text-gray-600 leading-relaxed space-y-2 mb-4">
                  {service.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start group-hover:text-gray-700"
                    >
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-xs font-semibold text-green-800 mb-1">
                    🚀 Deliverable:
                  </div>
                  <div className="text-sm text-green-700 font-medium">
                    {service.deliverable}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer flex items-center gap-2"
                >
                  Start This Step
                  <FaArrowRight className="text-sm" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default Services;
