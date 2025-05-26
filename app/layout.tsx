"use client";

import { useEffect } from "react";
import FloatingSocials from "../components/common/FloatingSocials";
import emailjs from "@emailjs/browser";
import { emailConfig } from "@/config/emailConfig";

export default function RootLayout({ children }: any) {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(emailConfig.publicKey);
  }, []);

  return (
    <html lang="en">
      <body>
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
