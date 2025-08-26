"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "../landing-pages/web-dev-components/Hero";
import About from "../landing-pages/web-dev-components/About";
import Services from "../landing-pages/web-dev-components/Services";
import WhyChooseUs from "../landing-pages/web-dev-components/WhyChooseUs";
import Portfolio from "../landing-pages/web-dev-components/Portfolio";
import Testimonials from "../landing-pages/web-dev-components/Testimonials";
import MidPageCTA from "../landing-pages/web-dev-components/MidPageCTA";
import Pricing from "../landing-pages/web-dev-components/Pricing";
import Contact from "../landing-pages/web-dev-components/Contact";
import Footer from "../landing-pages/web-dev-components/Footer";
import LandingPageFooter from "@/components/homepage/LandingPageFooter";
import LandingPageNavbar from "@/components/common/LandingPageNavbar";
import { clients } from "@/components/homepage/Teams";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import WebDevLandingPageNavbar from "@/components/common/WebDevelopmentLandingNavbarBas";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { background: "#363636", color: "#fff" },
          success: { style: { background: "#10b981" } },
          error: { style: { background: "#ef4444" } },
        }}
      />

      <div className="min-h-screen bg-white ">
        {/* <FloatingNotification /> */}
        <WebDevLandingPageNavbar />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <section id="clients" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-12">
              {/* <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Clients
              </p> */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Trusted by Visionary Brands & Ambitious Startups
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We’re proud to have partnered with businesses across industries
                — empowering growth, innovation, and customer trust with
                BlinkKaro services.
              </p>
            </div>

            {/* Logos Slider */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 30 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 6, spaceBetween: 50 },
              }}
              className="client-logos"
            >
              {clients.map((client, i) => (
                <SwiperSlide
                  key={i}
                  className="flex items-center justify-center"
                >
                  <div className="h-24 w-40 flex items-center justify-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300">
                    <img
                      width={150}
                      height={60}
                      className="max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                      src={client.logo}
                      alt={client.name || "Client Logo"}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <MidPageCTA />
        <Pricing />
        <Contact />

        {/* <Footer /> */}
        <LandingPageFooter />
      </div>
    </>
  );
}

export default App;
