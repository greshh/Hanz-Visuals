import Image from "next/image";
import Footer from "../../footer";
import Parallax from "../parallax";
import Spotify from "../spotify";
import InstagramEmbed from "./instagram";

export const metadata = {
  title: "UTSNZ 3x3 Basketball National Championships | Hanz Visuals",
  description: "Explore sports photography and videography for UTSNZ 3x3 Basketball Tertiary National Championships 2026 by Hanz Visuals.",
};

export default function UTSNZ_3X3_2026() {
  return (
    <div className="relative h-fit w-full">
      <Spotify 
        colour="1f1f1f" 
        projectKey="utsnz-3x3-basketball-tertiary-national-championships-2026"
        link="https://open.spotify.com/embed/track/0zIZos26a6OXHhrfqJfGsD?utm_source=generator&theme=0&autoplay=1"
      />
      <Parallax projectKey="utsnz-3x3-basketball-tertiary-national-championships-2026" />
      <div className="relative bg-[#8d898aff] flex flex-col gap-2 md:gap-12 items-center pt-5 md:pt-0 px-6 md:px-24 text-white text-center font-humane text-4xl md:text-6xl tracking-wide z-10">
        <p className="font-semibold tracking-wider leading-none">
          {"National 3x3 Tertiary Championships".toUpperCase()}
        </p>
        <a 
          href="https://photos.app.goo.gl/rLNWaMtkuKs7pvYu7" 
          className="w-full h-16 md:h-20 mb-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full p-0 md:py-0 md:px-0 bg-white flex flex-row items-center justify-center rounded-lg gap-5 hover:bg-[#d9d9d9ff] transition-hover duration-500">
            <p className="text-[#434343] text-center font-humane text-3xl md:text-7xl font-bold tracking-wider text-wrap pt-1 md:pt-2">{("3x3 Basketball Photo Album").toUpperCase()}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434343" viewBox="0 0 16 16" className="w-4 h-4 md:w-6 md:h-6">
              <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
              <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
            </svg>
          </div>
        </a>
        <div className="flex flex-col items-center mb-7 md:mb-0">
          <div className="relative bg-white text-[#8d898aff] text-[4.25rem] md:text-[12rem] font-bold w-fit px-3 md:px-16 overflow-hidden">
            <h2 className="leading-none -tracking-tight">{"Visual Direction".toUpperCase()}</h2>
            <div className="absolute bottom-0 left-0 z-10 h-1 md:h-6 bg-[#8d898aff] w-full"></div>
          </div>
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-5 md:gap-10 justify-center items-center">
            <Image 
              src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image1.png" 
              alt="Basketball Player" 
              width={5000} 
              height={5000} 
              className="h-[12rem] md:h-[25rem] w-auto"
            />
            <p className="leading-none font-base text-3xl md:text-5xl text-justify md:text-center">
              {"I volunteered as an event photographer for the UTSNZ 3x3 Tertiary Championships, where our role was to capture as much photo content as possible for both the participating institutions and UTSNZ. Across two days of competition, we delivered a comprehensive gallery of edited photos as well as multiple Instagram Reels, helping document the tournament while highlighting the energy, culture, and success of the event. Grateful to the team at UTSNZ for the opportunity.".toUpperCase()}
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center md:px-20">
          <div className="flex flex-row gap-20 items-center justify-center flex-wrap md:flex-nowrap">
            <div className="text-center pb-3">
              <h3 className="w-full text-white text-6xl md:text-9xl font-bold overflow-hidden leading-none -tracking-tight mb-4">{"Reels Content".toUpperCase()}</h3>
              <div className="flex justify-center w-full md:mb-0 mb-7">
                <Image 
                  src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image2.png" 
                  alt="Phone of a basketball reel by Hanz Visuals" 
                  width={5000} 
                  height={5000} 
                  className="block md:hidden h-[15rem] md:h-[30rem] w-auto"
                />
              </div>
              <p className="leading-none font-base text-3xl md:text-5xl text-justify md:text-center">
                {"Beyond photography, I took the initiative to create short-form video content throughout the tournament. Five Instagram Reels were produced during the event generating over 50,000 views, extending its reach well beyond the venue and helping drive engagement while showcasing the excitement of tertiary 3x3 basketball to a broader audience.".toUpperCase()}
              </p>
            </div>
            <Image 
              src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/image2.png" 
              alt="Phone of a basketball reel by Hanz Visuals" 
              width={5000} 
              height={5000} 
              className="hidden md:block h-[30rem] w-auto"
            />
          </div>
        </div>
        <div className="flex flex-row gap-3 justify-center md:gap-10 md:flex-nowrap flex-wrap">
          <InstagramEmbed index={1} link="https://www.instagram.com/reel/DYadqnjzTNe/"/>
          <InstagramEmbed index={2} link="https://www.instagram.com/reel/DYav6vMTLWn/"/>
          <InstagramEmbed index={3} link="https://www.instagram.com/reel/DYa0ExTTrBH/"/>
          <InstagramEmbed index={4} link="https://www.instagram.com/reel/DYbFZm0Tm_P/"/>
          <InstagramEmbed index={5} link="https://www.instagram.com/reel/DYbIiBnzbst/"/>
        </div>
      </div>
      <div className="w-full h-fit bg-gradient-to-b from-[#8d898aff] to-black flex justify-center text-white py-10 md:pt-20 md:pb-24">
        <div className="flex flex-col gap-2 justify-center items-center my-5 h-fit w-fit">
          <p className="font-anonymouspro text-sm md:text-xl tracking-normal text-center">Hanz Visuals with @in.sh0tt and @zee_photoz_</p>
          <Image 
            src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/volunteer-photographer.jpg" 
            alt="Hanz Visuals with @in.sh0tt and @shuddho_huq" 
            width={1000} 
            height={1000} 
            className="h-40 md:h-96 w-auto rounded-lg shadow-2xl" 
          />
        </div>
      </div>
      <a href="https://www.utsnz.co.nz/blog/2249047" target="_blank" rel="noopener">
        <div className="w-full h-40 md:h-80 relative group overflow-hidden">
          <Image alt="Article Link" src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/link-banner.jpg" width={5000} height={5000} className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105"/>
          <div className="absolute inset-0 w-full h-full backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 bg-[#7d620880]"/>
          <div className="absolute inset-0 w-full h-full text-center text-white flex flex-col gap-3 justify-center items-center">
            <Image alt="UTSNZ Logo" src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/utsnz-icon.png" width={100} height={100} className="w-8 h-8 md:w-16 md:h-16 object-cover rounded-sm"/>
            <div className="grid text-center px-0 md:px-20 text-white relative w-full h-fit">
              <h3 className="col-start-1 row-start-1 w-full font-phonk opacity-0 md:text-8xl text-shadow-lg md:opacity-50 md:group-hover:opacity-0 transition-opacity duration-500">{"Behind the Lens".toUpperCase()}</h3>
              <div className="col-start-1 row-start-1 flex flex-col gap-0 md:gap-5 justify-center items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-phonk text-3xl md:text-5xl text-shadow-lg leading-none">{"Behind the Lens".toUpperCase()}<span className="hidden md:inline">{" at the National Tertiary 3x3 Championships".toUpperCase()}</span></h3>
                <p className="font-anonymouspro text-sm md:text-2xl tracking-normal text-shadow-lg">Full story at UTSNZ News</p>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="https://photos.app.goo.gl/rLNWaMtkuKs7pvYu7" target="_blank" rel="noopener">
        <div className="w-full h-40 md:h-80 relative group overflow-hidden">
          <Image alt="Photo Album" src="/projects/utsnz-3x3-basketball-tertiary-national-championships-2026/photos-banner.jpg" width={5000} height={5000} className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-105"/>
          <div className="absolute inset-0 w-full h-full backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 bg-[#7d620880]"/>
          <div className="absolute inset-0 w-full h-full text-center text-white flex justify-center items-center opacity-0 md:opacity-50 md:group-hover:opacity-0 transition-all duration-500">
            <h3 className="font-phonk text-5xl md:text-8xl text-shadow-lg">{"Photo Album".toUpperCase()}</h3>
          </div>
          <div className="absolute inset-0 w-full h-full text-center text-white flex flex-col gap-1 md:gap-0 justify-center items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 px-5 md:px-10">
            <h3 className="font-phonk text-3xl md:text-6xl text-shadow-lg leading-none"><span className="hidden md:inline">{"3x3 Basketball".toUpperCase()}</span>{" Photo Album".toUpperCase()}</h3>
            <p className="font-anonymouspro hidden md:inline md:text-2xl tracking-normal text-shadow-lg italic">click here</p>
          </div>
        </div>
      </a>
      <Footer/>
    </div>
  );
}