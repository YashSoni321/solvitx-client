"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaMobile, FaServer, FaDatabase, FaCloud, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Custom, responsive, and scalable web applications built with modern technologies.",
    icon: <FaCode className="text-5xl text-blue-500" />,
    href: "/services/webdevelopment",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <FaMobile className="text-5xl text-purple-500" />,
    href: "/services/mobiledevelopment",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Backend Development",
    description: "Robust and scalable backend solutions with modern architectures.",
    icon: <FaServer className="text-5xl text-green-500" />,
    href: "/services/backenddevelopment",
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Database Solutions",
    description: "Efficient database design, optimization, and management services.",
    icon: <FaDatabase className="text-5xl text-yellow-500" />,
    href: "/services/database",
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Cloud Services",
    description: "Cloud infrastructure setup, migration, and management solutions.",
    icon: <FaCloud className="text-5xl text-red-500" />,
    href: "/services/cloud",
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Security Solutions",
    description: "Comprehensive security audits and implementation services.",
    icon: <FaShieldAlt className="text-5xl text-indigo-500" />,
    href: "/services/security",
    color: "from-indigo-500 to-blue-600"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Solvitx</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, backend solutions, and more." />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
          <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center opacity-20" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Link href={service.href}>
                  <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300">
                    <div className={`mb-6 p-4 rounded-lg bg-gradient-to-r ${service.color} inline-block`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our services.
            </p>
            <Link href="/contact">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 