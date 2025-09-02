"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import Hero from "../landing-pages/app-dev-components/Hero";
import About from "../landing-pages/app-dev-components/About";
import Services from "../landing-pages/app-dev-components/Services";
import Process from "../landing-pages/app-dev-components/Process";
import Technologies from "../landing-pages/app-dev-components/Technologies";
import WhyChooseUs from "../landing-pages/app-dev-components/WhyChooseUs";
import Portfolio from "../landing-pages/app-dev-components/Portfolio";
import Testimonials from "../landing-pages/app-dev-components/Testimonials";
import Pricing from "../landing-pages/app-dev-components/Pricing";
import LandingPageFooter from "@/components/homepage/LandingPageFooter";
import WebDevLandingPageNavbar from "@/components/common/WebDevelopmentLandingNavbarBas";
import Contact from "@/landing-pages/app-dev-components/Contact";

function AppDevelopmentLandingPage() {
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

      <div className="min-h-screen bg-white">
        <WebDevLandingPageNavbar />
        
        {/* Hero: Capture Attention & Communicate Value Instantly */}
        <Hero />
        
        {/* Client Success Stories: Build Trust & Credibility */}
        <Testimonials />
        
        {/* Company Overview: Establish Authority & Expertise */}
        <About />
        
        {/* App Development Services: Show What You Get */}
        <Services />
        
        {/* Success Portfolio: Prove Results & Quality */}
        <Portfolio />
        
        {/* Unique Advantages: Why We're Your Best Choice */}
        <WhyChooseUs />
        
        {/* Development Process: How We Deliver Success */}
        <Process />
        
        {/* Tech Stack: Modern Tools & Reliable Solutions */}
        <Technologies />
        
        {/* Investment Options: Transparent & Competitive Pricing */}
        <Pricing />
        
        {/* Get Started: Convert Visitors to Clients */}
        <Contact />

        {/* <Footer /> */}
        <LandingPageFooter />
      </div>
    </>
  );
}

export default AppDevelopmentLandingPage;
