import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, ShoppingCart, Palette, Search } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Requirement Analysis",
      description: [
        "Understand business objectives and target audience",
        "Define platform, resources, and technology stack",
        "Estimate project scope, budget, and timeline",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Wireframing",
      description: [
        "Create blueprints for structure and layout",
        "Map out user flows and navigation paths",
        "Focus on functionality before final design",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "Design & Development",
      description: [
        "Craft modern, intuitive UI/UX designs",
        "Write clean, scalable, and secure code",
        "Ensure responsive design across devices",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Testing",
      description: [
        "Conduct performance and usability testing",
        "Identify and resolve bugs or errors",
        "Implement strong security measures",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Search,
      title: "Launch",
      description: [
        "Deploy the application to the live environment",
        "Provide documentation and knowledge transfer",
        "Offer continuous support and maintenance",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Our{" "}
            <span className="text-blue-600">App Development Process</span>{" "}
            Works?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured process from idea to launch to deliver
            scalable and impactful solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
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
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {service.title}
                </h3>
                <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                  {service.description.map((point, i) => (
                    <li key={i} className="group-hover:text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6">
                  <span className="text-blue-600 font-medium group-hover:text-blue-700 cursor-pointer">
                    Learn More →
                  </span>
                </div>
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
