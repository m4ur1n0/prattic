import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Amatic_SC } from 'next/font/google'


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic'
})

export const metadata = {
  title: "The Prattic",
  description: "The Prattic hosts weekly nights of myrth for fans of comedy and their friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amatic.variable} ${amatic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
