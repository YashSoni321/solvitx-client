import React, { useState } from "react";
import {
  CheckCircle,
  Shield,
  Clock,
  Users,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import Modal from "@/components/common/Modal";
import ContactUsForm from "@/components/common/ContactUsForm";

const WhyChooseUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reasons = [
    {
      icon: CheckCircle,
      title: "Client Centric Approach",
      description:
        "Understanding business goals & building web applications align with clients' needs & perspective.",
    },
    {
      icon: Rocket,
      title: "Proven Track Record",
      description:
        "We serve a proven track record of numerous successful projects & clients worldwide for measurable results.",
    },
    {
      icon: Users,
      title: "Scalable & Secure Code",
      description:
        "We prioritize clarity by structuring scalable & secure code for a seamless user experience. ",
    },
    {
      icon: Shield,
      title: "Customized Digital Solutions",
      description:
        "Get a full suite of web development solutions to improve brand value & boost online presence.",
    },
    {
      icon: HeadphonesIcon,
      title: "Professional Team ",
      description:
        "Our team specialize in designing engaging & responsive web applications that align with clients' needs.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery Guarantee",
      description:
        "We respect deadlines and deliver projects on schedule, every time",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Create Top Impression With Solvitx{" : "}
            <span className="text-blue-600">A trusted Global Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, Solvitx provides client-centric web
            solutions that turn websites into leads.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">210+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">47+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Boost your Brand value?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Thousands of satisfied clients have transformed their business
              with our web solutions
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your New Project
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactUsForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
