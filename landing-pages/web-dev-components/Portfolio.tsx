import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Web Development",
      description:
        "A modern e-commerce platform with product catalog, cart, secure checkout, and easy admin management.",
      results: "Boosted customer engagement and increased online sales.",
      image: "/images/portfolioImages/Ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Hotel Website",
      category: "Web Design & Development",
      description:
        "Responsive hotel booking website with room listings, booking system, and customer reviews.",
      results: "Improved booking rates and enhanced user trust.",
      image: "/images/portfolioImages/HotelWebsite.jpg",
      technologies: ["Next.js", "TailwindCSS", "Firebase"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Real Estate Website",
      category: "Web Application",
      description:
        "Real estate portal with property listings, advanced search filters, and agent profiles.",
      results:
        "Helped agents generate more leads and simplified property discovery.",
      image: "/images/portfolioImages/realestatewebsite.jpg",
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "AWS"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "School Website",
      category: "Full Stack",
      description:
        "School management website with event calendar, admission forms, and student information system.",
      results: "Streamlined communication and improved parent engagement.",
      image: "/images/portfolioImages/SchoolWebsite.jpg",
      technologies: ["Vue.js", "Express", "MySQL"],
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our specialized web solutions help startups/businesses
            convert leads into loyal customers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Results */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-2 mb-3">
                  <div className="text-xs font-medium text-green-800">
                    Results:
                  </div>
                  <div className="text-xs text-green-700">
                    {project.results}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
