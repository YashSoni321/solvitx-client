"use client";

import React from "react";
import Footer from "../../components/homepage/Footer";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-purple-300 hover:text-purple-400 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2 h-3 w-3" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>
      </div>

      {/* Content */}
      <div className="flex-grow container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              At SolvitX, we collect several types of information to provide and
              improve our services to you. This may include:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Personal information such as name, email address, phone number,
                and company details when you contact us or sign up for our
                services.
              </li>
              <li>
                Usage data including information on how you use our website and
                services.
              </li>
              <li>
                Technical data such as IP address, browser type, device
                information, and cookies.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for various purposes including:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Providing, maintaining, and improving our services.</li>
              <li>
                Communicating with you about updates, support, and promotional
                offers.
              </li>
              <li>Analyzing usage patterns to enhance user experience.</li>
              <li>Detecting and preventing fraudulent activities.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              4. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your
              personal information. However, please be aware that no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              5. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "last updated" date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              6. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="pl-5 text-gray-700">
              <p>Email: solvitxsolutions@gmail.com</p>
              <p>Phone: +91 9782025577</p>
              <p>
                Address: Hn. 359, Gopal Ji Ka Rasta, Tripolia Bazar, Jaipur,
                Rajasthan 302003
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
