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
        <title>SolvitX — We Solve IT Problems with Expertise</title>
        <meta
          name="description"
          content="SolvitX is your technology partner for scalable websites, apps, and digital solutions. We deliver results-driven IT services with precision."
        />
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5F4DCZBT');</script>

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
