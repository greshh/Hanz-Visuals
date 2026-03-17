"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

// export default function Navbar({ topLogoRef }: NavbarProps) {
export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector("#logo");
  
      if (!logo) {
        setShowLogo(true);
        return;
      }
  
      const rect = logo.getBoundingClientRect();
      setShowLogo(rect.bottom <= 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-neutral-950 font-anonymouspro sticky top-0 text-xl md:text-2xl z-50">
      <div className="container mx-auto px-6 md:px-10 md:py-10 py-5 flex justify-between h-[10vh] items-center text-white">
        <div className="flex space-x-20 w-[20vw] md:w-fit">
          <Link href="/#home" className="hover:text-[#89ADD1] transition-hover duration-500">Home</Link>
          <Link href="/#who-we-are" className="hover:text-[#89ADD1] hidden lg:inline transition-hover duration-500">Who we are</Link>
        </div>
        <Link href="/#home" className="h-[5vh] opacity-0 transition-opacity duration-500 w-fit" style={{ opacity: showLogo ? 1 : 0 }}>
          <img src="/logo-hanz-transparent.png" alt="logo" className="h-full"/>
        </Link>
        <div className="flex space-x-20 w-[20vw] md:w-fit">
          <Link href="/projects" className="hover:text-[#89ADD1] transition-hover duration-500">Projects</Link>
          <Link href="/#contact" className="hidden lg:inline hover:text-[#89ADD1] transition-hover duration-500">Contact</Link>
        </div>
      </div>
    </nav>
  )
}