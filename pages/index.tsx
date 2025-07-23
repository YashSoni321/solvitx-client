import Head from "next/head";
import AboutSolvitx from "@/components/homepage/AboutSolvitx";
import OurWorks from "@/components/homepage/OurWorks";
import Services from "@/components/homepage/Services";
import StatisticsSection from "@/components/homepage/Statitics";
import StagesSection from "@/components/homepage/StageOfWork";
import Teams from "@/components/homepage/Teams";
import Features from "@/components/homepage/Features";
import Testimonial from "../components/homepage/Testimonial";
import Footer from "@/components/homepage/Footer";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/hero_image.jpg";

export default function Home() {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>
          Best Digital Marketing & Web Development Company in Jaipur, India |
          SolvitX
        </title>
        <meta
          name="description"
          content="SolvitX is a top digital marketing agency in Jaipur offering SEO, social media marketing, web development, app development & IT solutions to grow your brand."
        />
        <meta
          name="keywords"
          content="digital marketing agency in jaipur, best digital marketing company in jaipur, website development in jaipur, social media marketing in jaipur, web development company in jaipur, advertising agency in jaipur, top digital marketing companies in jaipur, SEO company in jaipur, app development jaipur, software development jaipur, digital marketing services in jaipur"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="SolvitX — We Solve IT Problems with Expertise"
        />
        <link rel="canonical" href="https://www.solvitx.com/" />
        <meta
          property="og:description"
          content="From startups to enterprises, SolvitX crafts digital experiences that solve real business problems."
        />
        <meta property="og:image" content="/images/solvitx.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WMPZXCG4DL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WMPZXCG4DL');
            `,
          }}
        />
      </Head>
      <HeroSection
        backgroundImage={heroImg}
        heading="Empowering Your Digital Growth"
        highlight="With Trust & Innovation"
        subheading="SolvitX delivers reliable web, app, and marketing solutions trusted by businesses worldwide. Let us help you build your digital future with confidence."
        buttonText="Get Started"
      />
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
