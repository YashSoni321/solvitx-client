import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRegLightbulb,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Budget options

  // Handle form changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName} `,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: "Solvitx Team",
    };

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });

        // Redirect to thank you page after successful submission
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSubmitting(false);
        setSubmitError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <section id="contact-form" className="bg-white py-4 px-4">
      <div className="container mx-auto">
        <div className="mb-6 md:mb-10 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something{" "}
            <span className="text-blue-600"> Amazing Together</span>{" "}
          </h2>
          <p className="text-gray-600 mb-6 text-xl">
            Ready to transform your digital presence? Get in touch and let's
            discuss how we can help your business grow.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl">
            {submitSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-10">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {/* Location */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1 md:mb-2">
                      Our Office
                    </h4>
                    <p className="text-base md:text-xl text-gray-800 font-bold mb-1 break-words">
                      Jaipur, Rajasthan 302003
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Visit us at our creative workspace where innovation meets
                      execution
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                    <FaEnvelope className="text-white text-lg md:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1 md:mb-2">
                      Email Us
                    </h4>
                    <a
                      href="mailto:solvitxsolutions@gmail.com"
                      className="text-base md:text-xl text-gray-800 font-bold hover:text-purple-600 transition-colors duration-300 block mb-1 break-all"
                    >
                      solvitxsolutions@gmail.com
                    </a>
                    <p className="text-gray-600 text-xs md:text-sm">
                      We typically respond within 2-4 hours during business days
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-xl border border-gray-300 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 rounded-full shadow-lg flex-shrink-0">
                    <FaPhone className="text-white text-lg md:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg mb-1 md:mb-2">
                      Call Us
                    </h4>
                    <a
                      href="tel:+917232899120"
                      className="text-base md:text-xl text-gray-800 font-bold hover:text-purple-600 transition-colors duration-300 block mb-1 break-words"
                    >
                      +91 7232899120
                    </a>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Available Mon-Fri, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                    <FaRegLightbulb className="text-white text-base md:text-lg" />
                  </div>
                  <h4 className="text-gray-900 font-semibold text-base md:text-lg">
                    Quick Response Guarantee
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Email replies within 2-4 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Free consultation calls
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Project quotes within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-600">
                      24/7 support for live projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
