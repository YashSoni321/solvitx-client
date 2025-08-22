import React from "react";
import { Users, Award, Globe, Zap } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Generate
                <span className="text-blue-600"> Leads & Conversions</span> with
                our all-in-one Web Development Solutions
              </h2>
              {/* <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Transforming Ideas Into 
                <span className="text-blue-600"> Digital Excellence</span>
              </h2> */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We build & integrate customized web applications using modern
                technology to transform your digital presence into success.
                Whether you want to design a new app from scratch or add new
                features, our web solutions cover everything.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From startup to enterprise, we deliver successful projects by
                integrating the latest technology & modern cloud infrastructure.
                Our commitment to innovation makes us a trusted partner
                worldwide.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600">Years of Expertise</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">97%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">210+</div>
                  <div className="text-gray-600">Successful Projects</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">47+</div>
                  <div className="text-gray-600">Client Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional development team"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">
                      Top Rated
                    </div>
                    <div className="text-gray-600">Development Agency</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 bg-yellow-400 rounded-full mr-1"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
