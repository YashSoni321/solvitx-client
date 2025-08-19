
import React from 'react'
import { CheckCircle, Shield, Clock, Users, Rocket, HeadphonesIcon } from 'lucide-react'

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: '3+ Years of Expertise',
      description: 'Proven track record in delivering cutting-edge web and mobile solutions'
    },
    {
      icon: Rocket,
      title: 'MERN & Mobile Development Specialists',
      description: 'Deep expertise in modern tech stack including React, Node.js, and React Native'
    },
    {
      icon: Users,
      title: 'Proven Track Record with Global Clients',
      description: 'Successfully delivered 200+ projects across 20+ countries worldwide'
    },
    {
      icon: Shield,
      title: 'Scalable & Future-Ready Solutions',
      description: 'Built to grow with your business using latest technologies and best practices'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance for peace of mind'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery Guarantee',
      description: 'We respect deadlines and deliver projects on schedule, every time'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Our Agency?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build websites and apps – we create digital experiences that drive results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
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
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our solutions
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
