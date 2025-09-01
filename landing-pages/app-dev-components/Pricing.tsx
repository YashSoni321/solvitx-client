// PricingStacksINR.tsx
import React, { useState } from "react";
import { Check, Star, Database, Box, Code } from "lucide-react";
import Modal from "@/components/common/Modal";
import ContactUsForm from "@/components/common/ContactUsForm";

const PricingStacksINR: React.FC = () => {
  const [selectedAddon, setSelectedAddon] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: "startup",
      name: "Startup MVP",
      price: "₹40,000",
      period: "Starting from",
      hourly: "₹300 – ₹600/hr",
      popular: true,
      description:
        "Perfect for founders who want to launch quickly with a functional prototype that can attract users or investors.",
      features: [
        "Cross-platform app (React Native/Flutter)",
        "User authentication & profiles",
        "API integration & database setup",
        "Basic analytics & push notifications",
        "Deployment to Play Store & App Store",
        "3 months support & bug fixes",
      ],
      accent: "from-blue-500 to-cyan-500",
      Icon: Code,
      cta: "Launch My MVP",
    },
    {
      id: "business",
      name: "Business App",
      price: "₹75,000",
      period: "Starting from",
      hourly: "₹400 – ₹800/hr",
      popular: false,
      description:
        "For growing businesses that need a scalable, branded mobile app with advanced features and integrations.",
      features: [
        "Custom UI/UX design",
        "E-commerce or booking module",
        "Payment gateway integration",
        "Role-based access & security",
        "Cloud hosting & deployment pipeline",
        "6 months free maintenance",
      ],
      accent: "from-purple-500 to-pink-500",
      Icon: Star,
      cta: "Build My Business App",
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      price: "₹1,20,000",
      period: "Starting from",
      hourly: "₹600 – ₹1200/hr",
      popular: false,
      description:
        "Tailored enterprise-grade applications designed for performance, security, and large-scale deployments.",
      features: [
        "Custom microservices architecture",
        "SSO, multi-language & multi-region",
        "Realtime dashboards & reporting",
        "Advanced data security & compliance",
        "CI/CD automation & cloud scaling",
        "Dedicated account manager",
      ],
      accent: "from-emerald-500 to-green-600",
      Icon: Database,
      cta: "Get Enterprise App",
    },
  ];

  const scrollToContact = () => {
    setIsModalOpen(true);
    // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing-stacks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Build with the Stack that{" "}
            <span className="text-blue-600">fits your goals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clear pricing in INR, included features, optional maintenance
            bundles, or hourly rates for custom scopes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.Icon;
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 ${
                  pkg.popular
                    ? "scale-105 ring-2 ring-amber-400"
                    : "hover:-translate-y-2"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
                    Most Popular
                  </div>
                )}
                <div className="p-6 pt-10 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 bg-gradient-to-br ${pkg.accent} shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {pkg.name}
                  </h3>

                  <div className="mt-3">
                    <div className="text-3xl font-extrabold text-gray-900">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-gray-500">{pkg.period}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Hourly (custom):{" "}
                      <span className="font-medium text-gray-800">
                        {pkg.hourly}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-4 flex-0">
                    {pkg.description}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <button
                      onClick={scrollToContact}
                      className={`w-full py-3 rounded-full font-semibold transition ${
                        pkg.popular
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md hover:scale-[1.01]"
                          : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {pkg.cta}
                    </button>

                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                      <label className="inline-flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedAddon}
                          onChange={() => setSelectedAddon((s) => !s)}
                          className="form-checkbox h-4 w-4 text-blue-600 rounded"
                        />
                        <span>Add: Yearly maintenance</span>
                      </label>
                      <div className="font-medium text-gray-900">
                        {selectedAddon ? "₹16,000/mo" : "—"}
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-gray-500">
                      <strong>Note:</strong> Final price depends on scope,
                      integrations, and third-party subscriptions. Large
                      enterprise projects are quoted separately.
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA panel */}
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Not sure which stack?
              </h3>
              <p className="text-gray-600 max-w-xl">
                Share your requirements (scale, features, integrations), and
                we’ll recommend the perfect stack with a custom scope and
                estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
              >
                Request Recommendation
              </button>
              <a
                href="https://wa.me/+917232899120"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xl font-bold text-gray-900">10+ yrs</div>
              <div className="text-gray-500 text-sm">Industry experience</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Global</div>
              <div className="text-gray-500 text-sm">
                Clients across 5 countries
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">SLA</div>
              <div className="text-gray-500 text-sm">
                Maintenance & uptime SLAs
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Support</div>
              <div className="text-gray-500 text-sm">
                Priority options available
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactUsForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </section>
  );
};

export default PricingStacksINR;
