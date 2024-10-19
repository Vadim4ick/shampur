import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "@/shared/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "@/shared/providers/Providers";

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex min-h-screen flex-col`}>
        <Providers>
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
