import type { Metadata } from "next";
import TransitionProvider from "./transition-provider";
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import Navbar from "./navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanz Visuals",
  description: "A visual portfolio",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/icon.png"
          type="image/icon.png"
          sizes="icon.png"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="emailjs-init"
          strategy="beforeInteractive"
        >
          {`
            (function(){
              emailjs.init({
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
              });
            })();
          `}
        </Script>
        <Analytics/>
      </head>
      <body>
        <Navbar/>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
