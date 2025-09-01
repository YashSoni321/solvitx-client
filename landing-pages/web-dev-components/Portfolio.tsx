"use client";
import React, { useState } from "react";
import {
  FaApple,
  FaAndroid,
  FaExternalLinkAlt,
  FaUsers,
  FaStar,
  FaDownload,
} from "react-icons/fa";

const projects = [
  {
    title: "SocialConnect",
    description:
      "A revolutionary social networking platform that connects people through shared interests and location-based features.",
    image: "/images/portfolio/project1.jpg",
    tags: ["iOS", "Android", "Social", "React Native"],
    category: "Social",
    stats: { users: "50K+", rating: "4.8", downloads: "100K+" },
    features: [
      "Real-time Chat",
      "Location Sharing",
      "Interest Matching",
      "Video Calls",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "ShopEasy",
    description:
      "A comprehensive e-commerce mobile app with AI-powered recommendations and seamless checkout experience.",
    image: "/images/portfolio/project2.jpg",
    tags: ["iOS", "Android", "E-commerce", "Flutter"],
    category: "E-commerce",
    stats: { users: "25K+", rating: "4.9", downloads: "75K+" },
    features: [
      "AI Recommendations",
      "One-Click Checkout",
      "Wishlist",
      "Order Tracking",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "TaskMaster Pro",
    description:
      "An advanced productivity suite designed for remote teams with collaboration tools and project management features.",
    image: "/images/portfolio/project3.jpg",
    tags: ["iOS", "Android", "Productivity", "Swift"],
    category: "Productivity",
    stats: { users: "15K+", rating: "4.7", downloads: "30K+" },
    features: [
      "Team Collaboration",
      "Time Tracking",
      "File Sharing",
      "Analytics",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "HealthTracker",
    description:
      "A comprehensive health and fitness app with personalized workout plans and nutrition tracking.",
    image: "/images/portfolio/project4.jpg",
    tags: ["iOS", "Android", "Health", "Kotlin"],
    category: "Health",
    stats: { users: "40K+", rating: "4.6", downloads: "80K+" },
    features: [
      "Workout Plans",
      "Nutrition Tracking",
      "Progress Analytics",
      "Social Features",
    ],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "FinanceFlow",
    description:
      "A secure personal finance management app with budgeting tools and investment tracking capabilities.",
    image: "/images/portfolio/project5.jpg",
    tags: ["iOS", "Android", "Finance", "React Native"],
    category: "Finance",
    stats: { users: "20K+", rating: "4.8", downloads: "45K+" },
    features: [
      "Budget Planning",
      "Investment Tracking",
      "Bill Reminders",
      "Expense Analytics",
    ],
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "EduLearn",
    description:
      "An interactive learning platform with gamified courses and progress tracking for students of all ages.",
    image: "/images/portfolio/project6.jpg",
    tags: ["iOS", "Android", "Education", "Flutter"],
    category: "Education",
    stats: { users: "35K+", rating: "4.9", downloads: "60K+" },
    features: [
      "Interactive Courses",
      "Progress Tracking",
      "Gamification",
      "Offline Learning",
    ],
    gradient: "from-teal-500 to-cyan-500",
  },
];

const categories = [
  "All",
  "Social",
  "E-commerce",
  "Productivity",
  "Health",
  "Finance",
  "Education",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Success Stories &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform
            their ideas into successful mobile applications that users love and
            businesses trust.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image/Mockup */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-white/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <FaApple className="text-2xl text-white" />
                    </div>
                    <h4 className="text-white font-bold text-lg">
                      {project.title}
                    </h4>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                    <FaExternalLinkAlt className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                      <FaUsers className="text-sm" />
                      <span className="font-bold text-sm">
                        {project.stats.users}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">Users</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                      <FaStar className="text-sm" />
                      <span className="font-bold text-sm">
                        {project.stats.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">Rating</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                      <FaDownload className="text-sm" />
                      <span className="font-bold text-sm">
                        {project.stats.downloads}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">Downloads</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to see your app idea come to life?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
