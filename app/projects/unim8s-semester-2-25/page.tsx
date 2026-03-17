import Image from "next/image";
import Footer from "../../footer";

export default function UNIM8S_Semester_2_2025() {
  return (
    <div className="h-fit w-full">
      <div className="bg-neutral-950 w-full h-full flex bg-gradient-to-b from-[#1a1945] to-[#5f5cc4] py-[10vh] px-52 flex-col gap-10 items-center">
        <Image src="/projects/unim8s/uoa-rec-logo.jpg" alt="University of Auckland Recreation Centre logo" width={96} height={96} className="rounded-[50%]"/>
        <h1 className="font-phonk text-3xl md:text-4xl text-white text-center">{("UNIM8S Semester 2 2025").toUpperCase()}</h1>
        <a 
          href="https://photos.app.goo.gl/FWGhj1QLwv5deRre8" 
          className="w-fit md:w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-fit h-full p-3 md:w-full md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5">
            <p className="text-[#1a1945] text-center font-phonk text-3xl text-wrap">{("Basketball").toUpperCase()}</p>
            <p className="text-xl text-[#1a1945] text-center font-phonk text-wrap">{("A B Grade").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/56Y5V4smFR1AdefX7" 
          className="w-fit md:w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-fit h-full p-3 md:w-full md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Basketball").toUpperCase()}</p>
            <p className="text-xl text-[#1a1945] text-center font-phonk">{("C Grade").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/NvYLZv9yLhW7uhQt7" 
          className="w-fit md:w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-fit h-full p-3 md:w-full md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Football").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/9H6aerjWZKasRiXbA" 
          className="w-fit md:w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-fit h-full p-3 md:w-full md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Futsal").toUpperCase()}</p>
          </div>
        </a>
        <a 
          href="https://photos.app.goo.gl/UmJL8hqHJ5vwUzML9" 
          className="w-fit md:w-full h-16"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-fit h-full p-3 md:w-full md:p-0 bg-white flex flex-row items-center justify-center rounded-lg gap-3 md:gap-5">
            <p className="text-[#1a1945] text-center font-phonk text-3xl">{("Volleyball").toUpperCase()}</p>
          </div>
        </a>
      </div>
      <Footer/>
    </div>
  );
}