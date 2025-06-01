"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { blogPosts } from "@/data/blogPosts";
import Footer from "@/components/homepage/Footer";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link
            href="/blog"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} — SolvitX Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${post.title} — SolvitX Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <span>{post.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <article className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {post.content.split("\n").map((line, index) => {
                  if (line.startsWith("## ")) {
                    const title = line.replace("## ", "");
                    return (
                      <a
                        key={index}
                        href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {title}
                      </a>
                    );
                  }
                  return null;
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="prose prose-invert prose-lg prose-purple max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-4xl font-bold text-white mb-8 mt-12"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      id={props.children
                        ?.toString()
                        .toLowerCase()
                        .replace(/\s+/g, "-")}
                      className="text-3xl font-bold text-white mb-6 mt-10 flex items-center"
                      {...props}
                    >
                      <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                      {props.children}
                    </h2>
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-2xl font-bold text-white mb-4 mt-8"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-gray-300 leading-relaxed mb-6"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc list-inside space-y-2 mb-6 text-gray-300"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal list-inside space-y-2 mb-6 text-gray-300"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-gray-300" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-purple-500 pl-4 italic text-gray-300 my-6"
                      {...props}
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="bg-gray-800 rounded px-2 py-1 text-purple-300"
                      {...props}
                    />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre
                      className="bg-gray-800 rounded-lg p-4 overflow-x-auto my-6"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }) => (
                    <div className="my-8 rounded-xl overflow-hidden">
                      <img className="w-full h-auto" {...props} />
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.author.name}
                  </h3>
                  <p className="text-purple-400 mb-3">{post.author.role}</p>
                  <p className="text-gray-300">
                    Expert in {post.category} with a passion for sharing
                    knowledge and insights. Follow for more articles on{" "}
                    {post.tags.join(", ")}.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
