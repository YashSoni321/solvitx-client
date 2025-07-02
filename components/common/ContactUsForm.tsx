import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import { required } from "@/pages/contact";
import { X } from "lucide-react";

export const budgetOptions = [
  "Select a budget range",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "₹10,00,000 - ₹25,00,000",
  "₹25,00,000+",
];

const ContactUsForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.message,
      to_name: "SolvitX Team",
    };

    emailjs
      .send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )
      .then((response) => {
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
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 mt-28 sm:mt-0">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl p-4 sm:p-6 md:p-10 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition"
          aria-label="Close form"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section – Offer Pitch */}
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              🎁 Get a{" "}
              <span className="text-pink-400">FREE 30-min Consultation</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Let us help you turn your idea into reality with no commitment
              required!
            </p>

            <ul className="space-y-2 text-sm text-white">
              <li className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2">
                ✅ Personalized Development Roadmap
              </li>
              <li className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2">
                ✅ Tech Stack & Budget Planning Guide
              </li>
              <li className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2">
                ✅ ₹4,999 Value Consultation –{" "}
                <span className="text-green-400 font-semibold">
                  Absolutely FREE
                </span>
              </li>
              <li className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-2">
                ✅ End-to-End Support for Your Vision
              </li>
            </ul>
          </div>

          {/* Right Section – Form */}
          <div className="lg:w-1/2 bg-gray-900 border border-gray-700 rounded-2xl p-5 sm:p-6">
            {submitSuccess && (
              <div className="bg-green-600/20 border border-green-600 text-green-100 px-4 py-3 rounded-lg mb-4">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitError && (
              <div className="bg-red-600/20 border border-red-600 text-red-100 px-4 py-3 rounded-lg mb-4">
                ❌ {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-400"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 placeholder-gray-400"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 mb-4 placeholder-gray-400"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Book My Free Consultation"}
              </button>
            </form>

            <p className="text-xs text-center text-gray-500 mt-4">
              🔐 Your data is confidential. No spam – guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
