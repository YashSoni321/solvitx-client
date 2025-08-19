
import React from 'react'
import { Code, Smartphone, ShoppingCart, Palette, Search, Zap } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Responsive, fast-loading websites built with modern technologies like React, Next.js, and Node.js.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps plus cross-platform solutions using React Native and Flutter.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and analytics.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers with intuitive interfaces.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility with SEO optimization and targeted digital marketing strategies.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with 99+ PageSpeed scores and optimal user experience.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6">
                  <span className="text-blue-600 font-medium group-hover:text-blue-700 cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
