// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Amatic_SC } from 'next/font/google'
import AnimationProvider from "./context/AnimationContext";
import Head from "next/head";
// import PratticFooter from "@/components/PratticFooter";


const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic'
})

export const metadata = {
  title: "The Prattic",
  description: "The Prattic hosts weekly nights of myrth for fans of comedy and their friends.",
  icons: {
    icon: [
      { url: '/vectors/prattic-house-v1.svg', type: 'image/svg+xml' },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amatic.variable} ${amatic.variable} antialiased`}
      >
        <AnimationProvider>
          {children}
        </AnimationProvider>
        {/* <PratticFooter /> */}
      </body>
    </html>
  );
}
