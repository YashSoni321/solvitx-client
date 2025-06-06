"use client";

import { useEffect } from "react";
import FloatingSocials from "../components/common/FloatingSocials";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";
import "../styles/globals.css";

export default function RootLayout({ children }: any) {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SolvitX - Digital Solutions</title>
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
