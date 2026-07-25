"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// TO USE: 
// ** projectKey must be the same name as the key in projects.ts. 
// ** The image must be named the same as the projectKey in the public/projects folder. 
// ** The background image must be named parallax-background.jpg.
// ** The foreground image must be named the same as the projectKey as a png.

export default function Parallax({ projectKey }: { projectKey: string }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      if (bgRef.current) {
        bgRef.current.style.transform =
          `translateY(${scrollY.current * 0.3}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative h-fit w-full">
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-[15rem] md:h-[32rem]">
        <Image 
          src={`/projects/${projectKey}/parallax-background.jpg`}
          alt="Background" 
          fill 
          className="object-cover w-full"
        />
      </div>
      <div className="h-36 md:h-60"/>
      <div className="relative z-10">
        <Image 
          src={`/projects/${projectKey}/${projectKey}.png`} 
          alt="Foreground" 
          width={5000} 
          height={5000} 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}