"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./footer";
import Carousel from "./carousel";

interface PageProps {
  topLogoRef: React.RefObject<HTMLDivElement>
}

export default function Home({ topLogoRef }: PageProps) {
  const [scrollY, setScrollY] = useState(0);

  const data = [{ image: "/home/carousel/1.jpg" },
    { image: "/home/carousel/2.jpg" }, 
    { image: "/home/carousel/3.jpg" },
    { image: "/home/carousel/4.jpg" },
    { image: "/home/carousel/5.jpg" }];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="home" className="bg-white scroll-m-24">
      <div>
        <Carousel data={data}/>
        <div className="absolute top-0 flex flex-col mt-[10vh] px-[20vw] pt-40 pb-5 justify-between w-full h-[90vh]">
          <img src="/logo-transparent.png" alt="Hanz Visuals logo" className="w-auto mx-auto z-30"/>
          <div className="flex flex-col gap-2 transition-opacity duration-200 z-30" style={{ opacity: scrollY <= 0 ? 1 : 0 }}>
            <p className="text-white text-center font-anonymouspro">scroll down</p>
            <img src="/home/arrow.svg" alt="arrow down" className="mx-auto"/>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-400 to-white"/>
      </div>
      <div className="px-20 lg:px-52">
        <div className="my-32 mx-30 flex justify-around">
          <Link href="/projects?filters=photos#filter" className="group relative h-52 lg:h-80 w-1/4">
            <div className="absolute h-52 lg:h-80 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-tighter">PHOTOS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-52 lg:h-80 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-52 lg:h-80 inset-0 bg-[url(/home/photo-video-graphic/Photos.jpg)] bg-cover"/>
          </Link>
          <Link href="/projects?filters=videos#filter" className="group relative h-52 lg:h-80 w-1/4">
            <div className="absolute h-52 lg:h-80 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-tighter">VIDEOS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-52 lg:h-80 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-52 lg:h-80 inset-0 bg-[url(/home/photo-video-graphic/Videos.jpg)] bg-cover"/>
          </Link>
          <Link href="/projects?filters=graphics#filter" className="group relative h-52 lg:h-80 w-1/4">
            <div className="absolute h-52 lg:h-80 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-tighter">GRAPHICS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-52 lg:h-80 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-52 lg:h-80 inset-0 bg-[url(/home/photo-video-graphic/Graphics.jpg)] bg-cover"/>
          </Link>
        </div>
        <div className="my-36">
          <h2 id="who-we-are" className="font-phonk text-4xl mb-5 scroll-mt-60">{("Who we are").toUpperCase()}</h2>
          <p className="mb-6">Hanz Visuals is run by two brothers, Hanz and Dhon — a creative duo based in Auckland, New Zealand. Our work is driven by movement, energy, and authenticity, shaped by our background in basketball and sport. We're drawn to real moments — the grit, the emotion, the details people don't always notice — and we capture them in a way that feels cinematic, powerful, and true to the moment.</p>
          <p>Whether we're shooting high-intensity game action, creating athlete content, or building visual stories for brands, we focus on clean visuals, strong storytelling, and intentional colour. For us, it's not just about taking photos — it's about creating images that athletes, teams, and creatives are proud to stand behind.</p>
        </div>
      </div>
      <div className="bg-black w-full aspect-[4/1] my-20 relative">
        <Link href="/projects" className="group text-center text-white flex flex-col items-center justify-center h-full"> 
          <video src="/home/projects-sequence.mp4" autoPlay loop muted className="absolute w-full h-full object-cover"/>
          <div className="absolute z-10 w-full h-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div className="absolute z-20 w-full h-full flex flex-col items-center justify-center">
              <h2 className="font-humane text-[20vw] tracking-wider font-semibold leading-none">PROJECTS</h2>
              <p className="italic text-2xl leading-none -mt-8 font-anonymouspro">click here</p>
          </div>
        </Link>
      </div>
      <div className="bg-gradient-to-b from-white to-neutral-950 h-40"/>
      <div className="text-center bg-neutral-950 text-white py-60 relative h-[90vh] font-anonymouspro">
        <h2 id="contact" className="font-phonk text-4xl mb-2 scroll-mt-60">{("Contact").toUpperCase()}</h2>
        <p><a href="https://www.instagram.com/hanzvisuals_/" target="_blank" rel="noopener"><span className="font-bold">Instagram:</span> @hanzvisuals_</a></p>
        <p><a href="mailto:hanzvisuals1@gmail.com"><span className="font-bold">Email:</span> hanzvisuals1@gmail.com</a></p>
        <p><a href="https://www.tiktok.com/@hanzvisualss" target="_blank" rel="noopener"><span className="font-bold">TikTok:</span> @hanzvisualss</a></p>
        <div className="absolute bottom-0 text-center w-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
}