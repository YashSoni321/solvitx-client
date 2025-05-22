"use client";

import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/homepage/Footer";

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
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
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using our website and services, you agree to these
              Terms of Service. If you do not agree to these terms, please do
              not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              2. Description of Services
            </h2>
            <p className="text-gray-700 mb-4">
              Solvitx provides digital solutions including web development,
              mobile app development, UI/UX design, digital marketing, and SEO
              services. The specifics of each service will be outlined in
              individual agreements or statements of work.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              3. User Obligations
            </h2>
            <p className="text-gray-700 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Provide accurate information necessary for the service.</li>
              <li>
                Use our services lawfully and in accordance with these terms.
              </li>
              <li>Maintain the confidentiality of any account information.</li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              All content, trademarks, logos, and service marks displayed on our
              website are the property of Solvitx or their respective owners.
              You may not use, reproduce, or distribute these materials without
              prior written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              5. Payment and Billing
            </h2>
            <p className="text-gray-700 mb-4">
              Payment terms for our services will be specified in individual
              agreements. All fees are non-refundable unless otherwise
              specified. We reserve the right to change our prices with
              reasonable notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law, Solvitx shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use or inability to use our
              services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              7. Termination
            </h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our services
              immediately, without prior notice or liability, for any reason,
              including breach of these Terms of Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              8. Governing Law
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by the laws of India, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time.
              It is your responsibility to review these Terms periodically for
              changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              10. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="pl-5 text-gray-700">
              <p>Email: contact@solvitx.com</p>
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
