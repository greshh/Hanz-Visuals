import type { Metadata } from "next";
import TransitionProvider from "./transition-provider";
import { useRef } from "react"
import Navbar from "./navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanz Visuals",
  description: "A visual portfolio",

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const topLogoRef = { current: null } as React.RefObject<HTMLDivElement>

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/icon?icon.jpg"
          type="image/icon.jpg"
          sizes="icon.jpg"
        />
      </head>
      <body>
        {/* <Navbar topLogoRef={topLogoRef}/> */}
        <Navbar/>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
