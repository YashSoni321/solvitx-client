import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Define routes where Navbar should be hidden
  const hideNavbarRoutes = ["/landingpage", "/thankyou"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(router.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
