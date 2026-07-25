import Image from "next/image";
import Footer from "../../footer";
import Parallax from "../parallax";
import Spotify from "../spotify";

export const metadata = {
  title: "UNIM8S Semester 1, 2026 | Photography | Hanz Visuals",
  description: "Explore sports photography for UNIM8S Semester 1 2026 for University of Auckland by Hanz Visuals, including basketball, football, futsal, and volleyball.",
};

export default function UNIM8S_Semester_1_2026() {
  return (
    <div className="relative h-fit w-full">
      <Spotify 
        colour="1f1f1f" 
        projectKey="unim8s-semester-1-2026"
        link="https://open.spotify.com/embed/track/1fI2fpUb0zLuMPwEzIuoOr?utm_source=generator&theme=0&autoplay=1"
      />
      <Parallax projectKey="unim8s-semester-1-2026" />
      <div className="relative bg-[#0c0d46] flex flex-col gap-2 md:gap-5 items-center pt-5 md:pt-0 px-6 md:px-24 text-white text-center font-humane text-4xl md:text-6xl tracking-wide z-10 pb-5">
        <p className="font-bold tracking-wider leading-none mb-5">
          {"UNIM8S Social Leagues".toUpperCase()}
        </p>
        <div className="relative bg-white text-[#0c0d46] text-[4.25rem] md:text-[13rem] font-bold w-fit px-3 md:px-16 overflow-hidden mb-3">
          <p className="leading-none -tracking-tight">{"Visual Direction".toUpperCase()}</p>
          <div className="absolute bottom-0 left-0 z-10 h-1 md:h-6 bg-[#0c0d46] w-full"></div>
        </div>
        <p className="leading-none font-base text-3xl md:text-5xl">
          {"This semester, I provided full photo coverage of the UNIM8S Social Leagues finals across basketball A & B grade, basketball C grade, volleyball, football, and indoor netball. The aim was to capture high-quality images for all teams and athletes, helping create lasting memories for students. Having covered the same competitions in Semester 2, 2025, this experience also highlighted how much I have developed as a photographer over the past six months. I am grateful to the UNIM8S team for the opportunity to contribute to another successful semester of university sport.".toUpperCase()}
        </p>
      </div>
      <div className="bg-gradient-to-b from-[#0c0d46] to-[#0a0b40] w-full h-full pb-[10vh] pt-5 px-6 md:px-52 items-center z-30">
        <h3 className="w-full text-white font-humane text-6xl md:text-9xl text-center font-bold overflow-hidden leading-none tracking-wider mb-4">{"Gallery Links".toUpperCase()}</h3>
        <div className="flex flex-col gap-10">
          <a 
            href="https://photos.app.goo.gl/Zu69kEwKj3LEXnnT7" 
            className="w-full h-16 md:h-20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("Basketball").toUpperCase()}</p>
              <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("A B Grade").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/DT1TTU2kSaXtJhpa7" 
            className="w-full h-20 md:h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-col md:flex-row items-center justify-center rounded-lg md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Basketball").toUpperCase()}</p>
              <p className="text-xl text-[#1a1945] text-center font-phonk">{("C Grade").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/FFjkMDAdPtJXBikDA" 
            className="w-full h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Football").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/PNyQJFBXNvzn8AWF6" 
            className="w-full h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Indoor Netball").toUpperCase()}</p>
            </div>
          </a>
          <a 
            href="https://photos.app.goo.gl/BmappefcQaYN6j5D8" 
            className="w-full h-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-full px-3 py-10 md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5 hover:bg-[#ccebf5] transition-hover duration-500">
              <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Volleyball").toUpperCase()}</p>
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}