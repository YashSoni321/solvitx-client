import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Modal from "@/components/common/Modal";
import ContactUsForm from "@/components/common/ContactUsForm";

const MidPageCTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollToContact = () => {
    setIsModalOpen(true);
    // document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProcess = () => {
    // setIsModalOpen(true);
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Don't let your competitors get ahead. Let's build something amazing
            together that drives real results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              // href="#process"
              onClick={scrollToProcess}
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              View Our Process
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <div className="w-12 h-px bg-white/30"></div>
            <span className="text-sm">Trusted by businesses worldwide</span>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactUsForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </section>
  );
};

export default MidPageCTA;
