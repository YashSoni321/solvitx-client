// PricingStacksINR.tsx
import React, { useState } from "react";
import { Check, Star, Database, Box, Code } from "lucide-react";

const PricingStacksINR: React.FC = () => {
  const [selectedAddon, setSelectedAddon] = useState(false);

  const packages = [
    {
      id: "wordpress",
      name: "WordPress",
      price: "₹20,000",
      period: "Starting from",
      hourly: "₹200 – ₹480/hr",
      popular: false,
      description:
        "Fast, SEO-friendly brochure sites, blogs, and small business sites. Ideal for quick launches and easy content management.",
      features: [
        "Custom theme (based on a modern starter)",
        "Up to 7 pages",
        "Responsive & accessibility checks",
        "Basic SEO setup (meta, sitemap)",
        "Contact form & Google Analytics",
        "3 months maintenance",
      ],
      accent: "from-indigo-500 to-indigo-600",
      Icon: Box,
      cta: "Get WordPress",
    },
    {
      id: "shopify",
      name: "Shopify",
      price: "₹32,000",
      period: "Starting from",
      hourly: "₹240 – ₹640/hr",
      popular: false,
      description:
        "End-to-end eCommerce stores with payment, product management, and conversion-focused UX for small-to-medium stores.",
      features: [
        "Custom store design",
        "Up to 50 product listings setup",
        "Payment gateway & shipping setup",
        "Basic conversions & analytics",
        "Product import (CSV)",
        "6 months ecommerce support",
      ],
      accent: "from-rose-500 to-rose-600",
      Icon: Star,
      cta: "Get Shopify",
    },
    {
      id: "laravel",
      name: "Laravel",
      price: "₹56,000",
      period: "Starting from",
      hourly: "₹280 – ₹960/hr",
      popular: true,
      description:
        "Robust custom web applications, admin panels, complex backends and integrations for businesses needing secure, scalable systems.",
      features: [
        "Custom REST APIs / integrations",
        "Role-based auth & RBAC",
        "Admin panel & dashboard",
        "Automated tests & CI guidance",
        "6-12 months maintenance options",
        "Performance & security hardening",
      ],
      accent: "from-emerald-500 to-emerald-600",
      Icon: Database,
      cta: "Request Laravel",
    },
    {
      id: "mern",
      name: "MERN / MEAN",
      price: "₹44,000",
      period: "Starting from",
      hourly: "₹240 – ₹880/hr",
      popular: false,
      description:
        "Modern single-page apps, realtime features, and full-stack JavaScript solutions — great for interactive products and SaaS MVPs.",
      features: [
        "SPA with React/Angular + Node APIs",
        "JWT auth & role management",
        "Realtime (Socket) or PWA options",
        "Deployment pipeline + Docker support",
        "Testing & code quality setup",
        "3-6 months maintenance options",
      ],
      accent: "from-violet-500 to-violet-600",
      Icon: Code,
      cta: "Get MERN/MEAN",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing-stacks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
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
                        <span>Add: Monthly maintenance</span>
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
            <div className="flex gap-3">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
              >
                Request Recommendation
              </button>
              <button
                onClick={() => window.open("#contact", "_self")}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition"
              >
                Schedule a Call
              </button>
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
      </div>
    </section>
  );
};

export default PricingStacksINR;
