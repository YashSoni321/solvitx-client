import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "@/components/homepage/Hero";
import FloatingSocials from "@/components/common/FloatingSocials";

// Dynamically import components with loading states
const AboutSolvitx = dynamic(
  () => import("@/components/homepage/AboutSolvitx"),
  {
    loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
    ssr: true,
  }
);

const OurWorks = dynamic(() => import("@/components/homepage/OurWorks"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

const Services = dynamic(() => import("@/components/homepage/Services"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

const StatisticsSection = dynamic(
  () => import("@/components/homepage/Statitics"),
  {
    loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
    ssr: false,
  }
);

const StagesSection = dynamic(
  () => import("@/components/homepage/StageOfWork"),
  {
    loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
    ssr: false,
  }
);

const Teams = dynamic(() => import("@/components/homepage/Teams"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: false,
});

const Features = dynamic(() => import("@/components/homepage/Features"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: false,
});

const Testimonial = dynamic(
  () => import("../components/homepage/Testimonial"),
  {
    loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
    ssr: false,
  }
);

const BlogSection = dynamic(() => import("@/components/homepage/BlogSection"), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/homepage/Footer"), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />,
  ssr: true,
});

export default function Home() {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        {/* <FloatingSocials /> */}
        <title>Solvitx — Solving IT with expertise</title>
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
        <meta property="og:image" content="/images/optimized/heroImg.webp" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/images/optimized/heroImg.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/fonts/your-main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Hero />

      {/* <AboutSolvitx />
      <OurWorks /> */}
      <Services />
      <StatisticsSection />
      <BlogSection />
      <StagesSection />
      <Teams />
      <Features />
      <Testimonial />
      <Footer />
      {/* <FloatingSocials /> */}
    </>
  );
}
