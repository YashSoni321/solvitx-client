import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Dynamically import Navbar to reduce initial bundle size
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: true,
  loading: () => <div className="h-16 bg-white shadow-sm" />,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Register service worker for caching
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/landing-page", "/thank-you", "/404"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(router.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
