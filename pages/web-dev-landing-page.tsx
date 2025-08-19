"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Rocket,
  Shield,
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const WebDevLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showFullAbout, setShowFullAbout] = useState(false);

  // Navbar items
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Projects", href: "#portfolio" },
    { label: "Blogs", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
    { label: "Technical Support", href: "#support" },
  ];

  // Services data
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Design & Development",
      description:
        "Persuasive web designs contribute to the quality conversion of leads into a potential pond of traffic, elevating the success of your business operations.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "E-Commerce Websites",
      description:
        "Create custom e-commerce websites with excellent APIs and design structures to boost your overall growth.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cost Effective Web Solution",
      description:
        "We provide custom web development services to suit your cost utilization needs to meet the goals you have set for your business.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "24*7 Free Support",
      description:
        "Our clients are our priority, and we are active across all communication channels to provide full customer support.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "100% Responsive Websites",
      description:
        "Website responsiveness is a very critical parameter for the success of your business venture. Get your device responsive website design.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Content Writing",
      description:
        "We provide content writing services to cater to all your content requirements under one roof.",
    },
  ];

  // Pricing plans
  const plans = [
    {
      name: "Standard Plan",
      subtitle: "Web Development Standard Package",
      originalPrice: "₹ 10,000",
      discountedPrice: "₹ 7,999",
      gst: "₹ 1440",
      features: [
        "5 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Cloud Hosting",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "5 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "1 Year Free Technical Support For Website",
        "Annual Renewal For Hosting Rs.4000",
      ],
    },
    {
      name: "Premium Plan",
      subtitle: "Web Development Premium Package",
      originalPrice: "₹ 20,000",
      discountedPrice: "₹ 13,999",
      gst: "₹ 2520",
      featured: true,
      features: [
        "12 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Cloud Hosting",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year Free Technical Support For Website",
        "Annual Renewal For Hosting Rs.4000",
      ],
    },
    {
      name: "Custom Plan",
      subtitle: "Web Development Pro Package",
      originalPrice: "₹ ???",
      discountedPrice: "₹ ????",
      gst: "₹ ????",
      features: [
        "Pages: According to Requirement",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Cloud Hosting",
        "Dynamic Website",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email Id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year 24/7 Free Support For Website",
        "Annual Renewal Rs.4000",
      ],
    },
  ];

  // Why choose us features
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description:
        "Highly experienced coders with great expertise in web design from scratch to end",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Delivery",
      description:
        "We focus on demanding technologies, frameworks, and tools for fast delivery",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description:
        "100% record in customer support with utmost priority to all issues",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Support 24/7",
      description:
        "Active across all communication channels to provide full customer support",
    },
  ];

  // Portfolio items
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "/images/projects/ecommerce.webp",
    },
    {
      title: "Healthcare Dashboard",
      category: "Web App",
      image: "/images/projects/healthcare.webp",
    },
    {
      title: "Educational Portal",
      category: "Education",
      image: "/images/projects/education.webp",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content:
        "Solvitx delivered beyond our expectations. The team was professional and responsive throughout the project.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Founder, EduTech",
      content:
        "Outstanding service and attention to detail. Our new website has significantly improved our conversion rates.",
      rating: 5,
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How long does it take to complete a website?",
      answer:
        "Typically, a standard website takes 4-6 weeks to complete. However, the exact timeline depends on the project scope and complexity.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer various support packages to ensure your website remains up-to-date and secure after launch.",
    },
    {
      question: "What is your revision policy?",
      answer:
        "We offer multiple revision rounds based on your chosen package to ensure you're completely satisfied with the final product.",
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      title: "Mastering Color Theory in Web Design",
      excerpt:
        "Explore the power of color theory in web design. Enhance your websites with strategic color choices and create captivating user experiences.",
      date: "May 14, 2024",
      author: "Solvitx",
      image: "/images/blog/optimized/nextjs.webp",
    },
    {
      title: "Why SEO Matters for Your Business",
      excerpt:
        "Learn how proper SEO can dramatically improve your online presence and lead generation.",
      date: "Mar 10, 2024",
      author: "Solvitx",
      image: "/images/blog/optimized/seo-ai.webp",
    },
    {
      title: "Maximizing Website Performance",
      excerpt:
        "Tips and tricks to optimize your website's speed and user experience.",
      date: "Mar 5, 2024",
      author: "Solvitx",
      image: "/images/blog/optimized/technical-seo.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-blue-500">
                Solvitx
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Call: +91 8240740018
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-gray-900 border-b border-gray-800"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Call: +91 8240740018
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              No 1 Website Development Company in India
            </h1>
            <p className="mt-6 text-2xl text-gray-300 max-w-3xl mx-auto">
              You Imagine.{" "}
              <span className="text-blue-500 font-bold">We Create.</span>
            </p>
            <p className="mt-4 text-xl text-gray-400">
              Best Web Design and Web Development Company in India
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
                Call: +91 8240740018
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Define Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Define us!</h2>
            <div className="max-w-4xl mx-auto text-gray-300">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Welcome to Solvitx - A Top Web Development Company in India
              </h3>
              <p className="text-lg mb-6">
                {showFullAbout ? (
                  <>
                    100% Trusted and Registered Company in India with a
                    professional website that provides the best web development
                    and web design services in India. We are a company that
                    offers multi-functional web portals, and we make sure that a
                    well-developed and attractive website can help our clients
                    to record ROI-driven results.
                    <br />
                    <br />
                    Solvitx is among the top 10 Web design and Web Development
                    companies in India in 2024. It laid its foundations in 2017.
                    Our experts are highly experienced in delivering websites
                    that are easy to use, visually appealing and accessible to a
                    wide range of devices. Avail one of the top web utilities
                    the company provides as we tend to pull the audience that is
                    genuinely mesmerized by your layout, web design ideas,
                    graphics, and images to the site's typography.
                    <br />
                    <br />
                    We have successfully delivered to 100+ clients and are one
                    of the most reliable web designing companies in India that
                    transforms the online brand image of any business or
                    startup. We believe in creating a high-quality website which
                    will help our clients thrive in the industry. A professional
                    website designing company in India which offers custom web
                    and affordable web services with an aim to create the best
                    ROI-driven mechanism for clients.
                  </>
                ) : (
                  "100% Trusted and Registered Company in India with a professional website that provides the best web development and web design services in India. We are a company that offers multi-functional web portals, and we make sure that a well-developed and attractive website can help our clients to record ROI-driven results."
                )}
              </p>
              <button
                onClick={() => setShowFullAbout(!showFullAbout)}
                className="text-blue-500 hover:text-blue-400 flex items-center gap-2 mx-auto"
              >
                {showFullAbout ? "Read Less" : "Read More!"}
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    showFullAbout ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We are a One-Stop Solution for delivering the best web design and
            development services. We render customized and affordable web design
            facilities to suit your requirements. Choose the best plans for
            building a responsive web design according to your needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-800 transition-colors"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Web Development and Website Design
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-4">
            Plans & Pricing
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            We are among India's best web solution companies committed to
            offering full ROI-driven customized web services at affordable
            prices. Due to its excellent e-commerce website and graphics
            designs, Solvitx is one of the top web development companies in
            India.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.featured
                    ? "bg-blue-500 transform scale-105"
                    : "bg-gray-800/50"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through">
                      {plan.originalPrice}
                    </span>
                    <span
                      className={`text-3xl font-bold ${
                        plan.featured ? "text-white" : "text-blue-500"
                      }`}
                    >
                      {plan.discountedPrice}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    (+ 18% GST {plan.gst})
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Features Includes</h4>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                        <span
                          className={
                            plan.featured ? "text-white" : "text-gray-300"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-3 rounded-full font-medium transition-colors ${
                    plan.featured
                      ? "bg-white text-blue-500 hover:bg-gray-100"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Call Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Best Website Developers with Exclusive Designs
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Check out some of our recent projects
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <div className="text-sm text-blue-400">{item.category}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-8 rounded-2xl"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Blog & News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">
                    {post.date} | {post.author}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-blue-500 mb-4">Solvitx</h3>
              <p className="text-gray-400">
                Solvitx India's No 1 Web development Company. Solvitx provide
                unique and Best quality websites, Animated & Motion Graphic
                Videos to customers at a very affordable price.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Refund & Cancellation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 8240740018
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  contact@solvitx.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Kolkata, India
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Solvitx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebDevLandingPage;
