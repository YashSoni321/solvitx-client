import Head from "next/head";
import Hero from "@/components/homepage/Hero";
import AboutSolvitx from "@/components/homepage/AboutSolvitx";
import OurWorks from "@/components/homepage/OurWorks";
import Services from "@/components/homepage/Services";
import StatisticsSection from "@/components/homepage/Statitics";
import StagesSection from "@/components/homepage/StageOfWork";
import Teams from "@/components/homepage/Teams";
import Features from "@/components/homepage/Features";
import Testimonial from "../components/homepage/Testimonial";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Solvitx — We Solve IT Problems with Expertise</title>
        <meta
          name="description"
          content="Solvitx is your technology partner for scalable websites, apps, and digital solutions. We deliver results-driven IT services with precision."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Solvitx — We Solve IT Problems with Expertise"
        />
        <meta
          property="og:description"
          content="From startups to enterprises, Solvitx crafts digital experiences that solve real business problems."
        />
        <meta property="og:image" content="/images/heroImg.jpg" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutSolvitx />
      <OurWorks />
      <Services />
      <StatisticsSection />
      <StagesSection />
      <Teams />
      <Features />
      <Testimonial />
      <Footer />
    </>
  );
}
