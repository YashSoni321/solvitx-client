import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce App",
      category: "Mobile Commerce",
      description:
        "Revenue-generating e-commerce app with AI recommendations and seamless checkout.",
      results: "$2.3M revenue in first year • 300% ROI • 50K+ downloads",
      image: "/images/portfolioImages/Ecommerce.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
      deliveryTime: "28 days",
      revenue: "$2.3M",
    },
    {
      title: "Hotel Booking App",
      category: "Hospitality",
      description:
        "Premium hotel booking app with real-time availability and instant confirmations.",
      results: "400% booking increase • 25K+ active users • 4.8★ rating",
      image: "/images/portfolioImages/HotelWebsite.jpg",
      technologies: ["Flutter", "Firebase", "Payment Gateway"],
      gradient: "from-green-500 to-emerald-600",
      deliveryTime: "35 days",
      revenue: "$1.8M",
    },
    {
      title: "Real Estate App",
      category: "PropTech",
      description:
        "Lead-generating real estate app with virtual tours and mortgage calculator.",
      results: "500% lead increase • 15K+ property listings • $5M deals closed",
      image: "/images/portfolioImages/realestatewebsite.jpg",
      technologies: ["React Native", "PostgreSQL", "Maps API", "AWS"],
      gradient: "from-orange-500 to-red-600",
      deliveryTime: "42 days",
      revenue: "$5M",
    },
    {
      title: "EdTech Learning App",
      category: "Education",
      description:
        "Interactive learning app with gamification and progress tracking for students.",
      results: "100K+ students enrolled • 95% completion rate • $800K revenue",
      image: "/images/portfolioImages/Schoolwebsite.jpg",
      technologies: ["React Native", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-600",
      deliveryTime: "60 days",
      revenue: "$800K",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💰 $10M+ Client Revenue Generated
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apps That Generate{" "}
            <span className="text-green-600">Real Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our mobile apps helped businesses generate millions in
            revenue and achieve 300%+ ROI
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow">
                    {project.revenue} Revenue
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow">
                    {project.deliveryTime}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded font-semibold">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-xs font-bold text-green-800 mb-1">
                    🚀 Proven Results:
                  </div>
                  <div className="text-sm text-green-700 font-semibold">
                    {project.results}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                >
                  Build Similar App
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        {/* <div className="text-center mt-12">
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          View Full Portfolio
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
