import React from "react";
import { Check, Star, Zap } from "lucide-react";

const Pricing: React.FC = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,999",
      period: "Starting from",
      description:
        "Perfect for small businesses and startups looking to establish their online presence",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Mobile Optimization",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Months Support",
        "Social Media Integration",
        "Google Analytics Setup",
      ],
      buttonText: "Get Started",
      popular: false,
      icon: Star,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "Starting from",
      description:
        "Ideal for growing businesses that need advanced features and functionality",
      features: [
        "Everything in Starter",
        "Up to 15 Pages",
        "Custom CMS Integration",
        "Advanced SEO Optimization",
        "E-commerce Functionality",
        "6 Months Support",
        "Payment Gateway Integration",
        "Performance Optimization",
        "Advanced Analytics",
        "Live Chat Integration",
      ],
      buttonText: "Most Popular",
      popular: true,
      icon: Zap,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote based",
      description:
        "Comprehensive solutions for large businesses with complex requirements",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Web Application",
        "Mobile App Development",
        "Advanced Integrations",
        "12 Months Support",
        "Dedicated Project Manager",
        "Priority Support",
        "Custom Features",
        "Scalable Architecture",
        "Security Audit",
        "Performance Monitoring",
      ],
      buttonText: "Contact Sales",
      popular: false,
      icon: Star,
      gradient: "from-green-500 to-green-600",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-blue-600">Perfect Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Every package includes our
            commitment to excellence and ongoing support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  pkg.popular
                    ? "ring-2 ring-purple-500 transform scale-105"
                    : "hover:-translate-y-2"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular Choice
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? "pt-16" : ""}`}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-full mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">
                      {pkg.price}
                    </div>
                    <div className="text-gray-600">{pkg.period}</div>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {pkg.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements
              and create a tailored solution that fits your needs and budget
              perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Request Custom Quote
              </button>
              <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-900">3+ Years</div>
              <div className="text-gray-600 text-sm">
                Proven industry experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                MERN Experts
              </div>
              <div className="text-gray-600 text-sm">
                Full-stack & mobile solutions
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                Global Clients
              </div>
              <div className="text-gray-600 text-sm">
                Trusted across industries
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                24/7 Support
              </div>
              <div className="text-gray-600 text-sm">
                Always here to help you
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
