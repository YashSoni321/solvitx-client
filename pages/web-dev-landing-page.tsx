"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Rocket,
  Shield,
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

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
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
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
