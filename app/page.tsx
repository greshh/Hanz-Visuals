"use client"
import { useState, useEffect } from "react";
import { TransitionLink } from "./transition-link";
import Footer from "./footer";
import Carousel from "./carousel";
import emailjs from "@emailjs/browser";
import ScrollDown from "./scroll-down";
import BeholdWidget from "@behold/react"
import Image from "next/image";
import CursorGradientText from "./cursor-gradient-text";

export default function Home() {
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");

  const data = [{ image: "/home/carousel/1.jpg" },
    { image: "/home/carousel/2.jpg" }, 
    { image: "/home/carousel/3.jpg" },
    { image: "/home/carousel/4.jpg" },
    { image: "/home/carousel/5.jpg" },
    { image: "/home/carousel/6.jpg" }];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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
        form.reset();
      },
      (error) => {
        console.log('Error:', error);
        setEmailStatus("error");
      },
    );
  };

  return (
    <div id="home" className="bg-white scroll-m-24">
      <div className="h-[90vh] md:h-[90vh] w-full">
        <Carousel data={data}/>
        <div className="absolute top-0 flex flex-col mt-[10vh] px-[20vw] py-5 justify-center items-center w-full h-[90vh] md:h-[90vh]">
          <img src="/logo-hanzvisuals-transparent.png" alt="Hanz Visuals logo" id="logo" className="w-auto mx-auto z-30"/>
        </div>
        <ScrollDown url="/#showcase"/>
      </div>
      <div id="showcase" className="relative">
        <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-neutral-400 to-white"/>
      </div>
      <div className="px-12 md:px-40 mt-32 md:mt-40 mb-16 md:mb-28 flex flex-col md:flex-row gap-5 md:gap-10 items-center h-fit">
        <div>
          <h2 id="who-we-are" className="font-phonk text-3xl md:text-4xl mb-5 scroll-mt-60 text-black">{("Who we are").toUpperCase()}</h2>
          <p className="mb-6 text-md md:text-xl text-black md:leading-relaxed">Kia Ora! <span className="font-bold">Hanz Visuals</span> is run by two brothers, Dhon and Hanz, based in Auckland, New Zealand. We grew up with basketball, volleyball, and other sports, so we know firsthand the highs, the lows, and everything in between that comes with sports. We love capturing those moments: the small details that make the game what it is. Being creative at heart, we combine our love for the game with our passion to create, which is why we are so passionate about sports photography.</p>
          <p className="mb-6 text-md md:text-xl text-black md:leading-relaxed">Whether we're creating personal athlete content, promoting your next sports event, or capturing high-intensity moments, we focus on clean visuals, strong storytelling, and shooting with purpose. For us, it's not just about taking photos; it's about delivering images and media that athletes, teams, and creatives are proud to share.</p>
        </div>
        <div className="flex flex-row gap-3">
          <div className="h-full">
            <Image src="/home/who-we-are/dhon.jpg" alt="Dhon" width={900} height={1600} className="w-full rounded-md"/>
          </div>
          <div className="h-full">
            <Image src="/home/who-we-are/hanz.jpg" alt="Hanz" width={900} height={1600} className="w-full rounded-md"/>
          </div>
        </div>
      </div>
      <div className="bg-black w-full aspect-[2/1] md:aspect-[4/1] my-12 md:my-16 relative">
        <TransitionLink href="/projects" className="group text-center text-white flex flex-col items-center justify-center h-full"> 
          <video 
            src="/home/projects-sequence.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute z-10 w-full h-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
          <div className="absolute z-20 w-full h-full flex flex-col items-center justify-center">
              <h2 className="font-humane text-[30vw] md:text-[20vw] tracking-wider font-semibold leading-none" style={{ textShadow: "0px 5px 10px #000000" }}>PORTFOLIO</h2>
              <p className="italic text-2xl leading-none -mt-3 md:-mt-8 font-anonymouspro" style={{ textShadow: "0px 2px 8px #000000" }}>click here</p>
          </div>
        </TransitionLink>
      </div>
      <div className="w-full flex justify-center my-12 md:my-16">
        <a className="flex flex-row w-fit flex-wrap justify-center items-center gap-1 md:gap-5 hover:scale-105 transition-all duration-500" href="https://www.instagram.com/campdavidnz/" target="_blank" rel="noopener noreferrer">
          <CursorGradientText/>
          <Image src="/home/camp-david.png" alt="Camp David logo" width={1000} height={1000} className="w-fit h-20 md:h-40"/>
        </a>
      </div>
      <div className="px-5 md:px-52 mb-5 md:mb-0">
        <BeholdWidget feedId="rdtdsHThyYufM7k0s3R6"/>
      </div>
      <div className="bg-gradient-to-b from-white to-neutral-950 h-20 md:h-40"/>
      <div className="text-center bg-neutral-950 text-white py-16 md:py-52 relative h-fit w-full font-anonymouspro flex flex-col items-center justify-center md:justify-normal gap-2 flex-wrap">
        <div className="flex flex-row w-full flex-wrap gap-6 md:gap-0 justify-center md:justify-normal">
          <div className="flex flex-col items-center md:items-end justify-center w-full md:w-[50%] px-10">
            <h2 id="contact" className="font-phonk text-3xl md:text-4xl mb-2 scroll-mt-60">{("Contact").toUpperCase()}</h2>
            <div className="text-center md:text-right text-base md:text-2xl leading-relaxed">
              <p className="hover:text-[#89ADD1] transition-hover duration-500"><a href="https://www.instagram.com/hanzvisuals_/" target="_blank" rel="noopener"><span className="font-bold">Instagram:</span> @hanzvisuals_</a></p>
              <p className="hover:text-[#89ADD1] transition-hover duration-500"><a href="mailto:hanzvisuals1@gmail.com"><span className="font-bold">Email:</span> hanzvisuals1@gmail.com</a></p>
              <p className="hover:text-[#89ADD1] transition-hover duration-500"><a href="https://www.tiktok.com/@hanzvisualss" target="_blank" rel="noopener"><span className="font-bold">TikTok:</span> @hanzvisualss</a></p>
            </div>
          </div>
          <div className="w-full md:w-[50%] px-10 mb-4 md:mb-0 md:pl-10 md:pr-48">
            <p className="font-bold mb-3 text-center md:text-left text-xl md:text-2xl">Email us for Inquiries and Bookings:</p>
            <form className="flex flex-col w-full gap-3 md:text-base text-md text-black mb-3" onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <input type="email" name="email" placeholder="Your Email" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <input type="text" name="subject" placeholder="Subject" required className="px-2 py-1 rounded outline-[#1F3A5F]"/>
              <textarea name="message" placeholder="Message" required className="w-full mb-2 px-2 py-1 rounded outline-[#1F3A5F] h-24"/>
              <button type="submit" className="bg-[#2B4C6F] text-white px-4 py-2 rounded font-bold hover:bg-[#1F3A5F] transition-hover duration-500">Send</button>
            </form>
            <p className="text-sm md:text-base">{emailStatus === "success" && "Email sent successfully! We will get back to you shortly."}</p>
            <p className="text-sm md:text-base">{emailStatus === "error" && "Something went wrong. Please try again."}</p>
          </div>
        </div>
        <div className="absolute bottom-0 text-center w-full">
          <Footer/>
        </div>
      </div>
    </div>
  );
}
