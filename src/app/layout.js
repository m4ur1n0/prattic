// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Amatic_SC } from 'next/font/google'
import { Merriweather } from "next/font/google";
import AnimationProvider from "./context/AnimationContext";
import Script from "next/script";
import Analytics from "@/components/Analytics";
// import PratticFooter from "@/components/PratticFooter";


const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic'
})

const merriweather = Merriweather({
    weight : ['300', '400', '700', '900'],
    subsets : ["latin"],
    variable : '--font-merri'
})

export const metadataBase = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prattic.org"
);

export const metadata = {
  title: "The Prattic",
  description: "Evanston's newest and fastest-growing comedy club, The Prattic hosts weekly nights of mirth for fans of comedy and their friends.",
  icons: {
    icon: [
      { url: '/vectors/prattic-house-v1.svg', type: 'image/svg+xml' }, // i should create a favicon
    ],
  },
  alternates : {canonical: "./"},
  openGraph : {
    title : "The Prattic",
    description : "The Prattic hosts weekly nights of mirth for fans of comedy and their friends.",
    url : process.env.NEXT_PUBLIC_SITE_URL,
    images : [`${process.env.NEXT_PUBLIC_SITE_URL || "https://prattic.org"}/images/prattic-thumbnail.png`],
    siteName : "The Prattic",
    type : "website",
  },
  twitter: {
    card : 'summary_large_image', 
    images : [
        `${process.env.NEXT_PUBLIC_SITE_URL || "https://theprattic.com"}/images/prattic-thumbnail.png`
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
    },
  },

};

export default function RootLayout({ children }) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    const linkerDomainsEnv = process.env.NEXT_PUBLIC_GA_LINKER_DOMAINS || "";
    const linkerDomains = linkerDomainsEnv.split(",").map((s) => s.trim()).filter(Boolean);

    const jsonLd = {
        "@context" : "https://schema.org",
        "@type" : "Organization",
        name : "The Prattic",
        url : process.env.NEXT_PUBLIC_SITE_URL || "https://prattic.org",
        logo : (process.env.NEXT_PUBLIC_SITE_URL || "https://prattic.org") + "/vectors/prattic-house-v1.svg";
    };

    return (
        <html lang="en">

            <head />

            <body
                className={`${amatic.variable} ${merriweather.variable} antialiased`}
            >
                <AnimationProvider>

                    {children}
                    
                </AnimationProvider>

                

                {GA_ID && process.env.NODE_ENV === 'production' && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                            strategy={"afterInteractive"}
                        />
                        <Script id="gtag-init" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                            `}
                        </Script>

                        <Analytics />
                    </>
                )}
            </body>
        </html>
    );
}
