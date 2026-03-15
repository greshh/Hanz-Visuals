"use client" 
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Carousel({ data }: { data: { image: string }[]}) {
  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const [isFirstImg, setIsFirstImg] = useState(true);
  const carouselRef = useRef(null)

  const FIRST_DURATION_PER_IMAGE = 2; // In seconds
  const DURATION_PER_IMAGE = 5; // In seconds

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
          width,
          height,
      })
    }

    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % data.length);
    }, isFirstImg === true ? FIRST_DURATION_PER_IMAGE*1000 : DURATION_PER_IMAGE*1000);
    setIsFirstImg(false);
  
    return () => clearInterval(interval);
  }, [currentImg])

  return (
    <div className="relative">
      <div className='w-full h-[90vh] overflow-hidden relative'>
        <button
          onClick={() => currentImg != 0 ? setCurrentImg(prev => prev - 1) : setCurrentImg(data.length-1)}
          className={`absolute left-0 bg-gradient-to-r from-neutral-950 to-transparent top-0 px-4 py-2 h-[90vh] w-[20vw] text-white text-left text-5xl font-bold z-20`}
        >
            {"<"}
        </button>
        <button
            className={`absolute bg-gradient-to-l from-neutral-950 to-transparent right-0 top-0 px-4 py-2 h-[90vh] w-[20vw] text-white text-right text-5xl font-bold z-20`}
            onClick={() => currentImg != data.length-1 ? setCurrentImg(prev => prev + 1) : setCurrentImg(0)}
        >
            {">"}
        </button>
        <div className='w-full h-[90vh] absolute top-0 bg-[#00000070] z-10'/>
        {/* <div ref={carouselRef}
            style={{
                left: -currentImg * carouselSize.width
            }}
            className='w-full h-full absolute flex transition-all duration-700'>
            {data.map((v, i) => (
                <div key={i} className='relative shrink-0 w-full h-full'>
                    <Image
                        className='pointer-events-none object-cover'
                        alt="carousel image"
                        fill={true}
                        src={v.image}
                    />
                </div>
            ))}
        </div> */}
        <div ref={carouselRef} className="relative w-full h-full overflow-hidden">
          {data.map((img, index) => (
            <Image
              key={index}
              src={img.image}
              alt=""
              fill
              className={`absolute top-0 object-cover transition-opacity duration-700 ${index === currentImg ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}