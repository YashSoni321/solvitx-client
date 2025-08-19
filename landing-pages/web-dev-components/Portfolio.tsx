import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
      results: "300% increase in online sales, 45% faster page load times",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "Cross-platform mobile app for healthcare providers with appointment booking and patient management.",
      results: "50,000+ downloads, 4.8 App Store rating",
      image:
        "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description:
        "Comprehensive analytics dashboard for SaaS companies with real-time data visualization.",
      results:
        "90% reduction in data processing time, improved user engagement by 60%",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "PostgreSQL", "Chart.js", "AWS"],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Restaurant Booking System",
      category: "Full Stack",
      description:
        "Complete restaurant management system with online booking, menu management, and POS integration.",
      results: "200% increase in online reservations, streamlined operations",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express", "MySQL", "Socket.io"],
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital
            presence and achieve remarkable results
          </p>
        </div>

        {/* Projects Grid */}
        <div className="overflow-x-auto py-8">
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full shadow">
                      {project.category}
                    </span>
                  </div>
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

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Portfolio
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
