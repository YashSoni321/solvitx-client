"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function BlogList() {
  return (
    <>
      <Head>
        <title>Blog — SolvitX | Insights on Technology and Development</title>
        <meta
          name="description"
          content="Explore our latest insights on web development, SEO, and technology trends. Stay updated with expert analysis and best practices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Blog — SolvitX | Insights on Technology and Development"
        />
        <meta
          property="og:description"
          content="Discover expert insights on web development, SEO, and technology trends from our team of specialists."
        />
        <meta property="og:image" content="/images/blog-hero.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Insights
              </span>{" "}
              & Trends
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Explore our collection of expert articles on technology,
              development, and digital strategy.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Blog List Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {post.publishDate}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and never miss out on the latest
              trends and insights in technology and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none flex-grow max-w-md"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
