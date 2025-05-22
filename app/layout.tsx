import FloatingSocials from "../components/common/FloatingSocials";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingSocials />
      </body>
    </html>
  );
}
