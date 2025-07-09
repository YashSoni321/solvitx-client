import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaHeadset } from "react-icons/fa";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | SolvitX</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Oops! Page Not Found
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-pink-500 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHome /> Go Home
                </motion.button>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border-2 border-gray-300 flex items-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                <FaArrowLeft /> Go Back
              </button>
            </motion.div>

            {/* Support Section */}
            <motion.div
              className="mt-12 p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <FaHeadset className="text-blue-600 text-xl" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Need Help?
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our team is here to help!
              </p>
              <Link href="/contact">
                <motion.button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Support
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
