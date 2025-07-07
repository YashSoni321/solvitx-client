import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to critical domains */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5F4DCZBT');`,
          }}
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Add font display swap for better performance */}
        <style>{`
          @font-face {
            font-family: 'Your Main Font';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/your-main-font.woff2') format('woff2');
          }
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Best Digital Marketing Agency & Advertising Agency in Jaipur, India",
              alternateName:
                "SolvitX - Website Development & Digital Marketing Company",
              url: "https://www.solvitx.com/",
              logo: "https://www.solvitx.com/_next/static/media/solvitx.57238ed4.png",
              sameAs: [
                "https://www.instagram.com/solvitx_/",
                "https://www.facebook.com/people/SolvitX/61574497884915/",
                "https://linkedin.com/company/SolvitX",
                "https://www.solvitx.com/",
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F4DCZBT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
