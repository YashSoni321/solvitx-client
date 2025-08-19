
import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart',
      rating: 5,
      quote: 'The team delivered an exceptional e-commerce platform that exceeded our expectations. Our online sales increased by 300% within the first quarter. Their attention to detail and technical expertise is unmatched.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, HealthTech Solutions',
      company: 'HealthTech',
      rating: 5,
      quote: 'Working with this agency was a game-changer for our healthcare app. They understood our complex requirements and delivered a robust, scalable solution. The app now has over 50,000+ active users.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCorp',
      company: 'GrowthCorp',
      rating: 5,
      quote: 'Their web development and SEO services transformed our online presence. We saw a 250% increase in organic traffic and our conversion rates improved significantly. Highly recommended!',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ]

  const companyLogos = [
    { name: 'TechStart', logo: '🚀' },
    { name: 'HealthTech', logo: '🏥' },
    { name: 'GrowthCorp', logo: '📈' },
    { name: 'InnovateNow', logo: '💡' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudSync', logo: '☁️' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it – hear from the businesses we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-3xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-gray-600">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven development expertise
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
