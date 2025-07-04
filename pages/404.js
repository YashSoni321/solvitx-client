import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import LogoImage from "../public/images/solvitx.png";

const Custom404 = () => {
  const router = useRouter();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <Head>
        <title>404 - Page Not Found | SolvitX</title>
        <meta
          name="description"
          content="The page you're looking for cannot be found."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Image
              src={LogoImage}
              alt="SolvitX"
              className="h-12 w-auto"
              priority
              width={150}
              height={48}
            />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Text */}
          <motion.div
            variants={itemVariants}
            className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500 mb-4"
          >
            404
          </motion.div>

          {/* Message */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-8 text-lg"
          >
            The page you're looking for seems to have gone on a digital
            vacation. Let's get you back to where you need to be.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.back()}
              className="px-6 py-3 bg-white text-gray-700 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              <FaArrowLeft className="text-sm" />
              Go Back
            </motion.button>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaHome className="text-sm" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.p variants={itemVariants} className="mt-12 text-gray-500">
            Need assistance?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:text-pink-500 font-medium"
            >
              Contact our support team
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Custom404;
