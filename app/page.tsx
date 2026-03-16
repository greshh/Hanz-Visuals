"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./footer";
import Carousel from "./carousel";
import emailjs from "@emailjs/browser";

interface PageProps {
  topLogoRef: React.RefObject<HTMLDivElement>
}

// export default function Home({ topLogoRef }: PageProps) {
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");

  const data = [{ image: "/home/carousel/1.jpg" },
    { image: "/home/carousel/2.jpg" }, 
    { image: "/home/carousel/3.jpg" },
    { image: "/home/carousel/4.jpg" },
    { image: "/home/carousel/5.jpg" }];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const emailParams = {
      title: formData.get("subject"),
      name: formData.get("name"),
      message: formData.get("message"),
      email: formData.get("email"),
    };

    setEmailStatus("idle");

    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, emailParams).then(
      (response) => {
        console.log('Success:', response.status, response.text);
        setEmailStatus("success");
      },
      (error) => {
        console.log('Error:', error);
        setEmailStatus("error");
      },
    );
  };

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
          <img src="/logo-hanzvisuals-transparent.png" alt="Hanz Visuals logo" id="logo" className="w-auto mx-auto z-30"/>
          <div className="flex flex-col gap-2 transition-opacity duration-200 z-30" style={{ opacity: scrollY <= 0 ? 1 : 0 }}>
            <p className="text-white text-center font-anonymouspro">scroll down</p>
            <img src="/home/arrow.svg" alt="arrow down" className="mx-auto"/>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-400 to-white"/>
      </div>
      <div className="px-20 lg:px-52">
        <div className="mt-32 mx-30 flex justify-between">
          <Link href="/projects?filters=photos#filter" className="group relative h-96 lg:h-96 w-80">
            <div className="absolute h-96 lg:h-96 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-wide" style={{ textShadow: "0px 2px 20px #000000" }}>PHOTOS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-96 lg:h-96 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-96 lg:h-96 inset-0 bg-[url(/home/photo-video-graphic/Photos.jpg)] bg-[length:115%] bg-center"/>
          </Link>
          <Link href="/projects?filters=videos#filter" className="group relative h-96 lg:h-96 w-80">
            <div className="absolute h-96 lg:h-96 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-wide" style={{ textShadow: "0px 2px 20px #000000" }}>VIDEOS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-96 lg:h-96 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-96 lg:h-96 inset-0 bg-[url(/home/photo-video-graphic/Videos.jpg)] bg-[length:115%] bg-center"/>
          </Link>
          <Link href="/projects?filters=graphics#filter" className="group relative h-96 lg:h-96 w-80">
            <div className="absolute h-96 lg:h-96 w-full flex items-center justify-center z-20">
              <p className="text-white font-phonk md:text-2xl lg:text-4xl tracking-wide" style={{ textShadow: "0px 2px 20px #000000" }}>GRAPHICS</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-96 lg:h-96 w-full bg-[#00000070] z-10"/>
            <div className="absolute h-96 lg:h-96 inset-0 bg-[url(/home/photo-video-graphic/Graphics.jpg)] bg-[length:115%] bg-center"/>
          </Link>
        </div>
        <hr className="border-neutral-800 my-24"/>
        <div className="mb-36">
          <h2 id="who-we-are" className="font-phonk text-4xl mb-5 scroll-mt-60 text-black">{("Who we are").toUpperCase()}</h2>
          <p className="mb-6">Hanz Visuals is run by two brothers, Hanz and Dhon — a creative duo based in Auckland, New Zealand. Our work is driven by movement, energy, and authenticity, shaped by our background in basketball and sport. We're drawn to real moments — the grit, the emotion, the details people don't always notice — and we capture them in a way that feels cinematic, powerful, and true to the moment.</p>
          <p>Whether we're shooting high-intensity game action, creating athlete content, or building visual stories for brands, we focus on clean visuals, strong storytelling, and intentional colour. For us, it's not just about taking photos — it's about creating images that athletes, teams, and creatives are proud to stand behind.</p>
        </div>
      </div>
      <div className="bg-black w-full aspect-[4/1] my-20 relative">
        <Link href="/projects" className="group text-center text-white flex flex-col items-center justify-center h-full"> 
          <video src="/home/projects-sequence.mp4" autoPlay loop muted className="absolute w-full h-full object-cover"/>
          <div className="absolute z-10 w-full h-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div className="absolute z-20 w-full h-full flex flex-col items-center justify-center">
              <h2 className="font-humane text-[20vw] tracking-wider font-semibold leading-none" style={{ textShadow: "0px 5px 10px #000000" }}>PROJECTS</h2>
              <p className="italic text-2xl leading-none -mt-8 font-anonymouspro" style={{ textShadow: "0px 2px 8px #000000" }}>click here</p>
          </div>
        </Link>
      </div>
      <div className="bg-gradient-to-b from-white to-neutral-950 h-40"/>
      <div className="text-center bg-neutral-950 text-white py-60 relative h-fit font-anonymouspro flex flex-col items-center gap-2">
        <div className="flex flex-row w-full">
          <div className="flex flex-col items-end justify-center w-[50%] px-10">
            <h2 id="contact" className="font-phonk text-4xl mb-2 scroll-mt-60">{("Contact").toUpperCase()}</h2>
            <div className="text-right text-2xl leading-relaxed">
              <p className="hover:text-[#A7C2DD] transition-hover duration-500"><a href="https://www.instagram.com/hanzvisuals_/" target="_blank" rel="noopener"><span className="font-bold">Instagram:</span> @hanzvisuals_</a></p>
              <p className="hover:text-[#A7C2DD] transition-hover duration-500"><a href="mailto:hanzvisuals1@gmail.com"><span className="font-bold">Email:</span> hanzvisuals1@gmail.com</a></p>
              <p className="hover:text-[#A7C2DD] transition-hover duration-500"><a href="https://www.tiktok.com/@hanzvisualss" target="_blank" rel="noopener"><span className="font-bold">TikTok:</span> @hanzvisualss</a></p>
            </div>
          </div>
          <div className="w-[50%] pl-10 pr-48">
            <p className="font-bold mb-3 text-left text-xl">Email Us:</p>
            <form className="flex flex-col w-full gap-3 text-black mb-3" onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <input type="email" name="email" placeholder="Your Email" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <input type="text" name="subject" placeholder="Subject" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <textarea name="message" placeholder="Message" required className="w-full mb-2 px-2 py-1 rounded outline-[#1F3A5F]"/>
              <button type="submit" className="bg-[#2B4C6F] text-white px-4 py-2 rounded font-bold hover:bg-[#1F3A5F] transition-hover duration-500">Send</button>
            </form>
            <p className="text-base">{emailStatus === "success" && "Email sent successfully!"}</p>
            <p className="text-base">{emailStatus === "error" && "Something went wrong. Please try again."}</p>
          </div>
        </div>
        <div className="absolute bottom-0 text-center w-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
}