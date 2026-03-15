"use client"
import Link from "next/link";
import { useEffect, useState, useRef } from "react"

interface NavbarProps {
  topLogoRef: React.RefObject<HTMLElement>
}

// export default function Navbar({ topLogoRef }: NavbarProps) {
export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false)

  // useEffect(() => {
  //   if (!topLogoRef.current) return

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // true if logo is NOT visible
  //       setShowLogo(!entry.isIntersecting)
  //     },
  //     {
  //       root: null, // viewport
  //       threshold: 0, // trigger when any part is visible
  //     }
  //   )

  //   observer.observe(topLogoRef.current)

  //   return () => observer.disconnect()
  // }, [])

  return (
    <nav className="bg-neutral-950 font-anonymouspro sticky top-0 text-xl lg:text-2xl z-50">
      <div className="container mx-auto px-10 py-7 flex justify-between items-center text-white">
        <div className="flex space-x-20">
          <Link href="/#home">Home</Link>
          <Link href="/#who-we-are">Who we are</Link>
        </div>
        {showLogo && <img src="/logo-transparent.png" alt="logo" className="h-fit" />}
        <div className="flex space-x-20">
          <Link href="/projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}