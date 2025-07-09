import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import AboutSolvitx from "@/components/homepage/AboutSolvitx";
import HeroSection from "@/components/homepage/Hero";
import heroImg from "../public/images/hero_image.jpg";

// Lazy load below-the-fold components
const OurWorks = dynamic(() => import("@/components/homepage/OurWorks"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
});

const Services = dynamic(() => import("@/components/homepage/Services"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
});

const StatisticsSection = dynamic(
  () => import("@/components/homepage/Statitics"),
  {
    loading: () => (
      <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
    ),
    ssr: true,
  }
);

const StagesSection = dynamic(
  () => import("@/components/homepage/StageOfWork"),
  {
    loading: () => (
      <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
    ),
    ssr: true,
  }
);

const Teams = dynamic(() => import("@/components/homepage/Teams"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
});

const Features = dynamic(() => import("@/components/homepage/Features"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
});

const Testimonial = dynamic(() => import("@/components/homepage/Testimonial"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/homepage/Footer"), {
  ssr: true,
});

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

        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/images/hero_image.jpg" />
        <link rel="preload" as="image" href="/images/solvitx.png" />

        {/* Google tag (gtag.js) - Load asynchronously */}
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

      {/* Above the fold content - Load immediately */}
      <HeroSection
        backgroundImage={heroImg}
        heading="Empowering Your Digital Growth"
        highlight="With Trust & Innovation"
        subheading="SolvitX delivers reliable web, app, and marketing solutions trusted by businesses worldwide. Let us help you build your digital future with confidence."
        buttonText="Get Started"
      />
      <AboutSolvitx />

      {/* Below the fold content - Lazy load */}
      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <OurWorks />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <Services />
      </Suspense>

      <Suspense
        fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <StatisticsSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <StagesSection />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <Teams />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <Features />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <Testimonial />
      </Suspense>

      <Suspense
        fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}
      >
        <Footer />
      </Suspense>
    </>
  );
}
